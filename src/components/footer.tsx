import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top bar with contact info and social */}
      <div className="bg-[#a0a09f] py-6 px-6">
        <div className="max-w-5xl font-medium mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="tel:9547873535"
              className="flex items-center gap-2 text-[#ffffff] hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>(954) 787-3535</span>
            </a>
            <a
              href="mailto:info@roofweiler.com"
              className="flex items-center gap-2 text-[#ffffff] hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>info@roofweiler.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#ffffff]">FOLLOW US ON</span>
            <a
              href="#"
              className="text-[#ffffff] hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#ffffff] hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#1a1a1a] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Areas */}
          <div>
            <h3 className="text-[#ffde11] text-2xl font-semibold mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Miami-Dade</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Boward</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Palm Beach</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#ffde11] text-2xl font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Metal Roof</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Tile Roof</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Shingles Roof</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Stone Coated Roof</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Windows & Doors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#ffde11] text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffde11] transition-colors"
                >
                  <span className="text-[#ffde11]">›</span>
                  <span>Gear</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-[#ffde11] text-2xl font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@roofweiler.com"
                className="flex items-center gap-3 text-[#ffffff] hover:text-[#ffde11] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@roofweiler.com</span>
              </a>
              <a
                href="tel:9547873535"
                className="flex items-center gap-3 text-[#ffffff] hover:text-[#ffde11] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(954) 787-3535</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#a0a09f] py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#ffffff] text-sm">
            © Copyright 2024 by RoofWeiler LLC. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
