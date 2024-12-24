import { Request, Response } from "express";
import { WorkerService } from "../../application/services/WorkerService";
import { Worker } from "../../domain/entities/worker";

export class WorkerController {
  constructor(private workerService: WorkerService) {}

  async getAllWorkers(req: Request, res: Response): Promise<void> {
    const request = req
    console.log(request);
    
    const workers = await this.workerService.getAllWorkers();
    res.json(workers);
  }

  async getWorkerById(req: Request, res: Response): Promise<void> {
    const worker = await this.workerService.getWorkerById(req.params.id);
    if (!worker) {
      res.status(404).send("Worker not found");
    } else {
      res.json(worker);
    }
  }

  async createWorker(req: Request, res: Response): Promise<void> {
    const { name, position, department } = req.body;
    const worker = new Worker("", name, position, department);
    await this.workerService.createWorker(worker);
    res.status(201).send(req.body);
  }

  async deleteWorker(req: Request, res: Response): Promise<void> {
    await this.workerService.deleteWorker(req.params.id);
    res.status(204).send();
  }
}
