import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: any;
  onClick: (product: any) => void;
  onOrderWhatsapp: (productName: string) => void;
}

export default function ProductCard({ product, onClick, onOrderWhatsapp }: ProductCardProps) {
  return (
    <div 
      className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col justify-between"
      onClick={() => onClick(product)}
    >
      <div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl aspect-square mb-6 overflow-hidden relative flex items-center justify-center">
          {product.image ? (
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              sizes="(max-width: 768px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <span className="text-gray-400 font-bold uppercase tracking-widest text-center text-[10px] opacity-60 p-4 border border-gray-300 border-dashed rounded-xl">Gambar {product.category}</span>
          )}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
        
        <div className="flex-1 flex flex-col">
            <span className="text-[11px] font-bold text-accent tracking-widest uppercase mb-2 block">{product.category}</span>
            <h3 className="font-bold text-[17px] uppercase tracking-wide text-gray-900 mb-3 truncate group-hover:text-primary transition-colors">{product.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-6 h-10 font-light">{product.description}</p>
        </div>
      </div>

      <div>
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-1 mb-5">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Estimasi Termurah</span>
            <span className="text-base font-bold text-primary">Rp {product.priceRange.min.toLocaleString('id-ID')} <span className="text-xs font-normal text-gray-500">/ pcs</span></span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOrderWhatsapp(product.name);
          }}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-4 py-3.5 rounded-xl font-bold uppercase text-[12px] tracking-widest hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-sm"
          suppressHydrationWarning
        >
          <MessageCircle size={18} />
          Pesan Cepat
        </button>
      </div>
    </div>
  );
}
