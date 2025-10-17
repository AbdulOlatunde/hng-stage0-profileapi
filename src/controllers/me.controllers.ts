import { Request, Response } from "express";
import { fetchCatFact } from "../services/catFact.service";
import { env } from "../config/env";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const fact = await fetchCatFact();

    const response = {
      status: "success",
      user: {
        email: env.email,
        name: env.name,
        stack: env.stack,
      },
      timestamp: new Date().toISOString(),
      fact,
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "An error occurred fetching your profile.",
    });
  }
};
