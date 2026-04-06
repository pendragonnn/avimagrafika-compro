import { Award, Zap, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      
      {/* Header Area */}
      <div className="mb-14 md:mb-20 text-center">
        <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-5">NILAI LEBIH KAMI</h2>
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">
          MENGAPA <span className="text-accent">AVIMA GRAFIKA</span> ADALAH PILIHAN TEPAT?
        </h3>
      </div>

      {/* Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-fr">
        
        {/* Box 1: Top Left */}
        <div className="bg-white rounded-[32px] p-10 flex flex-col h-full border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
          <div className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center mb-8 bg-gray-50 shrink-0">
            <Award className="text-accent" size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-bold uppercase tracking-wide text-gray-900 mb-4">Kualitas Cetak Terbaik</h3>
          <p className="text-gray-500 leading-relaxed font-light text-base lg:text-lg">
            Kami menjamin hasil cetak yang tajam, konsisten, dan penggunaan material pilihan terbaik untuk setiap pesanan kemasan maupun media cetak Anda.
          </p>
        </div>

        {/* Box 2: Top Middle */}
        <div className="bg-white rounded-[32px] p-10 flex flex-col h-full border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
          <div className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center mb-8 bg-gray-50 shrink-0">
            <Zap className="text-accent" size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-bold uppercase tracking-wide text-gray-900 mb-4">Proses Cepat & Tepat</h3>
          <p className="text-gray-500 leading-relaxed font-light text-base lg:text-lg">
            Didukung mesin berteknologi tinggi dan tenaga profesional, pesanan skala besar Anda terjamin selesai tepat waktu tanpa mengurangi kualitas setetes pun.
          </p>
        </div>

        {/* Box 3: Bottom Left (Spans 2 columns on desktop) */}
        <div className="bg-white rounded-[32px] p-10 md:col-span-2 flex flex-col h-full border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400">
          <div className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center mb-8 bg-gray-50 shrink-0">
            <ShieldCheck className="text-accent" size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-wide text-gray-900 mb-4">Pengalaman Puluhan Tahun</h3>
          <p className="text-gray-500 leading-relaxed font-light text-base lg:text-lg lg:pr-12">
            Sejak awal berdiri, Avima Grafika telah menjadi mitra andalan bagi ratusan instansi dan perusahaan dalam memproduksi koran, majalah, kemasan, hingga materi promosi masif dengan standar industri tertinggi yang terbukti dari masa ke masa.
          </p>
        </div>

        {/* Box 4: Right Column (Spans 2 rows on desktop) */}
        <div className="bg-primary text-white rounded-[32px] p-10 lg:p-12 lg:col-start-3 lg:row-start-1 lg:row-span-2 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          {/* Subtle decoration inside the dark box */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700" 
               style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
          </div>

          <div className="relative z-10 flex flex-col flex-1">
            <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center mb-8 shrink-0 bg-white/10">
              <Layers className="text-white" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-sans font-bold uppercase tracking-wide text-white mb-6 leading-tight">Layanan Fleksibel</h3>
            <p className="text-gray-300 leading-relaxed font-light text-base lg:text-[17px] mb-12">
              Kami mengerti bahwa setiap proyek memiliki kebutuhan unik. Oleh karena itu, kami memberikan fleksibilitas penuh mulai dari konsultasi ukuran, pemilihan material, hingga skema jadwal pengiriman yang selalu bisa menyesuaikan tenggat waktu Anda. 
              <br /><br />
              Mulai dari pesanan rutin operasional harian hingga partai besar di penghujung tahun, kami siap melayani Anda kapan pun dibutuhkan.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <Link href="/contact" className="inline-flex w-full sm:w-auto items-center justify-between bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent-dark transition-colors shadow-lg group-hover:shadow-[0_0_20px_rgba(228,32,40,0.5)]">
              <span>Mulai Konsultasi</span>
              <ArrowRight size={22} className="ml-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  );
}
