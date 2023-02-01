import dbGetAllProducts from '../models/products.js';

const getAllProducts = async (req, res) =>
  res.status(200).json(await dbGetAllProducts());

export default getAllProducts;
