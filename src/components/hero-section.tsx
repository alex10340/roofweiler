import Image from "next/image";
import EstimateForm from "@/components/estimate-form";

export default function HeroSection() {
	return (
		<section className="relative min-h-[600px]">
			{/* Background Image */}
			<Image
				src="/assets/hero.webp"
				alt="Roofing Services"
				fill
				className="object-cover object-top"
				priority
			/>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
				<div className="grid md:grid-cols-2 gap-8 items-start">
					{/* Left side - Text content */}
					<div className="text-white max-w-lg pt-12">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
							Experience the RoofWeiler Difference Today!
						</h1>
						<p className="text-[#ffde11] text-lg md:text-xl lg:text-2xl mb-6">
							We're a roofing and windows contractor that strives for honesty,
							commitment, friendliness, and responsibility in all aspects of our
							work.
						</p>
						<p className="text-[#ffde11] text-lg md:text-xl lg:text-2xl">
							Let us help you enhance your home with high-quality services that
							are second to none!
						</p>
					</div>

					{/* Right side - Form */}
					<div>
						<EstimateForm />
					</div>
				</div>
			</div>
		</section>
	);
}
