import { FastifyReply, FastifyRequest } from "fastify";
import { TaskEntity } from "../entities/task.entity";
import * as TaskService from "../services/task.service";

export async function createTask(
  request: FastifyRequest<{ Body: Partial<TaskEntity> }>,
  reply: FastifyReply
) {
  const result = await TaskService.createTask(request.body);
  return reply.code(200).send(result);
}

export async function getTaskById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const task = await TaskService.getById(+request.params.id);
  if (!task) return reply.notFound("Task not found");
  return reply.send(task);
}

export async function getTasks(request: FastifyRequest, reply: FastifyReply) {
  const tasks = await TaskService.get();
  if (!tasks.length) {
    return reply.notFound("Task does not exist");
  }
  return reply.send(tasks);
}

export async function updateById(
  request: FastifyRequest<{
    Params: { id: string };
    Body: Partial<TaskEntity>;
  }>,
  reply: FastifyReply
) {
  const task = await TaskService.updateById(+request.params.id, request.body);
  if (!task) return reply.notFound("Task not found");
  return reply.send(task);
}

export async function deleteTask(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const deleted = await TaskService.deleteById(+request.params.id);
  return deleted ? reply.code(204).send() : reply.notFound("Task not found");
}
