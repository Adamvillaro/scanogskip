import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f3ec] text-gray-900 min-h-screen">
      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-serif">
            Fremtidens Bestillinger
          </h1>
          <p className="text-lg leading-relaxed">
            Vi ønsker at revolutionere måden vi bestiller mad og drikke på, ved at
            gøre hele processen hurtigere, mere intuitiv og helt uden unødige køer. 
            Med Scan og Skip kan dine kunder scanne og bestille med det samme – og springe
            ventetiden over.
          </p>
        </div>
        <div>
          <Image src="/ScanogSkipLogo2.png" alt="ScanogSkip Logo" width={600} height={400} className="rounded-xl" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#eae7dc] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/ScanogSkipLogo.png" alt="Team" width={500} height={400} className="rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Om os</h2>
            <p className="text-lg leading-relaxed">
              Vi er Adam Villaro Krüger og Hannibal Krieger – to iværksættere med en fælles vision
              om at gøre hverdagen lettere for både restauranter og deres gæster.
              Med over 10 års samlet erfaring inden for restauration, kundeservice og salg,
              forstår vi branchens behov og udfordringer. Vores mål er at digitalisere og optimere
              bestillingsoplevelsen.
            </p>
          </div>
        </div>
      </section>

      {/* We're Hiring Section */}
      <section className="bg-green-500 text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">WE’RE HIRING</h3>
          <p className="text-lg mb-6">
            Vi bygger fremtidens restaurationsoplevelse – og leder efter passionerede folk til at være med.
            Har du lyst til at være med på rejsen? Så ræk ud til os.
          </p>
          <a
            href="mailto:adam@scanogskip.dk"
            className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Ansøg nu
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#f5f3ec] text-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-lg mb-2">Adam Villaro Krüger</h4>
            <p>📞 53 80 40 05</p>
            <p>✉️ <a href="mailto:Adam@scanogskip.dk" className="underline">Adam@scanogskip.dk</a></p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Hannibal Krieger</h4>
            <p>📞 42 65 11 71</p>
            <p>✉️ <a href="mailto:Hannibal@scanogskip.dk" className="underline">Hannibal@scanogskip.dk</a></p>
          </div>
        </div>
        <div className="text-center text-sm mt-12">© {new Date().getFullYear()} Scan og Skip. Alle rettigheder forbeholdes.</div>
      </footer>
    </div>
  );
}
