export interface ServiceArea {
	name: string;
	address: string;
	description: string;
	mapUrl: string;
}

export interface ServiceAreasData {
	[county: string]: ServiceArea[];
}

// Helper function to generate Google Maps embed URL using place query
const getMapUrl = (cityName: string): string => {
	const encodedCity = encodeURIComponent(cityName);
	return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedCity}&zoom=12`;
};

export const serviceAreasData: ServiceAreasData = {
	"Miami-Dade": [
		{
			name: "Aventura",
			address: "Aventura, FL, USA",
			description:
				"Roofweiler: Aventura's leading roofing and impact windows company, providing client-first hurricane protection.",
			mapUrl: getMapUrl("Aventura, FL, USA"),
		},
		{
			name: "Coral Gables",
			address: "Coral Gables, FL, USA",
			description:
				"Roofing and impact windows tailored for Coral Gables, Roofweiler brings hurricane protection with a friendly touch.",
			mapUrl: getMapUrl("Coral Gables, FL, USA"),
		},
		{
			name: "El Portal",
			address: "El Portal, FL, USA",
			description:
				"Roofweiler provides El Portal residents reliable roofing and impact windows with friendly customer service.",
			mapUrl: getMapUrl("El Portal, FL, USA"),
		},
		{
			name: "Hialeah Gardens",
			address: "Hialeah Gardens, FL, USA",
			description:
				"Roofweiler brings Hialeah Gardens high-quality roofing and impact windows with excellent customer service.",
			mapUrl: getMapUrl("Hialeah Gardens, FL, USA"),
		},
		{
			name: "Key Biscayne",
			address: "Key Biscayne, FL, USA",
			description:
				"Roofweiler offers Key Biscayne premium roofing and impact windows, providing reliable hurricane protection.",
			mapUrl: getMapUrl("Key Biscayne, FL, USA"),
		},
		{
			name: "Miami Beach",
			address: "Miami Beach, FL, USA",
			description:
				"Protect your Miami Beach home with Roofweiler's top-rated roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Miami Beach, FL, USA"),
		},
		{
			name: "Miami Shores",
			address: "Miami Shores, FL, USA",
			description:
				"For roofing and impact windows in Miami Shores, trust Roofweiler's client-first approach.",
			mapUrl: getMapUrl("Miami Shores, FL, USA"),
		},
		{
			name: "North Miami Beach",
			address: "North Miami Beach, FL, USA",
			description:
				"Roofweiler delivers North Miami Beach high-quality roofing and impact windows with exceptional customer service.",
			mapUrl: getMapUrl("North Miami Beach, FL, USA"),
		},
		{
			name: "Pinecrest",
			address: "Pinecrest, FL, USA",
			description:
				"Roofweiler: Pinecrest's trusted partner for roofing and impact windows, ensuring client-first service.",
			mapUrl: getMapUrl("Pinecrest, FL, USA"),
		},
		{
			name: "Surfside",
			address: "Surfside, FL, USA",
			description:
				"Surfside residents count on Roofweiler for reliable roofing and impact windows, ensuring hurricane protection.",
			mapUrl: getMapUrl("Surfside, FL, USA"),
		},
		{
			name: "West Miami",
			address: "West Miami, FL, USA",
			description:
				"For roofing and impact windows in West Miami, Roofweiler provides reliable hurricane protection.",
			mapUrl: getMapUrl("West Miami, FL, USA"),
		},
		{
			name: "Bal Harbour",
			address: "Bal Harbour, FL, USA",
			description:
				"For premium roofing and impact windows in Bal Harbour, trust Roofweiler's client-first approach.",
			mapUrl: getMapUrl("Bal Harbour, FL, USA"),
		},
		{
			name: "Cutler Bay",
			address: "Cutler Bay, FL, USA",
			description:
				"Roofweiler's roofing and impact windows keep Cutler Bay homes safe and hurricane-ready.",
			mapUrl: getMapUrl("Cutler Bay, FL, USA"),
		},
		{
			name: "Golden Beach",
			address: "Golden Beach, FL, USA",
			description:
				"Golden Beach homeowners trust Roofweiler's roofing and impact windows for reliable hurricane protection.",
			mapUrl: getMapUrl("Golden Beach, FL, USA"),
		},
		{
			name: "Homestead",
			address: "Homestead, FL, USA",
			description:
				"Secure your Homestead home with roofing and impact windows by Roofweiler, the trusted local roofing company.",
			mapUrl: getMapUrl("Homestead, FL, USA"),
		},
		{
			name: "Medley",
			address: "Medley, FL, USA",
			description:
				"Roofweiler's expert roofing contractors bring Medley roofing and impact windows with a client-first focus.",
			mapUrl: getMapUrl("Medley, FL, USA"),
		},
		{
			name: "Miami Gardens",
			address: "Miami Gardens, FL, USA",
			description:
				"Protect your Miami Gardens home with roofing and impact windows by Roofweiler, your trusted roofing contractors.",
			mapUrl: getMapUrl("Miami Gardens, FL, USA"),
		},
		{
			name: "Miami Springs",
			address: "Miami Springs, FL, USA",
			description:
				"For roofing and impact windows in Miami Springs, trust Roofweiler's expert roofing contractors.",
			mapUrl: getMapUrl("Miami Springs, FL, USA"),
		},
		{
			name: "Opa-Locka",
			address: "Opa-locka, FL, USA",
			description:
				"Upgrade your Opa-Locka home with Roofweiler's roofing and impact windows for reliable hurricane protection.",
			mapUrl: getMapUrl("Opa-locka, FL, USA"),
		},
		{
			name: "South Miami",
			address: "South Miami, FL, USA",
			description:
				"Roofweiler brings South Miami quality roofing and impact windows, delivering reliable hurricane protection.",
			mapUrl: getMapUrl("South Miami, FL, USA"),
		},
		{
			name: "Sweetwater",
			address: "Sweetwater, FL, USA",
			description:
				"Roofweiler brings Sweetwater homeowners premium roofing and impact windows with client-first service.",
			mapUrl: getMapUrl("Sweetwater, FL, USA"),
		},
		{
			name: "Bay Harbor Islands",
			address: "Bay Harbor Islands, FL, USA",
			description:
				"Roofweiler offers Bay Harbor Islands reliable roofing and impact windows for comprehensive hurricane protection.",
			mapUrl: getMapUrl("Bay Harbor Islands, FL, USA"),
		},
		{
			name: "Doral",
			address: "Doral, FL, USA",
			description:
				"Roofweiler offers Doral roofing and impact windows, ensuring comprehensive hurricane protection with client-first service.",
			mapUrl: getMapUrl("Doral, FL, USA"),
		},
		{
			name: "Hialeah",
			address: "Hialeah, FL, USA",
			description:
				"Roofweiler: Hialeah's go-to roofing company for all roofing and energy-efficient impact windows, all with a client-first focus.",
			mapUrl: getMapUrl("Hialeah, FL, USA"),
		},
		{
			name: "Indian Creek",
			address: "Indian Creek, FL, USA",
			description:
				"Indian Creek relies on Roofweiler for roofing and impact windows with comprehensive hurricane protection.",
			mapUrl: getMapUrl("Indian Creek, FL, USA"),
		},
		{
			name: "Miami",
			address: "Miami, FL, USA",
			description:
				"Roofweiler: Miami's trusted roofing and impact windows experts, specializing in all roofing and hurricane protection with client-first service.",
			mapUrl: getMapUrl("Miami, FL, USA"),
		},
		{
			name: "Miami Lakes",
			address: "Miami Lakes, FL, USA",
			description:
				"Roofweiler: Miami Lakes' go-to for roofing and impact windows, delivering top-notch hurricane safety.",
			mapUrl: getMapUrl("Miami Lakes, FL, USA"),
		},
		{
			name: "North Miami",
			address: "North Miami, FL, USA",
			description:
				"Keep your North Miami home hurricane-safe with Roofweiler's expert reroofing and impact windows solutions.",
			mapUrl: getMapUrl("North Miami, FL, USA"),
		},
		{
			name: "Palmetto Bay",
			address: "Palmetto Bay, FL, USA",
			description:
				"Roofweiler provides Palmetto Bay with reliable roofing and impact windows, offering comprehensive hurricane protection.",
			mapUrl: getMapUrl("Palmetto Bay, FL, USA"),
		},
		{
			name: "Sunny Isles Beach",
			address: "Sunny Isles Beach, FL, USA",
			description:
				"Upgrade your Sunny Isles Beach home with Roofweiler's roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Sunny Isles Beach, FL, USA"),
		},
		{
			name: "Virginia Gardens",
			address: "Virginia Gardens, FL, USA",
			description:
				"Roofweiler offers Virginia Gardens premium roofing and impact windows, keeping homes hurricane-ready.",
			mapUrl: getMapUrl("Virginia Gardens, FL, USA"),
		},
	],
	Broward: [
		{
			name: "Coconut Creek",
			address: "Coconut Creek, FL, USA",
			description:
				"Roofweiler provides Coconut Creek reliable roofing and impact windows with friendly customer service.",
			mapUrl: getMapUrl("Coconut Creek, FL, USA"),
		},
		{
			name: "Dania Beach",
			address: "Dania Beach, FL, USA",
			description:
				"Roofweiler's roofing and impact windows keep Dania Beach homes safe and hurricane-ready.",
			mapUrl: getMapUrl("Dania Beach, FL, USA"),
		},
		{
			name: "Fort Lauderdale",
			address: "Fort Lauderdale, FL, USA",
			description:
				"Roofweiler: Fort Lauderdale's trusted roofing company for roofing and impact windows with 5-star service.",
			mapUrl: getMapUrl("Fort Lauderdale, FL, USA"),
		},
		{
			name: "Hollywood",
			address: "Hollywood, FL, USA",
			description:
				"Roofweiler provides Hollywood reliable roofing and impact windows, ensuring comprehensive hurricane protection.",
			mapUrl: getMapUrl("Hollywood, FL, USA"),
		},
		{
			name: "Lighthouse Point",
			address: "Lighthouse Point, FL, USA",
			description:
				"Lighthouse Point relies on Roofweiler's roofing and impact windows for exceptional hurricane protection.",
			mapUrl: getMapUrl("Lighthouse Point, FL, USA"),
		},
		{
			name: "North Lauderdale",
			address: "North Lauderdale, FL, USA",
			description:
				"North Lauderdale homeowners rely on Roofweiler's roofing and impact windows for premium hurricane protection.",
			mapUrl: getMapUrl("North Lauderdale, FL, USA"),
		},
		{
			name: "Pembroke Pines",
			address: "Pembroke Pines, FL, USA",
			description:
				"Pembroke Pines relies on Roofweiler's roofing and impact windows for exceptional hurricane protection.",
			mapUrl: getMapUrl("Pembroke Pines, FL, USA"),
		},
		{
			name: "Sea Ranch Lakes",
			address: "Sea Ranch Lakes, FL, USA",
			description:
				"Roofweiler provides Sea Ranch Lakes reliable roofing and impact windows with a client-first focus.",
			mapUrl: getMapUrl("Sea Ranch Lakes, FL, USA"),
		},
		{
			name: "Tamarac",
			address: "Tamarac, FL, USA",
			description:
				"Tamarac relies on Roofweiler's roofing and impact windows for premium hurricane protection.",
			mapUrl: getMapUrl("Tamarac, FL, USA"),
		},
		{
			name: "Cooper City",
			address: "Cooper City, FL, USA",
			description:
				"Cooper City residents trust Roofweiler's roofing and impact windows for comprehensive hurricane safety.",
			mapUrl: getMapUrl("Cooper City, FL, USA"),
		},
		{
			name: "Davie",
			address: "Davie, FL, USA",
			description:
				"Roofweiler's roofing and impact windows solutions provide Davie homeowners with comprehensive hurricane safety.",
			mapUrl: getMapUrl("Davie, FL, USA"),
		},
		{
			name: "Hallandale Beach",
			address: "Hallandale Beach, FL, USA",
			description:
				"Roofweiler's expert roofing contractors bring Hallandale Beach high-quality roofing and impact windows.",
			mapUrl: getMapUrl("Hallandale Beach, FL, USA"),
		},
		{
			name: "Lauderdale Lakes",
			address: "Lauderdale Lakes, FL, USA",
			description:
				"Lauderdale Lakes counts on Roofweiler's roofing and impact windows for reliable hurricane protection.",
			mapUrl: getMapUrl("Lauderdale Lakes, FL, USA"),
		},
		{
			name: "Margate",
			address: "Margate, FL, USA",
			description:
				"Roofweiler's roofing and impact windows keep Margate homes safe and hurricane-ready.",
			mapUrl: getMapUrl("Margate, FL, USA"),
		},
		{
			name: "Oakland Park",
			address: "Oakland Park, FL, USA",
			description:
				"Roofweiler offers Oakland Park reliable roofing and impact windows with excellent customer service.",
			mapUrl: getMapUrl("Oakland Park, FL, USA"),
		},
		{
			name: "Plantation",
			address: "Plantation, FL, USA",
			description:
				"Roofweiler offers Plantation reliable roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Plantation, FL, USA"),
		},
		{
			name: "Southwest Ranches",
			address: "Southwest Ranches, FL, USA",
			description:
				"Roofweiler's expert roofing contractors bring Southwest Ranches premium roofing and impact windows.",
			mapUrl: getMapUrl("Southwest Ranches, FL, USA"),
		},
		{
			name: "Weston",
			address: "Weston, FL, USA",
			description:
				"Upgrade your Weston home with Roofweiler's roofing and impact windows, offering reliable hurricane safety.",
			mapUrl: getMapUrl("Weston, FL, USA"),
		},
		{
			name: "Coral Springs",
			address: "Coral Springs, FL, USA",
			description:
				"Roofweiler's expert roofing contractors deliver Coral Springs high-quality roofing and impact windows.",
			mapUrl: getMapUrl("Coral Springs, FL, USA"),
		},
		{
			name: "Deerfield Beach",
			address: "Deerfield Beach, FL, USA",
			description:
				"Roofweiler's roofing and impact windows provide Deerfield Beach homeowners with comprehensive hurricane protection.",
			mapUrl: getMapUrl("Deerfield Beach, FL, USA"),
		},
		{
			name: "Hillsboro Beach",
			address: "Hillsboro Beach, FL, USA",
			description:
				"Roofweiler's roofing and impact windows ensure Hillsboro Beach homeowners have reliable hurricane safety.",
			mapUrl: getMapUrl("Hillsboro Beach, FL, USA"),
		},
		{
			name: "Lauderhill",
			address: "Lauderhill, FL, USA",
			description:
				"Roofweiler: Lauderhill's trusted partner for roofing and impact windows, ensuring client-first service.",
			mapUrl: getMapUrl("Lauderhill, FL, USA"),
		},
		{
			name: "Miramar",
			address: "Miramar, FL, USA",
			description:
				"Roofweiler offers Miramar top-rated roofing and impact windows with excellent customer service.",
			mapUrl: getMapUrl("Miramar, FL, USA"),
		},
		{
			name: "Parkland",
			address: "Parkland, FL, USA",
			description:
				"Roofweiler provides Parkland reliable roofing and impact windows with a client-first approach.",
			mapUrl: getMapUrl("Parkland, FL, USA"),
		},
		{
			name: "Pompano Beach",
			address: "Pompano Beach, FL, USA",
			description:
				"Roofweiler: Pompano Beach's go-to for roofing and impact windows, ensuring reliable hurricane protection.",
			mapUrl: getMapUrl("Pompano Beach, FL, USA"),
		},
		{
			name: "Sunrise",
			address: "Sunrise, FL, USA",
			description:
				"Roofweiler delivers Sunrise expert roofing and impact windows with a client-first focus.",
			mapUrl: getMapUrl("Sunrise, FL, USA"),
		},
		{
			name: "Wilton Manors",
			address: "Wilton Manors, FL, USA",
			description:
				"Roofweiler delivers Wilton Manors high-quality roofing and impact windows for comprehensive hurricane protection.",
			mapUrl: getMapUrl("Wilton Manors, FL, USA"),
		},
	],
	"Palm Beach": [
		{
			name: "Atlantis",
			address: "Atlantis, FL, USA",
			description:
				"Roofweiler's expert roofing contractors deliver Atlantis high-quality re-roofing and impact windows.",
			mapUrl: getMapUrl("Atlantis, FL, USA"),
		},
		{
			name: "Boynton Beach",
			address: "Boynton Beach, FL, USA",
			description:
				"Roofweiler's roofing and impact windows solutions provide Boynton Beach comprehensive hurricane protection.",
			mapUrl: getMapUrl("Boynton Beach, FL, USA"),
		},
		{
			name: "Delray Beach",
			address: "Delray Beach, FL, USA",
			description:
				"Roofweiler brings Delray Beach homeowners reliable roofing and impact windows for premium hurricane safety.",
			mapUrl: getMapUrl("Delray Beach, FL, USA"),
		},
		{
			name: "Greenacres",
			address: "Greenacres, FL, USA",
			description:
				"Greenacres residents count on Roofweiler's roofing and impact windows for exceptional hurricane protection.",
			mapUrl: getMapUrl("Greenacres, FL, USA"),
		},
		{
			name: "Highland Beach",
			address: "Highland Beach, FL, USA",
			description:
				"Upgrade your Highland Beach home with Roofweiler's roofing and impact windows, offering reliable hurricane safety.",
			mapUrl: getMapUrl("Highland Beach, FL, USA"),
		},
		{
			name: "Jupiter",
			address: "Jupiter, FL, USA",
			description:
				"Roofweiler delivers Jupiter expert roofing and impact windows with a client-first focus.",
			mapUrl: getMapUrl("Jupiter, FL, USA"),
		},
		{
			name: "Lake Park",
			address: "Lake Park, FL, USA",
			description:
				"Roofweiler's expert roofing contractors bring Lake Park premium roofing and impact windows.",
			mapUrl: getMapUrl("Lake Park, FL, USA"),
		},
		{
			name: "Loxahatchee Groves",
			address: "Loxahatchee Groves, FL, USA",
			description:
				"Roofweiler's roofing and impact windows ensure Loxahatchee homeowners have reliable hurricane safety.",
			mapUrl: getMapUrl("Loxahatchee Groves, FL, USA"),
		},
		{
			name: "North Palm Beach",
			address: "North Palm Beach, FL, USA",
			description:
				"Roofweiler: North Palm Beach leading roofing and impact windows company, providing client-first hurricane protection.",
			mapUrl: getMapUrl("North Palm Beach, FL, USA"),
		},
		{
			name: "Palm Beach Gardens",
			address: "Palm Beach Gardens, FL, USA",
			description:
				"Roofweiler: Palm Beach Gardens' trusted roofing company for roofing and impact windows with client-first focus.",
			mapUrl: getMapUrl("Palm Beach Gardens, FL, USA"),
		},
		{
			name: "Riviera Beach",
			address: "Riviera Beach, FL, USA",
			description:
				"Roofweiler brings Riviera Beach homeowners quality roofing and impact windows with comprehensive hurricane protection.",
			mapUrl: getMapUrl("Riviera Beach, FL, USA"),
		},
		{
			name: "South Palm Beach",
			address: "South Palm Beach, FL, USA",
			description:
				"Roofing and impact windows tailored for South Palm Beach, Roofweiler brings hurricane protection with a friendly touch.",
			mapUrl: getMapUrl("South Palm Beach, FL, USA"),
		},
		{
			name: "West Palm Beach",
			address: "West Palm Beach, FL, USA",
			description:
				"Roofweiler's roofing and impact windows provide West Palm Beach homeowners with comprehensive hurricane protection.",
			mapUrl: getMapUrl("West Palm Beach, FL, USA"),
		},
		{
			name: "Belle Glade",
			address: "Belle Glade, FL, USA",
			description:
				"Roofweiler offers Belle Glade top-rated roofing and impact windows with excellent customer service.",
			mapUrl: getMapUrl("Belle Glade, FL, USA"),
		},
		{
			name: "Briny Breezes",
			address: "Briny Breezes, FL, USA",
			description:
				"Briny Breezes relies on Roofweiler's roofing and impact windows for exceptional hurricane protection.",
			mapUrl: getMapUrl("Briny Breezes, FL, USA"),
		},
		{
			name: "Glen Ridge",
			address: "Glen Ridge, FL, USA",
			description:
				"Roofweiler's expert roofing contractors bring Glen Ridge high-quality roofing and impact windows.",
			mapUrl: getMapUrl("Glen Ridge, FL, USA"),
		},
		{
			name: "Gulf Stream",
			address: "Gulf Stream, FL, USA",
			description:
				"Roofweiler's roofing and impact windows keep Gulf Stream homes safe and hurricane-ready.",
			mapUrl: getMapUrl("Gulf Stream, FL, USA"),
		},
		{
			name: "Hypoluxo",
			address: "Hypoluxo, FL, USA",
			description:
				"Roofweiler's roofing and impact windows provide Hypoluxo homeowners with comprehensive hurricane protection.",
			mapUrl: getMapUrl("Hypoluxo, FL, USA"),
		},
		{
			name: "Jupiter Inlet Colony",
			address: "Jupiter Inlet Colony, FL, USA",
			description:
				"Roofweiler's roofing and impact windows solutions provide Jupiter Inlet Colony homeowners with comprehensive hurricane safety.",
			mapUrl: getMapUrl("Jupiter Inlet Colony, FL, USA"),
		},
		{
			name: "Lake Worth Beach",
			address: "Lake Worth Beach, FL, USA",
			description:
				"Roofweiler delivers Lake Worth Beach reliable roofing and impact windows with friendly customer service.",
			mapUrl: getMapUrl("Lake Worth Beach, FL, USA"),
		},
		{
			name: "Manalapan",
			address: "Manalapan, FL, USA",
			description:
				"Roofweiler offers Manalapan premium roofing and impact windows, providing reliable hurricane protection.",
			mapUrl: getMapUrl("Manalapan, FL, USA"),
		},
		{
			name: "Ocean Ridge",
			address: "Ocean Ridge, FL, USA",
			description:
				"Protect your Ocean Ridge home with roofing and impact windows by Roofweiler, your trusted roofing contractors.",
			mapUrl: getMapUrl("Ocean Ridge, FL, USA"),
		},
		{
			name: "Palm Beach Shores",
			address: "Palm Beach Shores, FL, USA",
			description:
				"Keep your Palm Beach Shores home hurricane-safe with Roofweiler's expert roofing and impact windows solutions.",
			mapUrl: getMapUrl("Palm Beach Shores, FL, USA"),
		},
		{
			name: "Royal Palm Beach",
			address: "Royal Palm Beach, FL, USA",
			description:
				"Secure your Royal Palm Beach home with roofing and impact windows by Roofweiler, the trusted local roofing company.",
			mapUrl: getMapUrl("Royal Palm Beach, FL, USA"),
		},
		{
			name: "Tequesta",
			address: "Tequesta, FL, USA",
			description:
				"Roofweiler: Tequesta go-to roofing company for your roofing and energy-efficient impact windows, all with a client-first focus.",
			mapUrl: getMapUrl("Tequesta, FL, USA"),
		},
		{
			name: "Westlake",
			address: "Westlake, FL, USA",
			description:
				"Roofweiler: Westlake's trusted roofing and impact windows experts, specializing in roofing and hurricane protection with client-first service.",
			mapUrl: getMapUrl("Westlake, FL, USA"),
		},
		{
			name: "Boca Raton",
			address: "Boca Raton, FL, USA",
			description:
				"Roofweiler: Boca Raton's leading roofing and impact windows company with 5-star customer service.",
			mapUrl: getMapUrl("Boca Raton, FL, USA"),
		},
		{
			name: "Cloud Lake",
			address: "Cloud Lake, FL, USA",
			description:
				"Roofweiler provides Cloud Lake reliable roofing and impact windows with friendly customer service.",
			mapUrl: getMapUrl("Cloud Lake, FL, USA"),
		},
		{
			name: "Golf",
			address: "Golf, FL, USA",
			description:
				"Roofweiler provides Golf reliable roofing and impact windows with friendly customer service.",
			mapUrl: getMapUrl("Golf, FL, USA"),
		},
		{
			name: "Haverhill",
			address: "Haverhill, FL, USA",
			description:
				"Haverhill relies on Roofweiler's roofing and impact windows for premium hurricane protection.",
			mapUrl: getMapUrl("Haverhill, FL, USA"),
		},
		{
			name: "Juno Beach",
			address: "Juno Beach, FL, USA",
			description:
				"Roofweiler offers Juno Beach reliable roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Juno Beach, FL, USA"),
		},
		{
			name: "Lake Clarke Shores",
			address: "Lake Clarke Shores, FL, USA",
			description:
				"Roofweiler: Lake Clarke Shores' go-to for roofing and impact windows, ensuring reliable hurricane protection.",
			mapUrl: getMapUrl("Lake Clarke Shores, FL, USA"),
		},
		{
			name: "Lantana",
			address: "Lantana, FL, USA",
			description:
				"Lantana relies on Roofweiler's roofing and impact windows for exceptional hurricane protection.",
			mapUrl: getMapUrl("Lantana, FL, USA"),
		},
		{
			name: "Mangonia Park",
			address: "Mangonia Park, FL, USA",
			description:
				"Upgrade your Mangonia Park home with Roofweiler's roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Mangonia Park, FL, USA"),
		},
		{
			name: "Pahokee",
			address: "Pahokee, FL, USA",
			description:
				"Roofweiler's expert roofing contractors provide Pahokee reliable roofing and impact windows.",
			mapUrl: getMapUrl("Pahokee, FL, USA"),
		},
		{
			name: "Palm Springs",
			address: "Palm Springs, FL, USA",
			description:
				"Roofweiler offers Palm Springs roofing and impact windows, ensuring comprehensive hurricane protection with client-first service.",
			mapUrl: getMapUrl("Palm Springs, FL, USA"),
		},
		{
			name: "South Bay",
			address: "South Bay, FL, USA",
			description:
				"South Bay residents trust Roofweiler's roofing and impact windows for reliable hurricane protection.",
			mapUrl: getMapUrl("South Bay, FL, USA"),
		},
		{
			name: "Wellington",
			address: "Wellington, FL, USA",
			description:
				"Protect your Wellington home with Roofweiler's top-rated roofing and impact windows, ensuring hurricane safety.",
			mapUrl: getMapUrl("Wellington, FL, USA"),
		},
	],
};
