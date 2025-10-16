import type React from "react";
import {
  Award,
  Shield,
  Handshake,
  Activity,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import Image from "next/image";

export default function ProtectHome() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/protect-bg.webp)",
        }}
      >
        <div className="absolute inset-0 bg-[#000000]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-[#ffffff] text-5xl font-bold mb-4 text-balance">
            Protect your home & save with impact <br /> Windows and Doors
          </h1>
        </div>

        {/* Features Grid with Central Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-12">
              <Feature
                icon={<Award className="w-12 h-12" />}
                title="Lower Insurance"
              />
              <Feature
                icon={<Handshake className="w-12 h-12" />}
                title="Hurricane Protection"
              />
              <Feature
                icon={<TrendingUp className="w-12 h-12" />}
                title="Increase Property Value"
              />
            </div>

            {/* Center - Workers Image */}
            <div className="flex justify-center">
              <Image
                width="358"
                height="358"
                src="/assets/workers.webp"
                alt="Workers carrying window"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <Feature
                icon={<Shield className="w-12 h-12" />}
                title="Home Security"
              />
              <Feature
                icon={<Activity className="w-12 h-12" />}
                title="Noise & Energy Reduction"
              />
              <Feature
                icon={<FileCheck className="w-12 h-12" />}
                title="Transferable Warranty"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#ffde11] flex-shrink-0">{icon}</div>
      <h3 className="text-[#ffffff] text-xl md:text-2xl font-medium">
        {title}
      </h3>
    </div>
  );
}
