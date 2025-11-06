const mongoose = require('mongoose');
const schema = new mongoose.Schema({
name: { type: String, required: true },
price: { type: Number, required: true },
imageUrl: { type: String }
});
module.exports = mongoose.model('Product', schema);