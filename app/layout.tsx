import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avimagrafika.online'),
  title: "Avima Grafika | Solusi Percetakan Cepat dan Mudah",
  description: "Avima Grafika adalah perusahaan jasa percetakan yang menghasilkan produk koran, tabloid, majalah, kemasan cetak offset, banner, stiker, dan produk media cetak dengan kualitas terbaik.",
  keywords: "percetakan, percetakan jakarta timur, jasa cetak cepat, jasa cetak murah, cetak offset, percetakan koran, percetakan buku jakarta",
  openGraph: {
    title: 'Avima Grafika | Jasa Cetak Komersial Cepat & Murah',
    description: 'Solusi percetakan andal untuk koran, majalah, kemasan, dan media cetak korporat.',
    url: 'https://www.avimagrafika.online',
    siteName: 'Avima Grafika',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Avima Grafika'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avima Grafika Cetak Offset & Majalah',
    description: 'Solusi Percetakan Profesional di Jakarta Timur. Pengerjaan cepat, harga kompetitif.',
    images: ['/logo.png'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Avima Grafika',
  image: 'https://www.avimagrafika.online/logo.png',
  '@id': 'https://www.avimagrafika.online',
  url: 'https://www.avimagrafika.online',
  telephone: '+6287771828227',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Kesehatan No.17, Kel. Gedong',
    addressLocality: 'Pasar Rebo',
    addressRegion: 'Jakarta Timur',
    postalCode: '13760',
    addressCountry: 'ID'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00'
    }
  ],
  priceRange: 'Rp'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
