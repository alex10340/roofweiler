"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function MainNav() {
  const pathname = usePathname();

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

  return (
    <nav>
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
                <Link href="/services/roofing" className="w-full">
                  ROOFING
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
                <Link href="/services/windows-and-doors" className="w-full">
                  WINDOWS AND DOORS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
                <Link href="/services/commercial-roofing" className="w-full">
                  COMMERCIAL ROOFING
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#1a1a1a] hover:text-[#ffde11] cursor-pointer">
                <Link href="/services/solatube" className="w-full">
                  SOLATUBE
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link href="/about" className={getLinkClassName("/about")}>
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
  );
}
