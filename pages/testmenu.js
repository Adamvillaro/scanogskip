// Ny version af testmenu med clean listevisning og højrepile og produktvisning + tilføj til kurv/køb som menu flow
import { Button } from "../components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function TestMenu() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [menuPrompt, setMenuPrompt] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(null);

  const categories = [
    {
      name: "Pizzaer",
      items: [
        { name: "Pep", description: "Pepperoni, dressing", price: 83 },
        { name: "Margherita", description: "Tomat, ost", price: 73 },
        { name: "Hawaii", description: "Skinke, ananas", price: 85 },
        { name: "Napoli", description: "Skinke, rejer", price: 87 },
        { name: "Quatro Stagioni", description: "Skinke, rejer, champignon", price: 90 },
        { name: "Capriciosa", description: "Skinke, champignon", price: 85 },
        { name: "Italiano", description: "Kødsauce, løg", price: 85 },
        { name: "Bodrum", description: "Skinke, løg, bacon", price: 85 },
        { name: "Pepperoni", description: "Løg, pepperoni, paprika", price: 85 },
        { name: "Roma", description: "Skinke, pepperoni", price: 85 },
        { name: "Lighter", description: "Skinke, kødsauce, champignon, løg", price: 90 },
        { name: "Salat pizza", description: "Kødstrimler/kylling/skinke, salat, dressing", price: 92 },
        { name: "Venus", description: "Kebab, champignon, løg", price: 85 },
        { name: "Parma", description: "Skinke, gorgonzola, champignon, hvidløg", price: 90 },
        { name: "Vegetar", description: "Ananas, champignon, løg, artiskok, paprika", price: 88 },
        { name: "Farum pizza", description: "Kebab, salat, dressing", price: 90 },
        { name: "Gorgonzola", description: "Gorgonzola, kødstrimler, champignon, løg", price: 92 },
        { name: "Americane pizza", description: "Paprika, chilli, hakket oksekød", price: 85 },
        { name: "Amore", description: "Kødstrimler, løg, champignon", price: 87 },
        { name: "Karam", description: "Pepperoni, champignon, paprika, kødstrimler", price: 92 },
        { name: "Ocakbasi", description: "Hakket oksekød, jalapenos, løg, champignon, chili", price: 92 },
      ],
    },
    {
      name: "Durum",
      items: [
        { name: "Kebab Durum", description: "Med salat, tomat, dressing", price: 65 },
        { name: "Kylling Durum", description: "Med salat, tomat, dressing", price: 69 },
        { name: "Kødstrimler Durum", description: "Med salat, tomat, dressing", price: 70 },
        { name: "Mix Durum", description: "Kebab, kylling, jalapenos, chili", price: 75 },
      ],
    },
    {
      name: "Menuer",
      items: [
        { name: "Big burger menu", description: "Pommes frites, sodavand, dyppelse", price: 99 },
        { name: "Pita kebab menu", description: "Pommes frites, sodavand, dyppelse", price: 95 },
        { name: "Dürüm kebab menu", description: "Pommes frites, sodavand, dyppelse", price: 115 },
        { name: "Pizza menu", description: "2 pizzaer nr. 0-26, 1.5L sodavand", price: 199 },
      ],
    },{
      name: "Salater",
      items: [
        { name: "Kyllingesalat", description: "Frisk salat med kylling", price: 65 },
        { name: "Græsk salat", description: "Fetaost, oliven", price: 65 },
        { name: "Tun salat", description: "Frisk salat med tun", price: 64 },
      ],
    },
    {
      name: "Burger",
      items: [
        { name: "Big burger", description: "Klassisk burger", price: 49 },
        { name: "Cheese burger", description: "Burger med ost", price: 52 },
        { name: "Kyllingeburger", description: "Burger med kylling", price: 53 },
        { name: "Dobbelt burger", description: "Ekstra stor burger", price: 61 },
      ],
    },
    {
      name: "Diverse",
      items: [
        { name: "Pommes frites", description: "Sprøde fritter", price: 39 },
        { name: "Kebab box", description: "Kebab med tilbehør", price: 55 },
        { name: "Kyllinge box", description: "Kylling med tilbehør", price: 59 },
      ],
    },
  ];

  const goBackToHome = () => {
    setView("categories");
    setSelectedItem(null);
    setSelectedCategory(null);
    setNote("");
    setQuantity(1);
    setMenuPrompt(false);
  };

  const handleAddToCart = (item, qty, noteText) => {
    const newItem = { ...item, quantity: qty, note: noteText };
    setCart((prev) => [...prev, newItem]);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      goBackToHome();
    }, 2000);
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

  if (orderNumber) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Tak for din bestilling!</h2>
        <p className="text-lg text-gray-700">Dit nummer er</p>
        <p className="text-6xl font-extrabold text-black mt-2 mb-6">#{orderNumber}</p>
        <button
          onClick={() => setOrderNumber(null)}
          className="mt-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full"
        >
          ← Gå tilbage til start
        </button>
      </div>
    );
  }

  if (view === "categories") {
    return (
      <div className="min-h-screen bg-white text-black p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Menu</h1>
          <span className="text-sm text-gray-700">Menu</span>
        </div>
        <div className="divide-y divide-gray-300">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat);
                setView("items");
              }}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="text-lg font-semibold">{cat.name}</span>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-4 left-0 right-0 px-6">
            <Button
              className="w-full bg-black text-white py-3 rounded-xl flex justify-between items-center"
              onClick={placeOrder}
            >
              <span>Betal nu</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (view === "items" && selectedCategory) {
    return (
      <div className="min-h-screen bg-white text-black p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setView("categories")} className="text-sm flex items-center text-gray-700">
            <ChevronLeft className="w-4 h-4 mr-1" /> Tilbage
          </button>
          <h1 className="text-xl font-bold text-center flex-1 -ml-4">{selectedCategory.name}</h1>
          <span className="w-10"></span>
        </div>

        <p className="text-sm text-orange-500 font-semibold mb-2">⭐ Vi anbefaler</p>

        <div className="divide-y divide-gray-200">
          {selectedCategory.items.map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left py-4"
              onClick={() => {
                setSelectedItem(item);
                setView("product");
                setQuantity(1);
                setNote("");
              }}
            >
              <div className="text-lg font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
              <div className="text-xs text-gray-600 mt-1">{item.price},00 kr</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (view === "product" && selectedItem) {
    return (
      <div className="min-h-screen bg-white text-black p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setView("items")} className="text-sm flex items-center text-gray-700">
            <ChevronLeft className="w-4 h-4 mr-1" /> {selectedCategory.name}
          </button>
          <h1 className="text-xl font-bold text-center flex-1 -ml-4">{selectedItem.name}</h1>
          <span className="w-10"></span>
        </div>

        <div className="text-sm text-gray-500 mb-4">{selectedItem.price},00 kr</div>

        <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500">
          (Billede placeholder)
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex items-center border rounded-full px-3 py-1 text-sm text-gray-700">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <input
            className="flex-1 ml-4 border border-gray-300 rounded-xl px-3 py-2 text-sm"
            placeholder="Kommentar og allergener"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {menuPrompt ? (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="font-medium mb-2">Tilføj menu?</p>
              <p className="text-sm text-gray-600">Stor pommes frites + sodavand for 20 kr ekstra</p>
            </div>
            <Button
              className="w-full bg-black text-white py-3 rounded-xl"
              onClick={() => handleAddToCart({ ...selectedItem, name: selectedItem.name + " (menu)", price: selectedItem.price + 20 }, quantity, note)}
            >
              Læg i kurv
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="bg-black text-white py-3 rounded-xl"
              onClick={() => handleAddToCart(selectedItem, quantity, note)}
            >
              Læg i kurv
            </Button>
            <Button
              className="bg-gray-800 text-white py-3 rounded-xl"
              onClick={() => setMenuPrompt(true)}
            >
              Køb som menu
            </Button>
          </div>
        )}

        {justAdded && (
          <div className="mt-4 text-green-600 font-medium text-center">Tilføjet ✅</div>
        )}
      </div>
    );
  }

  return null;
}
