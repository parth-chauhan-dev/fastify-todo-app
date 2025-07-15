import { AppDataSource } from "../../data-source";
import { TaskEntity } from "../entities/task.entity";
import * as TaskService from "../services/task.service";

const repo = AppDataSource.getRepository(TaskEntity);
export const resolvers = {
  Query: {
    tasks: () => TaskService.get(),
    task: (_: any, { id }: { id: number }) => TaskService.getById(id),
  },

  Mutation: {
    createTask: (_: any, args: Partial<TaskEntity>) =>
      TaskService.createTask(args),
    updateTask: (_: any, args: { id: number } & Partial<TaskEntity>) =>
      TaskService.updateById(args.id, args),
    deleteTask: (_: any, { id }: { id: number }) => TaskService.deleteById(id),
  },
};
