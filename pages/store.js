import { useEffect, useState } from 'react'

export default function Store() {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    const res = await fetch('/api/orders')
    const data = await res.json()
    setOrders(data)
  }

  useEffect(() => {
    fetchOrders()
    const interval = setInterval(fetchOrders, 5000)
    return () => clearInterval(interval)
  }, [])

  const markDone = async (id) => {
    await fetch(`/api/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'complete' })
    })
    fetchOrders()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Indkommende ordrer</h1>
      {orders.length === 0 && (
        <p className="text-gray-500">Ingen ordrer endnu</p>
      )}
      {orders.map(order => (
        <div key={order.id} className="border p-4 mb-4 rounded">
          <p className="font-semibold">Ordre: {order.id}</p>
          <p>Status: {order.status}</p>
          <ul className="list-disc ml-4">
            {order.items?.map((it, i) => (
              <li key={i}>{it.name} x {it.qty || 1}</li>
            ))}
          </ul>
          {order.status !== 'complete' && (
            <button className="mt-2 px-3 py-1 bg-green-600 text-white" onClick={() => markDone(order.id)}>
              Færdig
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
