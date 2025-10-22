export default function BenefitsShingleRoof() {
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
						Benefits Of A Shingle Roof
					</h1>
				</div>

				{/* 2x2 Grid */}
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<BenefitCard
							title="ENHANCED LOOK"
							description="Architectural shingles are the high-
quality, reliable choice for protecting
your home while also enhancing its
look. With the widest array of color
options in their class, shingles allow
you to create or re-create the perfect
look for your home with confidence."
						/>
						<BenefitCard
							title="SOUND REDUCING"
							description="Shingles can reduce external noise.
The composition of asphalt shingles
and the underlayment used in a
shingle roof have sound insulation
properties."
						/>
						<BenefitCard
							title="LEAST EXPENSIVE"
							description="Shingles roof systems are the least
expensive roof system in the market.
They are def the best option if you are
planning on selling your home soon."
						/>
						<BenefitCard
							title="LIGHTWEIGHT"
							description="Because of their relatively light weight,
asphalt shingles can be used on most
residential roofs, including those that
might be unable to support heavier
materials like concrete or clay tiles."
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
