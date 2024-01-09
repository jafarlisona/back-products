import { ProductsModel } from "../model/ProductsModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductsModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.send("Products not Found!");
  }
};
export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const allProducts = await ProductsModel.findById(id);
  res.send(allProducts);
};
export const createProduct = async (req, res) => {
  try {
    const { title, price, category, description, image } = req.body;
    const newProducts = new ProductsModel({
      title,
      price,
      category,
      description,
      image,
    });
    await newProducts.save();
    res.send("Product is created!");
  } catch (error) {
    res.send("Product is not created!");
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, category, description, image } = req.body;
  const allProducts = await ProductsModel.findByIdAndUpdate(id, {
    title,
    price,
    category,
    description,
    image,
  });
  res.send(allProducts);
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const allProducts = await ProductsModel.findByIdAndDelete(id);
  res.send(allProducts);
};
