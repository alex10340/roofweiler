import Image from "next/image";
import ContactSection from "@/components/contact-section";

export default function Financing() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ffde11] mb-12 text-balance">
          Payments As Little As $99 Month!
        </h1>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - $0 Down */}
          <div className="flex flex-col overflow-hidden rounded-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/roof-worker.webp"
                alt="Roofing worker on roof"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#a0a09f] p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-[#ffde11] mb-2">
                $0 Down & No Payment
              </h2>
              <h3 className="text-2xl font-bold text-[#ffde11] mb-6">
                For up to 12 Months
              </h3>
              <p className="text-white text-base leading-relaxed mb-8 flex-grow">
                Selling your home? Use our 12 months No Interest/No Payments
                plan, redo your roof or windows, sell your home for an increased
                value, then pay off the loan with no interest or money out of
                pocket!
              </p>
              <button className="bg-[#1a1a1a] text-[#ffde11] font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
                Get This Offer!
              </button>
            </div>
          </div>

          {/* Card 2 - Pre-Approved */}
          <div className="flex flex-col overflow-hidden rounded-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/stacks-windows.webp"
                alt="Window frames display"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#a0a09f] p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-[#ffde11] mb-2">
                Get Pre-Approved &
              </h2>
              <h3 className="text-2xl font-bold text-[#ffde11] mb-6">
                Get $1,000 off Your Project
              </h3>
              <p className="text-white text-base leading-relaxed mb-8 flex-grow">
                You can easily get pre-approved. It's instant! And, if you get
                pre-approved before your in-home consultation with us, we'll go
                ahead and shave $1,000 off of your roofing or window project.
              </p>
              <button className="bg-[#1a1a1a] text-[#ffde11] font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
                Get This Offer!
              </button>
            </div>
          </div>

          {/* Card 3 - No Interest */}
          <div className="flex flex-col overflow-hidden rounded-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/windows.webp"
                alt="Workers installing window"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#a0a09f] p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-[#ffde11] mb-2">
                No Interest With Low
              </h2>
              <h3 className="text-2xl font-bold text-[#ffde11] mb-6">
                Payment Over 24 Months
              </h3>
              <p className="text-white text-base leading-relaxed mb-8 flex-grow">
                Protecting your home has never been easier. You can set upa
                no-interest payment plan with low payments spread out over 24
                months that works within your family's budget
              </p>
              <button className="bg-[#1a1a1a] text-[#ffde11] font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
                Get This Offer!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
