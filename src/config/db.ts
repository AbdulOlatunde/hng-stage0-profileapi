import mongoose from "mongoose";
import { log } from "../utils/logger";
import { env } from "./env";

export const connectDB = async () => {
  try {
    if (!env.mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    
    const conn = await mongoose.connect(env.mongoUri);
    log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};