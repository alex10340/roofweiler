import { CreditCard, Gift } from "lucide-react";
import ContactSection from "@/components/contact-section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#ffffff]">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          No Other Local Miami-Dade, Broward And Palm Beach County Roofing and
          Window Contractor.
        </h1>
        <p className="text-[#ffde11] text-lg md:text-xl font-medium">
          Let's You Stack Discounts Like RoofWeiler
        </p>
      </section>

      {/* Discounts Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-16">
        {/* $1000 Pre-Approval Financing Discount */}
        <div className="space-y-6">
          <h2 className="text-[#ffde11] text-2xl md:text-3xl font-bold">
            $1000 Pre-Approval Financing Discount
          </h2>
          <p className="text-[#ffffff] leading-relaxed">
            You can easily get pre-approved. It's instant! And, if you get
            pre-approved before your in-home consultation with us, we'll go
            ahead and shave $1,000 off of your roofing or window project.
          </p>
          <Link href="/financing" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#ffde11] text-[#ffde11] rounded-md hover:bg-[#ffde11] hover:text-[#1a1a1a] transition-colors w-fit">
            <CreditCard className="w-5 h-5" />
            Financing Offers
          </Link>
        </div>

        {/* Give $500, Get $500 Referral Program */}
        <div className="space-y-6">
          <h2 className="text-[#ffde11] text-2xl md:text-3xl font-bold">
            Give $500, Get $500 Referral Program
          </h2>
          <p className="text-[#ffffff] leading-relaxed">
            When you refer someone to us and they sign a sales contract for our
            services, they'll receive a $500 discount... and YOU will receive a
            $500 gift card. Win-Win!
             {/* Send your friends and family to this page:{" "}
            <span className="underline">
              Give $500, Get $500 Referral Program
            </span> */}
          </p>
          {/* <button className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#ffde11] text-[#ffde11] rounded-md hover:bg-[#ffde11] hover:text-[#1a1a1a] transition-colors">
            <Gift className="w-5 h-5" />
            Referral Program
          </button> */}
        </div>

        {/* Military, Police, Firefighter & Teacher Discount */}
        <div className="space-y-6">
          <h2 className="text-[#ffde11] text-2xl md:text-3xl font-bold">
            Military, Police, Firefighter & Teacher Discount
          </h2>
          <p className="text-[#ffffff] leading-relaxed">
            Make sure you let your home specialist know that you belong one of
            the following groups so they can include a 5% discount on your
            roofing and/or Window and door estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
