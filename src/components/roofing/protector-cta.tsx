"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ProtectorCTA() {
	const { openModal } = useContactModal();
	return (
		<section className="relative min-h-[300px] md:min-h-[400px]">
			{/* Background Image */}
			<Image
				src="/assets/roofing-hero.webp"
				alt="The Ultimate Protector"
				fill
				className="object-cover"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 flex flex-col mx-auto max-w-[900px] justify-center min-h-[300px] md:min-h-[400px] px-4">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
					The Ultimate Protector
				</h2>
				<p className="text-white text-base md:text-lg mb-8">
					Whatever your Roofing needs are, we can handle it. Our work on
					Residential Roof is characterized by quality material, superior
					workmanship, and Stress Free, Worry Free.
				</p>
				<Button
					onClick={openModal}
					className="max-w-[400px] bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-8 py-6 text-base"
				>
					CONTACT US TODAY
				</Button>
			</div>
		</section>
	);
}
