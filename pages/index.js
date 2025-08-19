import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f7f5f0] text-gray-900 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-[#f7f5f0] py-4 px-6 fixed top-0 left-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => document.getElementById('contact-slide').classList.remove('hidden')}
            className="text-lg underline"
          >
            Kontakt
          </button>

          <a href="#top" className="inline-flex">
            <Image src="/ScanogSkipLogo.png" alt="Scan & Skip logo" width={45} height={15} />
          </a>

          <a href="#klima" className="text-lg underline">
            Klima
          </a>
        </div>
      </nav>

      <div id="top" className="pt-24">
        {/* Vision Section */}
        <section
          id="vision"
          className="bg-[#f7f5f0] max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6 items-center scroll-mt-24"
        >
          <div>
            <h1 className="text-4xl md:text-5xl mb-4 leading-tight font-serif">
              Fremtidens Bestillinger
            </h1>
            <p className="text-lg leading-relaxed">
              Vi gør det nemt for gæster at bestille og betale direkte fra telefonen – uden kø og ventetid.
              Scan, bestil, betal – og spring ventetiden over. Butikken modtager ordren live og markerer den som færdig på iPad.
            </p>
            <p className="mt-4 text-base">
              <span>Scan & Skip</span> er bygget til restauranter, barer og street food – hurtigt at
              implementere, intuitivt at bruge.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section id="om-os" className="bg-[#f7f5f0] py-24 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/ScanogSkipLogo.png"
                alt="Scan & Skip"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 font-serif">Om os</h2>
              <p className="text-base leading-relaxed">
                Vi er <span>Adam Villaro Krüger</span>,{" "}
                <span>Hannibal Krieger</span> og{" "}
                <span>Khaled Bagge</span> – tre partnere med en fælles vision om at
                gøre service mere smidig for både gæster og personale. Samlet har vi{" "}
                <span>over 20 års erfaring</span> på tværs af restauration, drift,
                kundeservice og salg. Vi kender hverdagens tempo – og bygger værktøjer, der følger med.
              </p>
            </div>
          </div>
        </section>

        {/* Klima Section */}
        <section id="klima" className="bg-white py-24 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl mb-4 font-serif">Klima</h3>
              <p className="text-lg leading-relaxed">
                Vi ønsker at bidrage konkret – ikke kun i ord, men i handling.
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed">
                Vær klimavenlig mens du bestiller og betaler for din mad. Hver gang 1.000 ordrer går igennem Scan &amp; Skip, planter vi ét træ gennem vores partner. Ved 100.000 ordrer finansierer vi en brønd. Din ordre gør en forskel – direkte og målbar.
              </p>
              <a
                href="https://onetreeplanted.org/products/one-dollar"
                className="inline-block mt-4 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Læs mere om træplantning hos One Tree Planted
              </a>
            </div>
          </div>
        </section>

        {/* We're Hiring Section */}
        <section className="bg-[#c9a227] text-white text-center py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl mb-4">WE’RE HIRING</h3>
            <p className="text-lg mb-6">
              Vi bygger fremtidens bestillingsoplevelser – og leder efter passionerede folk til at være med.
              Har du lyst til at være med på rejsen? Så ræk ud til os.
            </p>
            <a
              href="mailto:adam@scanogskip.dk"
              className="inline-block bg-white text-[#c9a227] py-3 px-6 rounded-full hover:bg-gray-100 transition"
            >
              Ansøg nu
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#f7f5f0] text-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg mb-2">Adam Villaro Krüger</h4>
              <p>
                <a href="tel:+4553804005" className="underline">53 80 40 05</a>
              </p>
              <p>
                <a href="mailto:Adam@scanogskip.dk" className="underline">
                  Adam@scanogskip.dk
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-2">Hannibal Krieger</h4>
              <p>
                <a href="tel:+4542651171" className="underline">42 65 11 71</a>
              </p>
              <p>
                <a href="mailto:Hannibal@scanogskip.dk" className="underline">
                  Hannibal@scanogskip.dk
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-2">Khaled Bagge</h4>
              <p>
                <a href="tel:+4552588408" className="underline">52 58 84 08</a>
              </p>
              <p>
                <a href="mailto:Khaled@scanogskip.dk" className="underline">
                  Khaled@scanogskip.dk
                </a>
              </p>
            </div>
          </div>
          <div className="text-center text-sm mt-12">
            © {new Date().getFullYear()} Scan og Skip. Alle rettigheder forbeholdes.
          </div>
        </footer>

        <div
          id="contact-slide"
          className="hidden fixed inset-0 z-50 bg-black/50 flex justify-end"
          onClick={(e) => { if (e.target.id === 'contact-slide') e.currentTarget.classList.add('hidden'); }}
        >
          <div className="bg-white w-80 h-full p-6 shadow-lg">
            <h3 className="text-xl mb-4">Kontakt os</h3>
            <div className="space-y-4">
              <div>
                <p>Adam Villaro Krüger</p>
                <p><a href="tel:+4553804005" className="underline">53 80 40 05</a></p>
                <p><a href="mailto:Adam@scanogskip.dk" className="underline">Adam@scanogskip.dk</a></p>
              </div>
              <div>
                <p>Hannibal Krieger</p>
                <p><a href="tel:+4542651171" className="underline">42 65 11 71</a></p>
                <p><a href="mailto:Hannibal@scanogskip.dk" className="underline">Hannibal@scanogskip.dk</a></p>
              </div>
              <div>
                <p>Khaled Bagge</p>
                <p><a href="tel:+4552588408" className="underline">52 58 84 08</a></p>
                <p><a href="mailto:Khaled@scanogskip.dk" className="underline">Khaled@scanogskip.dk</a></p>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('contact-slide').classList.add('hidden')}
              className="mt-6 inline-block bg-[#c9a227] text-white py-2 px-4 rounded hover:bg-[#b8921f]"
            >
              Luk
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}