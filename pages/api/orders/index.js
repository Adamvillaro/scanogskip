import { createOrder } from '../../../lib/orderStore';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { shopCode, items } = req.body || {};
  if (!shopCode || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Missing shopCode or items' });
  }
  const order = createOrder(shopCode, items);
  res.status(200).json(order);
}