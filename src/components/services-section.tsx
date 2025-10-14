import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="bg-[#1a1a1a] pt-8 pb-28">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          OUR SERVICES
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {/* Roofing Service */}
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center mb-6 h-24">
              <Image
                src="/assets/roofing.svg"
                alt="Roofing Icon"
                width={172}
                height={68}
              />
            </div>
            <h3 className="text-4xl font-bold text-white">Roofing</h3>
            <p className="text-white text-pretty leading-relaxed max-w-sm mx-auto">
              RoofWeiler offers a wide range of roofing services to homeowners &
              businesses. Our experienced team can repair, replace, or install
              any type of roof.
            </p>
          </div>

          {/* Windows & Doors Service */}
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center mb-6 h-24">
              <Image
                src="/assets/windows-doors.svg"
                alt="Windows & Doors Icon"
                width={97}
                height={96}
              />
            </div>
            <h3 className="text-4xl font-bold text-white">Windows & Doors</h3>
            <p className="text-white text-pretty leading-relaxed max-w-sm mx-auto">
              At RoofWeiler, we understand the importance of windows in your
              home or business. We offer window repair and replacement services
              to keep your property safe and energy-efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
