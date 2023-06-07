import { Mongoose } from "mongoose";
import MessageModel from "../models/MessageModel.js";

export const addMessage = async (req, res) => {
  try {
    const { text, senderId, chatId } = req.body;
    const newMessage = new MessageModel({
      chatId: chatId,
      senderId: senderId,
      text: text,
    });
    const savedMessage = await newMessage.save();
    res.send(201).json(savedMessage);
  } catch (error) {
    res.send(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const result = await Mongoose.find({ chatId });
    res.status(200).json(result);
  } catch (err) {
    res.send(500).json(err);
  }
};
