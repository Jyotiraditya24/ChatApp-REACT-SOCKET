import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.get("/info", (req, res) => {
  res.json({ a: "hello" });
});

export default router;
