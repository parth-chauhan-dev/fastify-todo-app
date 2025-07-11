import Fastify from "fastify";
import cors from "@fastify/cors";
import sensible from "@fastify/sensible";
import * as dotenv from "dotenv";
import postgresDB from "./plugins/db";
dotenv.config();

export async function createApp() {
  const app = Fastify({
    logger: {},
  });

  app.register(sensible);
  app.register(cors, { origin: "*" });
  app.register(postgresDB);

  app.get("/", async (request, reply) => {
    return { status: "ok", message: "Fastify server running" };
  });

  return app;
}
