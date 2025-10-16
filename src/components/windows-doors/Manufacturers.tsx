import Image from "next/image";

export default function Manufacturers() {
  const manufacturers = [
    { name: "PGT WinGuard", logo: "/assets/pgt-winguard.webp" },
    { name: "CGI Impact Resistant Windows & Doors", logo: "/assets/cgi-logo.webp" },
    { name: "Pella", logo: "/assets/pella-logo.webp" },
    { name: "ES Windows", logo: "/assets/es-logo.webp" },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <h2 className="mb-12 text-center text-3xl font-bold text-[#000000] md:mb-16 md:text-4xl lg:text-5xl">
          Our Manufacturers
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 items-center gap-8 md:gap-12 lg:grid-cols-4 lg:gap-16">
          {manufacturers.map((manufacturer, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="relative h-20 w-full md:h-24">
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
