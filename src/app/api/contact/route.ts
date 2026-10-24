import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Inquiry } from '@/models/Inquiry';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, scope, budget, details } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!details || typeof details !== 'string' || details.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Project details / brief is required' },
        { status: 400 }
      );
    }

    const ipAddress =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Attempt MongoDB connection
    let savedToMongo = false;
    let savedDoc = null;

    try {
      await connectToDatabase();
      savedDoc = await Inquiry.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        scope: scope || 'OTHER',
        budget: budget || 'UNDISCLOSED',
        details: details.trim(),
        ipAddress,
        userAgent,
        status: 'PENDING',
      });
      savedToMongo = true;
    } catch (dbError) {
      console.warn('MongoDB connection note:', dbError);
      // Fallback: If DB is not yet running/configured locally, report graceful status
    }

    return NextResponse.json(
      {
        success: true,
        message: savedToMongo
          ? 'Transmission archived successfully in MongoDB database.'
          : 'Transmission received. (Note: Connect MongoDB URI to persist permanently)',
        savedToDatabase: savedToMongo,
        data: savedDoc ? { id: savedDoc._id, createdAt: savedDoc.createdAt } : null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal system error processing transmission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const count = await Inquiry.countDocuments();
    return NextResponse.json({
      status: 'ONLINE',
      system: 'KAIROS_DB_GATEWAY',
      database: 'MongoDB',
      totalInquiries: count,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Database offline';
    return NextResponse.json(
      {
        status: 'OFFLINE_OR_UNREACHABLE',
        system: 'KAIROS_DB_GATEWAY',
        database: 'MongoDB',
        error: message,
      },
      { status: 503 }
    );
  }
}
