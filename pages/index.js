import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900 font-sans">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <Image src="/ScanogSkipLogo.png" alt="Scan og Skip Logo" width={160} height={50} />
      </header>

      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Vi fjerner køen – én bestilling ad gangen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Scan og Skip er skabt af Hannibal Krieger og Adam Villaro med en vision om at gøre bestilling og takeaway smartere, hurtigere og mere menneskelig.
          <br />
          Vi tror på, at teknologi skal bruges til at forbedre hverdagen – ikke gøre den mere kompleks.
          <br /><br />
          Vores mål er at minimere køer, maksimere effektivitet og give både forbrugere og restauranter en intuitiv oplevelse i verdensklasse.
        </motion.p>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            We're hiring
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 mb-6"
          >
            Vi leder efter designere, udviklere og drømmere, der vil være med til at revolutionere, hvordan vi bestiller mad og betjener kunder. Vil du være med?
          </motion.p>

          <a
            href="mailto:kontakt@scanogskip.dk"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg transition shadow"
          >
            Kontakt os
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; {new Date().getFullYear()} Scan og Skip. Alle rettigheder forbeholdes.
      </footer>
    </main>
  );
}
