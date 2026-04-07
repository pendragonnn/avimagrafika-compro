import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQ from '../../sections/landing/FAQ';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Tentang Kami | Profil Perusahaan Avima Grafika",
  description: "Sejarah dan visi misi Avima Grafika, mitra percetakan andalan ratusan perusahaan untuk produksi media cetak massal di Indonesia secara profesional.",
  keywords: "profil avima grafika, pengalaman percetakan, mitra cetak perusahaan, vendor percetakan b2b, percetakan kapasitas besar, pabrik cetak koran",
  openGraph: {
    title: 'Profil Perusahaan Avima Grafika',
    description: 'Bermitra dengan percetakan berkapasitas masif bersetandar industri terbaik.',
    url: 'https://avimagrafika.com/about',
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 lg:py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4">SEJARAH PERUSAHAAN</span>
            <h1 className="text-3xl md:text-4xl lg:text-[46px] font-sans font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight uppercase">
              Mimpi Kami Hadirkan Transformasi Cetak Global
            </h1>

            <div className="text-gray-500 leading-relaxed text-base md:text-lg space-y-6 font-light">
              <p>
                <strong className="text-gray-900 font-medium">Avima Grafika</strong> didirikan dengan semangat untuk menghadirkan solusi percetakan terpadu bagi semua skala bisnis. Sejak awal perjalanan kami dalam industri Web Rotary Offset dan Sheetfed Printing, misi utama kami adalah memastikan setiap penerbit, perusahaan, dan institusi mendapatkan hasil cetak yang tidak hanya cepat, tetapi bernilai tinggi.
              </p>
              <p>
                Bersatu dalam kepercayaan bahwa karya cetak yang berkualitas mampu merepresentasikan wajah perusahaan secara profesional, kami memulai langkah ini dengan menerapkan standar terbaik. Dengan dedikasi tanpa batas, kami mengumpulkan tim ahli percetakan berpengalaman dan mengadopsi teknologi mutakhir guna merilis layanan inovatif yang senantiasa dipercaya menghubungkan pesan ribuan klien kepada dunia melalui setiap lembaran kertas yang sempurna.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            <div className="relative w-full aspect-4/3 rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
              {/* Unsplash image linking back to a printing or team related background */}
              <Image
                src="https://images.unsplash.com/photo-1693031630157-7ecc8d06de63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avima Grafika Professional Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-2">
              {/* Stat 1 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
                <h3 className="text-4xl md:text-[40px] font-sans font-bold text-accent mb-1 tracking-tight">15+</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium tracking-wide uppercase">Tahun Berdiri</p>
              </div>
              {/* Stat 2 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
                <h3 className="text-4xl md:text-[40px] font-sans font-bold text-primary mb-1 tracking-tight">23K</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium tracking-wide uppercase">Proses Selesai</p>
              </div>
              {/* Stat 3 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
                <h3 className="text-4xl md:text-[40px] font-sans font-bold text-gray-900 mb-1 tracking-tight">830K</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium tracking-wide uppercase">Ulasan Positif</p>
              </div>
              {/* Stat 4 */}
              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
                <h3 className="text-4xl md:text-[40px] font-sans font-bold text-gray-900 mb-1 tracking-tight">100K</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium tracking-wide uppercase">Klien Percaya</p>
              </div>
            </div>
          </div>

        </div>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
