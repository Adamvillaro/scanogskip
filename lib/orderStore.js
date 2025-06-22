const shops = {};

export function createOrder(shopCode, items) {
  if (!shops[shopCode]) {
    shops[shopCode] = { next: 1, orders: [] };
  }
  const order = { number: shops[shopCode].next++, items, status: 'pending' };
  shops[shopCode].orders.push(order);
  return order;
}

// Alias used by some API routes
export const addOrder = createOrder;

export function getOrders(shopCode) {
  if (!shops[shopCode]) return [];
  return shops[shopCode].orders;
}

export function getOrder(shopCode, number) {
  return getOrders(shopCode).find(o => o.number === Number(number));
}

export function completeOrder(shopCode, number) {
  const order = getOrder(shopCode, number);
  if (order) order.status = 'ready';
  return order;
}

