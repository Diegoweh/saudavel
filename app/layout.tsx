import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saudavel - Planes Nutricionales a Domicilio",
  description: "Transforma tu estilo de vida con nuestros planes nutricionales personalizados entregados a tu puerta. Comida saludable, deliciosa y conveniente.",
  keywords: [
    "planes nutricionales",
    "comida saludable a domicilio",
    "nutrición personalizada",
    "dieta balanceada",
    "delivery saludable",
    "Saudavel",
    "estilo de vida saludable",
    "meal prep",
    "comida fitness",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Saudavel",
    title: "Saudavel - Planes Nutricionales a Domicilio",
    description: "Transforma tu estilo de vida con nuestros planes nutricionales personalizados entregados a tu puerta. Comida saludable, deliciosa y conveniente.",
    images: [{ url: "/logo-navbar.png", width: 800, height: 600, alt: "Saudavel - Planes Nutricionales" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudavel - Planes Nutricionales a Domicilio",
    description: "Transforma tu estilo de vida con nuestros planes nutricionales personalizados entregados a tu puerta.",
    images: ["/logo-navbar.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Saudavel",
  description: "Planes nutricionales personalizados entregados a domicilio. Comida saludable, deliciosa y conveniente.",
  sameAs: ["https://www.instagram.com/saudavel.estilodevida/"],
  servesCuisine: "Healthy Food",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-JWHH1489XP" />
      </body>
    </html>
  );
}
