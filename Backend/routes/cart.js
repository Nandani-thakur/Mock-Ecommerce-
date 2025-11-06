const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');


const DEMO_USER = 'demo_user@example.com';


// POST /api/cart { productId, qty }
router.post('/', async (req, res) => {
const { productId, qty } = req.body;
if (!productId || typeof qty !== 'number') return res.status(400).json({ message: 'productId and qty (number) required' });
try {
const productExists = await Product.findById(productId);
if (!productExists) return res.status(404).json({ message: 'Product not found' });
let item = await CartItem.findOne({ userEmail: DEMO_USER, productId });
if (item) {
item.qty = qty;
await item.save();
return res.json({ id: item._id, productId, qty: item.qty });
}
item = await CartItem.create({ userEmail: DEMO_USER, productId, qty });
res.status(201).json({ id: item._id, productId, qty: item.qty });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Failed to add to cart' });
}
});


// GET /api/cart
router.get('/', async (req, res) => {
try {
const items = await CartItem.find({ userEmail: DEMO_USER }).populate('productId');
const formatted = items.map(it => ({ cartId: it._id, productId: it.productId._id, name: it.productId.name, price: it.productId.price, imageUrl: it.productId.imageUrl, qty: it.qty }));
const total = formatted.reduce((s, r) => s + r.price * r.qty, 0);
res.json({ items: formatted, total });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Failed to fetch cart' });
}
});


// DELETE /api/cart/:id
router.delete('/:id', async (req, res) => {
try {
await CartItem.findByIdAndDelete(req.params.id);
res.json({ success: true });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Failed to delete cart item' });
}
});


module.exports = router;
