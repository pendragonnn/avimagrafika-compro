import data from '../../../data.json';

export default function Clients() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto text-center">
      <div className="mb-14 md:mb-20">
        <h2 className="text-[13px] md:text-sm font-bold text-primary tracking-[0.25em] uppercase mb-5">MITRA & KLIEN KAMI</h2>
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.1] uppercase">DIPERCAYA OLEH INDUSTRI</h3>
        <p className="text-gray-500 mt-6 text-base md:text-lg max-w-2xl mx-auto font-light">Telah dipercaya oleh berbagai perusahaan dan instansi terkemuka untuk menangani pengerjaan kebutuhan cetak kualitas premium berskala massal secara konsisten.</p>
      </div>

      {/* Logo Grid Container */}
      <div className="relative bg-white rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.03)] p-10 md:p-16 lg:p-20 overflow-hidden group">
        
        {/* Subtle inner decorative glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/[0.03] to-transparent blur-3xl rounded-full pointer-events-none transition-all duration-700 group-hover:scale-125"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/[0.03] to-transparent blur-3xl rounded-full pointer-events-none transition-all duration-700 group-hover:scale-125"></div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-x-20 md:gap-y-16 lg:gap-x-24 relative z-10">
          {data.clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center grayscale transition-all duration-500 opacity-40 hover:opacity-100 hover:grayscale-0 hover:text-primary cursor-pointer select-none hover:-translate-y-1"
              title={`Logo Mitra: ${client.name}`}
            >
              <span className={`${client.style} text-gray-800`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
