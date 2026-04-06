import { HeadphonesIcon, FileText, Printer, Package } from 'lucide-react';
import data from '../../../data.json';
import React from 'react';

const iconMap: Record<string, React.ElementType> = {
  HeadphonesIcon,
  FileText,
  Printer,
  Package
};

export default function HowToOrder() {

  return (
    <section className="py-12 md:py-28 px-6 md:px-12 lg:px-16 w-full max-w-[1400px] mx-auto">
      <div className="text-center mb-16 md:mb-24">
         <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4">PANDUAN PEMESANAN</h2>
         <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">
           BAGAIMANA CARA KERJANYA?
         </h3>
         <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6">
           Ikuti langkah-langkah praktis di bawah ini untuk memulai tahapan produksi cetak dari konsultasi hingga barang tiba dengan selamat di tangan Anda.
         </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
         {/* Vertical center connecting line (Desktop only) */}
         <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gray-100"></div>

         <div className="flex flex-col gap-16 md:gap-0">
           {data.howToOrderSteps.map((step, idx) => {
             const isEven = idx % 2 === 0;
             const IconComponent = iconMap[step.iconName];

             return (
               <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between w-full md:min-h-[260px] group">
                 
                 {/* Center Number Circle (Desktop only) */}
                 <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] items-center justify-center text-xs font-black text-gray-900 z-10">
                   0{idx + 1}
                 </div>

                 {/* Left Panel */}
                 <div className={`w-full md:w-5/12 flex ${isEven ? 'justify-center md:justify-end' : 'justify-center md:justify-end text-center md:text-right order-last md:order-first'}`}>
                   {isEven ? (
                     <div className="mb-8 md:mb-0 md:pr-20">
                       {/* Icon */}
                       <div className="bg-primary rounded-md p-5 inline-flex shadow-lg group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                           <IconComponent size={44} className="text-white" strokeWidth={1.5} />
                       </div>
                     </div>
                   ) : (
                     <div className="mt-4 md:mt-0 md:pr-20 flex flex-col items-center md:items-end">
                       <div className="md:hidden inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black mb-4 tracking-widest uppercase">
                         Langkah 0{idx + 1}
                       </div>
                       <h4 className="text-[22px] md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h4>
                       <p className="text-[15px] font-light text-gray-500 leading-relaxed md:max-w-md">{step.desc}</p>
                     </div>
                   )}
                 </div>

                 {/* Right Panel */}
                 <div className={`w-full md:w-5/12 flex ${isEven ? 'justify-center md:justify-start text-center md:text-left' : 'justify-center md:justify-start order-first md:order-last'}`}>
                   {isEven ? (
                     <div className="md:pl-20 flex flex-col items-center md:items-start">
                       <div className="md:hidden inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black mb-4 tracking-widest uppercase">
                         Langkah 0{idx + 1}
                       </div>
                       <h4 className="text-[22px] md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h4>
                       <p className="text-[15px] font-light text-gray-500 leading-relaxed md:max-w-md">{step.desc}</p>
                     </div>
                   ) : (
                     <div className="mb-8 md:mb-0 md:pl-20">
                       {/* Icon */}
                       <div className="bg-primary rounded-md p-5 inline-flex shadow-lg group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                           <IconComponent size={44} className="text-white" strokeWidth={1.5} />
                       </div>
                     </div>
                   )}
                 </div>

               </div>
             );
           })}
         </div>
      </div>
    </section>
  );
}
