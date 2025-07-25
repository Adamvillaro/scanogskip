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
  const [justAdded, setJustAdded] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [diningOption, setDiningOption] = useState(null);

  const categories = [...]; // keep your previous categories here

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
      <div className="min-h-screen bg-white text-black flex flex-col">
        <div className="sticky top-0 z-10 bg-white p-4 shadow-md flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat.name} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full border ${selectedCategory?.name === cat.name ? 'bg-[#F4A766] text-black' : 'text-gray-600'}`}>{cat.name}</button>
          ))}
        </div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(selectedCategory?.items || []).map((item, i) => (
            <div key={i} onClick={() => { setSelectedItem(item); setQuantity(1); setView("product"); }} className="rounded-2xl border overflow-hidden shadow-sm cursor-pointer transition hover:shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />
              <div className="p-4">
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
                <div className="mt-1 text-sm text-gray-800">{item.price},00 kr</div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 right-0 w-full md:w-96 bg-white border-t md:border-l shadow-xl z-20 p-4">
            <h3 className="font-semibold mb-2">Din kurv</h3>
            <ul className="space-y-2 max-h-52 overflow-y-auto">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name}</span>
                  <span>{item.price * item.quantity} kr</span>
                  <button onClick={() => removeFromCart(i)}><Trash2 className="w-4 h-4 text-red-500" /></button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 font-semibold">
              <span>Total</span><span>{total},00 kr</span>
            </div>
            <Button className="w-full mt-4 bg-[#1D1E29] text-white py-3 rounded-xl" onClick={handlePlaceOrder}>Gå til betaling</Button>
          </div>
        )}
      </div>
    );
  }

  if (view === "product") {
    return (
      <div className="min-h-screen bg-white text-black p-4">
        <button onClick={() => setView("categories")} className="mb-4 text-gray-500 text-sm"><ChevronLeft className="inline w-4 h-4" /> Tilbage</button>
        <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 object-cover rounded-xl mb-4" />
        <h1 className="text-2xl font-bold mb-1">{selectedItem.name}</h1>
        <p className="text-gray-600 mb-2">{selectedItem.description}</p>
        <p className="text-lg font-semibold mb-4">{selectedItem.price},00 kr</p>
        <div className="flex items-center gap-4 mb-4">
          <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
          <span>{quantity}</span>
          <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
        </div>
        <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Kommentar (fx uden løg)" className="w-full p-2 border rounded mb-4" />
        <Button onClick={addToCart} className="w-full bg-[#1D1E29] text-white py-3 rounded-xl">Læg i kurv</Button>
        {justAdded && <div className="text-green-600 mt-4 font-medium text-center">Tilføjet til kurven ✅</div>}
      </div>
    );
  }

  if (view === "confirmation") {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-black mb-4">Tak for din bestilling!</h1>
        <p className="text-lg">Dit ordrenummer er:</p>
        <p className="text-6xl font-extrabold text-black my-4">#{orderNumber}</p>
        <Button className="mt-6 bg-black text-white px-6 py-3 rounded-xl" onClick={() => setView("landing")}>← Til start</Button>
      </div>
    );
  }

  return null;
}
