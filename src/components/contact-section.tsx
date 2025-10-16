import { Calendar } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="px-6 py-16 mt-16 max-w-4xl mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/assets/roof-bg.webp"
          alt="Modern building architecture"
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-[#ffffff] leading-relaxed mb-8 max-w-2xl">
            We're happy to answer all your questions, address any concerns you
            might have regarding features or pricing. If you're ready, we'll
            send you our brochure for our FREE no-pressure, no-obligation
            consultation with one of our specialists. Please let us know, and
            thank you for your time today.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#ffde11] text-[#1a1a1a] rounded-md hover:bg-[#ffde11]/90 transition-colors font-semibold w-fit">
            <Calendar className="w-5 h-5" />
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
