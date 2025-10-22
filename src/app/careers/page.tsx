"use client";

import { UserIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RoofWeilerCareers() {
	const [activeTab, setActiveTab] = useState<"sales" | "canvasser">("sales");

	return (
		<div className="min-h-screen">
			{/* Hero Section with Application Form */}
			<section className="relative min-h-[500px] lg:min-h-[600px]">
				<div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
					{/* Left Side - Dark Background with Heading */}
					<div className="bg-[#1a1a1a] flex items-center justify-center px-8 py-16 lg:py-24">
						<div className="max-w-md text-center">
							<h1 className="text-[#ffde11] text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
								JOIN OUR TEAM
								<br />
								AT
								<br />
								ROOFWEILER
							</h1>
							<p className="text-white text-sm lg:text-base leading-relaxed">
								Embark on an Exciting Journey with Us. Explore Rewarding
								Opportunities for Growth and Success in the Dynamic World of
								Construction and Remodeling. Join Our Team Today!
							</p>
						</div>
					</div>

					{/* Right Side - Background Image with Form Overlay */}
					<div className="relative bg-cover bg-center min-h-[500px] lg:min-h-[600px]">
						<Image
							src="/assets/modern-luxury-house-pool.webp"
							alt="Modern house"
							fill
							className="object-cover"
							priority
						/>

						{/* Application Form Overlay */}
						<div className="absolute inset-0 flex items-center justify-center p-6">
							<div className="bg-black w-full max-w-md rounded-lg p-8 shadow-2xl">
								<h2 className="text-[#ffde11] text-2xl font-bold mb-6">
									APPLY TODAY!
								</h2>

								<form className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="text-white text-sm mb-2 block">
												First name <span className="text-[#ffde11]">*</span>
											</label>
											<Input className="bg-white border-0" required />
										</div>
										<div>
											<label className="text-white text-sm mb-2 block">
												Last name <span className="text-[#ffde11]">*</span>
											</label>
											<Input className="bg-white border-0" required />
										</div>
									</div>

									<div>
										<label className="text-white text-sm mb-2 block">
											Email <span className="text-[#ffde11]">*</span>
										</label>
										<Input
											type="email"
											className="bg-white border-0"
											required
										/>
									</div>

									<div>
										<label className="text-white text-sm mb-2 block">
											Phone <span className="text-[#ffde11]">*</span>
										</label>
										<Input type="tel" className="bg-white border-0" required />
									</div>

									<div>
										<label className="text-white text-sm mb-2 block">
											Job Applying For <span className="text-[#ffde11]">*</span>
										</label>
										<select className="w-full h-9 rounded-md px-3 bg-white border-0 text-sm">
											<option>Select Job</option>
											<option>Sales Consultant</option>
											<option>Canvasser - Miami Dade</option>
											<option>Canvasser - Broward</option>
											<option>Canvasser - Palm Beach</option>
										</select>
									</div>

									<div>
										<label className="text-white text-sm mb-2 block">
											Resume <span className="text-[#ffde11]">*</span>
										</label>
										<div className="bg-[#393939] rounded-md px-3 py-2 text-[#a0a09f] text-sm">
											Upload File
										</div>
										<p className="text-[#a0a09f] text-xs mt-1">
											Upload Accepted file types: pdf, Max. file size: 5 MB.
										</p>
									</div>

									<Button
										type="submit"
										className="w-full bg-transparent border-2 border-[#ffde11] text-[#ffde11] hover:bg-[#ffde11] hover:text-black rounded-full h-10 font-semibold transition-colors"
									>
										SEND
									</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Jobs Available Section */}
			<section className="bg-[#6e6e6e] py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-6">
						Jobs Available
					</h2>
					<p className="text-white text-center text-sm lg:text-base mb-12 max-w-3xl mx-auto">
						Join the exciting team at RoofWeiler, one of Florida's
						fastest-growing remodeling companies! We are currently seeking
						enthusiastic individuals to join our Family. Positions offers
						uncapped growth potential.
					</p>

					<div className="grid lg:grid-cols-2 gap-8 items-center">
						{/* Job Listings */}
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<UserIcon className="w-8 h-8 text-[#ffde11]" fill="#ffde11" />
								<span className="text-white text-lg">Sales Consultant</span>
							</div>
							<div className="flex items-center gap-4">
								<UserIcon className="w-8 h-8 text-[#ffde11]" fill="#ffde11" />
								<span className="text-white text-lg">
									Canvasser - Miami Dade
								</span>
							</div>
							<div className="flex items-center gap-4">
								<UserIcon className="w-8 h-8 text-[#ffde11]" fill="#ffde11" />
								<span className="text-white text-lg">Canvasser - Broward</span>
							</div>
							<div className="flex items-center gap-4">
								<UserIcon className="w-8 h-8 text-[#ffde11]" fill="#ffde11" />
								<span className="text-white text-lg">
									Canvasser - Palm Beach
								</span>
							</div>
						</div>

						{/* Worker Image */}
						<div className="flex justify-center relative w-full max-w-md mx-auto h-[300px] lg:h-[400px]">
							<Image
								src="/assets/construction-workers-on-roof-with-safety-gear.webp"
								alt="Workers on roof"
								fill
								className="rounded-lg shadow-lg object-cover"
							/>
						</div>
					</div>

					<div className="text-center mt-12">
						<Button
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							className="bg-[#ffde11] text-black hover:bg-[#ffde11]/90 font-bold px-8 h-11 rounded-md"
						>
							APPLY FOR JOB!
						</Button>
					</div>
				</div>
			</section>

			{/* Jobs Description Section */}
			<section className="bg-[#1a1a1a] py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-[#ffde11] text-3xl lg:text-4xl font-bold text-center mb-8">
						Jobs Description
					</h2>

					{/* Tab Buttons */}
					<div className="flex justify-center gap-4 mb-8">
						<button
							onClick={() => setActiveTab("sales")}
							className={`px-6 py-2 rounded-full font-semibold transition-colors ${
								activeTab === "sales"
									? "bg-[#ffde11] text-black"
									: "bg-black text-white"
							}`}
						>
							Sales Consultant
						</button>
						<button
							onClick={() => setActiveTab("canvasser")}
							className={`px-6 py-2 rounded-full font-semibold transition-colors ${
								activeTab === "canvasser"
									? "bg-[#ffde11] text-black"
									: "bg-black text-white"
							}`}
						>
							Canvasser
						</button>
					</div>

					{/* Description Content Area */}
					<div className="bg-white border-2 border-[#e6e6e6] rounded-lg p-8 min-h-[400px]">
						{activeTab === "sales" ? (
							<div className="text-[#393939]">
								<h3 className="text-2xl font-bold mb-6">Sales Consultant</h3>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">
										What Can We Offer You:
									</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>
											Earn $150,000 to $200,000+ per year in uncapped
											commissions
										</li>
										<li>Top representatives earn up to 400,000+ per year</li>
										<li>
											ALL leads are provided to you, no cold calling or door
											knocking!
										</li>
										<li>Motivated and high performing culture</li>
										<li>State of the art training program</li>
										<li>Annual trip and perks to top consultants</li>
										<li>
											Receive world-class training, no experience required
										</li>
										<li>
											Work with a team of talented, professional, and fun
											individuals who enjoy what they do
										</li>
										<li>
											Represent high quality products with the top 1% of
											professionals in the industry
										</li>
									</ul>
								</div>

								<p className="mb-6">
									As a professional outside sales representative, you'll be
									trained to deliver interactive presentations that will refine
									your communication skills and negotiation tactics to excel in
									this role. To set you up for success, our marketing teams
									supply you with pre-qualified leads. We do the legwork - You
									do not have to generate your own clients. We'll train you well
									and give you the support that you need to grow. We will train
									you thoroughly and quickly. Then, we'll watch you earn more
									money than you thought possible at this stage of your career.
								</p>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">What You'll Do:</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>
											Deliver interactive sales presentations on our products &
											services to decision-makers at their homes
										</li>
										<li>
											Apply consistent effort and a great attitude to meet sales
											goals
										</li>
										<li>Set individual sales targets</li>
										<li>Track sales goals and report results</li>
										<li>Promote company products and services</li>
										<li>Develop, present, and negotiate sales contracts</li>
										<li>
											Work a full schedule, including weekend and holiday
											flexibility
										</li>
									</ul>
								</div>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">What You'll Bring:</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>Must be self-motivated and results-oriented</li>
										<li>Exceptional customer service skills</li>
										<li>Ability to work evening and Saturday appointments</li>
										<li>Personal vehicle with valid driver's license</li>
										<li>
											In-Home Sales or Business to Consumer Sales experience
											preferred
										</li>
										<li>
											Windows and Doors, bath remodeling, roofing, HVAC sales
											experience - a plus!
										</li>
										<li>
											Bilingual skills in English and Spanish/Español - a plus!
										</li>
										<li>Ability to meet and exceed goals</li>
										<li>
											Work successfully without requiring close supervision
										</li>
									</ul>
								</div>

								<p className="text-sm">
									This is a full-time sales representative position. Criminal
									Background Checks.
								</p>
							</div>
						) : (
							<div className="text-[#393939]">
								<h3 className="text-2xl font-bold mb-6">Canvasser Role</h3>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">
										What Can We Offer You:
									</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>5% Commission with a $500/week base</li>
										<li>Earning potential $1,600 - $3,000 Weekly</li>
										<li>Leadership advancement available</li>
										<li>Immediate hiring</li>
										<li>Fun and people-oriented work environment</li>
										<li>Work-life balance</li>
									</ul>
								</div>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">
										Responsibilities: What You'll Do:
									</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>
											Engage in door-to-door canvassing in selected
											neighborhoods to raise brand awareness for RoofWeiler
										</li>
										<li>
											Schedule free in-home consultations with homeowners for
											our projects
										</li>
										<li>
											Promote RoofWeiler products and services, emphasizing
											eco-friendly, quality solutions such as energy-efficient
											impact windows/doors and roofing systems
										</li>
										<li>
											Deliver engaging marketing presentations to prospective
											and existing clients
										</li>
										<li>
											Demonstrate flexibility and willingness to work outdoors
											in various weather conditions
										</li>
									</ul>
								</div>

								<div className="mb-6">
									<h4 className="text-lg font-bold mb-3">
										Qualifications: What you'll bring:
									</h4>
									<ul className="list-disc list-inside space-y-2 ml-2">
										<li>
											Outgoing personality with excellent interpersonal skills
										</li>
										<li>Confidence and enthusiasm in public speaking</li>
										<li>Thrive in a high-energy environment</li>
										<li>Positive, energetic, and upbeat attitude</li>
										<li>Availability to work evenings and weekends</li>
									</ul>
								</div>

								<div className="mb-6">
									<p className="font-semibold mb-2">Job Type: Full-time</p>
									<p className="mb-4">Salary: $500 per week + 5% Commission</p>

									<p className="font-semibold mb-2">Benefits:</p>
									<ul className="list-disc list-inside space-y-1 ml-2 mb-4">
										<li>Employee discount</li>
										<li>Uncapped Earning Potential</li>
										<li>Referral program</li>
									</ul>

									<p className="font-semibold mb-2">Schedule:</p>
									<ul className="list-disc list-inside space-y-1 ml-2 mb-4">
										<li>Monday to Friday</li>
										<li>Weekend availability</li>
									</ul>

									<p className="font-semibold mb-2">Supplemental pay types:</p>
									<ul className="list-disc list-inside space-y-1 ml-2 mb-4">
										<li>Bonus pay</li>
										<li>Commission pay</li>
										<li>Signing bonus</li>
									</ul>

									<p className="font-semibold mb-2">Language:</p>
									<ul className="list-disc list-inside space-y-1 ml-2 mb-4">
										<li>Spanish (Preferred)</li>
										<li>English (Preferred)</li>
									</ul>

									<p className="font-semibold mb-2">License/Certification:</p>
									<ul className="list-disc list-inside space-y-1 ml-2 mb-4">
										<li>Driver's License (Preferred)</li>
									</ul>

									<p className="mb-2">Work Location: Varies by day</p>
									<p>Salary: $500.00 - $3,400.00 per week</p>
								</div>

								<div className="mb-6">
									<p className="font-semibold mb-2">Compensation package:</p>
									<ul className="list-disc list-inside space-y-1 ml-2">
										<li>Bonus opportunities</li>
										<li>Commission pay</li>
										<li>Signing bonus</li>
									</ul>
								</div>

								<div className="mb-6">
									<p className="font-semibold mb-2">Schedule:</p>
									<ul className="list-disc list-inside space-y-1 ml-2">
										<li>8-hour shift</li>
										<li>Evening shift</li>
										<li>Monday to Friday</li>
										<li>Weekends as needed</li>
									</ul>
								</div>

								<p className="italic">
									If you're ready to embark on an exciting career with a dynamic
									company, apply now! Join us at RoofWeiler and be a part of our
									journey towards growth and success.
								</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
