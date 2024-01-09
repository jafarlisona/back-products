import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "../controller/ProductsController.js";
import { myLogger } from "../middleware/loggerMiddileware.js";

export const productsRouter = express.Router();

productsRouter.get("/", myLogger, getAllProducts);
productsRouter.post("/", createProduct);
productsRouter.get("/:id", getOneProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
