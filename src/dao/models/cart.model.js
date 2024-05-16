import mongoose from "mongoose";

const cartCollection = "Carts";

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const cartModel = mongoose.model(cartCollection, cartSchema);

export default cartModel;
