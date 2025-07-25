import { Button } from "../components/ui/button";
import { ChevronRight, ChevronLeft, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function OcakbasiMenu() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("landing");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [justAdded, setJustAdded] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [diningOption, setDiningOption] = useState(null);

  const categories = [
    {
      name: "A la carte",
      items: ["Mix grill", "Kyllingespyd", "Lammekoteletter", "Adana kebab"],
    },
    {
      name: "Børneretter",
      items: ["Nuggets", "Børneburger", "Mini pizza", "Pommes frites"],
    },
    {
      name: "Drikkevarer",
      items: ["Cola", "Fanta", "Vand", "Ayran"],
    },
    {
      name: "durum",
      items: ["Durum kebab", "Durum kylling", "Durum mix", "Durum vegetar"],
    },
    {
      name: "Dyppelse",
      items: ["Hvidløg", "Chili", "Remoulade", "Ketchup"],
    },
    {
      name: "Ocakbasi burger",
      items: ["Cheeseburger", "Big burger", "Kyllingeburger", "Dobbelt burger"],
    },
    {
      name: "ocakbasi pizzaer",
      items: ["Margherita", "Pepperoni", "Hawaii", "Vegetar"],
    },
    {
      name: "Pasta ret",
      items: ["Pasta kødsovs", "Pasta kylling", "Pasta vegetar", "Lasagne"],
    },
    {
      name: "Pitabrød",
      items: ["Pita kebab", "Pita kylling", "Pita mix", "Pita falafel"],
    },
    {
      name: "Pizzasandwich",
      items: ["Sandwich kebab", "Sandwich kylling", "Sandwich mix", "Sandwich vegetar"],
    },
    {
      name: "Salater",
      items: ["Græsk salat", "Kyllingesalat", "Tun salat", "Vegetarsalat"],
    },
    {
      name: "Tilbehør",
      items: ["Pommes frites", "Løgringe", "Mozzarella sticks", "Falafel"],
    },
  ].map(cat => ({
    ...cat,
    items: cat.items.map(name => ({
      name,
      description: `Lækker ${name.toLowerCase()} fra Ocakbasi`,
      price: 65 + name.length % 5 * 5,
      image: `/ocakbasi/${cat.name}/${name}.jpeg.avif`
    }))
  }));

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = () => {
    setCart([...cart, { ...selectedItem, quantity, note }]);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setView("categories");
    }, 500);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    setOrderNumber(Math.floor(1000 + Math.random() * 9000));
    setCart([]);
    setView("confirmation");
  };

  if (view === "landing") {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white flex flex-col items-center justify-center px-6">
        <img src="/ocakbasi-logo.png" alt="Logo" className="w-40 mb-10" />
        <h1 className="text-xl mb-6">Velkommen til Ocakbasi</h1>
        <div className="w-full max-w-xs space-y-4">
          <Button onClick={() => { setDiningOption("eat-in"); setView("categories"); }} className="w-full bg-[#F4A766] text-black rounded-xl py-4 text-lg">Spis her</Button>
          <Button onClick={() => { setDiningOption("takeaway"); setView("categories"); }} className="w-full bg-[#F4A766] text-black rounded-xl py-4 text-lg">Takeaway</Button>
        </div>
        <img src="/halal-logo.png" alt="Halal" className="w-16 mt-12" />
      </div>
    );
  }

  if (view === "categories") {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="overflow-x-auto flex space-x-4 p-4 border-b sticky top-0 bg-white z-30">
            {categories.map((cat, idx) => (
              <button key={idx} onClick={() => setSelectedCategory(cat)} className="text-sm font-semibold whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full">
                {cat.name}
              </button>
            ))}
          </div>

          <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
            {(selectedCategory?.items || []).map((item, idx) => (
              <div key={idx} className="border rounded-xl overflow-hidden shadow-sm bg-white">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm font-bold">{item.price},00 kr</span>
                    <Button onClick={() => { setSelectedItem(item); setView("item"); }} className="text-sm">Vælg</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="w-full lg:w-[360px] bg-white shadow-xl border-l p-6 z-50 overflow-y-auto fixed lg:static bottom-0 left-0 right-0">
            <h3 className="text-xl font-bold mb-4">Din kurv</h3>
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm mb-2">
                <span>{item.name} x{item.quantity}</span>
                <button onClick={() => removeFromCart(idx)}><Trash2 className="w-4 h-4 text-red-500" /></button>
              </div>
            ))}
            <div className="mt-4 font-bold text-lg">Total: {total},00 kr</div>
            <Button onClick={handlePlaceOrder} className="w-full mt-4 bg-black text-white py-3 rounded-full">Gå til kassen</Button>
          </div>
        )}
      </div>
    );
  }

  if (view === "item") {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl w-full max-w-md p-6">
          <button onClick={() => setView("categories")} className="mb-4 text-sm text-gray-600 flex items-center"><ChevronLeft className="w-4 h-4 mr-1" /> Tilbage</button>
          <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover rounded-xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
          <p className="text-gray-600 mb-4">{selectedItem.description}</p>
          <input
            type="text"
            placeholder="Kommentar eller allergi"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border px-4 py-2 rounded-xl mb-4"
          />
          <div className="flex items-center space-x-4 mb-6">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 border rounded-full">-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border rounded-full">+</button>
          </div>
          <Button onClick={addToCart} className="w-full bg-black text-white py-3 rounded-xl">Læg i kurv</Button>
          {justAdded && <div className="text-green-500 mt-4 text-center font-medium">Tilføjet til kurv ✅</div>}
        </div>
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div className="min-h-screen bg-white text-center flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl font-bold mb-2">Tak for din bestilling!</h1>
        <p className="text-gray-700 mb-4">Dit ordrenummer er:</p>
        <div className="text-5xl font-extrabold">#{orderNumber}</div>
        <Button onClick={() => setView("landing")} className="mt-6 bg-black text-white px-6 py-3 rounded-full">Tilbage til forsiden</Button>
      </div>
    );
  }
}
