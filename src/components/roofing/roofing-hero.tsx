import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RoofingHero() {
  return (
    <section className="grid md:grid-cols-2 min-h-[516px]">
      {/* Left Column - Text Content */}
      <div className="bg-[#1a1a1a] flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Expert Miami-Dade, Broward and Palm Beach County Roofer
          </h1>
          <p className="text-[#ffde11] text-base md:text-lg leading-relaxed">
            Wether its a new roof, re-roofing, or a roof repair we are here to
            help you protect your home and make the process Stress Free and
            Worry Free
          </p>
        </div>
      </div>

      {/* Right Column - Image with Button */}
      <div className="relative min-h-[400px] md:min-h-full">
        <Image
          src="/assets/roofing-hero.webp"
          alt="Expert Roofing Services"
          fill
          className="object-cover brightness-50"
          priority
        />

        {/* Button centered on image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button className="bg-[#ffde11] hover:bg-[#ffde11]/90 text-black font-bold px-24 py-8 w-[310px] text-sm md:text-base rounded-md group shadow-xl">
            GET YOUR FREE ESTIMATE
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
