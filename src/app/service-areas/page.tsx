import QuoteSection from "@/components/quote-section";
import ServiceAreaGrid from "@/components/service-areas-grid";
import ServiceAreasHero from "@/components/service-areas-hero";
import { serviceAreasData } from "@/data/service-areas";

export const metadata = {
	title: "Service Areas | RoofWeiler",
	description:
		"RoofWeiler provides roofing, windows and doors services in Miami-Dade, Broward and Palm Beach counties.",
};

export default function ServiceAreasPage() {
	return (
		<main className="bg-[#1a1a1a] min-h-screen">
			<ServiceAreasHero />

			{/* Service Areas Section */}
			<section className="bg-[#505050] py-16 px-6 md:px-12 lg:px-16">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
						<span className="text-[#ffde11]">RoofWeiler</span> Serves The
						Following
					</h2>
					<p className="text-2xl md:text-3xl text-white text-center mb-12">
						Areas in Miami-Dade, Broward, Palm Beach Counties
					</p>

					{/* Render each county's service areas */}
					{Object.entries(serviceAreasData).map(([county, areas]) => (
						<ServiceAreaGrid key={county} county={county} areas={areas} />
					))}
				</div>
			</section>

			<QuoteSection />
		</main>
	);
}
