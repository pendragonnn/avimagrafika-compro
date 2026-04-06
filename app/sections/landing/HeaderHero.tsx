import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeaderHero() {
  return (
    <div className="flex flex-col md:flex-row w-full ">
      {/* Left side */}
      <div className="md:w-[60%] bg-primary text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Hero Text */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto md:mx-0 w-full relative z-10">
          <h1 className="text-4xl font-sans md:text-5xl lg:text-6xl font-sans font-bold uppercase tracking-tight mb-6 leading-[1.1] mt-8 md:mt-0">SOLUSI PERCETAKAN CEPAT DAN MUDAH</h1>
          <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Kami menyediakan segala jenis cetak dengan kualitas terbaik serta proses yang cepat dan pemesanan yang mudah dapat membantu solusi cetak anda.
          </p>
          <div>
            <a
              href="https://wa.me/6287771828227"
              className="inline-flex items-center gap-3 bg-white text-[#0f4a4a] px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-lg w-max"
            >
              <MessageCircle size={22} className="text-[#0f4a4a]" strokeWidth={2.5} />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[45%] lg:w-[40%] bg-white px-0 pb-12 md:px-0 md:pr-6 lg:pr-10 md:py-12 flex flex-col relative justify-center items-end z-20 overflow-hidden md:overflow-visible">
        {/* Bottom Right Dot Pattern */}
        <div className="absolute bottom-4 right-4 w-48 h-48 opacity-40 pointer-events-none z-10"
          style={{ backgroundImage: 'radial-gradient(#a3a3a3 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}>
        </div>

        {/* Hero Image */}
        <div className="relative z-30 h-full w-full md:w-[120%] aspect-[4/3] md:aspect-[16/10] shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden ml-0 md:-ml-32 lg:-ml-48 bg-gray-100">
          <Image
            src="/hero.png"
            alt="Mesin Cetak Offset"
            fill
            loading='eager'
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
