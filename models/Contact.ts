import mongoose, { Schema, models, model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model recompilation errors in Next.js dev hot-reload
export default (models.Contact as mongoose.Model<IContact>) ||
  model<IContact>("Contact", ContactSchema);
