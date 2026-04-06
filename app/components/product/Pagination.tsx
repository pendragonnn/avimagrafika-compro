import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-16 pt-8 border-t border-gray-100">
      <button 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-3 md:px-5 md:py-3.5 rounded-xl border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-primary transition-colors flex items-center gap-2 font-bold"
      >
        <ChevronLeft size={20} /> <span className="hidden sm:block text-sm uppercase tracking-widest">Prev</span>
      </button>
      
      <div className="flex gap-2 overflow-x-auto max-w-[200px] sm:max-w-none px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
            className={`w-11 h-11 md:w-12 md:h-12 rounded-xl text-sm font-bold shrink-0 transition-all ${
              currentPage === idx + 1 
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <button 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-3 md:px-5 md:py-3.5 rounded-xl border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-primary transition-colors flex items-center gap-2 font-bold"
      >
        <span className="hidden sm:block text-sm uppercase tracking-widest">Next</span> <ChevronRight size={20} />
      </button>
    </div>
  );
}
