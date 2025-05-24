import { useRouter } from "next/router";
import { useState } from "react";

// Starter fra 0 – første ordre bliver 1
let lastOrderNumber = 0;

export default function TestMenu() {
  const router = useRouter();
  const { butik } = router.query;
  const [orderNumber, setOrderNumber] = useState(null);

  const handleOrder = async () => {
    lastOrderNumber += 1;
    setOrderNumber(lastOrderNumber);

    console.log("Ordre simuleret lokalt:", {
      butik: butik || "Ukendt",
      produkt: "Burger Menu",
      tidspunkt: new Date(),
      nummer: lastOrderNumber,
    });
  };

  if (orderNumber) {
    return (
      <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-4 py-12 text-yellow-900 text-center">
        <h1 className="text-4xl font-bold mb-4">Tak for din test-bestilling!</h1>
        <p className="text-lg">Testnummer:</p>
        <p className="text-6xl font-extrabold text-yellow-700 mt-4">{orderNumber}</p>
        <p className="mt-8 text-base">Dette er kun en test – ingen data er gemt.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center px-4 py-8 text-yellow-900 text-center">
      <h1 className="text-4xl font-bold mb-6">Velkommen til Testmenu</h1>

      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">🍔 Burger Menu</h2>
          <p className="text-base mb-2">Saftig burger med pommes frites</p>
          <p className="text-yellow-700 font-bold text-lg mb-6">Pris: 89 kr</p>
          <button
            onClick={handleOrder}
            className="w-full bg-yellow-600 text-white text-lg font-medium px-6 py-3 rounded-2xl hover:bg-yellow-700 transition"
          >
            Bestil test
          </button>
        </div>
      </div>
    </div>
  );
}
