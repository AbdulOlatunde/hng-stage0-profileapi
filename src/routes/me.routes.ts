import { Router } from "express";
import axios from "axios";
import { env } from "../config/env";

const router = Router();

router.get("/me", async (req, res) => {
  try {
    const response = await axios.get(env.catApi);

    res.status(200).json({
      status: "success",
      user: {
        email: env.email,
        name: env.name,
        stack: env.stack,
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    });
  } catch (error: any) {
    console.error("Error fetching cat fact:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact",
    });
  }
});

export default router;
