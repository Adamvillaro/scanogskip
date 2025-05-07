export default function TestMenu() {
    return (
      <div className="min-h-screen bg-yellow-50 flex flex-col items-center px-4 py-8 text-yellow-900 text-center">
        <h1 className="text-4xl font-bold mb-6">Velkommen til Testmenu</h1>
  
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2">🍔 Burger Menu</h2>
            <p className="text-base mb-2">Saftig burger med pommes frites</p>
            <p className="text-yellow-700 font-bold text-lg mb-6">Pris: 89 kr</p>
            <button
              className="w-full bg-yellow-600 text-white text-lg font-medium px-6 py-3 rounded-2xl hover:bg-yellow-700 transition"
              onClick={() => alert("Bestilling registreret!")}
            >
              Bestil nu
            </button>
          </div>
        </div>
      </div>
    );
  }
  
