import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  email: process.env.USER_EMAIL || "olatundeabdullah07@gmail.com",
  name: process.env.USER_NAME || "Olatunde Abdullah",
  stack: process.env.USER_STACK || "Node.js/Express",
  catApi: process.env.CAT_FACT_API || "https://catfact.ninja/fact",
};
