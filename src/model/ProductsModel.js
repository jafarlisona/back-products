import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  title: { type: String, unique: true },
  price: Number,
  category: String,
  description: String,
  image: String,
});

export const ProductsModel = mongoose.model("products", productsSchema);
