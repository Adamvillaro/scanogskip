// pages/index.js
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-gray-900 font-sans">
      {/* Hero / Vision */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Vores vision</h1>
        <p className="text-lg leading-relaxed">
          Vi tror på en fremtid, hvor bestillinger sker med et enkelt klik – helt uden stress og kø. Vores mål er at forvandle hele købsoplevelsen til noget enkelt, elegant og effektivt. Det handler om at give gæster og kunder mere tid til det, der betyder noget.
        </p>
      </section>

      {/* Om os */}
      <section className="bg-white text-center px-6 py-16 border-y border-gray-300">
        <h2 className="text-3xl font-bold mb-6">Hvem vi er</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Med over 10 års samlet erfaring i restaurationsbranchen, kundeservice og salg, har vi lært hvad der virkelig betyder noget: god service, effektivitet og teknologi der virker. Den erfaring bringer vi nu til bordet med <strong>Scan og Skip</strong>.
        </p>
      </section>

      {/* Hiring */}
      <section className="bg-green-500 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-2 uppercase tracking-wide">We’re Hiring</h2>
        <p className="max-w-xl mx-auto text-lg">
          Vi bygger fremtidens bestillingsløsning og leder efter skarpe hoveder, der vil være med. Er det dig? Lad os snakke!
        </p>
        <a
          href="mailto:adam@scanogskip.dk"
          className="mt-6 inline-block font-semibold underline text-white hover:text-gray-100"
        >
          Søg nu
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6f1ea] text-center border-t border-gray-300 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold">Adam Villaro Krüger</h3>
            <p className="mt-1">
              <strong>MAIL:</strong>{" "}
              <a href="mailto:adam@scanogskip.dk" className="underline">
                adam@scanogskip.dk
              </a>
              <br />
              <strong>MOBILE:</strong> 53 80 40 05
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Hannibal Krieger</h3>
            <p className="mt-1">
              <strong>MAIL:</strong>{" "}
              <a href="mailto:hannibal@scanogskip.dk" className="underline">
                hannibal@scanogskip.dk
              </a>
              <br />
              <strong>MOBILE:</strong> 42 65 11 71
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} Scan og Skip. Alle rettigheder forbeholdes.
        </p>
      </footer>
    </main>
  );
}
