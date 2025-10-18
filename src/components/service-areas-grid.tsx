import ServiceAreaCard from "./service-areas-card";

interface ServiceArea {
  name: string;
  address: string;
  description: string;
  mapUrl: string;
}

interface ServiceAreaGridProps {
  county: string;
  areas: ServiceArea[];
}

export default function ServiceAreaGrid({
  county,
  areas,
}: ServiceAreaGridProps) {
  return (
    <div className="py-12 md:py-16" id={county.toLowerCase().replace(/\s+/g, '-')}>
      {/* County Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#ffde11] text-center mb-10">
        {county}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {areas.map((area, index) => (
          <ServiceAreaCard
            key={index}
            name={area.name}
            address={area.address}
            description={area.description}
            mapUrl={area.mapUrl}
          />
        ))}
      </div>
    </div>
  );
}
