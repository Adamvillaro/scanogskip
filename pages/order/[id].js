import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function OrderStatus() {
  const router = useRouter()
  const { id } = router.query
  const [order, setOrder] = useState(null)

  useEffect(() => {
    if (!id) return
    const fetchStatus = async () => {
      const res = await fetch(`/api/orders/${id}`)
      const data = await res.json()
      setOrder(data)
    }
    fetchStatus()
    const interval = setInterval(fetchStatus, 5000)
    return () => clearInterval(interval)
  }, [id])

  if (!order) return <p className="p-6 text-center">Henter ordre...</p>

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold mb-4">Ordre Status</h1>
      <p>Status: {order.status === 'complete' ? 'Færdig' : 'I gang...'}</p>
      {order.status === 'complete' ? (
        <p className="mt-2">Din ordre er klar!</p>
      ) : (
        <p className="mt-2 text-gray-500">Vent venligst...</p>
      )}
    </div>
  )
}
