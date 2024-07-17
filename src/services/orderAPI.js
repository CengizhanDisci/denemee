// utils/orderAPI.js
const API_URL = 'https://dummyjson.com/carts/add';

export const placeOrder = async (cartItems) => {
  try {
    const orderData = {
      userId: 1, 
      products: cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity
      }))
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Order placement failed');
  }
};
