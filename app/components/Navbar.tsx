"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, MessageCircle, Menu, X } from 'lucide-react';
import data from '../../data.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Live filter logic
  const filteredProducts = searchQuery.trim().length > 0 
    ? data.products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  // Dropdown popup UI
  const SearchDropdown = () => {
    if (searchQuery.trim().length === 0) return null;
    
    return (
      <div className="absolute top-full left-0 md:-left-8 mt-3 w-full md:w-[340px] bg-white border border-gray-100 shadow-2xl rounded-[24px] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        {filteredProducts.length > 0 ? (
          <div className="space-y-1">
            {filteredProducts.map(p => (
              <Link 
                key={p.id} 
                href={`/product?search=${encodeURIComponent(p.name)}`} 
                onClick={() => { setSearchQuery(""); setIsOpen(false); }} 
                className="flex items-center gap-4 p-3 hover:bg-gray-50/80 rounded-xl transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-[9px] text-gray-400 font-bold uppercase overflow-hidden relative">
                  {p.image ? (
                    <Image 
                      src={p.image} 
                      alt={p.name} 
                      fill 
                      sizes="48px"
                      className="object-cover" 
                      unoptimized 
                    />
                  ) : (
                    <span className="opacity-50">{p.category.includes('Kertas') ? 'KRT' : p.category.substring(0,3)}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-primary transition-colors truncate">{p.name}</h4>
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest block mt-1">{p.category}</span>
                </div>
              </Link>
            ))}
            <Link 
              href={`/product?search=${encodeURIComponent(searchQuery)}`} 
              onClick={() => { setSearchQuery(""); setIsOpen(false); }} 
              className="block text-center text-[11px] font-bold text-primary hover:text-accent uppercase tracking-widest pt-4 pb-2 border-t border-gray-100 mt-2"
            >
              Lihat Semua Hasil →
            </Link>
          </div>
        ) : (
          <div className="p-8 text-center">
             <Search className="mx-auto text-gray-300 mb-3" size={28} />
             <p className="text-sm text-gray-500 font-medium">Spesifikasi produk tidak ditemukan.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-primary shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Logo and Links */}
        <div className="flex items-center gap-8 lg:gap-12 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <div className="relative w-32 h-10">
              <Image 
                src="/logo.png" 
                alt="Avima Grafika Logo" 
                fill 
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                className="object-contain object-left" 
              />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 font-medium text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Beranda</Link>
            <Link href="/product" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Produk</Link>
            <Link href="/about" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Tentang Kami</Link>
            <Link href="/contact" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform">Kontak</Link>
          </div>
        </div>

        {/* Right Side: Search and WhatsApp */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative">
            <input 
              type="text" 
              placeholder="Cari produk..." 
              value={searchQuery}
              maxLength={60}
              autoComplete="off"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter' && searchQuery.trim().length > 0) {
                  router.push(`/product?search=${encodeURIComponent(searchQuery)}`);
                  setIsOpen(false);
                  setSearchQuery("");
                }
              }}
              className="pl-5 pr-10 py-2.5 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-48 xl:w-[280px] bg-gray-50 font-medium text-primary placeholder:text-gray-400"
            />
            <Search size={18} className="absolute right-4 text-gray-400 pointer-events-none" />
            
            {/* Desktop Search Dropdown */}
            <SearchDropdown />
          </div>
          
          <a 
            href="https://wa.me/6287771828227" 
            className="hidden xl:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-bold text-[13px] tracking-wide uppercase hover:bg-accent-dark transition shadow-lg shadow-accent/20"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle icon */}
          <button 
            className="lg:hidden flex items-center justify-center p-2 text-gray-900 focus:outline-none z-50 hover:bg-gray-50 rounded-xl transition-colors"
            onClick={() => { setIsOpen(!isOpen); setSearchQuery(""); }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} strokeWidth={1.25} /> : <Menu size={30} strokeWidth={1.25} />}
          </button>
        </div>
        
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-28 px-8 pb-8 overflow-y-auto animate-in fade-in duration-200">
           <div className="flex flex-col gap-6 text-[22px] font-sans font-bold text-gray-900 tracking-tight uppercase">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-100 flex items-center justify-between group">
                <span className="group-hover:text-primary transition-colors">Beranda</span>
              </Link>
              <Link href="/product" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-100 flex items-center justify-between group">
                <span className="group-hover:text-primary transition-colors">Produk</span>
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-100 flex items-center justify-between group">
                <span className="group-hover:text-primary transition-colors">Tentang Kami</span>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-100 flex items-center justify-between group">
                <span className="group-hover:text-primary transition-colors">Kontak</span>
              </Link>
           </div>
           
           <div className="pt-8 flex flex-col gap-4">
             {/* Mobile Search Input */}
             <div className="relative w-full z-50">
                <input 
                  type="text" 
                  placeholder="Pencarian Cepat..." 
                  value={searchQuery}
                  maxLength={60}
                  autoComplete="off"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter' && searchQuery.trim().length > 0) {
                      router.push(`/product?search=${encodeURIComponent(searchQuery)}`);
                      setIsOpen(false);
                      setSearchQuery("");
                    }
                  }}
                  suppressHydrationWarning
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-[15px] font-medium text-primary"
                />
                <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                
                {/* Mobile Search Dropdown */}
                <SearchDropdown />
             </div>

             <a 
               href="https://wa.me/6287771828227" 
               className="w-full mt-4 flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-accent/20 hover:bg-accent-dark transition-colors"
             >
               <MessageCircle size={22} />
               HUBUNGI SEKARANG
             </a>
           </div>
        </div>
      )}
    </nav>
  );
}
