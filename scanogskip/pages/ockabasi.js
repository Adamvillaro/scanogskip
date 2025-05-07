import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const menuData = {
  "Pizzaer": [
    { navn: "Pep", beskrivelse: "Pepperoni, dressing", pris: 83 },
    { navn: "Margherita", beskrivelse: "Tomat, ost", pris: 73 },
    { navn: "Hawaii", beskrivelse: "Skinke, ananas", pris: 85 },
    { navn: "Capriciosa", beskrivelse: "Skinke, champignon", pris: 85 },
  ],
  "Burger": [
    { navn: "Big Burger", beskrivelse: "Saftig oksekødsburger", pris: 49 },
    { navn: "Cheese Burger", beskrivelse: "Med ost", pris: 52 },
    { navn: "Bacon Burger", beskrivelse: "Med sprød bacon", pris: 53 },
  ],
  "Børnemenu": [
    { navn: "Bambino Pizza", beskrivelse: "Skinke", pris: 60 },
    { navn: "Nuggets Menu", beskrivelse: "5 nuggets, remoulade, pommes frites", pris: 60 },
    { navn: "Spaghetti", beskrivelse: "Kødsauce", pris: 60 },
  ]
};

export default function OckabasiMenu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Ockabasi</h1>
        <div className="relative">
          <ShoppingCart className="w-8 h-8" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      {Object.entries(menuData).map(([kategori, retter]) => (
        <div key={kategori} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-1">{kategori}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {retter.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <Card className="rounded-2xl shadow hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{item.navn}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.beskrivelse}</p>
                    <p className="text-lg font-semibold mb-4">{item.pris},00 kr</p>
                    <Button onClick={() => addToCart(item)} className="w-full rounded-xl">
                      Læg i kurv
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
