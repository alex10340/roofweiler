export default function BenefitsStoneRoof() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url(/assets/stone-coated-2.webp)",
				}}
			></div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-[#ffffff] text-5xl font-bold mb-4 text-balance">
						Benefits Of A Stone Coated Metal Roof
					</h1>
				</div>

				{/* 2x2 Grid */}
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<BenefitCard
							title="EXTREME DURABILITY"
							description="Stone Coated Steel roofs are installed
worldwide in areas with the most
severe weather. This material is
designed to withstand wind speeds of
up to 185 mph and is approved for use
in Miami-Dade county, which has the
strictest wind codes in the country. It
also carries a 2.5″ hailstone warranty
and a Class-A fire rating (the highest
possible). "
						/>
						<BenefitCard
							title="ENERGY EFFICIENT"
							description="Stone Coated Metal roofs reflect the suns UV
and infrared light rays that contribute to roof
surface Stone Coated Steel roofs are also energy
efficient. The materials provide additional
insulation to your home or business, making it
easier to maintain the internal temperature
without overextending your thermostat. In
addition to reduced energy costs, the steel itself
is reusable and recyclable.  heat, which can
result in up to 25% reduction in cooling costs."
						/>
						<BenefitCard
							title="AESTHETICS"
							description="Stone Coated Steel gives you the best of both worlds,
by delivering the versatility of a metal roof with the visual
appearance of tiles, shake, or shingles. The beauty of
your new roof will instantly raise the value of your home
or commercial investment. Enjoy a wide range of design
options, including a multitude of colors, textures, and
shapes to match the design of your property"
						/>
						<BenefitCard
							title="MAINTENANCE FREE"
							description="Discover maintenance-free roofing with our stone-
coated metal roofs. Made from durable materials
and coated with stone chips, they resist cracking,
warping, and corrosion. With minimal upkeep
required, enjoy long-lasting protection for your
home. Invest in convenience and longevity today!"
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
