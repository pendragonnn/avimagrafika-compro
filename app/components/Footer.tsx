import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 mt-20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 mb-16 relative z-10 flex-wrap lg:flex-nowrap">
        
        {/* Left Column: Logo & Info */}
        <div className="flex-1 min-w-[280px] max-w-md">

          <h3 className="text-xl  font-bold text-white mb-4 tracking-tight">Avima Grafika</h3>
          <p className="text-gray-300 text-sm mb-8 leading-relaxed font-light">
            Solusi percetakan cepat dan andal untuk segala kebutuhan cetak koran, majalah, hingga kemasan komersial Anda. Kualitas terbaik, proses cepat, dan pemesanan yang mudah.
          </p>
          
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <p className="leading-relaxed text-sm">
                Jl. Kesehatan No.17. Kel. Gedong Ps. Rebo<br />
                Jakarta Timur 13760
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-accent shrink-0" />
              <p className="text-sm">marketing@avimagrafika.com</p>
            </div>
          </div>
        </div>
        
        {/* Middle Column: Links */}
        <div className="lg:w-48">
          <h4 className=" font-bold text-xl mb-8 text-white border-b-2 border-accent pb-2 inline-block tracking-tight">Jelajahi Kami</h4>
          <ul className="space-y-5 text-gray-300 font-medium text-sm">
            <li><Link href="/" className="hover:text-white hover:translate-x-2 inline-flex items-center transition-all before:content-[''] before:w-1 before:h-1 before:bg-accent before:rounded-full before:mr-3 before:opacity-0 hover:before:opacity-100">Beranda</Link></li>
            <li><Link href="/product" className="hover:text-white hover:translate-x-2 inline-flex items-center transition-all before:content-[''] before:w-1 before:h-1 before:bg-accent before:rounded-full before:mr-3 before:opacity-0 hover:before:opacity-100">Semua Produk</Link></li>
            <li><Link href="/about" className="hover:text-white hover:translate-x-2 inline-flex items-center transition-all before:content-[''] before:w-1 before:h-1 before:bg-accent before:rounded-full before:mr-3 before:opacity-0 hover:before:opacity-100">Tentang Kami</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:translate-x-2 inline-flex items-center transition-all before:content-[''] before:w-1 before:h-1 before:bg-accent before:rounded-full before:mr-3 before:opacity-0 hover:before:opacity-100">Kontak & Pemesanan</Link></li>
          </ul>
        </div>
        
        {/* Right Column: Creative Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center pt-8 lg:pt-0">
          <div className="relative w-full max-w-sm aspect-video lg:aspect-square overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <Image 
              src="https://images.unsplash.com/photo-1693031630369-bd429a57f115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Avima Grafika Print" 
              fill 
              className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
              unoptimized
            />
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
        <p>Copyright © {new Date().getFullYear()} Avima Grafika. All rights reserved.</p>
        <p>Solusi Cetak Berkualitas.</p>
      </div>
    </footer>
  );
}
