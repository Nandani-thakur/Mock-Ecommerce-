const mongoose = require('mongoose');
const schema = new mongoose.Schema({
userEmail: { type: String, required: true },
productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
qty: { type: Number, required: true }
});
module.exports = mongoose.model('CartItem', schema);