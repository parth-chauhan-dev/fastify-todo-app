import fp from "fastify-plugin";
import { AppDataSource } from "../config/data-source.js";

export default fp(async (fastify, options) => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    fastify.decorate("db", AppDataSource);
  } catch (error) {
    fastify.log.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
});

declare module "fastify" {
  interface FastifyInstance {
    db: typeof AppDataSource;
  }
}
