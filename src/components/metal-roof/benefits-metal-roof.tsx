export default function BenefitsMetalRoof() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url(/assets/metal-roof-2.webp)",
				}}
			>
				<div className="absolute inset-0 bg-[#000000]/75" />
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-[#ffffff] text-5xl font-bold mb-4 text-balance">
						Benefits Of A Metal Roof
					</h1>
				</div>

				{/* 2x2 Grid */}
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<BenefitCard
							title="BUILD TO LAST"
							description="Metal roofing systems can last up to 4X longer than traditional roofing materials. They have the highest wind rating and fire resistant capabilities they are made to protect you and your loved ones."
						/>
						<BenefitCard
							title="ENERGY EFFICIENT"
							description="Metal roofs reflect the suns UV and infrared light rays that contribute to roof surface radiant heat, which can result in up to 25% reduction in cooling costs."
						/>
						<BenefitCard
							title="AESTHETICS"
							description="Metal roofs are chosen by many for their aesthetics. They are available in different styles and colors so you can get the look you want. You can also get a style that imitates other non-metal materials like tiles, shingles, or wood."
						/>
						<BenefitCard
							title="ECO-FRIENDLY"
							description="Metal roofs are not only made from recycled materials, but can also be recycled and converted into a new sheet of metal or other products. Also Metal roofs and solar panels make a great combination as they are easier to install."
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
