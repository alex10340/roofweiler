"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ServiceAreaPageHero() {
	const { openModal } = useContactModal();

	return (
		<section className="relative h-[560px] flex items-center justify-center">
			<div className="absolute inset-0 bg-black/90" />
			<div className="absolute inset-0 bg-[url('/assets/area-hero.webp')] bg-cover bg-center" />
			<div className="relative z-10 max-w-4xl mx-auto px-6">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
					Experience Unmatched Customer
					<br />
					Service with Roofweiler.
				</h1>
				<p className="text-2xl md:text-3xl font-bold text-white mb-8">
					5-Star Reviews Guaranteed!
				</p>
				<Button
					onClick={openModal}
					className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-bold px-8 py-6 text-base"
				>
					GET YOUR FREE ESTIMATE &gt;
				</Button>
			</div>
		</section>
	);
}
