"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MainNav() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

	const isActive = (path: string) => {
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const getLinkClassName = (path: string) => {
		return isActive(path)
			? "text-[#ffde11] border-b-2 border-[#ffde11] pb-1 transition-colors"
			: "text-[#ffffff] hover:text-[#ffde11] border-b-2 border-transparent pb-1 transition-colors";
	};

	const getMobileLinkClassName = (path: string) => {
		return isActive(path)
			? "text-[#ffde11] font-medium"
			: "text-[#ffffff] hover:text-[#ffde11]";
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden lg:block">
				<ul className="flex items-center gap-8 font-medium">
					<li>
						<Link href="/" className={getLinkClassName("/")}>
							HOME
						</Link>
					</li>
					<li>
						<DropdownMenu>
							<DropdownMenuTrigger
								className={`flex items-center gap-1 outline-none border-b-2 ${
									isActive("/services")
										? "text-[#ffde11] border-[#ffde11]"
										: "text-[#ffffff] hover:text-[#ffde11] border-transparent"
								} transition-colors`}
							>
								SERVICES
								<ChevronDown className="w-4 h-4" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-[#000000] border-[#ffde11] text-[#ffffff]">
								<DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
									<Link href="/roofing" className="w-full">
										ROOFING
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
									<Link href="/windows-and-doors" className="w-full">
										WINDOWS AND DOORS
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
									<Link href="/commercial-roofing" className="w-full">
										COMMERCIAL ROOFING
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
									<Link href="/solatube" className="w-full">
										SOLATUBE
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</li>
					<li>
						<Link href="/about-us" className={getLinkClassName("/about-us")}>
							ABOUT US
						</Link>
					</li>
					<li>
						<Link href="/contact" className={getLinkClassName("/contact")}>
							CONTACT US
						</Link>
					</li>
					<li>
						<Link href="/blog" className={getLinkClassName("/blog")}>
							BLOG
						</Link>
					</li>
				</ul>
			</nav>

			{/* Mobile Menu Button */}
			<button
				className="lg:hidden text-[#ffffff] p-2"
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{mobileMenuOpen ? (
					<X className="w-6 h-6" />
				) : (
					<Menu className="w-6 h-6" />
				)}
			</button>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<nav className="lg:hidden absolute top-full left-0 right-0 bg-[#000000] border-t border-[#ffde11] shadow-lg z-50">
					<ul className="flex flex-col font-medium">
						<li className="border-b border-[#333333]">
							<Link
								href="/"
								className={`block px-4 py-3 ${getMobileLinkClassName("/")}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								HOME
							</Link>
						</li>
						<li className="border-b border-[#333333]">
							<button
								className={`w-full text-left px-4 py-3 flex items-center justify-between ${
									isActive("/services")
										? "text-[#ffde11] font-medium"
										: "text-[#ffffff]"
								}`}
								onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
							>
								SERVICES
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										mobileServicesOpen ? "rotate-180" : ""
									}`}
								/>
							</button>
							{mobileServicesOpen && (
								<ul className="bg-[#1a1a1a]">
									<li className="border-t border-[#333333]">
										<Link
											href="/roofing"
											className="block px-8 py-2 text-[#ffffff] hover:text-[#ffde11]"
											onClick={() => setMobileMenuOpen(false)}
										>
											ROOFING
										</Link>
									</li>
									<li className="border-t border-[#333333]">
										<Link
											href="/windows-and-doors"
											className="block px-8 py-2 text-[#ffffff] hover:text-[#ffde11]"
											onClick={() => setMobileMenuOpen(false)}
										>
											WINDOWS AND DOORS
										</Link>
									</li>
									<li className="border-t border-[#333333]">
										<Link
											href="/commercial-roofing"
											className="block px-8 py-2 text-[#ffffff] hover:text-[#ffde11]"
											onClick={() => setMobileMenuOpen(false)}
										>
											COMMERCIAL ROOFING
										</Link>
									</li>
									<li className="border-t border-[#333333]">
										<Link
											href="/solatube"
											className="block px-8 py-2 text-[#ffffff] hover:text-[#ffde11]"
											onClick={() => setMobileMenuOpen(false)}
										>
											SOLATUBE
										</Link>
									</li>
								</ul>
							)}
						</li>
						<li className="border-b border-[#333333]">
							<Link
								href="/about-us"
								className={`block px-4 py-3 ${getMobileLinkClassName("/about-us")}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								ABOUT US
							</Link>
						</li>
						<li className="border-b border-[#333333]">
							<Link
								href="/contact"
								className={`block px-4 py-3 ${getMobileLinkClassName("/contact")}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								CONTACT US
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								className={`block px-4 py-3 ${getMobileLinkClassName("/blog")}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								BLOG
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
}
