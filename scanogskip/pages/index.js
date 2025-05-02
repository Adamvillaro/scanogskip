import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center px-4 py-12 text-yellow-900">
      <Head>
        <title>Scan & Skip</title>
        <meta name="description" content="Scan & Skip - Bestilling uden kø til caféer, barer og restauranter" />
      </Head>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Scan & Skip</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Gør bestilling nem og køfri i din forretning. Scan & Skip giver dine kunder mulighed for at bestille direkte fra bordet via QR-kode – helt uden at hente en app.
        </p>
      </header>

      <section className="w-full max-w-4xl grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">📱 QR-bestilling</h2>
          <p>Giv dine kunder adgang til en digital menu ved at scanne en QR-kode – ingen kø, ingen app, bare bestil og betal.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">🏪 Butiksportal</h2>
          <p>Modtag ordrer i realtid gennem en app eller webportal, og hold styr på aktivitet, statistik og ordrer.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">💳 Betaling direkte</h2>
          <p>Kunder betaler online – pengene går direkte til din konto. Ingen ekstra gebyrer. Fuld gennemsigtighed.</p>
        </div>
      </section>

      <section className="w-full max-w-4xl text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4">Vil du være med?</h3>
        <p className="mb-6">Scan & Skip er klar til samarbejde med barer, caféer, vandpibecaféer, restauranter og fastfoodsteder.</p>
        <a href="mailto:kontakt@scanogskip.dk" className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-700 transition">
          Kontakt os
        </a>
      </section>

      <footer className="text-sm text-yellow-700">
        &copy; {new Date().getFullYear()} Scan & Skip ApS — Alle rettigheder forbeholdes.
      </footer>
    </div>
  );
}
