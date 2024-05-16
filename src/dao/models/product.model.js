import mongoose from "mongoose";

const productCollection = "Products";

const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  thumbnail: { type: String },
  code: { type: String },
  status: { type: Boolean, default: true },
  stock: { type: Number },
});

const productModel = mongoose.model(productCollection, productSchema);

export default productModel;
