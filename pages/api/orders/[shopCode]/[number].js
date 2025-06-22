import { getOrder, completeOrder } from '../../../../lib/orderStore';

export default function handler(req, res) {
  const {
    query: { shopCode, number },
    method,
  } = req;

  if (!shopCode || !number) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  if (method === 'POST') {
    const order = completeOrder(shopCode, number);
    return order
      ? res.status(200).json(order)
      : res.status(404).json({ error: 'Not found' });
  }

  const order = getOrder(shopCode, number);
  return order
    ? res.status(200).json(order)
    : res.status(404).json({ error: 'Not found' });
}