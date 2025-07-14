import { FastifyPluginAsync } from "fastify";
import * as TaskController from "../controllers/task.controller";
import { CreateTaskSchema } from "../schemas/task.schema";

const taskRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", TaskController.getTasks);
  fastify.post("/", { schema: CreateTaskSchema }, TaskController.createTask);
  fastify.get("/:id", TaskController.getTaskById);
  fastify.put("/:id", TaskController.updateById);
  fastify.delete("/:id", TaskController.deleteTask);
};

export default taskRoutes;
