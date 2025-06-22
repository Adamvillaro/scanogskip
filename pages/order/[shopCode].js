import { useEffect, useState } from 'react';

export default function OrderView({ code }) {
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
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ordrer - {code}</h1>
      {orders.length === 0 ? (
        <p>Ingen ordrer endnu</p>
      ) : (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {orders.map((order) => (
            <li key={order.number} style={{ border: '1px solid white', padding: '1rem', borderRadius: '0.5rem' }}>
              <p style={{ fontSize: '1.5rem' }}>#{order.number}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
              {order.status !== 'ready' && (
                <button
                  onClick={() => markReady(order.number)}
                  style={{ marginTop: '1rem', backgroundColor: 'white', color: 'black', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
                >
                  Marker som færdig
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { code: params.shopCode } };
}
