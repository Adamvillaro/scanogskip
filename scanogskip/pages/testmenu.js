// pages/testmenu.js
import { useState } from "react";

export default function TestMenu() {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    // Her kan du evt. logge til konsol: console.log("Bestilling lagt")
  };

  if (ordered) {
    return (
      <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-yellow-700 mb-4">Tak for din bestilling!</h1>
        <p className="text-xl text-yellow-900">Hold øje med skærmen for dit nummer.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-800 mb-8">Vælg din menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Burger Menu kort */}
        <div
          onClick={handleOrder}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-200 flex flex-col items-center"
        >
          <img src="/file.svg" alt="Burger Menu" className="w-32 h-32 object-contain mb-4" />
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">🍔 Burger Menu</h2>
          <p className="text-yellow-900 mb-2">Saftig burger med pommes frites</p>
          <p className="text-yellow-700 font-bold text-lg mb-4">Pris: 89 kr</p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full text-lg font-medium">
            Bestil nu
          </button>
        </div>

        {/* Flere menuer kan let tilføjes her */}
      </div>
    </div>
  );
}
