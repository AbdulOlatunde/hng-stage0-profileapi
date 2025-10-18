import express from "express";
import cors from "cors";
import meRoute from "./routes/me.routes";

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

export default app;
