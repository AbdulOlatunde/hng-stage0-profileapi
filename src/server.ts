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

// Routes
app.use("/", meRoute);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Profile API" });
});

// Connect to MongoDB then start server
connectDB().then(() => {
  app.listen(env.port, () => {
    log(`Server listening on port ${env.port}`);
  });
});
