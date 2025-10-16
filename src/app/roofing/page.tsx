import Image from "next/image";
import RoofingHero from "@/components/roofing/roofing-hero";
import IssuesSection from "@/components/roofing/issues-section";
import WhyChooseSection from "@/components/roofing/why-choose-section";
import ProtectorCTA from "@/components/roofing/protector-cta";
import RoofTypesSection from "@/components/roofing/roof-types-section";
import SixPs from "@/components/six-ps";
import QuoteSection from "@/components/quote-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import BlogSection from "@/components/blog-section";

export const metadata = {
  alternates: {
    canonical: "/roofing",
  },
};

export default function RoofingPage() {
  return (
    <main>
      <RoofingHero />
      <p className="h-[120px] flex items-center justify-center text-[38px] font-bold">
        Top-Quality Roofing To Last a Lifetime Guaranteed 
      </p>
      <IssuesSection />
      <WhyChooseSection />
      <ProtectorCTA />
      <RoofTypesSection />
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/roof-bg.webp"
            alt="Background"
            fill
            className="object-cover brightness-60"
          />
        </div>
        <div className="relative z-10">
          <SixPs />
        </div>
      </div>

      <TestimonialCarousel />
      <BlogSection
        title="Read Popular & Helpful Articles"
        subtitle="From Our Roofing Blog"
      />
      <QuoteSection />
    </main>
  );
}
