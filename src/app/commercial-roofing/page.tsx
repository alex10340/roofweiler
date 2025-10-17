import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check, Circle } from "lucide-react";

export default function RoofweilerLanding() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/commercial-roofing-hero.webp)",
          }}
        ></div>
        {/* Navigation Arrows
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10">
          <ChevronRight className="w-8 h-8" />
        </button> */}
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center gap-8 mx-auto max-w-3xl">
            {/* Worker Illustration */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-32 h-48 relative">
                <img
                  src="/assets/construction-worker.webp"
                  alt="Construction worker"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                GET AN <span className="text-[#ffe023]">INSTANT QUOTE!</span>
              </h1>
              <p className="text-sm md:text-base mb-6 leading-relaxed">
                When you need expert roofing work done on your business with no
                downtime we are here to make it a No hassle process
              </p>
              <Button className="bg-[#1a1a1a] hover:bg-[#000000] text-[#ffe023] border border-[#ffe023] rounded-full px-6">
                REQUEST A FREE ESTIMATE ›
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
            Advantages of <span className="text-[#ffe023]">ROOFWEILER</span>{" "}
            Commercial Roofing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">
                Material and Labor 20 year Warranty
              </span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">Warranty against ponding water</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">No Need To replace Roof</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">No downtime for your business</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">Renewable Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Check className="w-5 h-5 text-[#ffe023] flex-shrink-0" />
              <span className="text-sm">Lower electric bills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-[#cfd3d6] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-bold text-center mb-12">
            It's No Secret. Commercial Roof Are A PAIN!
          </h2>

          {/* Commercial Roofing Problems */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative flex-shrink-0">
                <img
                  src="/assets/commercial-roof.webp"
                  alt="Commercial roof"
                  className="w-full md:w-[300px] h-[200px] object-cover rounded-lg"
                />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#ffe023]" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
                  Commercial Roofing Problems
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">UV degradation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">Screws rusting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">Seams splitting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      Hundreds of different pieces create ways for leak.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      Each roof leak costs you time and money.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      Roof repairs are temporary & cost more over time.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Don't Replace Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative flex-shrink-0 order-2 md:order-1">
                <img
                  src="/assets/flat-roofing-worker.webp"
                  alt="Worker sealing roof"
                  className="w-full md:w-[300px] h-[200px] object-cover rounded-lg"
                />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#ffe023]" />
              </div>

              <div className="flex-1 order-1 md:order-2">
                <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
                  Don't Replace your Roof, Seal it for good
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      No Downtime for your business.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">Lower Electric Bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      Less Expensive than replacing your roof.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 fill-[#ffe023] text-[#ffe023] flex-shrink-0 mt-1" />
                    <span className="text-sm">Permanent Fix.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-8 px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
            The World's <span className="text-[#ebcd11]">#1 Solution</span> for
            Commercial Roofs
          </h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="bg-[#fafafa]  pt-16 relative overflow-hidden"
        style={{
          backgroundImage: "url(/assets/worker-bg.webp)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* Card 1 */}
            <div className="bg-[#3b2013] text-white p-6 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ffe023] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#3b2013]">$</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-4 text-center">
                Pay Thousands LESS than a typical reroof
              </h3>
              <p className="text-sm text-center leading-relaxed">
                Avoid paying for a re-roof when you don't need to. With our
                proprietary application method, you won't be replacing your
                roof, just sealing it and blocking the weather out.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#3b2013] text-white p-6 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ffe023] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#3b2013]">$</span>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-4 text-center">
                Deduct 100% of the project costs this year
              </h3>
              <p className="text-sm text-center leading-relaxed">
                You can write off every penny you spend with our product this
                year. If you like, Our flat roof systems are 100% tax deductible
                this year under IRS Section 179.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#3b2013] text-white p-6 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ffe023] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#3b2013]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-4 text-center">
                Lower your energy bills up to 35% every single month
              </h3>
              <p className="text-sm text-center leading-relaxed">
                Our silicone or acrylic flat roofing systems are highly
                reflective on flat and low-sloped roofs. Energy Star certified
                to save you money. Watch your utility bills drop and save up to
                35% every single month.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#3b2013] text-white p-6 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ffe023] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#3b2013]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.93-7-5.43-7-10V8.3l7-3.11 7 3.11V10c0 4.57-3.14 9.07-7 10z" />
                  <path d="M7 12h2v5H7zm4-3h2v8h-2zm4 1h2v7h-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 mt-4 text-center">
                Keep business open and keep earning profits
              </h3>
              <p className="text-sm text-center leading-relaxed">
                You won't lose a day to lost productivity. There's no
                interruption to your normal day-to-day activities. Our certified
                technicians quietly and neatly apply the roof system during
                normal working hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#1a1a1a] py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Don't Replace your Roof, Seal it for good
            </h3>
            <Button className="bg-[#ffe023] hover:bg-[#ffde11] text-[#1a1a1a] font-bold rounded-full px-6">
              REQUEST A FREE ESTIMATE ›
            </Button>
          </div>
          <p className="text-white/70 text-center mt-4 text-sm">
            Hablamos Español
          </p>
        </div>
      </section>
    </div>
  );
}
