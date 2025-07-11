import { FastifyReply, FastifyRequest } from "fastify";
import { TaskEntity } from "../entities/task.entity";

export async function createTask(request: FastifyRequest, reply: FastifyReply) {
  const repository = request.server.db.getRepository(TaskEntity);
  const task = repository.create(request.body as Partial<TaskEntity>);
  const result = await repository.save(task);
  return reply.code(200).send(result);
}

export async function getTaskById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const result = await request.server.db
    .getRepository(TaskEntity)
    .find({ where: { id: +request.params.id } });
  if (!result) {
    return reply.notFound("Task Not Found");
  }
  return reply.send(result);
}

export async function getTasks(request: FastifyRequest, reply: FastifyReply) {
  const tasks = await request.server.db.getRepository(TaskEntity).find();
  if (!tasks.length) {
    return reply.notFound("Task does not exist");
  }
  return reply.send(tasks);
}

export async function updateById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const repo = await request.server.db.getRepository(TaskEntity);
  const task = await repo.find({ where: { id: +request.params.id } });
  if (!task) {
    return reply.notFound("Task not Found");
  }
  Object.assign(task, request.body);
  const updatedTask = await repo.save(task);
  return reply.send(updatedTask);
}

export async function deleteTask(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const repo = request.server.db.getRepository(TaskEntity);
  const task = await repo.findOneBy({ id: +request.params.id });
  if (!task) return reply.notFound("Task not found");

  await repo.remove(task);
  return reply.code(204).send();
}
