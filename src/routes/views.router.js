import express from "express";

const router = express.Router();

router.get("/chat", (req, res) => {
  res.render("chat", {});
});

router.get("/products", (req, res) => {
  res.render("products", {});
});

export default router;
