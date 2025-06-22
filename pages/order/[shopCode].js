import { useState } from 'react';

const menu = [
  { name: 'Burger', price: 50 },
  { name: 'Pommes Frites', price: 30 },
];

export default function OrderPage({ shopCode }) {
  const [orderNumber, setOrderNumber] = useState(null);
  const [status, setStatus] = useState('pending');

  const placeOrder = async () => {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shopCode, items: menu }),
    });
    const data = await res.json();
    setOrderNumber(data.number);
    pollStatus(data.number);
  };

  const pollStatus = (num) => {
    const check = async () => {
      const res = await fetch(`/api/orders/${shopCode}/${num}`);
      const data = await res.json();
      setStatus(data.status);
      if (data.status !== 'ready') setTimeout(check, 2000);
    };
    check();
  };

  if (orderNumber) {
    return (
      <div className="p-6 text-center font-sans">
        <h1 className="text-3xl mb-4">Din ordre #{orderNumber}</h1>
        <p>Status: {status}</p>
        {status === 'ready' && <p className="text-green-600">Din ordre er klar!</p>}
      </div>
    );
  }

  return (
    <div className="p-6 font-sans text-center">
      <h1 className="text-2xl mb-4">Bestil hos {shopCode}</h1>
      <button
        onClick={placeOrder}
        className="bg-yellow-600 text-white px-4 py-2 rounded"
      >
        Bestil eksempelmenu
      </button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { shopCode: params.shopCode } };
}