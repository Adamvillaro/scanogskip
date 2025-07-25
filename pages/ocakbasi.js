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
    { name: "Tilbehør", items: ["Pommes frites", "Løgringe", "Mozzarella sticks", "Falafel"] }
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
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 600);
    setSelectedItem(null);
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
      <div className="min-h-screen bg-[#10182F] flex flex-col items-center justify-center text-white p-6">
        <img src="/ocakbasi-logo.png" alt="Logo" className="h-24 mb-6" />
        <h1 className="text-2xl font-bold mb-4">Velkommen til Ocakbasi</h1>
        <div className="flex gap-4">
          <Button onClick={() => { setDiningOption("restaurant"); setSelectedCategory(categories[0]); setView("categories"); }}>Spis her</Button>
          <Button onClick={() => { setDiningOption("takeaway"); setSelectedCategory(categories[0]); setView("categories"); }}>Takeaway</Button>
        </div>
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#10182F] text-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Tak for din bestilling!</h2>
        <p className="text-lg">Dit nummer er</p>
        <p className="text-6xl font-extrabold mt-2 mb-6">#{orderNumber}</p>
        <Button onClick={() => setView("landing")}>← Start forfra</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#10182F] text-white">
      <div className="w-full md:w-2/3 p-4">
        <div className="flex overflow-x-auto space-x-2 pb-4">
          {categories.map((cat, i) => (
            <Button key={i} variant={cat.name === selectedCategory.name ? "default" : "outline"} onClick={() => setSelectedCategory(cat)}>
              {cat.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {selectedCategory.items.map((item, idx) => (
            <div key={idx} className="bg-[#18233e] rounded-xl p-3 cursor-pointer" onClick={() => { setSelectedItem(item); setQuantity(1); setNote(""); }}>
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded mb-2" />
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
              <p className="text-sm font-bold text-white mt-1">{item.price},00 kr</p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#18233e] p-4 shadow-xl border-t z-40">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white">{selectedItem.name}</p>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note til kokken"
                  className="mt-1 border rounded px-2 py-1 text-sm w-full"
                />
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-center"
                />
                <Button onClick={addToCart}>Læg i kurv</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/3 p-4 bg-[#0c1324] border-l border-[#222]">
        <h2 className="text-lg font-bold mb-4">🛒 Din kurv</h2>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-400">Kurven er tom.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item, i) => (
              <div key={i} className="bg-[#18233e] p-2 rounded-xl shadow flex justify-between items-center">
                <div>
                  <p className="font-semibold text-white">{item.name} x{item.quantity}</p>
                  {item.note && <p className="text-xs text-gray-300 italic">{item.note}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <p>{item.price * item.quantity} kr</p>
                  <button onClick={() => removeFromCart(i)}><Trash2 className="w-4 h-4 text-red-400" /></button>
                </div>
              </div>
            ))}
            <div className="font-bold text-right mt-4">Total: {total} kr</div>
            <Button className="w-full mt-4" onClick={handlePlaceOrder}>Gå til betaling</Button>
          </div>
        )}
      </div>
    </div>
  );
}
