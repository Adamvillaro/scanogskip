import { getOrders } from '../../../lib/orderStore';

export default function handler(req, res) {
  const {
    query: { shopCode },
  } = req;

  if (!shopCode) return res.status(400).json({ error: 'Missing shopCode' });

  const orders = getOrders(shopCode);
  res.status(200).json(orders);
}