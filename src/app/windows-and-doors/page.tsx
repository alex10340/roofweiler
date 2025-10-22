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
import Manufacturers from "@/components/windows-doors/Manufacturers";
import ProcessSteps from "@/components/windows-doors/ProcessSteps";
import ProtectHome from "@/components/windows-doors/protect-your-home";
import WindowsHero from "@/components/windows-doors/windows-doors-hero";
import WindowDoorsStyles from "@/components/windows-doors/windows-doors-styles";

export const metadata = {
	alternates: {
		canonical: "/roofing",
	},
};

export default function WindowsDoorsPage() {
	return (
		<main className="bg-[#1a1a1a]">
			<WindowsHero />
			<ProtectHome />
			<div className="relative min-h-[820px]">
				<div className="absolute inset-0 z-0">
					<Image
						src="/assets/window-moving.webp"
						alt="Background"
						fill
						className="object-cover brightness-30 contrast-80"
					/>
				</div>
				<div className="relative z-10">
					<SixPs />
				</div>
			</div>
			<p className="text-white min-h-[120px] h-fit text-center py-[20px] p-4 text-[38px] font-bold">
				<span className="text-[#ffde11]">ROOFWEILER</span> Makes it easy for
				you!
			</p>
			<ProcessSteps />
			<Manufacturers />
			<WindowDoorsStyles />
			<BlogSection
				title="Read Popular & Helpful Articles"
				subtitle="From Our Windows & Doors Blog"
			/>
			<QuoteSection />
		</main>
	);
}
