import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="bg-[#f2f4f8] rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col lg:flex-row w-full relative group shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-100/50">

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
          <h2 className="text-[13px] md:text-sm font-bold text-accent tracking-[0.25em] uppercase mb-4">LANGKAH TERAKHIR</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[46px] font-sans font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Siap untuk mulai proyek Anda? <span className="text-primary block mt-2">Mari konsultasi hari ini.</span>
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            Diskusikan spesifikasi cetak, pemilihan material, dan dapatkan penawaran harga terbaik yang disesuaikan dengan anggaran bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6287771828227"
              className="inline-flex items-center justify-center bg-accent text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-[14px] hover:bg-accent-dark transition-all duration-300 shadow-xl shadow-accent/20 hover:-translate-y-1"
            >
              Hubungi Kami
            </a>
            <Link
              href="/product"
              className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-200 px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-[14px] hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
            >
              Katalog Produk
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full order-first lg:order-last overflow-hidden">
          {/* subtle decorative gradient fade from left */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f2f4f8] to-transparent z-10 hidden lg:block"></div>

          <Image
            src="https://images.unsplash.com/photo-1715154470884-1c2be0b0129f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mesin Cetak Offset Industri"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
