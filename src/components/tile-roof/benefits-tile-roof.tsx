export default function BenefitsTileRoof() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url(/assets/tile-roof-bg3.webp)",
				}}
			></div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-[#ffffff] text-5xl font-bold mb-4 text-balance">
						Benefits Of A Tile Roof
					</h1>
				</div>

				{/* 2x2 Grid */}
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<BenefitCard
							title="QUALITY & AESTHETICS"
							description="Tile roofs are chosen by many for their quality and aesthetics. It's one
of the oldest and most used styles of roofs because of the variety of
shapes, profiles, and colors for decorative use. The tiles keep their
aesthetics intact for many years."
						/>
						<BenefitCard
							title="STRONG"
							description="Tile roofs are resistant to damage that can be caused by water, frost, fire, wind
and a bug. With the tile roof installed by RoofWeiler, you will realize that it is
the last roof you will need to buy."
						/>
						<BenefitCard
							title="ENERGY EFFICIENT"
							description="Tile Roofs have incredible thermal performance. If you are in summer
thanks to heat transfer barriers you can cool a house and heat it in winter,
it helps you save up to 20% in energy."
						/>
						<BenefitCard
							title="ECO-FRIENDLY"
							description="The materials with which the tile roof is made does not have a negative impact
on the planet since it is made with natural resources. The tile roof is
preservative-free, and the waste can be used again in the manufacturing
process."
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

function BenefitCard({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="bg-[#ffffff]/10 backdrop-blur-sm p-8 rounded-lg border border-[#ffde11]/20">
			<h3 className="text-[#ffde11] text-2xl font-bold mb-4">{title}</h3>
			<p className="text-[#ffffff] text-lg leading-relaxed">{description}</p>
		</div>
	);
}
