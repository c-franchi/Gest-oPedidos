const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  const { materialId, quantity } = req.body;

  try {
    const order = await Order.create({ materialId, quantity });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch orders' });
  }
};
