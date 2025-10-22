import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WhyChooseSection() {
	const benefits = [
		"FREE Inspection & Quote",
		"Customer Service Focus",
		"Fully Bonded & Insured",
		"Storm Claim Assistance & Remodeling",
		"Financing Options Available",
		"Over 15 Years of Experience",
		"Licensed and Insured Professional Team",
	];

	return (
		<section className="bg-[#1a1a1a] py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					{/* Left side - Image */}
					<div className="">
						<h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-white">
							Why Choose <span className="text-[#ffde11]">RoofWeiler?</span>
						</h2>
						<Image
							src="/assets/why-choose.webp"
							alt="RoofWeiler team at work"
							width="408"
							height="271"
							className="rounded-lg shadow-2xl mx-auto"
						/>
					</div>

					{/* Right side - Content */}
					<div className="order-1 md:order-2">
						<ul className="space-y-4">
							{benefits.map((benefit, index) => (
								<li key={index} className="flex items-start gap-3">
									<CheckCircle2 className="w-6 h-6 text-[#ffde11] flex-shrink-0 mt-0.5" />
									<span className="text-white text-base md:text-lg">
										{benefit}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
