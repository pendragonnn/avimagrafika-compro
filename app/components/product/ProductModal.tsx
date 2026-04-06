import { X, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ProductModalProps {
  product: any;
  onClose: () => void;
  onOrderWhatsapp: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onOrderWhatsapp }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-white transition-opacity"
      ></div>
      
      <div className="relative bg-white w-full h-full max-h-[100dvh] overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row transform transition-all animate-in zoom-in-95 duration-300">
        <button 
          className="fixed top-6 right-6 lg:top-10 lg:right-10 z-[60] w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-accent transition-all hover:rotate-90"
          onClick={onClose}
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Modal Left Image Container */}
        <div className="lg:w-5/12 bg-gray-50 relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[350px] md:min-h-[450px] lg:min-h-full overflow-hidden">
           {product.image ? (
             <Image
               src={product.image}
               alt={product.name}
               fill
               className="object-cover"
               unoptimized
               priority
             />
           ) : (
             <>
               <span className="text-gray-300 font-bold uppercase tracking-widest text-center text-sm opacity-50 p-6 border-2 border-dashed border-gray-200 rounded-2xl relative z-10">Visualisasi<br/>{product.name}</span>
               <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #2f447d 2.5px, transparent 2.5px)', backgroundSize: '32px 32px' }}>
               </div>
             </>
           )}
        </div>

        {/* Modal Right Content Data */}
        <div className="lg:w-7/12 p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col bg-white lg:overflow-y-auto no-scrollbar">
          <span className="text-[11px] font-bold text-accent tracking-widest uppercase mb-4 inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-lg w-fit mt-12 lg:mt-0">
             {product.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-gray-900 mb-5 leading-tight">{product.name}</h2>
          <p className="text-[15px] md:text-base text-gray-500 leading-relaxed font-light mb-10">
            {product.description}
          </p>

          {/* Specs Grid Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 mb-12 pt-8 border-t border-gray-100">
             <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">Minimum Order</h4>
                <p className="text-[17px] font-bold text-gray-900">{product.minOrder}</p>
             </div>
             <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                <h4 className="text-[10px] font-bold text-primary/70 tracking-widest uppercase mb-1">Estimasi Rentang Harga</h4>
                <p className="text-[17px] font-bold text-primary">Rp {product.priceRange.min.toLocaleString('id-ID')} <span className="text-sm font-medium text-gray-500">- Rp {product.priceRange.max.toLocaleString('id-ID')}</span></p>
             </div>
             
             {product.materials && (
             <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Varian Material</h4>
                <div className="flex flex-wrap gap-2.5">
                  {product.materials.map((m: string, i: number) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-700 text-[13px] rounded-xl font-medium shadow-sm">{m}</span>
                  ))}
                </div>
             </div>
             )}

             {product.finishing && (
             <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Pilihan Finishing</h4>
                <div className="flex flex-wrap gap-2.5">
                  {product.finishing.map((f: string, i: number) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-700 text-[13px] rounded-xl font-medium shadow-sm">{f}</span>
                  ))}
                </div>
             </div>
             )}

             {product.variants && (
             <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Bentuk / Jenis Tersedia</h4>
                <ul className="text-[14px] text-gray-600 space-y-2">
                  {product.variants.map((v: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                       <span className="text-gray-300 mt-0.5">■</span> {v}
                    </li>
                  ))}
                </ul>
             </div>
             )}

             {product.sizes && (
             <div className="sm:col-span-2">
                <h4 className="flex items-center gap-2 text-[11px] font-bold text-gray-900 tracking-widest uppercase mb-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Variasi Ukuran</h4>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-gray-900 text-white shadow-sm text-[13px] rounded-xl font-bold tracking-wide">{s}</span>
                  ))}
                </div>
             </div>
             )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => onOrderWhatsapp(product.name)}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
            >
              <MessageCircle size={22} className="text-white" />
              KONSULTASI & PESAN
            </button>
            <button 
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors"
            >
              BATAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
