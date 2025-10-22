import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactModal from "@/components/contact-modal";
import Footer from "@/components/footer";
import SiteHeader from "@/components/site-header";
import { ContactModalProvider } from "@/contexts/ContactModalContext";

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
	title: "RoofWeiler | Roof Replacement, Impact Windows and Doors",
	description:
		"Welcome to Roofweiler, your premier destination for roof replacement and impact windows in Miami-Dade, Broward, and Palm Beach counties. Our expert team specializes in roofing metal, roofing shingles, and roofing tile, ensuring your home is protected and hurricane-ready. With a client-first approach and five-star reviews, we guide you through every step, offering durable solutions that keep your home safe and stylish. Trust Roofweiler for quality and peace of mind.",
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
				<ContactModalProvider>
					<SiteHeader />
					{children}
					<Footer />
					<ContactModal />
				</ContactModalProvider>
			</body>
		</html>
	);
}
