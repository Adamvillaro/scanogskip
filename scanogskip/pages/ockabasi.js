// pages/ockabasi.js
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Ockabasi() {
  const [cart, setCart] = useState([]);

  const menu = [
    { name: "Pep", description: "Pepperoni, dressing", price: 83 },
    { name: "Margherita", description: "Tomat, ost", price: 73 },
    { name: "Hawaii", description: "Skinke, ananas", price: 85 },
    { name: "Vegetar", description: "Ananas, champignon, løg, artiskok, paprika", price: 88 },
    { name: "Ocakbasi", description: "Hakket oksekød, jalapenos, løg, champignon, chili", price: 92 },
    { name: "Salatpizza", description: "Kødstrimler/kylling/skinke, salat, dressing", price: 92 },
    { name: "Kebab Durum", description: "Med salat, tomat, dressing", price: 65 },
    { name: "Spaghetti bolognese", description: "Med kødsauce og brød", price: 65 },
    { name: "Chicken nuggets", description: "9 stk. med remoulade", price: 95 },
    { name: "Big burger menu", description: "Pommes frites, sodavand, dyppelse", price: 99 },
  ];

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-yellow-800 mb-2">Ocakbasi</h1>
        <p className="text-yellow-700 mb-8 text-lg">Bestil din mad direkte her</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-xl hover:scale-[1.02] transition">
              <CardContent className="p-6 flex flex-col items-start space-y-3">
                <h2 className="text-xl font-bold text-yellow-900">{item.name}</h2>
                <p className="text-yellow-700 text-sm">{item.description}</p>
                <p className="text-yellow-800 font-semibold">{item.price},00 kr</p>
                <Button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Tilføj til kurv
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 border-t pt-6">
          <h3 className="text-2xl font-bold text-yellow-900 mb-2">🛒 Din kurv</h3>
          {cart.length === 0 ? (
            <p className="text-yellow-700">Din kurv er tom.</p>
          ) : (
            <div className="space-y-2">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between text-yellow-800">
                  <span>{item.name}</span>
                  <span>{item.price},00 kr</span>
                </div>
              ))}
              <p className="mt-2 font-bold text-lg text-yellow-900">Total: {total},00 kr</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white mt-2">
                Gå til betaling
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
