const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  materialId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
