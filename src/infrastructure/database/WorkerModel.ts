import mongoose, { Schema, Document } from "mongoose";

export interface WorkerDocument extends Document {
  name: string;
  position: string;
  department: string;
}

const WorkerSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
});

export const WorkerModel = mongoose.model<WorkerDocument>("Worker", WorkerSchema);
