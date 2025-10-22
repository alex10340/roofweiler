import Image from "next/image";
import BlogSection from "@/components/blog-section";
import QuoteSection from "@/components/quote-section";
import IssuesSection from "@/components/roofing/issues-section";
import ProtectorCTA from "@/components/roofing/protector-cta";
import RoofTypesSection from "@/components/roofing/roof-types-section";
import RoofingHero from "@/components/roofing/roofing-hero";
import WhyChooseSection from "@/components/roofing/why-choose-section";
import SixPs from "@/components/six-ps";
import TestimonialCarousel from "@/components/testimonial-carousel";

export const metadata = {
	alternates: {
		canonical: "/roofing",
	},
};

export default function RoofingPage() {
	return (
		<main>
			<RoofingHero />
			<p className="min-h-[120px] h-fit text-center py-[20px] flex items-center justify-center text-[38px] font-bold">
				Top-Quality Roofing To Last a Lifetime Guaranteed 
			</p>
			<IssuesSection />
			<WhyChooseSection />
			<ProtectorCTA />
			<RoofTypesSection />
			<div className="relative">
				<div className="absolute inset-0 z-0">
					<Image
						src="/assets/roof-bg.webp"
						alt="Background"
						fill
						className="object-cover brightness-60"
					/>
				</div>
				<div className="relative z-10">
					<SixPs />
				</div>
			</div>

			<TestimonialCarousel />
			<BlogSection
				title="Read Popular & Helpful Articles"
				subtitle="From Our Roofing Blog"
			/>
			<QuoteSection />
		</main>
	);
}
