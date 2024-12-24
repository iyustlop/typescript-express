import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  omegaId: { type: String, required: true },
  deltaMail: {type: String, required: true},
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  languages: { 
    language: String, 
    exam: String }
})