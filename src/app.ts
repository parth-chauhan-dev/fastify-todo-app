import Fastify from "fastify";
import cors from "@fastify/cors";
import sensible from "@fastify/sensible";
import * as dotenv from "dotenv";
import postgresDB from "./plugins/db";
import taskRoutes from "./routes/task.routes";
import swagger from "./plugins/swagger";
import graphql from "./plugins/graphql";
dotenv.config();

export async function createApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(sensible);
  app.register(cors, { origin: "*" });
  app.register(graphql);
  app.register(swagger);
  app.register(postgresDB);
  app.register(taskRoutes, { prefix: "task" });

  app.get("/", async (request, reply) => {
    return { status: "ok", message: "Fastify server running" };
  });
  return app;
}
