"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import BlogFilterContext from "@/contexts/BlogFilterContext";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeFilter, setActiveFilter] = useState<string>("All Posts");
	const router = useRouter();
	const pathname = usePathname();

	const handleFilterClick = (filter: string) => {
		setActiveFilter(filter);
		// If not on the main blog page, navigate back to it
		if (pathname !== "/blog") {
			router.push("/blog");
		}
	};

	return (
		<BlogFilterContext.Provider value={{ activeFilter, setActiveFilter }}>
			{/* Navigation Tabs */}
			<nav className="border-b border-[#2a2a2a] bg-[#1a1a1a]">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex gap-8">
						<button
							onClick={() => handleFilterClick("All Posts")}
							className={`py-4 transition-colors ${
								activeFilter === "All Posts"
									? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
									: "text-[#a0a09f] hover:text-[#ffffff]"
							}`}
						>
							All Posts
						</button>
						<button
							onClick={() => handleFilterClick("Roofing")}
							className={`py-4 transition-colors ${
								activeFilter === "Roofing"
									? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
									: "text-[#a0a09f] hover:text-[#ffffff]"
							}`}
						>
							Roofing
						</button>
						<button
							onClick={() => handleFilterClick("Windows & Doors")}
							className={`py-4 transition-colors ${
								activeFilter === "Windows & Doors"
									? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
									: "text-[#a0a09f] hover:text-[#ffffff]"
							}`}
						>
							Windows & Doors
						</button>
					</div>
				</div>
			</nav>

			{/* Page Content */}
			{children}
		</BlogFilterContext.Provider>
	);
}
