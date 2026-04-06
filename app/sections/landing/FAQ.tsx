"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import data from '../../../data.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4">PUSAT BANTUAN</h2>
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">
          PERTANYAAN UMUM
        </h3>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6">
          Temukan jawaban cepat mengenai prosedur persyaratan, ketentuan produksi, dan layanan percetakan massal kami di bawah ini.
        </p>
      </div>

      <div className="space-y-4">
        {data.faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border transition-all duration-300 overflow-hidden rounded-[24px] mb-4 ${isOpen
                  ? 'border-primary shadow-[0_8px_30px_rgba(47,68,125,0.08)] bg-white ring-1 ring-primary/10 transition-transform scale-[1.01]'
                  : 'border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
            >
              <button
                suppressHydrationWarning
                className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span className={`font-semibold md:text-lg pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 transition-transform duration-500 ease-spring ${isOpen ? 'rotate-180 text-primary scale-110' : 'text-gray-400'}`}
                  size={24}
                  strokeWidth={2}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="text-gray-600 leading-relaxed font-light text-[15px] md:text-base px-6 md:px-8 pt-3 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
