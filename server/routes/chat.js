import express from "express";
import { createChat, findChat, userChats } from "../controllers/chat.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondID", findChat);

export default router;
