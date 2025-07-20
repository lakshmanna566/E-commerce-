const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const { name, price, image } = req.body;
  const newProduct = new Product({ name, price, image });
  await newProduct.save();
  res.status(201).json(newProduct);
});

module.exports = router;
