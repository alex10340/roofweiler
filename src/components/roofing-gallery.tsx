import Image from "next/image";

type RoofType = "metal" | "tile" | "shingle" | "stone-coated";

interface RoofingGalleryProps {
	rooftype: RoofType;
}

const galleryConfig = {
	metal: {
		title: "View Our Metal Roof Projects",
		description:
			"Some of our previous metal roofing jobs that we have completed throughout the Miami-Dade, Broward and Palm Beach County area!",
		images: [
			"/assets/metal-roof-projects1.webp",
			"/assets/metal-roof-projects2.webp",
			"/assets/metal-roof-projects3.webp",
			"/assets/metal-roof-projects4.webp",
			"/assets/metal-roof-projects5.webp",
			"/assets/metal-roof-projects6.webp",
			"/assets/metal-roof-projects7.webp",
			"/assets/metal-roof-projects8.webp",
		],
	},
	tile: {
		title: "View Our Tile Roof Projects",
		description:
			"Some of our previous tile roofing jobs that we have completed throughout the Miami-Dade, Broward and Palm Beach County area!",
		images: [
			"/assets/tile-roof-projects1.webp",
			"/assets/tile-roof-projects2.webp",
			"/assets/tile-roof-projects3.webp",
			"/assets/tile-roof-projects4.webp",
			"/assets/tile-roof-projects5.webp",
			"/assets/tile-roof-projects6.webp",
			"/assets/tile-roof-projects7.webp",
			"/assets/tile-roof-projects8.webp",
		],
	},
	shingle: {
		title: "View Our Shingle Roof Projects",
		description:
			"Some of our previous shingle roofing jobs that we have completed throughout the Miami-Dade, Broward and Palm Beach County area!",
		images: [
			"/assets/shingle-roof-projects1.webp",
			"/assets/shingle-roof-projects2.webp",
			"/assets/shingle-roof-projects3.webp",
			"/assets/shingle-roof-projects4.webp",
			"/assets/shingle-roof-projects5.webp",
			"/assets/shingle-roof-projects6.webp",
			"/assets/shingle-roof-projects7.webp",
			"/assets/shingle-roof-projects8.webp",
		],
	},
	"stone-coated": {
		title: "View Our Stone Coated Metal Roof Projects",
		description:
			"Some of our previous stone coated metal roofing jobs that we have completed throughout the Miami-Dade, Broward and Palm Beach County area!",
		images: [
			"/assets/stone-coated-roof-projects1.webp",
			"/assets/stone-coated-roof-projects2.webp",
			"/assets/stone-coated-roof-projects3.webp",
			"/assets/stone-coated-roof-projects4.webp",
			"/assets/stone-coated-roof-projects5.webp",
			"/assets/stone-coated-roof-projects6.webp",
			"/assets/stone-coated-roof-projects7.webp",
			"/assets/stone-coated-roof-projects8.webp",
		],
	},
};

export default function RoofingGallery({ rooftype }: RoofingGalleryProps) {
	const config = galleryConfig[rooftype];

	return (
		<div className="min-h-screen bg-[#1a1a1a] py-16 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] mb-6 leading-tight">
						{config.title}
					</h1>
					<p className="text-base md:text-lg text-[#ffffff] max-w-4xl mx-auto leading-relaxed">
						{config.description}
					</p>
				</div>

				{/* 4x2 Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{config.images.map((src, index) => (
						<div key={index} className="flex flex-col gap-4">
							<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
								<Image
									src={src}
									alt={`${rooftype} roof project ${index + 1}`}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
