import { MapPin, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import EstimateForm from "@/components/estimate-form";
import ServicesSection from "@/components/services-section";
import AboutUs from "@/components/about-us";
import SixPs from "@/components/six-ps";
import TestimonialCarousel from "@/components/testimonial-carousel";
import BlogSection from "@/components/blog-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
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
              <Image
                src="/assets/logo.webp"
                alt="Roofweiler - The Ultimate Protector for Your Roof Windows and Doors"
                width={422}
                height={58}
                priority
              />
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex items-center gap-8 font-medium">
                <li>
                  <Link
                    href="/"
                    className="text-[#ffffff] border-b-2 border-[#ffde11] pb-1 hover:text-[#ffde11] transition-colors"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[#ffffff] hover:text-[#ffde11] transition-colors"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[#ffffff] hover:text-[#ffde11] transition-colors"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[#ffffff] hover:text-[#ffde11] transition-colors"
                  >
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-[#ffffff] hover:text-[#ffde11] transition-colors"
                  >
                    BLOG
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px]">
        {/* Background Image */}
        <Image
          src="/assets/hero.webp"
          alt="Roofing Services"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Text content */}
            <div className="text-white max-w-lg pt-12">
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                Experience the RoofWeiler Difference Today!
              </h1>
              <p className="text-[#ffde11] text-xl md:text-2xl mb-6">
                We're a roofing and windows contractor that strives for honesty,
                commitment, friendliness, and responsibility in all aspects of
                our work.
              </p>
              <p className="text-[#ffde11] text-xl md:text-2xl ">
                Let us help you enhance your home with high-quality services
                that are second to none!
              </p>
            </div>

            {/* Right side - Form */}
            <div>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <ServicesSection />
      </main>

      <AboutUs />

      <SixPs />

      <TestimonialCarousel />

      <BlogSection />

      <Footer />
    </div>
  );
}
