import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FileQuestion } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Halaman Tidak Ditemukan | Avima Grafika',
  description: 'Maaf, rute yang Anda tuju sepertinya salah atau tidak tersedia.',
};

export default function NotFound() {
  return (
    <div className="flex-1 font-sans selection:bg-primary selection:text-white flex flex-col w-full bg-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center py-20 px-6 text-center relative overflow-hidden">
        {/* Subtle background ornament */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0f4a4a 2px, transparent 2px)', backgroundSize: '48px 48px' }}>
        </div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
               <FileQuestion size={40} className="text-gray-400" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-sans font-bold text-gray-900 mb-4 tracking-tighter leading-none">
              404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-800 mb-6 uppercase tracking-wide">
              Halaman Tidak Ditemukan
            </h2>
            
            <p className="text-gray-500 mb-12 max-w-lg mx-auto text-base md:text-lg leading-relaxed font-light">
              Maaf, rute yang Anda tuju sepertinya salah, telah dihapus, dipindahkan, atau sementara tidak tersedia.
            </p>
            
            <Link 
              href="/" 
              className="bg-accent text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-[14px] shadow-xl shadow-accent/20 hover:bg-accent-dark hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              KEMBALI KE BERANDA
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
