import ContactSection from "@/components/contact-section";
import QuoteSection from "@/components/quote-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { serviceAreasData, ServiceArea } from "@/data/service-areas";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static paths for all service areas
export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];

  Object.values(serviceAreasData).forEach((areas) => {
    areas.forEach((area) => {
      slugs.push({
        slug: area.name.toLowerCase().replace(/\s+/g, "-"),
      });
    });
  });

  return slugs;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const serviceArea = findServiceAreaBySlug(slug);

  if (!serviceArea) {
    return {
      title: "Service Area Not Found | Roofweiler",
      description: "The requested service area could not be found.",
    };
  }

  return {
    title: `Roofweiler | Roofing, Windows and Doors in ${serviceArea.name}`,
    description: `${serviceArea.name} homeowners trust Roofweiler for quality roofing and impact windows. Our client-focused approach ensures smooth roofing repair, shingles replacement, and impact window installation. Protect your home with our 5-star team.`,
  };
}

// Find service area by slug
function findServiceAreaBySlug(slug: string): ServiceArea | null {
  for (const areas of Object.values(serviceAreasData)) {
    const area = areas.find(
      (a) => a.name.toLowerCase().replace(/\s+/g, "-") === slug
    );
    if (area) return area;
  }
  return null;
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceArea = findServiceAreaBySlug(slug);

  if (!serviceArea) {
    notFound();
  }

  const services = [
    {
      title: "Solatube",
      description:
        "Brighten your home with Roofweiler's Solatube installation, harnessing natural light for energy-efficient, beautiful lit interiors.",
      image: "/assets/skylight-solatube-installation-on-roof.jpg",
      href: "/solatube",
    },
    {
      title: "Shingles Roof",
      description:
        "Roofweiler expertly installs durable shingles roofs, offering quality protection and aesthetic appeal for Florida homes.",
      image: "/assets/asphalt-shingles-roof-with-chimney-pipe.jpg",
      href: "/shingles-roof",
    },
    {
      title: "Tile Roof",
      description:
        "Get premium tile roofing with Roofweiler for hurricane-resistant levels, and long-lasting protection.",
      image: "/assets/terracotta-clay-tile-roof-close-up.jpg",
      href: "/tile-roof",
    },
    {
      title: "Metal Roof",
      description:
        "Roofweiler's metal roofs provide superior durability and energy efficiency, safeguarding homes in Miami-Dade, Broward and Palm Beach.",
      image: "/assets/blue-corrugated-metal-roof-panels.jpg",
      href: "/metal-roof",
    },
    {
      title: "Stone Coated Metal Roof",
      description:
        "Choose Roofweiler's stone-coated metal roofs for high-performance protection and the elegant look of traditional roofing materials.",
      image: "/assets/dark-stone-coated-metal-roof-shingles.jpg",
      href: "/stone-coated-roof",
    },
    {
      title: "Impact Windows and Doors",
      description:
        "Protect your home with Roofweiler's impact windows and doors, designed to withstand hurricanes while enhancing security and energy efficiency.",
      image: "/assets/worker-installing-impact-resistant-window.jpg",
      href: "/windows-and-doors",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[560px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute inset-0 bg-[url('/assets/area-hero.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Experience Unmatched Customer
            <br />
            Service with Roofweiler.
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-8">
            5-Star Reviews Guaranteed!
          </p>
          <Button className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-bold px-8 py-6 text-base">
            GET YOUR FREE ESTIMATE &gt;
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#6e6e6e] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Premium Roofing, Windows &<br />
            Doors Services In {serviceArea.name}, FL
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700]">
              Let Rooweiler Give Your Home
              <br />
              The Protection It Needs
            </h3>
            <div className="w-24 h-1 bg-[#FFD700]" />
            <p className="text-white leading-relaxed">
              Roofweiler brings top-tier roofing and impact windows to {serviceArea.name}
              {" "}homeowners, focusing on client-first service. Our team provides
              hassle-free roofing repair and replacement while ensuring your
              windows are hurricane-ready. Choose Roofweiler for a seamless
              experience and 5-star-rated service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden border-0 flex flex-col"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.href} className="mt-auto">
                    <Button className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-bold  cursor-pointer w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#999999] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Precision Workmanship Block */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Precision Workmanship Guarantees A Job Well Done
            </h2>
            <p className="text-white leading-relaxed">
              Premium materials only go so far – if you don't install them
              right, they won't last long. Our trained installers undergo
              rigorous training programs to ensure they know the ins and outs of
              project. This is how we guarantee we can offer precision
              workmanship on every job. We focus on every detail, including
              those you can't see when the job is done. We don't cut corners –
              we fix problems when we find them. We'll never rush a project to
              get to the next one. Instead,{" "}
              <span className="font-bold">
                we take the time to do a job right the first time.
              </span>
            </p>
            <div className="w-full h-1 bg-white" />
          </div>

          {/* Communication Block */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Communication Is Central To A Great Project
            </h2>
            <p className="text-white leading-relaxed">
              As a leader in Miami-Dade area for roofing, windows and doors, we
              understand that proactive communication is essential to a
              successful project. We always aim to be transparent, honest, and
              upfront with you. It starts with the price we give you –{" "}
              <span className="font-bold">it won't change.</span> No secret
              language in your contract indicates there will be a price hike or
              anything of the sort. We'll keep you informed at every step, so
              you'll always know where you stand with your project. We will let
              you know when we order your materials and when they are arriving
              to your location, and we'll keep you updated on the timing of your
              installation. You're never left guessing when you work with the
              pros at Roofweiler.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Google Maps Section */}
      <section className="w-full py-20 px-6 bg-[#b3b3b4]">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={serviceArea.mapUrl}
            />
          </div>
        </div>
      </section>

      <QuoteSection />
    </main>
  );
}
