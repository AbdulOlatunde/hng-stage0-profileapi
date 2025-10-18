import "dotenv/config";
import { env } from "./src/config/env";
import { log } from "./src/utils/logger";
import app from "./src/server";

const startServer = async () => {
  try {
    const PORT = process.env.PORT || env.port || 5000;

    app.listen(PORT, () => {
      log(`[Profile API] Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
