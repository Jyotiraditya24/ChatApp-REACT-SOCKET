import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";
import authRoute from "./routes/auth.js";
import messageRoute from "./routes/message.js";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.use("/chat", chatRoute);
app.use("/auth", authRoute);
app.use("/message", messageRoute);

/* MONGO DB CONNECTION */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
