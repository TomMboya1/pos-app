const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const newProduct = new Product({ name, description, price, stock });
  await newProduct.save();
  res.send('Product created');
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
