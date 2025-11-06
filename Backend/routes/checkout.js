const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');


const DEMO_USER = 'demo_user@example.com';


// POST /api/checkout -> returns { receipt }
router.post('/', async (req, res) => {
try {
const items = await CartItem.find({ userEmail: DEMO_USER }).populate('productId');
if (items.length === 0) return res.status(400).json({ message: 'Cart is empty' });
const total = items.reduce((s, it) => s + it.productId.price * it.qty, 0);
const receipt = { id: Date.now(), total, timestamp: new Date().toISOString() };
await CartItem.deleteMany({ userEmail: DEMO_USER });
res.json({ receipt });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Checkout failed' });
}
});


module.exports = router;