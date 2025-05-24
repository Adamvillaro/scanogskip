// pages/index.js
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-gray-900 font-sans">
      <section className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Scan og Skip</h1>
        <p className="text-lg leading-relaxed">
          Vi er Adam Villaro Krüger og Hannibal Krieger. Vores mission er at gøre bestillinger og køer nemmere, hurtigere og mere brugervenlige – både for kunder og virksomheder.
        </p>
      </section>

      {/* Hiring Section */}
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
              <strong>MAIL:</strong> <a href="mailto:adam@scanogskip.dk" className="underline">adam@scanogskip.dk</a><br />
              <strong>MOBILE:</strong> 53 80 40 05
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Hannibal Krieger</h3>
            <p className="mt-1">
              <strong>MAIL:</strong> <a href="mailto:hannibal@scanogskip.dk" className="underline">hannibal@scanogskip.dk</a><br />
              <strong>MOBILE:</strong> 42 65 11 71
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-12">© {new Date().getFullYear()} Scan og Skip. Alle rettigheder forbeholdes.</p>
      </footer>
    </main>
  );
}

