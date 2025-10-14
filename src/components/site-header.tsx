import { MapPin, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/main-nav";

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      {/* Top bar with address and links */}
      <div className="bg-[#a0a09f] text-[#1a1a1a] text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">8555 NW 29TH ST, DORAL FL 33122</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/special-offers"
              className="hover:text-[#000000] transition-colors"
            >
              SPECIAL OFFERS
            </Link>
            <Link
              href="/financing"
              className="hover:text-[#000000] transition-colors"
            >
              FINANCING
            </Link>
            <Link
              href="/service-area"
              className="hover:text-[#000000] transition-colors"
            >
              SERVICE AREA
            </Link>
            <button className="relative hover:text-[#000000] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-2 bg-[#ffffff] text-[#000000] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <header className="bg-[#000000] text-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <div>
              <Link href="/">
                <Image
                  src="/assets/logo.webp"
                  alt="Roofweiler - The Ultimate Protector for Your Roof Windows and Doors"
                  width={422}
                  height={58}
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <MainNav />
          </div>
        </div>
      </header>
    </div>
  );
}
