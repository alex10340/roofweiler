import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ServiceAreaButtons from "./service-area-buttons";

export default function ServiceAreasHero() {
  return (
    <section className="bg-[#1a1a1a] py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          RoofWeiler Provides Top-Notch Roofing, Windows and Doors Remodeling
          Services In Miami-Dade, Broward & Palm Beach Counties
        </h1>

        {/* Yellow Subheading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#ffde11] mb-8">
          Our Thorough, Customer-First Approach Ensures Quality Results & Your
          Total Satisfaction.
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-[#d0d0d0] text-base md:text-lg leading-relaxed mb-12">
          <p>
            All across South Florida RoofWeiler is the ultimate protector for
            your home. People call us when they'll settle for nothing less than
            exceptional results, and a great remodeling experience.
          </p>
          <p>
            Being home protection specialists, we focus on nothing but what
            protects your home roofing, windows and doors – the most important
            part of any house. From Metal Re-roofing and Impact Window to
            Roofing Replacement and{" "}
            <Link href="/roofing" className="text-[#ffde11] hover:underline">
              Roofing Repairs
            </Link>
            , we can help! See the Miami-Dade, Broward and Palm Beach County
            areas where we work below.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex mb-16">
          <Button
            variant={"secondary"}
            className="bg-[#000000] hover:bg-[#000000]/90 font-bold px-8 md:px-12 py-6 text-base md:text-lg rounded-md group shadow-xl border text-white border-[#ffde11]"
          >
            Get Your Free Estimate
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Service Area Buttons */}
        <ServiceAreaButtons />
      </div>
    </section>
  );
}
