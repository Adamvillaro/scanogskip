export default function Frontpage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-yellow-50 text-yellow-900">
      <h1 className="text-5xl font-bold mb-6">Scan & Skip</h1>
      <p className="text-lg max-w-xl mb-8">
        Gør bestilling nem og kartfri i din forretning. Scan & Skip giver dine kunder mulighed for at bestille direkte fra bordet via QR-kode – helt uden at hente en app.
      </p>
      <div className="grid gap-6 max-w-xl w-full">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">📲 QR-bestilling</h2>
          <p>Giv dine kunder adgang til en digital menu ved at scanne en QR-kode – ingen app, bare bestil og betal.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">📊 Butiksportal</h2>
          <p>Modtag ordrer i realtid gennem en app eller webportal, og hold styr på aktivtet, statistik og ordrer.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">💳 Betaling direkte</h2>
          <p>Kunder betaler online – pengene går direkte til din konto. Ingen ekstra gebyrer. Fuld gennemsigtighed.</p>
        </div>
      </div>
      <p className="mt-12 text-sm text-yellow-800">Scan & Skip ApS – Alle rettigheder forbeholdes</p>
    </div>
  );
}
