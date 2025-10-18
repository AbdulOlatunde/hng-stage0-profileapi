import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGO_URI || "mongodb+srv://bellababs16:Olatunde28@cluster0.hosvmg2.mongodb.net/hng-profile-api?retryWrites=true&w=majority",
  email: process.env.USER_EMAIL || "olatundeabdullah07@gmail.com",
  name: process.env.USER_NAME || "Olatunde Abdullah",
  stack: process.env.USER_STACK || "Node.js/Express",
  catApi: process.env.CAT_FACT_API || "https://catfact.ninja/fact",
};