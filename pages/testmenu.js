// Ny version af testmenu med trinvis navigation mellem kategorier og retter
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

export default function TestMenu() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("categories"); // "categories", "items", "confirm"
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(null);

  const categories = [
    {
      name: "Pizzaer",
      items: [
        { name: "Pep", description: "Pepperoni, dressing", price: 83 },
        { name: "Margherita", description: "Tomat, ost", price: 73 },
        { name: "Hawaii", description: "Skinke, ananas", price: 85 },
        { name: "Vegetar", description: "Ananas, champignon, løg, artiskok, paprika", price: 88 },
        { name: "Ocakbasi", description: "Hakket oksekød, jalapenos, løg, champignon, chili", price: 92 },
        { name: "Salatpizza", description: "Kødstrimler/kylling/skinke, salat, dressing", price: 92 },
      ],
    },
    {
      name: "Durum",
      items: [
        { name: "Kebab Durum", description: "Med salat, tomat, dressing", price: 65 },
        { name: "Kylling Durum", description: "Med salat, tomat, dressing", price: 69 },
      ],
    },
    {
      name: "Menuer",
      items: [
        { name: "Big burger menu", description: "Pommes frites, sodavand, dyppelse", price: 99 },
      ],
    },
  ];

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setView("confirm");
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const placeOrder = async () => {
    try {
      const res = await fetch("/api/orders/testmenu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Noget gik galt med din bestilling.");
        return;
      }
      setOrderNumber(data.number);
      setCart([]);
      setError(null);
    } catch (err) {
      setError("Serverfejl. Prøv igen.");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (orderNumber) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">Tak for din bestilling!</h2>
        <p className="text-lg text-yellow-800">Dit nummer er</p>
        <p className="text-6xl font-extrabold text-yellow-700 mt-2 mb-6">#{orderNumber}</p>
        <button onClick={() => setOrderNumber(null)} className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full">
          ← Gå tilbage og bestil mere
        </button>
      </div>
    );
  }

  if (view === "categories") {
    return (
      <div className="min-h-screen bg-yellow-50 p-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">Vælg kategori</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <Button key={cat.name} onClick={() => { setSelectedCategory(cat); setView("items"); }} className="bg-yellow-600 hover:bg-yellow-700 text-white py-6">
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (view === "items" && selectedCategory) {
    return (
      <div className="min-h-screen bg-yellow-50 p-6">
        <h1 className="text-3xl font-bold text-yellow-800 mb-4 text-center">{selectedCategory.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {selectedCategory.items.map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-xl">
              <CardContent className="p-6 flex flex-col items-start space-y-3">
                <h3 className="text-xl font-bold text-yellow-900">{item.name}</h3>
                <p className="text-yellow-700 text-sm">{item.description}</p>
                <p className="text-yellow-800 font-semibold">{item.price},00 kr</p>
                <Button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" /> Tilføj til kurv
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button onClick={() => setView("categories")} className="text-yellow-700 underline">← Tilbage til kategorier</Button>
        </div>
      </div>
    );
  }

  if (view === "confirm") {
    return (
      <div className="min-h-screen bg-yellow-50 p-6 text-center">
        <h1 className="text-3xl font-bold text-yellow-800 mb-4">🛒 Din kurv</h1>
        {cart.length === 0 ? (
          <p className="text-yellow-700">Din kurv er tom.</p>
        ) : (
          <div className="max-w-lg mx-auto space-y-2">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-yellow-800">
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span>{item.price},00 kr</span>
                  <Button className="bg-red-500 hover:bg-red-600" onClick={() => removeFromCart(i)}>
                    Fjern
                  </Button>
                </div>
              </div>
            ))}
            <p className="mt-2 font-bold text-lg text-yellow-900">Total: {total},00 kr</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white mt-4" onClick={placeOrder}>
              Bekræft bestilling
            </Button>
            <div className="mt-4">
              <Button onClick={() => setView("categories")} className="text-yellow-700 underline">← Tilføj mere</Button>
            </div>
          </div>
        )}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    );
  }
}
