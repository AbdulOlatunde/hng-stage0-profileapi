import mongoose from "mongoose";
import { log } from "../utils/logger";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
