// pages/ockabasi.js
import { motion } from "framer-motion";

export default function OckabasiMenu() {
  return (
    <main className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-6 py-10 text-yellow-900">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Velkommen til Ockabasi
      </motion.h1>

      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">🔥 Kebab Menu</h2>
        <p className="mb-4 text-gray-700">Frisklavet kebab med ris og salat</p>
        <p className="text-yellow-700 font-bold text-lg mb-6">Pris: 89 kr</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-600 text-white text-lg px-6 py-3 rounded-xl hover:bg-yellow-700 transition w-full"
        >
          Bestil nu
        </motion.button>
      </motion.div>
    </main>
  );
}
