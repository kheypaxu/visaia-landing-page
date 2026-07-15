import type { Metadata } from "next";
import { Anton, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; 

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VISAIA | Secure Your Harvest",
  description:
    "VISAIA is an AI-powered pest management and surveillance platform for precision agriculture, built for farmers, RCPC, LGUs, and researchers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}