import { Button } from "../components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function OcakbasiMenu() {
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
        { name: "Pep", description: "Pepperoni, dressing", price: 83, image: "/ocakbasi/ocakbasi pizzær/pep.jpeg.avif" },
        { name: "Margherita", description: "Tomat, ost", price: 73, image: "/ocakbasi/ocakbasi pizzær/margherita.jpeg.avif" },
        { name: "Hawaii", description: "Skinke, ananas", price: 85, image: "/ocakbasi/ocakbasi pizzær/hawaii.jpeg.avif" },
        { name: "Napoli", description: "Skinke, rejer", price: 87, image: "/ocakbasi/ocakbasi pizzær/napoli.jpeg.avif" },
        { name: "Quatro Stagioni", description: "Skinke, rejer, champignon", price: 90, image: "/ocakbasi/ocakbasi pizzær/quatro-stagioni.jpeg.avif" },
        { name: "Capriciosa", description: "Skinke, champignon", price: 85, image: "/ocakbasi/ocakbasi pizzær/capriciosa.jpeg.avif" },
        { name: "Vegetar", description: "Ananas, champignon, løg, artiskok, paprika", price: 88, image: "/ocakbasi/ocakbasi pizzær/vegetar.jpeg.avif" },
        { name: "Ocakbasi", description: "Hakket oksekød, jalapenos, løg, champignon, chili", price: 92, image: "/ocakbasi/ocakbasi pizzær/ocakbasi.jpeg.avif" }
      ]
    },
    {
      name: "Durum",
      items: [
        { name: "Kebab Durum", description: "Med salat, tomat, dressing", price: 65, image: "/ocakbasi/durum/kebab-durum.jpeg.avif" },
        { name: "Kylling Durum", description: "Med salat, tomat, dressing", price: 69, image: "/ocakbasi/durum/kylling-durum.jpeg.avif" },
        { name: "Mix Durum", description: "Kebab, kylling, jalapenos, chili", price: 75, image: "/ocakbasi/durum/mix-durum.jpeg.avif" }
      ]
    },
    {
      name: "Drikkevarer",
      items: [
        { name: "Cola", description: "0.5L flaske", price: 25, image: "/ocakbasi/Drikkevarer/cola.jpeg.avif" },
        { name: "Fanta", description: "0.5L flaske", price: 25, image: "/ocakbasi/Drikkevarer/fanta.jpeg.avif" }
      ]
    },
    {
      name: "Dypelse",
      items: [
        { name: "Hvidløgssauce", description: "Klassisk dip", price: 10, image: "/ocakbasi/Dypelse/hvidløgssauce.jpeg.avif" },
        { name: "Chilisauce", description: "Stærk og sød", price: 10, image: "/ocakbasi/Dypelse/chilisauce.jpeg.avif" }
      ]
    },
    {
      name: "Pitabrød",
      items: [
        { name: "Pita kebab", description: "Kebab i pitabrød", price: 55, image: "/ocakbasi/Pitabrød/pita-kebab.jpeg.avif" },
        { name: "Pita kylling", description: "Kylling i pitabrød", price: 59, image: "/ocakbasi/Pitabrød/pita-kylling.jpeg.avif" }
      ]
    },
    {
      name: "Salater",
      items: [
        { name: "Kyllingesalat", description: "Frisk salat med kylling", price: 65, image: "/ocakbasi/Salater/kyllingesalat.jpeg.avif" },
        { name: "Græsk salat", description: "Fetaost, oliven", price: 65, image: "/ocakbasi/Salater/græsk-salat.jpeg.avif" }
      ]
    }
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
      const res = await fetch("/api/orders/ocakbasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart })
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1D1E29] text-white p-6 text-center">
        <h2 className="text-3xl font-bold text-[#F4A766] mb-4">Tak for din bestilling!</h2>
        <p className="text-lg">Dit nummer er</p>
        <p className="text-6xl font-extrabold mt-2 mb-6">#{orderNumber}</p>
        <button
          onClick={() => setOrderNumber(null)}
          className="mt-4 bg-[#F4A766] hover:bg-[#e69b58] text-black px-6 py-2 rounded-full"
        >
          ← Gå tilbage til start
        </button>
      </div>
    );
  }

  if (view === "landing") {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white flex flex-col items-center justify-center p-6">
        <img src="/ockabasi-logo.png" alt="Ockabasi" className="h-20 mb-8" />
        <h1 className="text-2xl font-semibold mb-4">Hvad har du lyst til?</h1>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button className="bg-[#F4A766] text-black rounded-xl py-4 text-lg" onClick={() => setView("categories")}>
            Spis her
          </Button>
          <Button className="bg-white text-black rounded-xl py-4 text-lg" onClick={() => setView("categories")}> 
            Takeaway
          </Button>
        </div>
      </div>
    );
  }

  if (view === "categories") {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Menu</h1>
        </div>
        <div className="divide-y divide-[#333]">
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
              <ChevronRight className="w-5 h-5 text-[#F4A766]" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (view === "items" && selectedCategory) {
    return (
      <div className="min-h-screen bg-[#1D1E29] text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setView("categories")} className="text-sm flex items-center text-[#F4A766]">
            <ChevronLeft className="w-4 h-4 mr-1" /> Tilbage
          </button>
          <h1 className="text-xl font-bold text-center flex-1 -ml-4">{selectedCategory.name}</h1>
          <span className="w-10"></span>
        </div>

        <div className="grid gap-6">
          {selectedCategory.items.map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left bg-[#2C2D3A] rounded-xl p-4 shadow hover:scale-[1.01] transition-transform"
              onClick={() => {
                setSelectedItem(item);
                setView("product");
                setQuantity(1);
                setNote("");
              }}
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="text-lg font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                <div className="text-sm text-[#F4A766] font-bold">{item.price},00 kr</div>
              </div>
            </button>
              ))}
              </div>
            </div>
          );
        }
      
        if (view === "product" && selectedItem) {
          return (
            <div className="min-h-screen bg-[#1D1E29] text-white p-6">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setView("items")} className="text-sm flex items-center text-[#F4A766]">
                  <ChevronLeft className="w-4 h-4 mr-1" /> {selectedCategory.name}
                </button>
                <h1 className="text-xl font-bold text-center flex-1 -ml-4">{selectedItem.name}</h1>
                <span className="w-10"></span>
              </div>
      
              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
              )}
      
              <div className="text-sm text-gray-400 mb-4">{selectedItem.price},00 kr</div>
      
              <div className="flex justify-between mb-6">
                <div className="flex items-center border border-[#F4A766] rounded-full px-3 py-1 text-sm">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                  <span className="mx-3 font-bold text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
                <input
                  className="flex-1 ml-4 border border-gray-700 bg-[#2C2D3A] rounded-xl px-3 py-2 text-sm text-white"
                  placeholder="Kommentar eller allergener"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
      
              {menuPrompt ? (
                <div className="space-y-4">
                  <div className="bg-[#2C2D3A] p-4 rounded-xl">
                    <p className="font-medium mb-2">Tilføj menu?</p>
                    <p className="text-sm text-gray-400">Stor pommes frites + sodavand for 20 kr ekstra</p>
                  </div>
                  <Button
                    className="w-full bg-[#F4A766] text-black py-3 rounded-xl"
                    onClick={() => handleAddToCart({ ...selectedItem, name: selectedItem.name + " (menu)", price: selectedItem.price + 20 }, quantity, note)}
                  >
                    Læg i kurv
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="bg-[#F4A766] text-black py-3 rounded-xl"
                    onClick={() => handleAddToCart(selectedItem, quantity, note)}
                  >
                    Læg i kurv
                  </Button>
                  <Button
                    className="bg-[#2C2D3A] border border-[#F4A766] text-white py-3 rounded-xl"
                    onClick={() => setMenuPrompt(true)}
                  >
                    Køb som menu
                  </Button>
                </div>
              )}
      
              {justAdded && (
                <div className="mt-4 text-green-400 font-medium text-center">Tilføjet ✅</div>
              )}
            </div>
          );
        }
        if (cart.length > 0 && view === "categories") {
          return (
            <div className="min-h-screen bg-[#1D1E29] text-white p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Menu</h1>
              </div>
              <div className="divide-y divide-[#333]">
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
                    <ChevronRight className="w-5 h-5 text-[#F4A766]" />
                  </button>
                ))}
              </div>
              <div className="fixed bottom-4 left-0 right-0 px-6">
                <Button
                  className="w-full bg-[#F4A766] text-black py-3 rounded-xl flex justify-between items-center"
                  onClick={placeOrder}
                >
                  <span>Betal nu ({cart.length} varer)</span>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          );
        }
        if (view === "cart") {
          const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
          return (
            <div className="min-h-screen bg-[#1D1E29] text-white p-6">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setView("categories")} className="text-sm flex items-center text-[#F4A766]">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Tilbage til menu
                </button>
                <h1 className="text-xl font-bold text-center flex-1 -ml-4">Din bestilling</h1>
                <span className="w-10"></span>
              </div>
      
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-[#2C2D3A] rounded-xl p-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{item.name}</div>
                      {item.note && <div className="text-sm text-gray-400 italic">{item.note}</div>}
                      <div className="text-sm text-gray-400">Antal: {item.quantity}</div>
                    </div>
                    <div className="text-sm font-bold text-[#F4A766]">
                      {item.price * item.quantity},00 kr
                    </div>
                  </div>
                ))}
              </div>
      
              <div className="mt-8 border-t border-gray-600 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{total},00 kr</span>
                </div>
              </div>
      
              <Button
                className="w-full bg-[#F4A766] text-black py-3 rounded-xl mt-6"
                onClick={placeOrder}
              >
                Bekræft og betal
              </Button>
            </div>
          );
        }
      } // end component
      