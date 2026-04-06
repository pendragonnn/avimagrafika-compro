import Link from 'next/link';
import data from '../../../data.json';
import Image from 'next/image';

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
};

export default function Products() {
  const highlightIds = ["P-002", "P-017", "P-011"];
  const highlightedProducts = data.products
    .filter(p => highlightIds.includes(p.id))
    .sort((a, b) => highlightIds.indexOf(a.id) - highlightIds.indexOf(b.id));

  return (
    <section id="product" className="py-12 md:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-4">KATALOG ANDALAN KAMI</h2>
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">
          PRODUK TERLARIS
        </h3>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mt-6">
          Berikut adalah jajaran lini produk unggulan yang menjadi kepercayaan utama klien kami dari berbagai sektor industri perkantoran dan bisnis retail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {highlightedProducts.map((product) => (
          <div 
            key={product.id} 
            className="group block"
          >
            {/* The exact requested premium card wrapper */}
            <div className="bg-[#f2f4f8] hover:bg-[#e9ecef] transition-colors duration-400 rounded-[24px] p-5 pb-6 flex flex-col h-full border border-transparent hover:border-gray-200">
              
              {/* Image Area with tight border radius */}
              <div className="relative w-full aspect-square rounded-[16px] overflow-hidden bg-white mb-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-white">
                <Image 
                  src={product.image || "/logo.png"} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>

              {/* Bottom text info */}
              <div className="flex flex-col flex-1 px-1 text-left">
                <span className="text-[12px] font-bold tracking-widest text-gray-400 mb-1.5 uppercase">
                  {product.category}
                </span>
                <h3 className="font-bold tracking-tight text-[19px] text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                 
                
                {/* Price block matching the reference UI */}
                <div className="mt-auto block">
                  <span className="text-[14px] font-bold text-primary tracking-wide block">
                    Mulai dari {formatRupiah(product.priceRange.min)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link 
            href="/product" 
            className="inline-block bg-primary text-white border border-primary px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[13px] hover:bg-accent hover:border-accent transition-colors shadow-lg shadow-primary/20"
        >
          Lihat Semua Produk
        </Link>
      </div>
    </section>
  );
}
