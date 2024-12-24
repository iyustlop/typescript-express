import { Worker } from "../../domain/entities/worker";
import { WorkerRepository } from "../../domain/repositories/WorkerRepository";
import { WorkerModel } from "./WorkerModel";

export class MongooseWorkerRepository implements WorkerRepository {
  async findAll(): Promise<Worker[]> {
    const workers = await WorkerModel.find();
    return workers.map((worker) => new Worker(worker.id, worker.name, worker.position, worker.department));
  }

  async findById(id: string): Promise<Worker | null> {
    const worker = await WorkerModel.findById(id);
    if (!worker) return null;
    return new Worker(worker.id, worker.name, worker.position, worker.department);
  }

  async save(worker: Worker): Promise<void> {
    const workerDoc = new WorkerModel(worker);
    await workerDoc.save();
  }

  async delete(id: string): Promise<void> {
    await WorkerModel.findByIdAndDelete(id);
  }
}
