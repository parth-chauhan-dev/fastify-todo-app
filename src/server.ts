import { createApp } from "./app";

async function startServer() {
  const app = await createApp();
  const port = +process.env.PORT! || 3000;

  try {
    app.listen({ port, host: "127.0.0.1" });
    console.log(`Server listening on http://127.0.0.1:${port}`);
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
}

startServer();
