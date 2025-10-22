import { Home } from "lucide-react";
import Image from "next/image";

export default function IssuesSection() {
	const issues = [
		"Insurance threatening to drop you because roof is too old?",
		"Suffering from leaks after a rain storm?",
		"Missing shingles or tiles?",
		"Electricity bills too high?",
		"Being proactive about your roof?",
	];

	return (
		<section className="relative min-h-[400px] md:min-h-[500px] py-16 md:py-20">
			{/* Background Image */}
			<Image
				src="/assets/roofing-2.webp"
				alt="Roofing background"
				fill
				className="object-cover brightness-75 saturate-90"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative z-10 max-w-2xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
					We Know & Understand Your Issues!
				</h2>

				<div className="space-y-4 md:space-y-6">
					{issues.map((issue, index) => (
						<div key={index} className="flex items-start gap-4 md:gap-6">
							<div className="p-3 flex-shrink-0 scale-150">
								<Home className="w-8 h-8 md:w-8 md:h-8 text-white" />
							</div>
							<p className="text-[#ffde11] text-[19px] md:text-xl pt-3.5">
								{issue}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
