import { FastifyPluginAsync } from "fastify";
import * as TaskController from "../controllers/task.controller";

const taskRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("", TaskController.getTasks);
  fastify.post("", TaskController.createTask);
  fastify.get("/:id", TaskController.getTaskById);
  fastify.put("/:id", TaskController.updateById);
  fastify.delete("/:id", TaskController.deleteTask);
};

export default taskRoutes;
