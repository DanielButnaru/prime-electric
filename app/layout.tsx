import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import GridLines from "@/components/ui/GridLines";
import SmoothScroller from "@/components/ui/SmoothScroller";
import ThemeToggle from "@/components/ui/ThemeToggle";
import CookieConsent from "@/components/ui/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const Latienne = localFont({
  src: './fonts/Latienne.ttf',
  variable: '--font-latienne'
});

export const metadata: Metadata = {
  title: "Prime Electric Iași — Instalații Electrice & Automatizări Smart",
  description: "Servicii profesionale de instalații electrice în Iași. Expertiză în execuție tablouri electrice, cablaj case și apartamente, spații comerciale și sisteme smart home KNX/DALI.",
  keywords: [
    "instalatii electrice Iasi", 
    "electrician Iasi", 
    "tablouri electrice Iasi", 
    "instalatii electrice case", 
    "automatizari smart home Iasi", 
    "mentenanta electrica spatii comerciale",
    "Prime Electric",
    "instalatii electrice apartamente"
  ],
  authors: [{ name: "Prime Electric" }],
  icons: {
    icon: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${montserrat.variable} ${cormorant.variable} ${jetbrains.variable} ${Latienne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroller>
          <NoiseOverlay />
          <GridLines />
          <ThemeToggle />
          <CookieConsent />
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
