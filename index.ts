import "dotenv/config";
import { env } from "./src/config/env";
import { log } from "./src/utils/logger";
import app from "./src/server";

const startServer = async () => {
  try {
    app.listen(env.port, () => {
      log(`Server running on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
