const API_URL = 'http://localhost:5000/orders';

export const createOrder = async (materialId, quantity) => {
  const token = localStorage.getItem('token');
  console.log('Attempting to create order with:', { materialId, quantity });

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ materialId, quantity }),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return await response.json();
  } catch (error) {
    console.error('Create order error:', error);
    throw error;
  }
};

export const getOrders = async () => {
  const token = localStorage.getItem('token');
  console.log('Fetching orders');

  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }

    return await response.json();
  } catch (error) {
    console.error('Get orders error:', error);
    throw error;
  }
};
