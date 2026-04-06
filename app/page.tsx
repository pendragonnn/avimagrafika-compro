import { Metadata } from 'next';
import Navbar from './components/Navbar';
import HeaderHero from './sections/landing/HeaderHero';
import WhyChooseUs from './sections/landing/WhyChooseUs';
import Clients from './sections/landing/Clients';
import Testimonials from './sections/landing/Testimonials';
import Products from './sections/landing/OurProducts';
import HowToOrder from './sections/landing/HowToOrder';
import FAQ from './sections/landing/FAQ';
import FinalCTA from './sections/landing/FinalCTA';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Avima Grafika | Jasa Percetakan Offset Jakarta Timur",
  description: "Avima Grafika melayani jasa cetak offset, pembuatan koran, tabloid, buku, dan materi promosi dengan harga murah, berkualitas, dan cepat selesai di Jakarta.",
  keywords: "jasa cetak murah, cetak offset jakarta, percetakan koran, percetakan buku di jakarta timur, jasa banner murah, desain kemasan, pabrik percetakan",
  openGraph: {
    title: 'Avima Grafika - Jasa Percetakan Tercepat di Jakarta',
    description: 'Pusat layanan percetakan Offset, Koran, Majalah, dan Kemasan murah berkualitas.',
    url: 'https://www.avimagrafika.online',
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <HeaderHero />
        <Clients />
        <Products />
        <WhyChooseUs />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
