// IRepository.ts
export interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(id: string, entity: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
  }
