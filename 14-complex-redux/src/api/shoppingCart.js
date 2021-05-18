export const fetchOrders = () => {
  const response = fetch(
    'https://react-http-1e585-default-rtdb.firebaseio.com/orders.json'
  );
  const orders = response.json();
  return orders;
};

export const createOrder = (orders) => {
  const response = fetch(
    'https://react-http-1e585-default-rtdb.firebaseio.com/orders.json',
    {
      method: 'POST',
      body: JSON.stringify(orders),
    }
  );
  const createdOrder = response.json();
  return createdOrder;
};
