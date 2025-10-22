import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RoofTypesSection() {
	const roofTypes = [
		{
			title: "Tile Roof",
			image: "/assets/tile-roof.webp",
			description:
				"Tile roofing is one of the most popular roofing materials. We install, replace, repair all flat, S-tile, barrel tile roofs. Tile Roofs are energy efficient and long lasting.",
		},
		{
			title: "Shingle Roof",
			image: "/assets/shingle-roof.webp",
			description:
				"Shingles roofing is a popular roofing solution and environmentally friendly option. We help our customers by finding the right shingles roofing solution for their home.",
		},
		{
			title: "Metal Roof",
			image: "/assets/roof-bg.webp",
			description:
				"We specialize in metal roofing installation, repair and maintenance. Metal roofs can last 40-70 years and are durable, energy efficient and beautiful.",
		},
		{
			title: "Stone Coated Roof",
			image: "/assets/stone-roof.webp",
			description:
				"We offer the best stone coated metal. This is a special type of roof that is very popular due to its durability, long life span, light weight and beautiful appearance.",
		},
	];

	return (
		<section className="bg-[#1a1a1a] py-16">
			<div className="max-w-6xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
						We Work On{" "}
						<span className="text-[#ffde11]">All Residential Roofs</span>
					</h2>
				</div>

				{/* Roof Types Grid */}
				<div className="grid sm:grid-cols-2 gap-6 md:gap-8">
					{roofTypes.map((roof, index) => (
						<div
							key={index}
							className="bg-[#2a2a2a] border-2 border-gray-500 rounded-lg overflow-hidden shadow-2xl p-4"
						>
							{/* Image */}
							<div className="mx-auto p-6 pb-0">
								<Image
									src={roof.image}
									alt={roof.title}
									width={367}
									height={253}
									className="mx-auto border-[#ffde11] border-2 rounded-lg"
								/>
							</div>
							{/* Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-white mb-4 text-center">
									{roof.title}
								</h3>
								<p className="text-gray-300 text-sm md:text-base mb-6 text-center leading-relaxed">
									{roof.description}
								</p>
								<div className="text-center">
									<Button
										asChild
										className="bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-6 py-3"
									>
										<Link href="/contact">Learn More</Link>
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
