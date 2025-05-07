import { motion } from "framer-motion";

export default function OckabasiMenu() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 py-10">
      <motion.img
        src="/ScanogSkipLogo2.png"
        alt="Ockabasi Logo"
        className="h-16 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-yellow-600 mb-10 tracking-tight text-center">
        Velkommen til Ockabasi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        <MenuItem
          title="🍔 Kebab Burger"
          description="Saftig kebab i briochebolle med salat & hjemmelavet dressing"
          price="89 kr"
        />
        <MenuItem
          title="🥙 Durum Rulle"
          description="Frisklavet durum med valgfrit fyld, perfekt rullet og grillet"
          price="79 kr"
        />
        <MenuItem
          title="🍟 Pommes Frites"
          description="Sprøde kartoffelfritter med flagesalt og dip"
          price="35 kr"
        />
      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © 2025 Ockabasi x ScanogSkip
      </footer>
    </div>
  );
}

function MenuItem({ title, description, price }) {
  return (
    <motion.div
      className="bg-gray-100 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <p className="text-yellow-600 text-xl font-semibold mb-6">{price}</p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition">
        Bestil nu
      </button>
    </motion.div>
  );
}
