import { Suspense } from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeaderSection from '../../sections/product/HeaderSection';
import ProductCatalog from '../../sections/product/ProductCatalog';

export const metadata: Metadata = {
  title: "Katalog Produk | Cetak Koran, Tabloid, Kemasan & Buku",
  description: "Temukan ragam spesifikasi, minimum order, dan kisaran harga jasa cetak koran, buku, poster, stiker kemasan, dan media cetak lainnya di Avima Grafika.",
  keywords: "harga cetak koran, jasa cetak tabloid, percetakan buku murah, cetak stiker kemasan, cetak kalender dinding, brosur percetakan, ongkos cetak kemasan",
  openGraph: {
    title: 'Katalog Produk Cetak Avima Grafika',
    description: 'Eksplorasi spesifikasi dan dimensi layanan percetakan terlengkap.',
    url: 'https://www.avimagrafika.online/product',
  }
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-10 lg:py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Render fully static server component first */}
        <HeaderSection />

        {/* Load heavy interactions encapsulated in client island suspended for SSR loading */}
        <Suspense fallback={
          <div className="min-h-[400px] flex items-center justify-center w-full bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <ProductCatalog />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
