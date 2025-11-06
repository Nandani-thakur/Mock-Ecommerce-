const express = require('express');
const router = express.Router();
const Product = require('../models/Product');




router.get('/', async (req, res) => {
  try {
    let products = await Product.find();
    if (products.length < 6) { // agar 6 se kam products hain
      const seed = [
        { name: 'Classic T‑shirt', price: 499, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' },
        { name: 'Slim Jeans', price: 899, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' },
        { name: 'Running Sneakers', price: 1499, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' },
        { name: 'Baseball Cap', price: 299, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' },
        { name: 'Minimalist Watch', price: 1999, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' },
        { name: 'Sunglasses', price: 799, image: 'https://i.pinimg.com/1200x/04/2f/36/042f36850f096e614485e3477ad3366f.jpg' }
      ];
      await Product.insertMany(seed);
      products = await Product.find();
    }
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load products' });
  }
});
// POST /api/products - add a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price) return res.status(400).json({ message: 'Name and price required' });

    const product = await Product.create({ name, price, image });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add product' });
  }
});
// DELETE /api/products/:id - delete a product by its ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ success: true, message: 'Product deleted', product: deleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

module.exports = router;
