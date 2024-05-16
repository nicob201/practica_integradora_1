import { Router } from "express";
import productModel from "../dao/models/product.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let products = await productModel.find();
    res.send({ result: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  let { title, description, price, thumbnail, code, status, stock } = req.body;
  if (!title || !price || !stock) {
    res.send({
      status: "error",
      error: "It is required input the title, price and stock",
    });
  }
  let result = await productModel.create({
    title,
    description,
    price,
    thumbnail,
    code,
    status,
    stock,
  });
  res.send({ result: "success", payload: result });
});

router.put("/:pid", async (req, res) => {
  let { pid } = req.params;

  let productToReplace = req.body;

  if (
    !productToReplace.title ||
    !productToReplace.price ||
    !productToReplace.stock
  ) {
    res.send({ status: "error", error: "Undefined parameters of products" });
  }
  let result = await productModel.updateOne({ _id: pid }, productToReplace);

  res.send({ result: "success", payload: result });
});

router.delete("/:pid", async (req, res) => {
  let { pid } = req.params;
  let result = await productModel.deleteOne({ _id: pid });
  res.send({ result: "success", payload: result });
});

export default router;
