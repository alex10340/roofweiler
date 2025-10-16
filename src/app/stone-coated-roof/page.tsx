import FAQSection from "@/components/metal-roof/faq-section";
import QuoteSection from "@/components/quote-section";
import WhyChooseSection from "@/components/roofing/why-choose-section";
import SixPs from "@/components/six-ps";
import BenefitsStoneRoof from "@/components/stone-coated-roof/benefits-stone-roof";
import StoneRoofHero from "@/components/stone-coated-roof/stone-roof-hero";
import TileRoofHero from "@/components/tile-roof/tile-roof-hero";
import Image from "next/image";

export const metadata = {
  alternates: {
    canonical: "/roofing",
  },
};

export default function StoneCoatedRoof() {
  return (
    <main className="bg-[#1a1a1a]">
      <StoneRoofHero />
      <BenefitsStoneRoof />
      <WhyChooseSection />
      <div className="relative min-h-[820px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/roof-bg.webp"
            alt="Background"
            fill
            className="object-cover brightness-30 contrast-80"
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
