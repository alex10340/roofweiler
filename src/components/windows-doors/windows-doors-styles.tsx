import Image from "next/image";

export default function WindowDoorsStyles() {
	const windowStyles = [
		{ name: "Single Hung Windows", image: "/assets/single-hung.webp" },
		{ name: "Double Hung Windows", image: "/assets/double-hung.webp" },
		{ name: "Sliding Windows", image: "/assets/sliding-windows.webp" },
		{ name: "Picture Windows", image: "/assets/picture-windows.webp" },
		{ name: "Shape Windows", image: "/assets/shape-windows.webp" },
		{ name: "Entry Doors", image: "/assets/entry-doors.webp" },
		{ name: "Patio Doors", image: "/assets/patio-doors.webp" },
	];

	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/windows-doors-bg.webp"
					alt="Windows and doors background"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-[#1a1a1a]/60" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-12 md:py-16">
				{/* Header */}
				<div className="mb-12 text-center md:mb-16">
					<h1 className="mb-3 text-3xl font-bold text-[#ffde11] md:text-4xl lg:text-5xl">
						Window and Doors Styles
					</h1>
					<p className="text-base text-[#ffffff] md:text-lg lg:text-xl">
						We work with in Miami-Dade, Broward and Palm Beach County
					</p>
				</div>

				{/* Grid of Window/Door Options */}
				<div className="mx-auto w-full max-w-4xl">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16">
						{windowStyles.slice(0, 6).map((style, index) => (
							<div key={index} className="flex flex-col items-center gap-4">
								{/* Image */}
								<Image
									src={style.image}
									alt={style.name}
									width={200}
									height={130}
									className="h-[130px] w-auto"
								/>
								{/* Button */}
								<button className="w-full max-w-[200px] bg-[#ffde11] px-6 py-2.5 text-sm font-bold text-[#000000] transition-all hover:bg-[#ffde11]/90 md:text-base">
									{style.name}
								</button>
							</div>
						))}
					</div>

					{/* Last Item Centered */}
					<div className="mt-8 flex justify-center md:mt-12 lg:mt-16">
						<div className="flex flex-col items-center gap-4">
							{/* Image */}
							<Image
								src={windowStyles[6].image}
								alt={windowStyles[6].name}
								width={200}
								height={130}
								className="h-[130px] w-auto"
							/>
							{/* Button */}
							<button className="w-full max-w-[200px] bg-[#ffde11] px-6 py-2.5 text-sm font-bold text-[#000000] transition-all hover:bg-[#ffde11]/90 md:text-base">
								{windowStyles[6].name}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
