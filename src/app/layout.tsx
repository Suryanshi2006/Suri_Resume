import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Suryanshi Kr. Singh | Cinematic Portfolio",
  description: "Writing stories people remember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="selection:bg-red-900 selection:text-white">
        <div className="grain-overlay" />
        <div className="vhs-scanlines" />
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
