import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  id: string;
  number: string;
  title: string;
  category: '3d' | 'motion' | 'video' | 'graphic';
  categoryLabel: string;
  year: string;
  specs: string;
  description: string;
  accentColor?: string;
  tags: string[];
  featured: boolean;
  order: number;
}

const ProjectSchema: Schema<IProject> = new Schema(
  {
    number: { type: String, required: true },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ['3d', 'motion', 'video', 'graphic'],
      required: true,
    },
    categoryLabel: { type: String, required: true },
    year: { type: String, required: true },
    specs: { type: String, required: true },
    description: { type: String, required: true },
    accentColor: { type: String, default: '#00FF66' },
    tags: [{ type: String }],
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
