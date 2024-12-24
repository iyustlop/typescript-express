import { Worker } from "../entities/worker";

export interface WorkerRepository {
  findAll(): Promise<Worker[]>;
  findById(id: string): Promise<Worker | null>;
  save(worker: Worker): Promise<void>;
  delete(id: string): Promise<void>;
}
