import { Worker } from "../../domain/entities/worker";
import { WorkerRepository } from "../../domain/repositories/WorkerRepository";

export class WorkerService {
  constructor(private repository: WorkerRepository) {}

  async getAllWorkers(): Promise<Worker[]> {
    return this.repository.findAll();
  }

  async getWorkerById(id: string): Promise<Worker | null> {
    return this.repository.findById(id);
  }

  async createWorker(worker: Worker): Promise<void> {
    await this.repository.save(worker);
  }

  async deleteWorker(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
