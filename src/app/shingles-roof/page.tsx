import FAQSection from "@/components/metal-roof/faq-section";
import QuoteSection from "@/components/quote-section";
import WhyChooseSection from "@/components/roofing/why-choose-section";
import BenefitsShingleRoof from "@/components/shingles-roof/benefits-shingle-roof";
import ShinglesRoofHero from "@/components/shingles-roof/shingles-roof-hero";
import SixPs from "@/components/six-ps";
import Image from "next/image";

export const metadata = {
  alternates: {
    canonical: "/roofing",
  },
};

export default function ShinglesRoofPage() {
  return (
    <main className="bg-[#1a1a1a]">
      <ShinglesRoofHero />
      <BenefitsShingleRoof />
      <WhyChooseSection />
      <div className="relative min-h-[820px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/tilebg.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <SixPs />
        </div>
      </div>

      <FAQSection />

      <QuoteSection />
    </main>
  );
}
