import { getOrders, addOrder } from '../../../lib/orderStore';

export default function handler(req, res) {
  const {
    query: { shopCode },
    method,
    body,
  } = req;

  if (!shopCode) return res.status(400).json({ error: 'Missing shopCode' });

  if (method === 'GET') {
    const orders = getOrders(shopCode);
    return res.status(200).json(orders);
  }

  if (method === 'POST') {
    const { items } = body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid order items' });
    }

    const order = addOrder(shopCode, items);
    return res.status(200).json(order); // { number: ... }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
