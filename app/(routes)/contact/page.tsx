import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../../components/contact/ContactForm';

export const metadata: Metadata = {
  title: "Hubungi Kami | Harga & Pemesanan Avima Grafika",
  description: "Alamat, no WhatsApp, dan email Avima Grafika. Dapatkan konsultasi spesifikasi bahan dan simulasi harga percetakan terbaik sekarang juga.",
  keywords: "kontak avima grafika, alamat percetakan jakarta timur, no telepon jasa cetak, email percetakan, harga cetak offset, konsultasi biaya cetak",
  openGraph: {
    title: 'Hubungi Avima Grafika Sekarang',
    description: 'Dapatkan penawaran harga khusus untuk proyek percetakan Anda.',
    url: 'https://www.avimagrafika.online/contact',
  }
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-1 py-10 lg:py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <div className="flex flex-col items-center justify-between gap-6 lg:gap-8 mb-16 text-center">
                    <span className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase block mb-[-1rem] lg:mb-[-1.5rem]">LAYANAN PELANGGAN</span>
                    <h1 className="text-4xl md:text-5xl lg:text-[54px] font-sans font-bold text-gray-900 tracking-tight uppercase leading-[1.1]">
                        HUBUNGI KAMI
                    </h1>
                    <p className="text-gray-500 text-center font-light text-base md:text-lg max-w-3xl leading-relaxed">
                        Jika Anda memiliki pertanyaan abstrak, butuh konsultasi teknis terkait spesifikasi material cetak, atau ingin meminta penawaran harga khusus, jangan ragu untuk menghubungi kami!
                    </p>
                </div>

                {/* Content Section: Form & Info */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16 relative z-10">

                    {/* Left Column: Form */}
                    <ContactForm />

                    {/* Right Column: Info & Hours */}
                    <div className="lg:w-5/12 flex flex-col gap-8 h-auto">

                        {/* Contact Info Block */}
                        <div className="bg-primary p-8 md:p-10 rounded-[32px] border border-primary-light/10 flex-1 relative overflow-hidden shadow-[0_12px_40px_rgba(47,68,125,0.15)] group">
                            
                            {/* Decorative Radial Backdrop */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                            
                            {/* Ornament Overlay */}
                            <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 2.5px, transparent 2.5px)', backgroundSize: '32px 32px' }}>
                            </div>

                            <h2 className="text-xl font-bold text-white mb-10 uppercase tracking-wide relative z-10">INFORMASI KONTAK</h2>
                            <div className="space-y-10 relative z-10">
                                <div className="flex-1 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center shrink-0">
                                        <Phone className="text-white" size={20} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="block text-[11px] font-bold text-white/60 mb-2 uppercase tracking-widest mt-0.5">TELEPON UTAMA</h3>
                                        <p className="text-white font-bold text-[16px]">+62 877-7182-8227</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center shrink-0">
                                        <Mail className="text-white" size={20} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="block text-[11px] font-bold text-white/60 mb-2 uppercase tracking-widest mt-0.5">EMAIL BISNIS</h3>
                                        <p className="text-white font-bold text-[16px]">marketing@avimagrafika.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start pt-2">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center shrink-0">
                                        <MapPin className="text-white" size={20} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="block text-[11px] font-bold text-white/60 mb-2 uppercase tracking-widest mt-0.5">ALAMAT LOKASI KANTOR</h3>
                                        <p className="text-gray-200 text-[15px] leading-relaxed font-medium">Jl. Kesehatan No.17, Gedong, Ps. Rebo,<br />Jakarta Timur 13760</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours Block */}
                        <div className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-auto">
                            <h2 className="text-xl font-bold text-gray-900 mb-10 uppercase tracking-wide">JAM OPERASIONAL</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-widest">SENIN - JUMAT</h3>
                                    <p className="text-gray-900 font-bold text-[15px]">08:00 - 17:00</p>
                                </div>
                                <div>
                                    <h3 className="block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-widest">SABTU</h3>
                                    <p className="text-gray-900 font-bold text-[15px]">08:00 - 12:00</p>
                                </div>
                                <div className="lg:col-span-1 col-span-2">
                                    <h3 className="block text-[11px] font-bold text-accent mb-2 uppercase tracking-widest">MINGGU</h3>
                                    <p className="text-gray-900 font-bold text-[15px]">Libur / Tutup</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Map Section */}
                <div className="w-full h-[450px] rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 mt-12 relative z-0">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="Lokasi Avima Grafika"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Kesehatan%20No.17,%20Gedong,%20Ps.%20Rebo,%20Jakarta%20Timur,%2013760+(Avima%20Grafika)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}
