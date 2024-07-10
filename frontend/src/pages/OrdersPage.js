import React, { useState, useEffect } from 'react';
import { getOrders, createOrder } from '../services/orderService';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [materialId, setMaterialId] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchOrders();
  }, []);

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      const newOrder = await createOrder(materialId, quantity);
      setOrders([...orders, newOrder]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h2>Orders</h2>
      <form onSubmit={handleCreateOrder}>
        <div>
          <label>Material ID</label>
          <input
            type="text"
            value={materialId}
            onChange={(e) => setMaterialId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
      <h3>Existing Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.materialId} - {order.quantity} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
