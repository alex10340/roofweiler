import QuoteSection from "@/components/quote-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className="grid md:grid-cols-2 min-h-[516px]">
        {/* Left Column - Text Content */}
        <div className="bg-[#1a1a1a] flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Tubular Skylights brighten your life at home with natural light.
            </h1>
            <p className="text-[#ffde11] text-base md:text-lg leading-relaxed">
              Bring beautiful, natural light into your home with Solatube’s
              innovative tubular daylighting technologies and convert dark
              spaces into places you love.
            </p>
          </div>
        </div>

        {/* Right Column - Image with Button */}
        <div className="relative min-h-[400px] md:min-h-full bg-black">
          <Image
            src="/assets/solatube-hero.webp"
            alt="Expert Solatube Services"
            fill
            className="object-cover"
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

      {/* Yellow Banner Section */}
      <section className="bg-[#ffde11] px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Bring beautiful natural light into your home.
          </h2>
          <p className="text-black text-base lg:text-lg leading-relaxed">
            Our Solatube Daylighting Systems are all about delivering maximum
            natural light into your home. Our tubular skylights are designed to
            install quickly with no major modifications to your attic or roof.
            With the most advanced technologies available—from the
            sunlight-capturing dome to the reflective tube you can feel
            confident that you have the premium skylighting system available.
          </p>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="bg-[#1a1a1a] px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <img
              src="/assets/solatube.webp"
              alt="Solatube Tubular Skylight"
              className="w-full h-auto rounded-lg"
            />

            {/* Feature Callouts */}
            <div className="absolute top-[15%] right-[5%] text-white text-sm lg:text-base">
              <div className="flex items-center gap-2 mb-3">
                <Check className="size-8 text-white" />
                <span>Brilliant Technology</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="size-8 text-white" />
                <span>Spectralight® Infinity Tubing</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="size-8 text-white" />
                <span>Integrated Solar-Electric Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-8 text-white" />
                <span>Decorative Fixtures Deliver It Beautifully.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-12">
            Natural Light for Any Area In Your Home.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/assets/natural-light1-min.webp"
                alt="Bedroom with skylight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/assets/natural-light2-min.webp"
                alt="Bathroom with skylight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/assets/natural-light3-min.webp"
                alt="Kitchen with skylight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/assets/natural-light4-min.webp"
                alt="Hallway with skylight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/assets/natural-light5-min.webp"
                alt="Kitchen island with skylight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-[#cfd3d6] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] text-center mb-16">
            More Product Features that Absolutely Shine.
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Image
                  src="/assets/solatube-features1.webp"
                  alt="Sunlight Collectors"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#000000] mb-2">
                  Sunlight Collectors
                </h2>
                <div className="w-16 h-1 bg-[#ffde11]"></div>
              </div>
              <p className="text-[#1a1a1a] leading-relaxed">
                Whether you choose our high-utility dome or our sleek, low-profile collector, you'll benefit from having the most advanced sunlight-capturing technologies available on your roof.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Image
                  src="/assets/solatube-features2.webp"
                  alt="Different Sizes & Shapes for Different Areas"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#000000] mb-2">
                  Different Sizes & Shapes for Different Areas
                </h2>
                <div className="w-16 h-1 bg-[#ffde11]"></div>
              </div>
              <p className="text-[#1a1a1a] leading-relaxed">
                We offer different tubular skylight sizes (160 DS and 290 DS, 10"- and 14"- wide tubes, respectively, with lengths up to 30') to fit different applications and spaces.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Image
                  src="/assets/solatube-features3.webp"
                  alt="Mounting for Any Roof"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#000000] mb-2">
                  Mounting for Any Roof
                </h2>
                <div className="w-16 h-1 bg-[#ffde11]"></div>
              </div>
              <p className="text-[#1a1a1a] leading-relaxed">
                Solatube has leak-proof flashing options to mount its sunlight collectors (standard and low-profile) on any roof type, from shingle to tile, and everything in between.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Image
                  src="/assets/solatube-features4.webp"
                  alt="Diffusers for Beautiful Delivery"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#000000] mb-2">
                  Diffusers for Beautiful Delivery
                </h2>
                <div className="w-16 h-1 bg-[#ffde11]"></div>
              </div>
              <p className="text-[#1a1a1a] leading-relaxed">
                We offer a full line of attractive fixtures—both round and square—that create gorgeous spaces in your home with beautiful, diffused light. Our Classic and Architect Series can add style and beauty into any decor.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Image
                  src="/assets/solatube-features5.webp"
                  alt="Add-Ons & Accessories"
                  width={400}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#000000] mb-2">
                  Add-Ons & Accessories
                </h2>
                <div className="w-16 h-1 bg-[#ffde11]"></div>
              </div>
              <p className="text-[#1a1a1a] leading-relaxed">
                From an integrated solar-powered nightlight to dimming, electric light and ventilation add-ons, you get the options you need to completely control your daylighting environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="bg-[#1a1a1a] px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Installing Your New Solatube Daylight System is Easy. See How.
          </h2>

          <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VOFw8Mb8Am0"
              title="The Solatube Premier Dealer Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <QuoteSection />
    </div>
  );
}
