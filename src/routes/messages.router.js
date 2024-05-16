import { Router } from "express";
import messageModel from "../dao/models/message.model.js";
import io from "../app.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let messages = await messageModel.find();
    res.send({ result: "success", payload: messages });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  let { user_email, message } = req.body;
  if (!user_email || !message) {
    res.send({ status: "error", error: "User email and message are required" });
  }
  try {
    let result = await messageModel.create({ user_email, message });
    io.emit("message", { user_email, message });
    res.status(201).send({ result: "success", payload: result });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send({ result: "error", error: "Internal server error" });
  }
});

export default router;
