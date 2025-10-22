"use client";

export default function ServiceAreaButtons() {
	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const headerOffset = 100;
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
			<button
				onClick={() => handleScroll("miami-dade")}
				className="bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-8 py-3 rounded-md transition-colors cursor-pointer"
			>
				Miami-Dade
			</button>
			<button
				onClick={() => handleScroll("broward")}
				className="bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-8 py-3 rounded-md transition-colors cursor-pointer"
			>
				Broward
			</button>
			<button
				onClick={() => handleScroll("palm-beach")}
				className="bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-8 py-3 rounded-md transition-colors cursor-pointer"
			>
				Palm Beach
			</button>
		</div>
	);
}
