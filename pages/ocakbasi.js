import { Button } from "../components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

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
    { name: "A la carte", items: [{ name: "Adana Kebab", description: "Krydret hakket kød", price: 89, image: "/ocakbasi/A la carte/adana.jpeg" }] },
    { name: "Børneretter", items: [] },
    { name: "Drikkevarer", items: [] },
    { name: "Durumrulle", items: [] },
    { name: "Dyppelse", items: [] },
    { name: "Burger", items: [] },
    { name: "Pizza", items: [] },
    { name: "Pasta", items: [] },
    { name: "Pita", items: [] },
    { name: "Pizzasandwich", items: [] },
    { name: "Salater", items: [] },
    { name: "Tilbehør", items: [] },
  ];

  const handlePlaceOrder = () => {
    setOrderNumber(Math.floor(1000 + Math.random() * 9000));
    setCart([]);
    setView("confirmation");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddToCart = () => {
    const newItem = { ...selectedItem, quantity, note };
    setCart((prev) => [...prev, newItem]);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setView("categories");
    }, 1000);
  };

  if (view === "landing") {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white flex flex-col items-center justify-center px-6">
        <img src="/ockabasi-logo.png" alt="Logo" className="w-40 mb-10" />
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
      <div className="min-h-screen bg-[#1D1E29] text-white p-4">
        <div className="flex overflow-x-auto space-x-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat)}
              className="bg-[#F4A766] text-black px-4 py-2 rounded-full whitespace-nowrap"
            >{cat.name}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(selectedCategory?.items || []).map((item) => (
            <button
              key={item.name}
              onClick={() => { setSelectedItem(item); setQuantity(1); setNote(""); setView("product"); }}
              className="bg-white text-black rounded-xl p-4 flex items-center space-x-4"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="text-left">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
                <div className="text-sm font-medium mt-1">{item.price},-</div>
              </div>
            </button>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#F4A766] text-black p-4 flex justify-between items-center">
            <div>{cart.length} varer - {total},-</div>
            <Button onClick={() => setView("cart")} className="bg-black text-white rounded-full px-4 py-2">Gå til kassen</Button>
          </div>
        )}
      </div>
    );
  }

  if (view === "product" && selectedItem) {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white p-6">
        <div className="flex items-center mb-4">
          <button onClick={() => setView("categories")} className="text-[#F4A766] flex items-center">
            <ChevronLeft className="w-5 h-5" /> Tilbage
          </button>
        </div>
        <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 object-cover rounded-xl mb-4" />
        <h2 className="text-2xl font-bold mb-1">{selectedItem.name}</h2>
        <p className="text-gray-400 mb-2">{selectedItem.description}</p>
        <p className="text-[#F4A766] font-semibold text-lg mb-4">{selectedItem.price},-</p>

        <div className="flex items-center mb-4">
          <span className="mr-2">Antal:</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="bg-white text-black rounded-full px-3 py-1"
            >-</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="bg-white text-black rounded-full px-3 py-1"
            >+</button>
          </div>
        </div>

        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Noter (allergener, ønsker)"
          className="w-full mb-4 px-4 py-2 rounded-xl text-black"
        />

        <Button
          className="w-full bg-[#F4A766] text-black py-3 rounded-xl"
          onClick={handleAddToCart}
        >Læg i kurv</Button>

        {justAdded && (
          <div className="mt-4 text-green-500 text-center font-medium animate-bounce">✅ Tilføjet til kurv</div>
        )}
      </div>
    );
  }

  if (view === "cart") {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Din bestilling</h2>
        {cart.map((item, idx) => (
          <div key={idx} className="mb-4 bg-white text-black rounded-xl p-4">
            <div className="font-semibold">{item.name} x{item.quantity}</div>
            {item.note && <div className="text-sm text-gray-600">{item.note}</div>}
            <div className="mt-1">{item.price * item.quantity},-</div>
          </div>
        ))}
        <div className="font-bold mt-4 mb-6">Total: {total},-</div>
        <Button className="w-full bg-[#F4A766] text-black py-3 rounded-xl" onClick={handlePlaceOrder}>Gennemfør betaling</Button>
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1D1E29] text-white text-center p-6">
        <h2 className="text-3xl font-bold mb-4">Tak for din bestilling!</h2>
        <p className="text-lg text-gray-300">Dit nummer er</p>
        <p className="text-6xl font-extrabold text-[#F4A766] mt-2 mb-6">#{orderNumber}</p>
        <button
          onClick={() => {
            setOrderNumber(null);
            setView("landing");
          }}
          className="mt-4 bg-white text-black px-6 py-2 rounded-full"
        >← Tilbage til start</button>
      </div>
    );
  }

  return null;
}
