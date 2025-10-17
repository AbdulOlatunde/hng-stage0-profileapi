import express from "express";
import cors from "cors";
import { env } from "./config/env";
import meRoute from "./routes/me.routes";
import { log } from "./utils/logger";
import { connectDB } from "./config/db";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Profile API" });
});

// Other routes
app.use("/", meRoute);

// Connect to MongoDB then start server
connectDB()
  .then(() => {
    app.listen(env.port, () => {
      log(`Server listening on port ${env.port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });