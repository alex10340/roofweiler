import Image from "next/image";

export default function ProcessSteps() {
	const steps = [
		{
			image: "/assets/schedule.webp",
			title: "SCHEDULE",
			subtitle: "APPOINTMENT",
		},
		{
			image: "/assets/in-home-consultation.webp",
			title: "IN-HOME",
			subtitle: "CONSTULATION",
		},
		{
			image: "/assets/quick-installation.webp",
			title: "QUICK",
			subtitle: "INSTALLATION",
		},
		{
			image: "/assets/complete-satisfaction.webp",
			title: "COMPLETE",
			subtitle: "SATISFACTION",
		},
	];

	return (
		<div className="w-full bg-[#ffde11] py-12 md:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					{steps.map((step, index) => (
						<div key={index} className="flex flex-col items-center">
							{/* Circular Image */}
							<div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full">
								<Image
									src={step.image}
									alt={`${step.title} ${step.subtitle}`}
									fill
									className="object-cover"
								/>
							</div>
							{/* Text */}
							<div className="text-center">
								<h3 className="text-xl font-bold text-[#000000] md:text-2xl">
									{step.title}
								</h3>
								<h3 className="text-xl font-bold text-[#000000] md:text-2xl">
									{step.subtitle}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
