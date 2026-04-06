"use client";

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import data from '../../../data.json';
import { Search } from 'lucide-react';

import SearchBox from '../../components/product/SearchBox';
import CategoryFilter from '../../components/product/CategoryFilter';
import SortDropdown from '../../components/product/SortDropdown';
import ProductCard from '../../components/product/ProductCard';
import Pagination from '../../components/product/Pagination';
import ProductModal from '../../components/product/ProductModal';

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const initSearch = searchParams.get('search');
  const initModalId = searchParams.get('modalId');

  const [searchQuery, setSearchQuery] = useState(initSearch || "");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [sortBy, setSortBy] = useState("latest"); 
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const itemsPerPage = 8;
  const categories = ["Semua Kategori", ...Array.from(new Set(data.products.map(p => p.category)))];

  // Initialize query parameters logic on component mount or URL change
  useEffect(() => {
    if (initSearch) {
      setSearchQuery(initSearch);
      setCurrentPage(1);
    } else if (searchQuery !== "" && !initSearch) {
      // Revert if clear the URL manually
      setSearchQuery("");
      setCurrentPage(1);
    }
  }, [initSearch]);

  useEffect(() => {
    if (initModalId) {
      const productToOpen = data.products.find(p => p.id === initModalId);
      if (productToOpen) {
        setSelectedProduct(productToOpen);
      }
    }
  }, [initModalId]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  // Logic Filtering & Sorting
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...data.products];

    // Search
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter Category
    if (selectedCategory !== "Semua Kategori") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch(sortBy) {
      case "price-asc":
        result.sort((a, b) => a.priceRange.min - b.priceRange.min);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceRange.min - a.priceRange.min);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Page Change
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleOrderWhatsapp = (productName: string) => {
    const text = `Halo Avima Grafika, saya tertarik untuk memesan produk *${productName}*. Boleh minta penawaran harga dan informasi lebih lanjut?`;
    window.open(`https://wa.me/6287771828227?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
        {/* Toolbar: Search, Filter, Sort */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 w-full bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm">
           <SearchBox 
             value={searchQuery} 
             onChange={(val) => { setSearchQuery(val); setCurrentPage(1); }} 
           />
           <div className="flex flex-col sm:flex-row gap-4">
              <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onChange={(val) => { setSelectedCategory(val); setCurrentPage(1); }} 
              />
              <SortDropdown 
                sortBy={sortBy} 
                onChange={(val) => { setSortBy(val); setCurrentPage(1); }} 
              />
           </div>
        </div>

        {/* Product Grid */}
        <div className="min-h-[400px]">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {currentProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onClick={setSelectedProduct}
                  onOrderWhatsapp={handleOrderWhatsapp}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-80 text-center bg-gray-50 rounded-[32px] border border-gray-100 border-dashed max-w-2xl mx-auto">
              <span className="text-5xl mb-6 opacity-30 grayscale"><Search size={48} /></span>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Produk Tidak Ditemukan</h3>
              <p className="text-gray-500 text-base max-w-sm">Maaf, kami tidak dapat menemukan produk yang sesuai dengan filter atau kata kunci Anda.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedCategory("Semua Kategori"); }} className="mt-6 text-accent font-bold uppercase tracking-widest text-sm hover:underline">
                 Reset Pencarian
              </button>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={goToPage} 
        />

        {/* Modern Overlay Modal Product Detail */}
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onOrderWhatsapp={handleOrderWhatsapp} 
        />
    </>
  );
}
