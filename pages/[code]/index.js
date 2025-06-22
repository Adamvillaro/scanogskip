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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 font-sans">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-center">Ordrer {code}</h1>
        <ul className="space-y-4">
          {orders.map((o) => (
            <li
              key={o.number}
              className="bg-white rounded-2xl shadow flex justify-between items-center px-4 py-3"
            >
              <span className="text-lg font-medium">#{o.number}</span>
              <span className="text-gray-500">{o.status}</span>
              {o.status !== 'ready' && (
                <button
                  onClick={() => markReady(o.number)}
                  className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full"
                >
                  Marker klar
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const allowed = ["ockabasi", "testmenu"];
  if (!allowed.includes(params.code)) {
    return { notFound: true };
  }

  return { props: { code: params.code } };
}
