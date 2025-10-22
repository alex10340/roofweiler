export default function AboutUs() {
	return (
		<section
			className="relative min-h-[370px] w-full bg-fixed bg-cover bg-center"
			style={{ backgroundImage: "url(/assets/roof-bg.webp)" }}
		>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-[#282828b7]" />

			{/* Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
				<h2 className="text-[#ffde11] text-4xl font-bold mb-12 mt-1">
					ABOUT US
				</h2>
				<p className="text-[#ffffff] text-base sm:text-lg leading-tight">
					The Ultimate Protector for Your Roof, Windows, and Doors, embodies our
					commitment to safeguarding your property with exceptional quality.
					Founded on principles of professionalism, reliability, and
					trustworthiness, we strive to exceed homeowner and business owner
					expectations through unparalleled service. As a bridge between
					tradition and innovation, we incorporate cutting-edge technology to
					revolutionize customer service and knowledge in the construction
					industry.
				</p>
			</div>
		</section>
	);
}
