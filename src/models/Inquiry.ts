import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  email: string;
  scope?: string;
  budget?: string;
  details: string;
  status: 'PENDING' | 'REVIEWED' | 'ACCEPTED' | 'ARCHIVED';
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema: Schema<IInquiry> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    scope: {
      type: String,
      enum: ['3D DESIGN', 'MOTION SYS', 'VIDEO EDIT', 'FULL BRAND', 'OTHER'],
      default: 'OTHER',
    },
    budget: {
      type: String,
      enum: ['€5K – €10K', '€10K – €25K', '€25K+', 'UNDISCLOSED'],
      default: 'UNDISCLOSED',
    },
    details: {
      type: String,
      required: [true, 'Project brief is required'],
      trim: true,
      maxlength: [5000, 'Details cannot exceed 5000 characters'],
    },
    status: {
      type: String,
      enum: ['PENDING', 'REVIEWED', 'ACCEPTED', 'ARCHIVED'],
      default: 'PENDING',
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;
