"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
	{
		question: 'How Long Does A "Typical" Re-roof Project Take?',
		answer: (
			<div className="space-y-4">
				<p>There are 2 factors that determine the length of your project.</p>
				<ol className="list-decimal list-inside space-y-2 ml-4">
					<li>In what city or county we are pulling the permits from</li>
					<li>The material you choose to do your roof with.</li>
				</ol>
				<p>
					For Miami-Dade, Broward and Palm Beach county the permit process is an
					average of 4-6 weeks. Miami on the longer side and Palm Beach on the
					shorter side.
				</p>
				<p>
					As for the material you choose it really only gets tricky with Tile
					Because if the color you like is not in stock then the wait time can
					be between 8-16 weeks. When you become our client we gather from all
					distributors in the area to see whats in stock and make the process
					shorter.
				</p>
				<p>
					All metal material take about 3 weeks to have ready and shingles are
					ready from one day to the next.
				</p>
				<p>The actual work on you house is typically around 1 week.</p>
				<p>
					In total you are looking around 2 months since you sign up with us.
				</p>
			</div>
		),
	},
	{
		question: "What Does Your Average Roofing Project Cost?",
		answer:
			"There is no accurate way to answer this as it not only depends on size of the house but shape and material of the roofing system you want. If you are worry about your budget we have plenty of solutions to help you out. You can always check out our special offers and financing pages. Remember you can always request one of our consultant to go out to your house and give you a FREE Estimate all we ask in return is that all homeowners and decision makers are present. ",
	},
	{
		question: "How do I know if my roof needs repair or replacement?",
		answer:
			"Several signs indicate your roof may need attention: missing or damaged shingles, leaks or water stains on ceilings, excessive granule loss, sagging areas, or a roof that's 20+ years old. Our team can perform a free inspection to assess your roof's condition and recommend the best course of action.",
	},
	{
		question: "What types of roofing materials do we offer?",
		answer:
			"We offer a variety of roofing materials, including asphalt shingles, metal roofing, tile roofing, stone coated metal and flat roofing options such as TPO, Modified Bitumen and EPDM.",
	},
	{
		question: "Do you provide warranties for your roofing services?",
		answer:
			"Yes, we stand behind our workmanship with warranties on both materials and labor. The length and coverage of the warranties vary depending on the type of roofing service you choose. One of our biggest difference from our competitors is our labor warranty. ",
	},
	{
		question: "What should I do if I notice a leak in my roof?",
		answer:
			"If you notice a leak, it's important to act quickly to prevent further damage. First, try to contain the water with buckets or tarps. Document the damage with photos for insurance purposes. Then contact us immediately for emergency repair services. We offer prompt response times to minimize damage to your home.",
	},
	{
		question:
			"Do you work with insurance companies for roof repairs or replacements?",
		answer:
			"Yes, we work directly with insurance companies to help streamline the claims process. We can provide detailed documentation, photos, and estimates to support your claim. Our team has extensive experience working with insurance adjusters to ensure you receive fair compensation for covered damages.",
	},
	{
		question: "Can you help with roof maintenance?",
		answer:
			"Absolutely! Regular roof maintenance can extend the life of your roof and prevent costly repairs. We offer maintenance services including inspections, cleaning, minor repairs, gutter cleaning, and preventive treatments. We recommend annual inspections to catch potential issues early.",
	},
	{
		question: "How do I know if I need a roof repair or a full replacement?",
		answer:
			"This depends on several factors including the extent of damage, age of your roof, and cost-effectiveness. Minor issues like a few damaged shingles may only require repairs. However, widespread damage, an aging roof, or recurring problems often make replacement more economical. We'll provide an honest assessment and discuss all options with you.",
	},
];

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className="bg-[#1a1a1a] py-16">
			<div className="container mx-auto px-4 max-w-5xl">
				<h2 className="text-[#ffffff] text-4xl md:text-5xl font-bold text-center mb-12">
					Frequently asked questions
				</h2>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border-b border-[#ffffff]/20 last:border-b-0"
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
							>
								<span className="text-[#ffffff] text-lg md:text-xl font-medium pr-8">
									{faq.question}
								</span>
								<div className="flex-shrink-0 text-[#ffffff]">
									{openIndex === index ? (
										<Minus className="w-6 h-6" />
									) : (
										<Plus className="w-6 h-6" />
									)}
								</div>
							</button>

							{openIndex === index && (
								<div className="pb-6 text-[#ffffff]/80 text-base md:text-lg leading-relaxed">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
