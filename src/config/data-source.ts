import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { TaskEntity } from "../entities/task.entity";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrationsRun: true,
  migrations: ["src/migrations/*.ts"],
  migrationsTableName: "migrations",
  logging: true,
  entities: [TaskEntity],
});
