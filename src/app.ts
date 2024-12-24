import express from "express";
import mongoose from "mongoose";
import { MongooseWorkerRepository } from "./infrastructure/database/MongooseWorkerRepository";
import { WorkerService } from "./application/services/WorkerService";
import { WorkerController } from "./infrastructure/web/WorkerController";

const app = express();
app.use(express.json());

// Configurar MongoDB
mongoose.connect("mongodb://localhost:27017/hexagonal-crud");

// Configurar dependencias
const workerRepository = new MongooseWorkerRepository();
const workerService = new WorkerService(workerRepository);
const workerController = new WorkerController(workerService);

// Rutas
app.get("/workers", (req, res) => workerController.getAllWorkers(req, res));
app.get("/workers/:id", (req, res) => workerController.getWorkerById(req, res));
app.post("/workers", (req, res) => workerController.createWorker(req, res));
app.delete("/workers/:id", (req, res) => workerController.deleteWorker(req, res));

export default app;
