import cors from "cors";
import "dotenv/config";
import express from "express";
import { mongoose } from "mongoose";
import { productsRouter } from "./src/router/ProductsRoute.js";

const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());
app.use("/api/products", productsRouter);

mongoose
  .connect(SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected!"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
