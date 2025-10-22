import Image from "next/image";
import FAQSection from "@/components/metal-roof/faq-section";
import QuoteSection from "@/components/quote-section";
import WhyChooseSection from "@/components/roofing/why-choose-section";
import RoofingGallery from "@/components/roofing-gallery";
import SixPs from "@/components/six-ps";
import BenefitsTileRoof from "@/components/tile-roof/benefits-tile-roof";
import TileRoofHero from "@/components/tile-roof/tile-roof-hero";

export const metadata = {
	alternates: {
		canonical: "/roofing",
	},
};

export default function WindowsDoorsPage() {
	return (
		<main className="bg-[#1a1a1a]">
			<TileRoofHero />
			<BenefitsTileRoof />
			<WhyChooseSection />
			<div className="relative min-h-[820px]">
				<div className="absolute inset-0 z-0">
					<Image
						src="/assets/tilebg.webp"
						alt="Background"
						fill
						className="object-cover"
					/>
				</div>
				<div className="relative z-10">
					<SixPs />
				</div>
			</div>

			<FAQSection />
			<RoofingGallery rooftype="tile" />
			<QuoteSection />
		</main>
	);
}
