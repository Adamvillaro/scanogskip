// Ocakbasi bestillingsside med billeder, 2-kolonne grid, popup og kurv i højre side
import { Button } from "../components/ui/button";
import { ChevronRight, ChevronLeft, Trash2 } from "lucide-react";
import React, { useState } from "react";

export default function OcakbasiMenu() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("landing");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [orderNumber, setOrderNumber] = useState(null);
  const [diningOption, setDiningOption] = useState(null);

  const rawCategories = [
    { name: "A la carte", items: ["Mix grill", "Kyllingespyd", "Lammekoteletter", "Adana kebab"] },
    { name: "Børneretter", items: ["Nuggets", "Børneburger", "Mini pizza", "Pommes frites"] },
    { name: "Drikkevarer", items: ["Cola", "Fanta", "Vand", "Ayran"] },
    { name: "Durumrulle", items: ["Durum kebab", "Durum kylling", "Durum mix", "Durum vegetar"] },
    { name: "Dyppelse", items: ["Hvidløg", "Chili", "Remoulade", "Ketchup"] },
    { name: "Burger", items: ["Cheeseburger", "Big burger", "Kyllingeburger", "Dobbelt burger"] },
    { name: "Pizza", items: ["Margherita", "Pepperoni", "Hawaii", "Vegetar"] },
    { name: "Pasta", items: ["Pasta kødsovs", "Pasta kylling", "Pasta vegetar", "Lasagne"] },
    { name: "Pita", items: ["Pita kebab", "Pita kylling", "Pita mix", "Pita falafel"] },
    { name: "Pizzasandwich", items: ["Sandwich kebab", "Sandwich kylling", "Sandwich mix", "Sandwich vegetar"] },
    { name: "Salater", items: ["Græsk salat", "Kyllingesalat", "Tun salat", "Vegetarsalat"] },
    { name: "Tilbehør", items: ["Pommes frites", "Løgringe", "Mozzarella sticks", "Falafel"] },
  ];

  const categories = rawCategories.map(cat => ({
    ...cat,
    items: cat.items.map(name => ({
      name,
      description: `Lækker ${name.toLowerCase()} fra Ocakbasi`,
      price: 65 + name.length % 5 * 5,
      image: `/ocakbasi/${encodeURIComponent(cat.name)}/${encodeURIComponent(name)}.jpeg.avif`
    }))
  }));

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = () => {
    setCart([...cart, { ...selectedItem, quantity, note }]);
    setSelectedItem(null);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    setOrderNumber(Math.floor(1000 + Math.random() * 9000));
    setCart([]);
    setView("confirmation");
  };

  if (view === "landing") {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 text-black p-6">
        <img src="/ocakbasi-logo.png" alt="Logo" className="h-24" />
        <h1 className="text-2xl font-bold text-center">Velkommen til Ocakbasi</h1>
        <div className="flex gap-4">
          <Button onClick={() => setView("categories") || setDiningOption("restaurant")}>Spis her</Button>
          <Button onClick={() => setView("categories") || setDiningOption("takeaway")}>Takeaway</Button>
        </div>
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Tak for din bestilling!</h2>
        <p className="text-lg text-gray-700">Dit nummer er</p>
        <p className="text-6xl font-extrabold text-black mt-2 mb-6">#{orderNumber}</p>
        <button
          onClick={() => setView("landing")}
          className="mt-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full"
        >
          ← Start forfra
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 p-4">
        {!selectedCategory ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Vælg en kategori</h2>
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {categories.map((cat, i) => (
                <Button key={i} onClick={() => setSelectedCategory(cat)}>
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setSelectedCategory(null)} className="text-sm text-gray-500 flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" /> Tilbage
              </button>
              <h2 className="text-lg font-bold">{selectedCategory.name}</h2>
              <span></span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {selectedCategory.items.map((item, idx) => (
                <div key={idx} className="border rounded-xl p-3 shadow-sm bg-white cursor-pointer" onClick={() => setSelectedItem(item)}>
                  <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md mb-2" />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm font-bold mt-1">{item.price},00 kr</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* KURV */}
      <div className="w-full md:w-1/3 border-l border-gray-200 p-4 bg-gray-50 min-h-screen">
        <h3 className="text-xl font-bold mb-4">🛒 Din kurv</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Kurven er tom.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm">
                <div>
                  <p className="font-medium">{item.name} x{item.quantity}</p>
                  {item.note && <p className="text-xs text-gray-500">{item.note}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <p>{item.price * item.quantity} kr</p>
                  <button onClick={() => removeFromCart(i)}><Trash2 className="w-4 h-4 text-red-500" /></button>
                </div>
              </div>
            ))}
            <div className="font-bold text-right mt-2">Total: {total} kr</div>
            <Button onClick={placeOrder} className="w-full mt-4 bg-black text-white">Bestil nu</Button>
          </div>
        )}
      </div>

      {/* POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl">
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-bold mb-1">{selectedItem.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{selectedItem.description}</p>
            <p className="font-semibold mb-3">{selectedItem.price},00 kr</p>
            <div className="flex items-center mb-3">
              <span className="mr-2">Antal:</span>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1 text-center"
              />
            </div>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Kommentar eller allergener"
              className="w-full border rounded px-3 py-2 text-sm mb-3"
            />
            <div className="flex gap-2">
              <Button onClick={addToCart} className="flex-1 bg-black text-white">Læg i kurv</Button>
              <Button onClick={() => setSelectedItem(null)} className="flex-1 bg-gray-200">Annuller</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
