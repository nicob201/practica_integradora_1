import { Router } from "express";
import cartModel from "../dao/models/cart.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let carts = await cartModel.find();
    res.send({ result: "success", payload: carts });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:cid", async (req, res) => {
  let { cid } = req.params;
  let result = await cartModel.findById({ _id: cid });
  res.send({ result: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { products } = req.body;
  if (!products) {
    res.send({ status: "error", error: "Products are required" });
  }
  let result = await cartModel.create({ products });
  res.send({ result: "success", payload: result });
});

router.delete("/:cid", async (req, res) => {
  let { cid } = req.params;
  let result = await cartModel.deleteOne({ _id: cid });
  res.send({ result: "success", payload: result });
});

export default router;
