import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutUs from "@/components/about-us";
import SixPs from "@/components/six-ps";
import TestimonialCarousel from "@/components/testimonial-carousel";
import BlogSection from "@/components/blog-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <HeroSection />

      {/* Additional sections */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <ServicesSection />
      </main>

      <AboutUs />

      <SixPs />

      <TestimonialCarousel />

      <BlogSection />
    </div>
  );
}
