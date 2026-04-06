"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSendEmail = () => {
        if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert("Harap isi seluruh formulir dengan lengkap sebelum mengirim pesan.");
            return;
        }
        
        const subject = `Pesan Website: ${formData.name.trim() || 'Tamu'}`;
        const body = `Nama: ${formData.name.trim()}\nNo. Telepon: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\n\nPesan:\n${formData.message.trim()}`;
        window.location.href = `mailto:marketing@avimagrafika.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="lg:w-7/12 bg-white p-8 md:p-12 lg:p-14 rounded-[32px] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col h-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-10 uppercase tracking-wide">KIRIM PESAN</h2>
            <form className="space-y-6 flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label className="block text-[12px] font-bold text-gray-900 mb-3 uppercase tracking-wider">NAMA</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength={100} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-medium text-primary" placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-[12px] font-bold text-gray-900 mb-3 uppercase tracking-wider">NO. TELEPON</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={20} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-medium text-primary" placeholder="Masukkan no. HP Anda" />
                    </div>
                </div>
                <div>
                    <label className="block text-[12px] font-bold text-gray-900 mb-3 uppercase tracking-wider">EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={150} autoComplete="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-medium text-primary" placeholder="Masukkan alamat email Anda" />
                </div>
                <div className="flex-1 flex flex-col">
                    <label className="block text-[12px] font-bold text-gray-900 mb-3 uppercase tracking-wider">PESAN ANDA</label>
                    <textarea rows={6} name="message" value={formData.message} onChange={handleChange} maxLength={1500} required className="w-full flex-1 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm font-medium text-primary resize-none" placeholder="Tuliskan spesifikasi cetak atau pertanyaan Anda..."></textarea>
                </div>
                <div className="pt-4">
                    <button type="button" onClick={handleSendEmail} className="w-full sm:w-auto bg-accent text-white font-bold px-12 py-4 rounded-xl hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20 uppercase text-[15px] tracking-widest leading-none flex items-center justify-center">
                        Kirim Pesan Secara Langsung
                    </button>
                </div>
            </form>
        </div>
    );
}
