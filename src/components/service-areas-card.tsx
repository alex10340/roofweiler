import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceAreaCardProps {
	name: string;
	address: string;
	description: string;
	mapUrl: string;
}

export default function ServiceAreaCard({
	name,
	address,
	description,
	mapUrl,
}: ServiceAreaCardProps) {
	return (
		<div className="bg-[#3a3a3a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
			{/* Google Maps Embed */}
			<div className="relative w-full h-[250px]">
				<iframe
					src={mapUrl}
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-full"
				/>
			</div>

			{/* Location Label */}
			<div className="bg-[#e8e8e8] py-3 px-4 text-center">
				<p className="text-[#888888] text-sm font-medium">{address}</p>
			</div>

			{/* Card Content */}
			<div className="p-6 space-y-4">
				<h3 className="text-white text-2xl font-bold">{name}</h3>
				<p className="text-[#cccccc] text-base leading-relaxed min-h-[80px]">
					{description}
				</p>

				{/* Read More Button */}
				<div className="pt-2 ">
					<Link
						href={`/service-areas/${name.toLowerCase().replace(/\s+/g, "-")}`}
					>
						<Button className="cursor-pointer  hover:bg-black/90 text-[#ffde11] font-bold px-8 py-3 rounded-full border border-[#ffde11]">
							Read More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
