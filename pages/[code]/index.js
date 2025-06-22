import { useEffect, useState } from 'react';

export default function Shop({ code }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`/api/orders/${code}`);
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
    const interval = setInterval(fetchOrders, 2000);
    return () => clearInterval(interval);
  }, [code]);

  const markReady = async (number) => {
    await fetch(`/api/orders/${code}/${number}`, { method: 'POST' });
    const res = await fetch(`/api/orders/${code}`);
    setOrders(await res.json());
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Ordreoversigt {code}</h1>
      <ul className="space-y-2">
        {orders.map((o) => (
          <li key={o.number} className="border p-2 rounded flex justify-between">
            <span>
              #{o.number} - {o.status}
            </span>
            {o.status !== 'ready' && (
              <button
                onClick={() => markReady(o.number)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Marker klar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { code: params.code } };
}