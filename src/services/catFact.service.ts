import axios from "axios";
import { env } from "../config/env";

export const fetchCatFact = async (): Promise<string> => {
  try {
    const response = await axios.get(env.catApi, { timeout: 5000 });
    return response.data.fact;
  } catch (error) {
    console.error("Failed to fetch cat fact:", error);
    return "Could not fetch a cat fact at the moment. Please try again later.";
  }
};
