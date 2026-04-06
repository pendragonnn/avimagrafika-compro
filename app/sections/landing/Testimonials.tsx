import { User, Quote } from 'lucide-react';
import data from '../../../data.json';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4">APA KATA KLIEN KAMI</h2>
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">KISAH SUKSES MEREKA</h3>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6">
          Dengarkan langsung dari perusahaan dan individu yang telah mempercayakan kebutuhan cetak dan produksi kemasan mereka kepada Avima Grafika.
        </p>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {data.testimonials.map((testi, idx) => (
          <div 
            key={testi.id} 
            className={"relative bg-primary p-8 md:p-10 rounded-[32px] flex flex-col h-full overflow-hidden transition-all duration-500 shadow-xl shadow-primary/10 border border-primary-light/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 "}
          >
            {/* Decorative Watermark */}
            <Quote size={84} strokeWidth={1} className="absolute top-4 right-4 text-white/5 pointer-events-none -rotate-6" />
            
            <p className="text-gray-200 text-[15px] font-light leading-relaxed mb-12 flex-1 relative z-10">
              "{testi.quote}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/10 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center shrink-0">
                <User size={20} className="text-white" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-[14px] tracking-wide">{testi.name}</span>
                <span className="text-[12px] text-primary-200 text-white/60 font-medium tracking-wide mt-0.5">{testi.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
