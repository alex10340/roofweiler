import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roofweiler.com"),
  title: "RoofWeiler",
  description:
    "Discover Roofweiler, your trusted partner for premium roofing and windows solutions in Miami-Dade, Broward, and Palm Beach counties. Specializing in roof replacement & Repair, impact windows, and Solatube skylights, our expert team prioritizes client satisfaction with a transparent, friendly approach. With five-star reviews and a commitment to hurricane-ready protection, Roofweiler delivers exceptional craftsmanship and peace of mind. Trust us to safeguard your home in style.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
