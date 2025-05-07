export default function OckabasiMenu() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 text-yellow-900 flex flex-col items-center px-4 py-8">
        <header className="w-full max-w-5xl flex items-center justify-between py-6">
          <img src="/ScanogSkipLogo2.png" alt="Ockabasi Logo" className="h-12" />
          <h1 className="text-4xl font-extrabold tracking-tight">Ockabasi Menu</h1>
        </header>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
          <MenuItem
            title="🍔 Kebab Burger"
            description="Saftig kebab i blød bolle med salat og dressing"
            price="89 kr"
          />
          <MenuItem
            title="🥙 Durum Rulle"
            description="Frisklavet durum med valgfrit fyld og hjemmelavet sauce"
            price="79 kr"
          />
          <MenuItem
            title="🍟 Pommes Frites"
            description="Sprøde og perfekt saltede pommes"
            price="35 kr"
          />
        </div>
  
        <footer className="mt-16 text-sm text-yellow-800">
          © 2025 Ockabasi x ScanogSkip – Alle rettigheder forbeholdes
        </footer>
      </div>
    );
  }
  
  function MenuItem({ title, description, price }) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-base mb-4">{description}</p>
        <p className="text-yellow-700 font-bold text-lg">{price}</p>
        <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-2xl transition">
          Bestil nu
        </button>
      </div>
    );
  }
  