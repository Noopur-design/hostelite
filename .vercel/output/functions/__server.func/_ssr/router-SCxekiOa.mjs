import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, S as useRouter, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Linkedin, D as Heart, E as House, F as ChevronRight, I as ChevronLeft, L as ChevronDown, N as Facebook, R as Check, T as Instagram, X as ArrowRight, c as TriangleAlert, n as Youtube, r as X, s as UserRound, y as Menu } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-qN7ExxuH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var img = {
	towersA: "/images/towers-a.jpg",
	towersB: "/images/towers-b.jpg",
	towersC: "/images/towers-c.jpg",
	pool: "/images/pool.jpg",
	villaA: "/images/villa-a.jpg",
	villaB: "/images/villa-b.jpg",
	villaC: "/images/villa-c.jpg",
	livingA: "/images/living-a.jpg",
	livingB: "/images/living-b.jpg",
	livingC: "/images/living-c.jpg",
	livingD: "/images/living-d.jpg",
	dining: "/images/dining.jpg",
	bedroom: "/images/bedroom.jpg",
	kitchen: "/images/kitchen.jpg",
	interiorB: "/images/interior-b.jpg",
	interiorC: "/images/interior-c.jpg",
	heroHome: "/images/hero-home.jpg",
	heroList: "/images/hero-list.jpg",
	skyline: "/images/skyline.jpg",
	office: "/images/office.jpg",
	officeB: "/images/office-b.jpg",
	land: "/images/land.jpg",
	floor: "/images/floorplan.jpg"
};
img.floor;
var DEVELOPERS = {
	"DLF Limited": {
		years: "75+",
		projects: "150+",
		families: "1,50,000+",
		line: "India's most established developer of landmark addresses."
	},
	"Godrej Properties": {
		years: "30+",
		projects: "100+",
		families: "80,000+",
		line: "Thoughtful communities with a lighter environmental footprint."
	},
	"M3M India": {
		years: "15+",
		projects: "50+",
		families: "25,000+",
		line: "Contemporary high-rises across Gurugram's newer corridors."
	},
	"Emaar India": {
		years: "20+",
		projects: "30+",
		families: "20,000+",
		line: "Global hospitality standards, adapted to Indian city life."
	},
	"Tata Housing": {
		years: "40+",
		projects: "70+",
		families: "45,000+",
		line: "Trust, craft and quiet luxury from the Tata group."
	},
	"Sobha Limited": {
		years: "25+",
		projects: "180+",
		families: "60,000+",
		line: "Backward-integrated quality, known for finish and detail."
	},
	"Birla Estates": {
		years: "10+",
		projects: "20+",
		families: "8,000+",
		line: "A new Birla address, built for the long term."
	},
	"Prestige Group": {
		years: "35+",
		projects: "250+",
		families: "1,00,000+",
		line: "South India's most familiar name in premium homes."
	},
	"Lodha Group": {
		years: "40+",
		projects: "90+",
		families: "70,000+",
		line: "Mumbai's skyline, shaped by large master-planned communities."
	},
	"Kolte-Patil": {
		years: "30+",
		projects: "60+",
		families: "30,000+",
		line: "Pune homes known for practical layouts and timely delivery."
	}
};
var CITY_NAMES = [
	"Gurugram",
	"Bengaluru",
	"Mumbai",
	"Hyderabad",
	"Pune",
	"Delhi"
];
var CITIES = [
	{
		name: "Gurugram",
		price: "₹11,200 / sq.ft.",
		image: "/images/city-gurgaon.jpg"
	},
	{
		name: "Bengaluru",
		price: "₹8,900 / sq.ft.",
		image: "/images/city-blr.jpg"
	},
	{
		name: "Mumbai",
		price: "₹18,400 / sq.ft.",
		image: "/images/city-mumbai.jpg"
	},
	{
		name: "Hyderabad",
		price: "₹8,200 / sq.ft.",
		image: "/images/city-hyd.jpg"
	},
	{
		name: "Pune",
		price: "₹7,800 / sq.ft.",
		image: "/images/city-pune.jpg"
	}
];
var CITY_LOCALITIES = {
	Gurugram: [
		"Sector 56",
		"Golf Course Road",
		"DLF Phase 5",
		"Sohna Road",
		"New Gurugram",
		"Sector 82",
		"Sector 113",
		"Sector 54"
	],
	Bengaluru: [
		"Indiranagar",
		"Whitefield",
		"Sarjapur Road",
		"Devanahalli"
	],
	Mumbai: [
		"Bandra West",
		"Lower Parel",
		"Bandra Kurla Complex"
	],
	Hyderabad: [
		"Jubilee Hills",
		"HITEC City",
		"Nanakramguda"
	],
	Pune: [
		"Koregaon Park",
		"Kharadi",
		"Hinjawadi"
	],
	Delhi: ["Greater Kailash"]
};
function resolveCity(place) {
	const needle = place.trim().toLowerCase();
	if (!needle || needle === "any" || needle === "india") return "";
	const direct = CITY_NAMES.find((name) => name.toLowerCase() === needle);
	if (direct) return direct;
	const partial = CITY_NAMES.find((name) => needle.includes(name.toLowerCase()));
	if (partial) return partial;
	for (const [city, localities] of Object.entries(CITY_LOCALITIES)) if (localities.some((locality) => needle.includes(locality.toLowerCase()))) return city;
	return "";
}
function localitiesFor(place) {
	const city = resolveCity(place);
	return city ? CITY_LOCALITIES[city] ?? [] : [];
}
var PROPERTY_TYPES = [
	{
		label: "Apartments",
		type: "Apartment",
		image: img.towersA
	},
	{
		label: "Villas",
		type: "Villa",
		image: img.villaA
	},
	{
		label: "Builder Floors",
		type: "Builder Floor",
		image: img.villaB
	},
	{
		label: "Plots & Land",
		type: "Plot",
		image: img.land
	},
	{
		label: "Commercial",
		type: "Commercial",
		image: img.towersC
	}
];
var BUY_BUDGETS = [
	{
		id: "Any",
		label: "Any"
	},
	{
		id: "Under ₹1 Cr",
		label: "Under ₹1 Cr",
		max: 1
	},
	{
		id: "₹1 – 2 Cr",
		label: "₹1 – 2 Cr",
		min: 1,
		max: 2
	},
	{
		id: "₹2 – 4 Cr",
		label: "₹2 – 4 Cr",
		min: 2,
		max: 4
	},
	{
		id: "₹4 – 8 Cr",
		label: "₹4 – 8 Cr",
		min: 4,
		max: 8
	},
	{
		id: "Above ₹8 Cr",
		label: "Above ₹8 Cr",
		min: 8
	}
];
var RENT_BUDGETS = [
	{
		id: "Any",
		label: "Any"
	},
	{
		id: "Under ₹50,000",
		label: "Under ₹50,000",
		max: 5e4
	},
	{
		id: "₹50,000 – ₹1 Lakh",
		label: "₹50,000 – ₹1 Lakh",
		min: 5e4,
		max: 1e5
	},
	{
		id: "₹1 – 2 Lakh",
		label: "₹1 – 2 Lakh",
		min: 1e5,
		max: 2e5
	},
	{
		id: "Above ₹2 Lakh",
		label: "Above ₹2 Lakh",
		min: 2e5
	}
];
var POSSESSION_OPTIONS = [
	"Any",
	"Ready to Move",
	"2027",
	"2028",
	"2029+"
];
var PROJECT_TYPES = [
	"Any",
	"Apartment",
	"Villa",
	"Commercial",
	"Plot"
];
var BUY_SORTS = [
	{
		id: "relevance",
		label: "Relevance"
	},
	{
		id: "price-asc",
		label: "Price: Low to High"
	},
	{
		id: "price-desc",
		label: "Price: High to Low"
	},
	{
		id: "area",
		label: "Largest area"
	}
];
var PROJECT_SORTS = [
	{
		id: "featured",
		label: "Featured"
	},
	{
		id: "price-asc",
		label: "Price: Low to High"
	},
	{
		id: "price-desc",
		label: "Price: High to Low"
	},
	{
		id: "newest",
		label: "Newest"
	}
];
var AMENITIES = [
	"Clubhouse",
	"Swimming Pool",
	"Gym",
	"Landscaped Gardens",
	"Children's Play Area",
	"24x7 Security",
	"Power Backup",
	"Multipurpose Hall",
	"Spa & Salon",
	"Indoor Games",
	"Jogging Track",
	"Party Lawn"
];
var CITY_GEO = {
	Gurugram: {
		lat: 28.4595,
		lon: 77.0266
	},
	Bengaluru: {
		lat: 12.9716,
		lon: 77.5946
	},
	Mumbai: {
		lat: 19.076,
		lon: 72.8777
	},
	Hyderabad: {
		lat: 17.385,
		lon: 78.4867
	},
	Pune: {
		lat: 18.5204,
		lon: 73.8567
	},
	Delhi: {
		lat: 28.6139,
		lon: 77.209
	}
};
var DESTINATIONS = {
	Gurugram: [
		{
			name: "DLF Golf Course",
			time: "2 min"
		},
		{
			name: "MG Road",
			time: "10 min"
		},
		{
			name: "Cyber Hub",
			time: "12 min"
		},
		{
			name: "IGI Airport",
			time: "25 min"
		},
		{
			name: "Gurugram Railway Station",
			time: "20 min"
		}
	],
	Bengaluru: [
		{
			name: "Outer Ring Road",
			time: "12 min"
		},
		{
			name: "Whitefield",
			time: "20 min"
		},
		{
			name: "MG Road",
			time: "35 min"
		},
		{
			name: "Kempegowda Airport",
			time: "45 min"
		},
		{
			name: "Silk Board",
			time: "25 min"
		}
	],
	Mumbai: [
		{
			name: "Bandra-Kurla Complex",
			time: "15 min"
		},
		{
			name: "Lower Parel",
			time: "10 min"
		},
		{
			name: "Marine Drive",
			time: "25 min"
		},
		{
			name: "Mumbai Airport",
			time: "30 min"
		},
		{
			name: "Dadar Station",
			time: "18 min"
		}
	],
	Hyderabad: [
		{
			name: "HITEC City",
			time: "12 min"
		},
		{
			name: "Gachibowli",
			time: "10 min"
		},
		{
			name: "Jubilee Hills",
			time: "20 min"
		},
		{
			name: "Rajiv Gandhi Airport",
			time: "35 min"
		},
		{
			name: "Inorbit Mall",
			time: "15 min"
		}
	],
	Pune: [
		{
			name: "Kharadi IT Park",
			time: "8 min"
		},
		{
			name: "Koregaon Park",
			time: "20 min"
		},
		{
			name: "Hinjawadi",
			time: "30 min"
		},
		{
			name: "Pune Airport",
			time: "25 min"
		},
		{
			name: "Pune Station",
			time: "22 min"
		}
	],
	Delhi: [
		{
			name: "Khan Market",
			time: "15 min"
		},
		{
			name: "AIIMS",
			time: "18 min"
		},
		{
			name: "Connaught Place",
			time: "25 min"
		},
		{
			name: "IGI Airport",
			time: "30 min"
		},
		{
			name: "Nehru Place",
			time: "20 min"
		}
	]
};
var NEARBY = {
	Gurugram: [
		{
			label: "Schools",
			time: "2–5 min"
		},
		{
			label: "Hospitals",
			time: "5–10 min"
		},
		{
			label: "Shopping Malls",
			time: "5–10 min"
		},
		{
			label: "Business Hubs",
			time: "10–15 min"
		},
		{
			label: "Restaurants",
			time: "2–10 min"
		},
		{
			label: "Metro Station",
			time: "10–15 min"
		}
	],
	Bengaluru: [
		{
			label: "Schools",
			time: "5–10 min"
		},
		{
			label: "Hospitals",
			time: "8–12 min"
		},
		{
			label: "Shopping Malls",
			time: "10–15 min"
		},
		{
			label: "Business Hubs",
			time: "10–20 min"
		},
		{
			label: "Restaurants",
			time: "5–10 min"
		},
		{
			label: "Metro Station",
			time: "12–20 min"
		}
	],
	Mumbai: [
		{
			label: "Schools",
			time: "5–8 min"
		},
		{
			label: "Hospitals",
			time: "8–15 min"
		},
		{
			label: "Shopping Malls",
			time: "5–12 min"
		},
		{
			label: "Business Hubs",
			time: "10–15 min"
		},
		{
			label: "Restaurants",
			time: "2–8 min"
		},
		{
			label: "Metro Station",
			time: "5–12 min"
		}
	],
	Hyderabad: [
		{
			label: "Schools",
			time: "5–10 min"
		},
		{
			label: "Hospitals",
			time: "8–12 min"
		},
		{
			label: "Shopping Malls",
			time: "8–15 min"
		},
		{
			label: "Business Hubs",
			time: "10–15 min"
		},
		{
			label: "Restaurants",
			time: "5–10 min"
		},
		{
			label: "Metro Station",
			time: "10–18 min"
		}
	],
	Pune: [
		{
			label: "Schools",
			time: "5–10 min"
		},
		{
			label: "Hospitals",
			time: "8–15 min"
		},
		{
			label: "Shopping Malls",
			time: "10–15 min"
		},
		{
			label: "Business Hubs",
			time: "8–15 min"
		},
		{
			label: "Restaurants",
			time: "5–10 min"
		},
		{
			label: "Metro Station",
			time: "15–25 min"
		}
	],
	Delhi: [
		{
			label: "Schools",
			time: "5–8 min"
		},
		{
			label: "Hospitals",
			time: "8–12 min"
		},
		{
			label: "Shopping Malls",
			time: "10–15 min"
		},
		{
			label: "Business Hubs",
			time: "12–20 min"
		},
		{
			label: "Restaurants",
			time: "5–10 min"
		},
		{
			label: "Metro Station",
			time: "8–12 min"
		}
	]
};
function highlightsFor(name, locality, city, developer) {
	return [
		`Prime location in ${locality}, ${city}`,
		"Spacious and well-ventilated residences",
		"Premium clubhouse with modern amenities",
		"Lush green surroundings",
		`Developed by ${developer} — a trusted name`
	];
}
function aboutFor(name, locality, city, developer, label, status) {
	return `${name} by ${developer} is a ${status === "Ready to Move" ? "ready for possession" : status === "New Launch" ? "newly launched" : "under construction"} address in ${locality}, ${city}, planned around daylight, privacy and everyday ease. ${label} sit within a gated community with a residents' club, landscaped courts and a calm approach from the main road.`;
}
function row(partial) {
	return {
		...partial,
		address: `${partial.locality}, ${partial.city}`,
		about: partial.about ?? aboutFor(partial.name, partial.locality, partial.city, partial.developer, partial.bhkLabel, partial.status),
		highlights: partial.highlights ?? highlightsFor(partial.name, partial.locality, partial.city, partial.developer)
	};
}
var base = [
	row({
		slug: "dlf-the-crest",
		showOnProjects: true,
		intent: "buy",
		name: "DLF The Crest",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Sector 54",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.25,
		rentMonthly: 0,
		pricePerSqft: 14444,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2250,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Gated Community",
			"Clubhouse",
			"Swimming Pool"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: true,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.towersA,
			img.heroList,
			img.pool,
			img.bedroom,
			img.livingD,
			img.dining,
			img.kitchen
		],
		about: "DLF The Crest is an ultra-luxury residential development in Sector 54, Gurugram, offering expansive 3 & 4 BHK residences with world-class amenities and breathtaking views. Designed for those who seek privacy, elegance, and a refined lifestyle, the project combines modern architecture with lush green landscapes.",
		similar: [
			"dlf-camellias",
			"m3m-golf-estate",
			"godrej-aria",
			"emaar-palm-hills"
		]
	}),
	row({
		slug: "godrej-aristocrat",
		showOnProjects: true,
		intent: "buy",
		name: "Godrej Aristocrat",
		title: "4 BHK Apartment",
		developer: "Godrej Properties",
		city: "Gurugram",
		locality: "Sector 48",
		type: "Apartment",
		status: "New Launch",
		priceCr: 6.8,
		rentMonthly: 0,
		pricePerSqft: 17e3,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 4e3,
		parking: "2 Covered",
		possession: "Possession Dec 2027",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Premium Amenities",
			"Spacious Layout",
			"Prime Location"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.towersB,
			img.pool,
			img.livingA,
			img.bedroom,
			img.dining
		]
	}),
	row({
		slug: "m3m-heights",
		showOnProjects: true,
		intent: "buy",
		name: "M3M Heights",
		title: "2 BHK Apartment",
		developer: "M3M India",
		city: "Gurugram",
		locality: "Sector 65",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 1.9,
		rentMonthly: 0,
		pricePerSqft: 15800,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1200,
		parking: "1 Covered",
		possession: "Possession Mar 2028",
		bhkLabel: "2, 3 BHK Apartments",
		tags: [
			"Modular Kitchen",
			"Power Backup",
			"24x7 Security"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.towersC,
			img.livingB,
			img.pool,
			img.kitchen,
			img.bedroom
		]
	}),
	row({
		slug: "emaar-urban-ascent",
		showOnProjects: true,
		intent: "buy",
		name: "Emaar Urban Ascent",
		title: "3 BHK Apartment",
		developer: "Emaar India",
		city: "Gurugram",
		locality: "Sector 112",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.8,
		rentMonthly: 0,
		pricePerSqft: 16521,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2300,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Corner Unit",
			"Large Balcony",
			"Premium Society"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 5,
		projectOrder: 4,
		images: [
			img.villaC,
			img.dining,
			img.livingC,
			img.bedroom,
			img.pool
		]
	}),
	row({
		slug: "dlf-privana-north",
		showOnProjects: true,
		intent: "buy",
		name: "DLF Privana North",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Sector 76",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 2.95,
		rentMonthly: 0,
		pricePerSqft: 14048,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2100,
		parking: "1 Covered",
		possession: "Possession Mar 2027",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Green Surroundings",
			"Modern Amenities",
			"Reputed Builder"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 4,
		projectOrder: 5,
		images: [
			img.towersA,
			img.interiorB,
			img.pool,
			img.livingA,
			img.kitchen
		]
	}),
	row({
		slug: "tata-primanti",
		showOnProjects: true,
		intent: "buy",
		name: "Tata Housing Primanti",
		title: "3 BHK Apartment",
		developer: "Tata Housing",
		city: "Gurugram",
		locality: "Sector 72",
		type: "Apartment",
		status: "New Launch",
		priceCr: 4.2,
		rentMonthly: 0,
		pricePerSqft: 17500,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2400,
		parking: "2 Covered",
		possession: "Possession Dec 2028",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Clubhouse",
			"Landscaped Gardens",
			"Prime Location"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 6,
		projectOrder: 6,
		images: [
			img.pool,
			img.towersB,
			img.livingD,
			img.skyline,
			img.bedroom
		]
	}),
	row({
		slug: "sobha-city",
		showOnProjects: true,
		intent: "buy",
		name: "Sobha City",
		title: "3 BHK Apartment",
		developer: "Sobha Limited",
		city: "Gurugram",
		locality: "Sector 108",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 5.1,
		rentMonthly: 0,
		pricePerSqft: 19615,
		bhk: 3,
		baths: 3,
		balconies: 2,
		area: 2600,
		parking: "2 Covered",
		possession: "Possession Jun 2028",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Premium Finish",
			"Large Club",
			"Gated Community"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 7,
		projectOrder: 7,
		images: [
			img.skyline,
			img.towersC,
			img.livingC,
			img.dining,
			img.pool
		]
	}),
	row({
		slug: "birla-navya",
		showOnProjects: true,
		intent: "buy",
		name: "Birla Navya",
		title: "3 BHK Apartment",
		developer: "Birla Estates",
		city: "Gurugram",
		locality: "Sector 63A",
		type: "Apartment",
		status: "New Launch",
		priceCr: 4.75,
		rentMonthly: 0,
		pricePerSqft: 21590,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2200,
		parking: "2 Covered",
		possession: "Possession Dec 2027",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Low Density",
			"Clubhouse",
			"Green Views"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 8,
		projectOrder: 8,
		images: [
			img.villaB,
			img.livingB,
			img.pool,
			img.kitchen,
			img.bedroom
		]
	}),
	row({
		slug: "dlf-camellias",
		showOnProjects: true,
		intent: "buy",
		name: "DLF The Camellias",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Golf Course Road",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.1,
		rentMonthly: 0,
		pricePerSqft: 14762,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2100,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Golf Course",
			"Gated Community",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 9,
		projectOrder: 12,
		images: [
			img.livingD,
			img.heroHome,
			img.dining,
			img.bedroom,
			img.pool
		]
	}),
	row({
		slug: "m3m-golf-estate",
		showOnProjects: true,
		intent: "buy",
		name: "M3M Golf Estate",
		title: "3 BHK Apartment",
		developer: "M3M India",
		city: "Gurugram",
		locality: "Sector 56",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 2.8,
		rentMonthly: 0,
		pricePerSqft: 14359,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1950,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Golf View",
			"Clubhouse",
			"Ready to Move"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 10,
		projectOrder: 13,
		images: [
			img.pool,
			img.towersA,
			img.livingA,
			img.bedroom
		]
	}),
	row({
		slug: "godrej-aria",
		showOnProjects: true,
		intent: "buy",
		name: "Godrej Aria",
		title: "4 BHK Apartment",
		developer: "Godrej Properties",
		city: "Gurugram",
		locality: "Sector 82",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.6,
		rentMonthly: 0,
		pricePerSqft: 14400,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 2500,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Spacious Layout",
			"Clubhouse",
			"Park Facing"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 11,
		projectOrder: 14,
		images: [
			img.towersC,
			img.livingC,
			img.dining,
			img.kitchen
		]
	}),
	row({
		slug: "emaar-palm-hills",
		showOnProjects: true,
		intent: "buy",
		name: "Emaar Palm Hills",
		title: "3 BHK Apartment",
		developer: "Emaar India",
		city: "Gurugram",
		locality: "Sohna Road",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 2.9,
		rentMonthly: 0,
		pricePerSqft: 14146,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2050,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Palm Court",
			"Clubhouse",
			"Wide Balcony"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 12,
		projectOrder: 15,
		images: [
			img.villaA,
			img.dining,
			img.pool,
			img.livingB
		]
	}),
	row({
		slug: "dlf-magnolias",
		showOnProjects: false,
		intent: "buy",
		name: "DLF Magnolias",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "DLF Phase 5",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.4,
		rentMonthly: 0,
		pricePerSqft: 15455,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2200,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Golf Course",
			"Gated Community",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 13,
		projectOrder: 40,
		images: [
			img.heroHome,
			img.livingA,
			img.bedroom,
			img.dining
		]
	}),
	row({
		slug: "m3m-capital",
		showOnProjects: true,
		intent: "buy",
		name: "M3M Capital",
		title: "3 BHK Apartment",
		developer: "M3M India",
		city: "Gurugram",
		locality: "Sector 113",
		type: "Apartment",
		status: "New Launch",
		priceCr: 2.15,
		rentMonthly: 0,
		pricePerSqft: 11944,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1800,
		parking: "1 Covered",
		possession: "Possession Jun 2029",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"New Gurugram",
			"Clubhouse",
			"Metro Access"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 14,
		projectOrder: 16,
		images: [
			img.towersB,
			img.pool,
			img.livingB,
			img.kitchen
		]
	}),
	row({
		slug: "prestige-reserve",
		showOnProjects: true,
		intent: "buy",
		name: "Prestige Reserve",
		title: "3 BHK Apartment",
		developer: "Prestige Group",
		city: "Gurugram",
		locality: "New Gurugram",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 2.4,
		rentMonthly: 0,
		pricePerSqft: 12800,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1875,
		parking: "1 Covered",
		possession: "Possession Sep 2027",
		bhkLabel: "2, 3 BHK Apartments",
		tags: [
			"New Launch Corridor",
			"Clubhouse",
			"Garden"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 15,
		projectOrder: 17,
		images: [
			img.towersA,
			img.livingC,
			img.pool,
			img.bedroom
		]
	}),
	row({
		slug: "sohna-grove-plots",
		showOnProjects: true,
		intent: "buy",
		name: "Sohna Grove",
		title: "Residential Plot",
		developer: "Emaar India",
		city: "Gurugram",
		locality: "Sohna Road",
		type: "Plot",
		status: "New Launch",
		priceCr: 1.35,
		rentMonthly: 0,
		pricePerSqft: 5625,
		bhk: 0,
		baths: 0,
		balconies: 0,
		area: 2400,
		parking: "Open",
		possession: "Possession Dec 2027",
		bhkLabel: "Residential plots",
		tags: [
			"Gated",
			"Wide Roads",
			"Corner Plots"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 30,
		projectOrder: 30,
		images: [
			img.land,
			img.skyline,
			img.villaA
		]
	}),
	row({
		slug: "godrej-lakeside-orchard",
		showOnProjects: true,
		intent: "buy",
		name: "Godrej Lakeside Orchard",
		title: "3 BHK Apartment",
		developer: "Godrej Properties",
		city: "Bengaluru",
		locality: "Sarjapur Road",
		type: "Apartment",
		status: "New Launch",
		priceCr: 1.8,
		rentMonthly: 0,
		pricePerSqft: 9e3,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1650,
		parking: "1 Covered",
		possession: "Possession Dec 2027",
		bhkLabel: "3, 4 BHK",
		tags: [
			"Lake View",
			"Clubhouse",
			"New Launch"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.towersB,
			img.villaA,
			img.pool,
			img.livingA,
			img.bedroom
		]
	}),
	row({
		slug: "prestige-sarjapur-villa",
		showOnProjects: true,
		intent: "buy",
		name: "Prestige Lakeside Villa",
		title: "4 BHK Villa",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Sarjapur Road",
		type: "Villa",
		status: "Ready to Move",
		priceCr: 6.8,
		rentMonthly: 0,
		pricePerSqft: 17e3,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 4e3,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "4 BHK Villas",
		tags: [
			"Private Garden",
			"Clubhouse",
			"Gated"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: true,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.villaA,
			img.livingC,
			img.dining,
			img.bedroom,
			img.pool
		]
	}),
	row({
		slug: "prestige-high-fields",
		showOnProjects: true,
		intent: "buy",
		name: "Prestige High Fields",
		title: "3 BHK Apartment",
		developer: "Prestige Group",
		city: "Hyderabad",
		locality: "Nanakramguda",
		type: "Apartment",
		status: "New Launch",
		priceCr: 2.4,
		rentMonthly: 0,
		pricePerSqft: 12973,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1850,
		parking: "1 Covered",
		possession: "Possession Mar 2028",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Financial District",
			"Clubhouse",
			"New Launch"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: true,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.bedroom,
			img.livingD,
			img.towersC,
			img.kitchen,
			img.pool
		]
	}),
	row({
		slug: "lodha-park",
		showOnProjects: true,
		intent: "buy",
		name: "Lodha Park",
		title: "3 BHK Apartment",
		developer: "Lodha Group",
		city: "Mumbai",
		locality: "Lower Parel",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 7.9,
		rentMonthly: 0,
		pricePerSqft: 47024,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1680,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Sea Link View",
			"Concierge",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.skyline,
			img.towersC,
			img.livingA,
			img.dining,
			img.bedroom
		]
	}),
	row({
		slug: "kolte-life-republic",
		showOnProjects: true,
		intent: "buy",
		name: "Life Republic",
		title: "3 BHK Apartment",
		developer: "Kolte-Patil",
		city: "Pune",
		locality: "Hinjawadi",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 1.45,
		rentMonthly: 0,
		pricePerSqft: 7800,
		bhk: 3,
		baths: 2,
		balconies: 1,
		area: 1450,
		parking: "1 Covered",
		possession: "Possession Dec 2027",
		bhkLabel: "2, 3 BHK Apartments",
		tags: [
			"Township",
			"School",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.towersA,
			img.livingB,
			img.kitchen,
			img.pool
		]
	}),
	row({
		slug: "gk-builder-floor",
		showOnProjects: false,
		intent: "buy",
		name: "Greater Kailash Floor",
		title: "3 BHK Builder Floor",
		developer: "DLF Limited",
		city: "Delhi",
		locality: "Greater Kailash",
		type: "Builder Floor",
		status: "Ready to Move",
		priceCr: 4.4,
		rentMonthly: 0,
		pricePerSqft: 2e4,
		bhk: 3,
		baths: 3,
		balconies: 2,
		area: 2200,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Builder Floors",
		tags: [
			"Independent Floor",
			"Park Facing",
			"Lift"
		],
		verified: true,
		rera: false,
		gated: false,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.villaB,
			img.livingC,
			img.dining,
			img.bedroom
		]
	}),
	row({
		slug: "devanahalli-plots",
		showOnProjects: true,
		intent: "buy",
		name: "Devanahalli Fields",
		title: "Residential Plot",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Devanahalli",
		type: "Plot",
		status: "New Launch",
		priceCr: .95,
		rentMonthly: 0,
		pricePerSqft: 3958,
		bhk: 0,
		baths: 0,
		balconies: 0,
		area: 2400,
		parking: "Open",
		possession: "Possession Jun 2028",
		bhkLabel: "Residential plots",
		tags: [
			"Airport Corridor",
			"Gated",
			"Corner Plots"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 20,
		projectOrder: 8,
		images: [
			img.land,
			img.villaC,
			img.skyline
		]
	}),
	row({
		slug: "dlf-cyber-park",
		showOnProjects: false,
		intent: "commercial",
		name: "DLF Cyber Park",
		title: "Office Space",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Cyber City",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 2.8,
		rentMonthly: 0,
		pricePerSqft: 15556,
		bhk: 0,
		baths: 2,
		balconies: 0,
		area: 1800,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "Office floors",
		tags: [
			"Grade A",
			"Metro",
			"Food Court"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.office,
			img.officeB,
			img.towersC,
			img.skyline
		]
	}),
	row({
		slug: "prestige-tech-park",
		showOnProjects: false,
		intent: "commercial",
		name: "Prestige Tech Park",
		title: "Office Space",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Whitefield",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 3.2,
		rentMonthly: 0,
		pricePerSqft: 12800,
		bhk: 0,
		baths: 2,
		balconies: 0,
		area: 2500,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "Office floors",
		tags: [
			"Campus",
			"Cafeteria",
			"Grade A"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.officeB,
			img.towersC,
			img.office
		]
	}),
	row({
		slug: "bkc-one",
		showOnProjects: false,
		intent: "commercial",
		name: "BKC One",
		title: "Office Space",
		developer: "Lodha Group",
		city: "Mumbai",
		locality: "Bandra Kurla Complex",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 9.5,
		rentMonthly: 0,
		pricePerSqft: 52778,
		bhk: 0,
		baths: 2,
		balconies: 0,
		area: 1800,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "Office floors",
		tags: [
			"BKC",
			"Sea Link",
			"Grade A"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.towersC,
			img.office,
			img.skyline
		]
	}),
	row({
		slug: "mindspace-hitec",
		showOnProjects: false,
		intent: "commercial",
		name: "Mindspace HITEC",
		title: "Office Space",
		developer: "Prestige Group",
		city: "Hyderabad",
		locality: "HITEC City",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 2.1,
		rentMonthly: 0,
		pricePerSqft: 11667,
		bhk: 0,
		baths: 2,
		balconies: 0,
		area: 1800,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "Office floors",
		tags: [
			"IT Corridor",
			"Metro",
			"Food Court"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.office,
			img.towersB,
			img.officeB
		]
	}),
	row({
		slug: "eon-kharadi",
		showOnProjects: false,
		intent: "commercial",
		name: "EON IT Park",
		title: "Office Space",
		developer: "Kolte-Patil",
		city: "Pune",
		locality: "Kharadi",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 1.6,
		rentMonthly: 0,
		pricePerSqft: 8889,
		bhk: 0,
		baths: 2,
		balconies: 0,
		area: 1800,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "Office floors",
		tags: [
			"IT Park",
			"Cafeteria",
			"Metro"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.officeB,
			img.skyline,
			img.office
		]
	}),
	row({
		slug: "cyberhub-retail",
		showOnProjects: false,
		intent: "commercial",
		name: "Cyber Hub Galleria",
		title: "Retail Space",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Cyber City",
		type: "Commercial",
		status: "Ready to Move",
		priceCr: 3.6,
		rentMonthly: 0,
		pricePerSqft: 3e4,
		bhk: 0,
		baths: 1,
		balconies: 0,
		area: 1200,
		parking: "Allocated",
		possession: "Ready to Move",
		bhkLabel: "High-street retail",
		tags: [
			"High Street",
			"Footfall",
			"Dining"
		],
		verified: true,
		rera: true,
		gated: false,
		featured: false,
		homeFeatured: false,
		sortOrder: 6,
		projectOrder: 6,
		images: [
			img.dining,
			img.towersC,
			img.office
		]
	}),
	row({
		slug: "rent-dlf-crest",
		showOnProjects: false,
		intent: "rent",
		name: "DLF The Crest",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Sector 54",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 185e3,
		pricePerSqft: 82,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2250,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"Clubhouse",
			"Golf Course"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.heroList,
			img.livingD,
			img.bedroom,
			img.dining
		]
	}),
	row({
		slug: "rent-golf-course",
		showOnProjects: false,
		intent: "rent",
		name: "DLF The Camellias",
		title: "4 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "Golf Course Road",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 32e4,
		pricePerSqft: 100,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 3200,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "4 BHK Apartments",
		tags: [
			"Fully Furnished",
			"Concierge",
			"Golf View"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.livingC,
			img.heroHome,
			img.dining,
			img.bedroom
		]
	}),
	row({
		slug: "rent-sector-56",
		showOnProjects: false,
		intent: "rent",
		name: "M3M Golf Estate",
		title: "2 BHK Apartment",
		developer: "M3M India",
		city: "Gurugram",
		locality: "Sector 56",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 72e3,
		pricePerSqft: 60,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1200,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Semi Furnished",
			"Pool",
			"Security"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.interiorB,
			img.pool,
			img.kitchen,
			img.livingB
		]
	}),
	row({
		slug: "rent-indiranagar",
		showOnProjects: false,
		intent: "rent",
		name: "Prestige Indira",
		title: "3 BHK Apartment",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Indiranagar",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 95e3,
		pricePerSqft: 63,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1500,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"Metro",
			"Cafes"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.livingA,
			img.kitchen,
			img.bedroom,
			img.interiorC
		]
	}),
	row({
		slug: "rent-bandra",
		showOnProjects: false,
		intent: "rent",
		name: "Lodha Bandra",
		title: "2 BHK Apartment",
		developer: "Lodha Group",
		city: "Mumbai",
		locality: "Bandra West",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 24e4,
		pricePerSqft: 218,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1100,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Sea Breeze",
			"Furnished",
			"Lift"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.interiorC,
			img.livingD,
			img.skyline,
			img.bedroom
		]
	}),
	row({
		slug: "rent-jubilee",
		showOnProjects: false,
		intent: "rent",
		name: "Prestige Jubilee",
		title: "3 BHK Apartment",
		developer: "Prestige Group",
		city: "Hyderabad",
		locality: "Jubilee Hills",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 11e4,
		pricePerSqft: 61,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1800,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"Club",
			"Quiet Street"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.livingC,
			img.dining,
			img.bedroom,
			img.kitchen
		]
	}),
	row({
		slug: "rent-koregaon",
		showOnProjects: false,
		intent: "rent",
		name: "Koregaon House",
		title: "2 BHK Apartment",
		developer: "Kolte-Patil",
		city: "Pune",
		locality: "Koregaon Park",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 55e3,
		pricePerSqft: 50,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1100,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Semi Furnished",
			"Cafes",
			"Tree Lined"
		],
		verified: true,
		rera: true,
		gated: false,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.interiorB,
			img.livingB,
			img.kitchen
		]
	}),
	row({
		slug: "rent-gk",
		showOnProjects: false,
		intent: "rent",
		name: "GK II Floor",
		title: "3 BHK Builder Floor",
		developer: "DLF Limited",
		city: "Delhi",
		locality: "Greater Kailash",
		type: "Builder Floor",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 15e4,
		pricePerSqft: 75,
		bhk: 3,
		baths: 3,
		balconies: 2,
		area: 2e3,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Builder Floors",
		tags: [
			"Independent Floor",
			"Park",
			"Servant Room"
		],
		verified: true,
		rera: false,
		gated: false,
		featured: true,
		homeFeatured: false,
		sortOrder: 1,
		projectOrder: 1,
		images: [
			img.villaB,
			img.dining,
			img.livingA,
			img.bedroom
		]
	}),
	row({
		slug: "sobha-indiranagar",
		showOnProjects: true,
		intent: "buy",
		name: "Sobha Indira Residences",
		title: "3 BHK Apartment",
		developer: "Sobha Limited",
		city: "Bengaluru",
		locality: "Indiranagar",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 3.4,
		rentMonthly: 0,
		pricePerSqft: 18889,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1800,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Metro",
			"Finished",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.livingA,
			img.towersB,
			img.kitchen,
			img.bedroom
		]
	}),
	row({
		slug: "godrej-bandra-bay",
		showOnProjects: true,
		intent: "buy",
		name: "Godrej Bandra Bay",
		title: "3 BHK Apartment",
		developer: "Godrej Properties",
		city: "Mumbai",
		locality: "Bandra West",
		type: "Apartment",
		status: "New Launch",
		priceCr: 5.6,
		rentMonthly: 0,
		pricePerSqft: 37333,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1500,
		parking: "1 Covered",
		possession: "Possession Dec 2028",
		bhkLabel: "2, 3 BHK Apartments",
		tags: [
			"Sea Breeze",
			"New Launch",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.skyline,
			img.livingD,
			img.pool,
			img.bedroom
		]
	}),
	row({
		slug: "sobha-gachibowli",
		showOnProjects: true,
		intent: "buy",
		name: "Sobha Gachibowli",
		title: "3 BHK Apartment",
		developer: "Sobha Limited",
		city: "Hyderabad",
		locality: "HITEC City",
		type: "Apartment",
		status: "Under Construction",
		priceCr: 2.15,
		rentMonthly: 0,
		pricePerSqft: 11944,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1800,
		parking: "1 Covered",
		possession: "Possession Jun 2028",
		bhkLabel: "2, 3 BHK Apartments",
		tags: [
			"IT Corridor",
			"Metro",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.towersC,
			img.livingB,
			img.pool,
			img.kitchen
		]
	}),
	row({
		slug: "godrej-koregaon",
		showOnProjects: true,
		intent: "buy",
		name: "Godrej Koregaon",
		title: "3 BHK Apartment",
		developer: "Godrej Properties",
		city: "Pune",
		locality: "Koregaon Park",
		type: "Apartment",
		status: "New Launch",
		priceCr: 2.25,
		rentMonthly: 0,
		pricePerSqft: 13235,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1700,
		parking: "1 Covered",
		possession: "Possession Mar 2028",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Tree Lined",
			"New Launch",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.villaC,
			img.livingA,
			img.dining,
			img.pool
		]
	}),
	row({
		slug: "dlf-gk-enclave",
		showOnProjects: true,
		intent: "buy",
		name: "DLF GK Enclave",
		title: "4 BHK Apartment",
		developer: "DLF Limited",
		city: "Delhi",
		locality: "Greater Kailash",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 8.4,
		rentMonthly: 0,
		pricePerSqft: 28e3,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 3e3,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3, 4 BHK Apartments",
		tags: [
			"Park Facing",
			"Low Density",
			"Clubhouse"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.livingD,
			img.towersA,
			img.dining,
			img.bedroom
		]
	}),
	row({
		slug: "rent-sohna-villa",
		showOnProjects: false,
		intent: "rent",
		name: "Sohna Grove Villa",
		title: "4 BHK Villa",
		developer: "Emaar India",
		city: "Gurugram",
		locality: "Sohna Road",
		type: "Villa",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 24e4,
		pricePerSqft: 60,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 4e3,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "4 BHK Villas",
		tags: [
			"Private Garden",
			"Furnished",
			"Club"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 4,
		projectOrder: 4,
		images: [
			img.villaA,
			img.pool,
			img.livingC,
			img.bedroom
		]
	}),
	row({
		slug: "rent-phase-5",
		showOnProjects: false,
		intent: "rent",
		name: "DLF Phase 5 Floor",
		title: "3 BHK Builder Floor",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "DLF Phase 5",
		type: "Builder Floor",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 14e4,
		pricePerSqft: 70,
		bhk: 3,
		baths: 3,
		balconies: 2,
		area: 2e3,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Builder Floors",
		tags: [
			"Independent Floor",
			"Park Facing",
			"Semi Furnished"
		],
		verified: true,
		rera: false,
		gated: false,
		featured: false,
		homeFeatured: false,
		sortOrder: 5,
		projectOrder: 5,
		images: [
			img.villaB,
			img.livingA,
			img.kitchen,
			img.bedroom
		]
	}),
	row({
		slug: "rent-new-gurugram",
		showOnProjects: false,
		intent: "rent",
		name: "Privana Residences",
		title: "3 BHK Apartment",
		developer: "DLF Limited",
		city: "Gurugram",
		locality: "New Gurugram",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 85e3,
		pricePerSqft: 47,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1800,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Semi Furnished",
			"Clubhouse",
			"Metro"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 6,
		projectOrder: 6,
		images: [
			img.towersA,
			img.interiorB,
			img.pool,
			img.kitchen
		]
	}),
	row({
		slug: "rent-whitefield",
		showOnProjects: false,
		intent: "rent",
		name: "Prestige Whitefield",
		title: "2 BHK Apartment",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Whitefield",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 48e3,
		pricePerSqft: 44,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1100,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Semi Furnished",
			"IT Corridor",
			"Gym"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.towersB,
			img.livingB,
			img.kitchen,
			img.bedroom
		]
	}),
	row({
		slug: "rent-sarjapur-villa",
		showOnProjects: false,
		intent: "rent",
		name: "Lakeside Villa",
		title: "4 BHK Villa",
		developer: "Prestige Group",
		city: "Bengaluru",
		locality: "Sarjapur Road",
		type: "Villa",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 18e4,
		pricePerSqft: 45,
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 4e3,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "4 BHK Villas",
		tags: [
			"Private Garden",
			"Furnished",
			"Gated"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.villaA,
			img.pool,
			img.dining,
			img.livingC
		]
	}),
	row({
		slug: "rent-lower-parel",
		showOnProjects: false,
		intent: "rent",
		name: "Lodha Park Residence",
		title: "3 BHK Apartment",
		developer: "Lodha Group",
		city: "Mumbai",
		locality: "Lower Parel",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 28e4,
		pricePerSqft: 167,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1680,
		parking: "2 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"Concierge",
			"Skyline"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.skyline,
			img.livingA,
			img.dining,
			img.bedroom
		]
	}),
	row({
		slug: "rent-hitec",
		showOnProjects: false,
		intent: "rent",
		name: "HITEC City Apartment",
		title: "2 BHK Apartment",
		developer: "Sobha Limited",
		city: "Hyderabad",
		locality: "HITEC City",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 42e3,
		pricePerSqft: 38,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1100,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Semi Furnished",
			"Metro",
			"IT Corridor"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.towersC,
			img.kitchen,
			img.livingB,
			img.bedroom
		]
	}),
	row({
		slug: "rent-nanakramguda",
		showOnProjects: false,
		intent: "rent",
		name: "High Fields Lease",
		title: "3 BHK Apartment",
		developer: "Prestige Group",
		city: "Hyderabad",
		locality: "Nanakramguda",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 78e3,
		pricePerSqft: 42,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1850,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"Clubhouse",
			"Financial District"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.bedroom,
			img.livingD,
			img.pool,
			img.kitchen
		]
	}),
	row({
		slug: "rent-hinjawadi",
		showOnProjects: false,
		intent: "rent",
		name: "Life Republic Lease",
		title: "2 BHK Apartment",
		developer: "Kolte-Patil",
		city: "Pune",
		locality: "Hinjawadi",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 32e3,
		pricePerSqft: 29,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1100,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Semi Furnished",
			"Township",
			"Gym"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 3,
		projectOrder: 3,
		images: [
			img.towersA,
			img.livingB,
			img.kitchen,
			img.pool
		]
	}),
	row({
		slug: "rent-kharadi",
		showOnProjects: false,
		intent: "rent",
		name: "Kharadi Greens",
		title: "3 BHK Apartment",
		developer: "Kolte-Patil",
		city: "Pune",
		locality: "Kharadi",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 62e3,
		pricePerSqft: 41,
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 1500,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "3 BHK Apartments",
		tags: [
			"Furnished",
			"IT Park",
			"Pool"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: true,
		homeFeatured: false,
		sortOrder: 4,
		projectOrder: 4,
		images: [
			img.interiorC,
			img.livingA,
			img.pool,
			img.bedroom
		]
	}),
	row({
		slug: "rent-gk-apt",
		showOnProjects: false,
		intent: "rent",
		name: "GK Enclave Apartment",
		title: "2 BHK Apartment",
		developer: "DLF Limited",
		city: "Delhi",
		locality: "Greater Kailash",
		type: "Apartment",
		status: "Ready to Move",
		priceCr: 0,
		rentMonthly: 9e4,
		pricePerSqft: 75,
		bhk: 2,
		baths: 2,
		balconies: 1,
		area: 1200,
		parking: "1 Covered",
		possession: "Ready to Move",
		bhkLabel: "2 BHK Apartments",
		tags: [
			"Furnished",
			"Market",
			"Lift"
		],
		verified: true,
		rera: true,
		gated: true,
		featured: false,
		homeFeatured: false,
		sortOrder: 2,
		projectOrder: 2,
		images: [
			img.livingD,
			img.kitchen,
			img.bedroom,
			img.dining
		]
	})
];
function variant(parentSlug, overrides) {
	const parent = base.find((item) => item.slug === parentSlug);
	if (!parent) throw new Error(`Missing parent ${parentSlug}`);
	return {
		...parent,
		...overrides,
		parentSlug,
		showOnProjects: false,
		featured: false,
		homeFeatured: false,
		images: overrides.images?.length ? overrides.images : parent.images,
		about: overrides.about || parent.about,
		highlights: overrides.highlights?.length ? overrides.highlights : parent.highlights,
		tags: overrides.tags?.length ? overrides.tags : parent.tags
	};
}
var LISTINGS = [
	...base,
	variant("dlf-the-crest", {
		slug: "dlf-the-crest-4bhk",
		title: "4 BHK Apartment",
		bhk: 4,
		baths: 4,
		balconies: 2,
		area: 3100,
		priceCr: 4.55,
		pricePerSqft: 14677,
		parking: "2 Covered",
		sortOrder: 18,
		bhkLabel: "4 BHK Apartments",
		images: [
			img.bedroom,
			img.dining,
			img.towersA,
			img.livingD
		]
	}),
	variant("godrej-aristocrat", {
		slug: "godrej-aristocrat-3bhk",
		title: "3 BHK Apartment",
		bhk: 3,
		baths: 3,
		balconies: 1,
		area: 2400,
		priceCr: 4.1,
		pricePerSqft: 17083,
		sortOrder: 19,
		bhkLabel: "3 BHK Apartments",
		images: [
			img.livingA,
			img.towersB,
			img.pool,
			img.kitchen
		]
	})
];
var bySlug = new Map(LISTINGS.map((item) => [item.slug, item]));
function resolveListing(slug) {
	const item = bySlug.get(slug);
	if (!item) return void 0;
	if (!item.parentSlug) return item;
	const parent = bySlug.get(item.parentSlug);
	if (!parent) return item;
	return {
		...parent,
		...item,
		images: item.images.length ? item.images : parent.images,
		about: item.about || parent.about,
		highlights: item.highlights.length ? item.highlights : parent.highlights,
		tags: item.tags.length ? item.tags : parent.tags
	};
}
function developerOf(name) {
	return DEVELOPERS[name] ?? {
		years: "20+",
		projects: "40+",
		families: "15,000+",
		line: "A trusted developer with delivered communities across India."
	};
}
function destinationsFor(city) {
	return DESTINATIONS[city] ?? DESTINATIONS.Gurugram;
}
function nearbyFor(city) {
	return NEARBY[city] ?? NEARBY.Gurugram;
}
function bhkNumbers(label, fallback) {
	const nums = (label.match(/\d+/g) ?? []).map(Number).filter((n) => n > 0 && n < 8);
	const unique = [...new Set(nums.length ? nums : [fallback].filter((n) => n > 0))];
	return unique.length ? unique : [fallback || 3];
}
function floorConfigs(listing) {
	if (listing.bhk <= 0) return [{
		id: "plot",
		label: "Plot",
		name: "Typical plot",
		area: listing.area,
		beds: 0,
		baths: 0,
		living: 0,
		kitchen: 0,
		balcony: 0
	}];
	return bhkNumbers(listing.bhkLabel, listing.bhk).map((bhk) => {
		const area = bhk === listing.bhk ? listing.area : Math.round(listing.area / listing.bhk * bhk);
		return {
			id: String(bhk),
			label: `${bhk} BHK`,
			name: `${bhk} BHK · Type A`,
			area,
			beds: bhk,
			baths: Math.max(2, bhk === listing.bhk ? listing.baths : bhk),
			living: 1,
			kitchen: 1,
			balcony: bhk >= 4 ? 2 : 1
		};
	});
}
function priceTrend(listing) {
	const basePrice = listing.pricePerSqft || 1e4;
	return [
		"2020",
		"2021",
		"2022",
		"2023",
		"2024",
		"2025",
		"2026"
	].map((year, index) => ({
		year,
		price: Math.round(basePrice * (.72 + index * .048))
	}));
}
function pinFor(listing) {
	const base = CITY_GEO[listing.city] ?? CITY_GEO.Gurugram;
	let hash = 0;
	for (const char of listing.slug) hash = (hash * 33 + char.charCodeAt(0)) % 1e3;
	return {
		lat: base.lat + (hash % 100 - 50) * 7e-4,
		lon: base.lon + (Math.floor(hash / 10) % 100 - 50) * 7e-4
	};
}
function mapSrc(lat, lon) {
	const bbox = `${lon - .045},${lat - .03},${lon + .045},${lat + .03}`;
	return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}`;
}
function formatCr(value) {
	return `₹ ${(Math.round(value * 100) / 100).toString()} Cr`;
}
function formatRent(value) {
	return `₹ ${value.toLocaleString("en-IN")}`;
}
function formatSqft(value) {
	return `₹ ${value.toLocaleString("en-IN")} / sq.ft.`;
}
function formatArea(value) {
	return `${value.toLocaleString("en-IN")} sq.ft.`;
}
function budgetTable(intent) {
	return intent === "rent" ? RENT_BUDGETS : BUY_BUDGETS;
}
function matchBudget(price, id, table) {
	const rowBudget = table.find((item) => item.id === id);
	if (!rowBudget || rowBudget.id === "Any") return true;
	if (rowBudget.min != null && price < rowBudget.min) return false;
	if (rowBudget.max != null && price >= rowBudget.max) return false;
	return true;
}
function matchesPlace(listing, place) {
	if (!place.trim() || place.toLowerCase() === "any") return true;
	const needle = place.toLowerCase().trim();
	return `${listing.city} ${listing.locality} ${listing.address} ${listing.name} ${listing.developer}`.toLowerCase().includes(needle);
}
function sortByPrice(items, intent, dir) {
	const price = (item) => intent === "rent" ? item.rentMonthly : item.priceCr;
	return [...items].sort((a, b) => dir === "asc" ? price(a) - price(b) : price(b) - price(a));
}
function filterHomes(intent, search) {
	let items = LISTINGS.filter((item) => item.intent === intent).map((item) => resolveListing(item.slug));
	items = items.filter((item) => matchesPlace(item, search.place));
	if (search.locality) {
		const needle = search.locality.toLowerCase();
		items = items.filter((item) => item.locality.toLowerCase().includes(needle) || item.address.toLowerCase().includes(needle));
	}
	if (search.type && search.type !== "Any") {
		if (search.type === "Office") items = items.filter((item) => item.title === "Office Space");
		else if (search.type === "Retail") items = items.filter((item) => item.title === "Retail Space");
		else items = items.filter((item) => item.type === search.type);
	}
	const table = budgetTable(intent);
	items = items.filter((item) => matchBudget(intent === "rent" ? item.rentMonthly : item.priceCr, search.budget, table));
	if (search.sort === "price-asc") return sortByPrice(items, intent, "asc");
	if (search.sort === "price-desc") return sortByPrice(items, intent, "desc");
	if (search.sort === "area") return [...items].sort((a, b) => b.area - a.area);
	return [...items].sort((a, b) => Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder);
}
function matchPossession(listing, possession) {
	if (!possession || possession === "Any") return true;
	if (possession === "Ready to Move") return listing.status === "Ready to Move";
	if (possession === "2029+") return /2029|2030|2031/.test(listing.possession);
	return listing.possession.includes(possession);
}
function filterProjects(search) {
	let items = LISTINGS.filter((item) => item.showOnProjects);
	if (search.developer) items = items.filter((item) => item.developer === search.developer);
	if (search.place && search.place !== "Any") items = items.filter((item) => matchesPlace(item, search.place));
	if (search.type && search.type !== "Any") {
		if (search.type === "Apartment") items = items.filter((item) => item.type === "Apartment");
		else if (search.type === "Villa") items = items.filter((item) => item.type === "Villa");
		else if (search.type === "Commercial") items = items.filter((item) => item.type === "Commercial");
		else if (search.type === "Plot") items = items.filter((item) => item.type === "Plot");
	}
	items = items.filter((item) => matchBudget(item.priceCr, search.budget, BUY_BUDGETS));
	items = items.filter((item) => matchPossession(item, search.possession));
	if (search.status === "ready") items = items.filter((item) => item.status === "Ready to Move");
	if (search.status === "uc") items = items.filter((item) => item.status === "Under Construction");
	if (search.status === "new") items = items.filter((item) => item.status === "New Launch");
	if (search.sort === "price-asc") return sortByPrice(items, "buy", "asc");
	if (search.sort === "price-desc") return sortByPrice(items, "buy", "desc");
	if (search.sort === "newest") return [...items].sort((a, b) => Number(b.status === "New Launch") - Number(a.status === "New Launch") || a.projectOrder - b.projectOrder);
	return [...items].sort((a, b) => Number(b.featured) - Number(a.featured) || a.projectOrder - b.projectOrder);
}
function similarListings(listing) {
	if (listing.similar?.length) return listing.similar.map((slug) => resolveListing(slug)).filter((item) => Boolean(item));
	return LISTINGS.filter((item) => item.intent === listing.intent && item.city === listing.city && item.slug !== listing.slug && !item.parentSlug).slice(0, 4);
}
function homeFeatured() {
	return LISTINGS.filter((item) => item.homeFeatured).sort((a, b) => a.sortOrder - b.sortOrder);
}
function launchProjects() {
	const slides = LISTINGS.filter((item) => item.showOnProjects && item.status === "New Launch");
	const preferred = slides.findIndex((item) => item.slug === "godrej-lakeside-orchard");
	if (preferred > 0) return [...slides.slice(preferred), ...slides.slice(0, preferred)];
	return slides;
}
var DEVELOPER_LOGOS = [
	"DLF",
	"Godrej Properties",
	"EMAAR",
	"M3M",
	"Tata Housing",
	"SOBHA",
	"Prestige",
	"Birla Estates"
];
var LOGO_DEVELOPER = {
	DLF: "DLF Limited",
	"Godrej Properties": "Godrej Properties",
	EMAAR: "Emaar India",
	M3M: "M3M India",
	"Tata Housing": "Tata Housing",
	SOBHA: "Sobha Limited",
	Prestige: "Prestige Group",
	"Birla Estates": "Birla Estates"
};
var ARTICLES = [
	{
		id: "market-trends",
		title: "Market Trends",
		kicker: "Quarterly note",
		image: img.skyline,
		excerpt: "How Gurugram, Bengaluru and Hyderabad prices moved through the last six quarters — and what possession timelines are doing to buyer urgency.",
		body: [
			"Ready inventory in Golf Course Road and Sector 54 still clears fastest, while new launches along the Dwarka Expressway and Sarjapur Road are priced for end-use rather than a quick flip.",
			"In this demo, ticket sizes between ₹1.9 Cr and ₹4.5 Cr make up most of the shortlist. Larger villas and BKC offices sit above that band and take longer to negotiate.",
			"Track price per square foot against possession, not just the headline. A 2028 handover at a lower ticket can cost more once rent for the waiting years is counted."
		]
	},
	{
		id: "locality-guide",
		title: "Locality Guide",
		kicker: "Where to look",
		image: "/images/city-gurgaon.jpg",
		excerpt: "A plain-language tour of the corridors buyers actually compare: Golf Course Road, New Gurugram, Sarjapur, Nanakramguda and Lower Parel.",
		body: [
			"Sector 54 and Golf Course Road remain the established Gurugram addresses — shorter drives to Cyber Hub, higher maintenance, and almost no distress inventory.",
			"Sector 113 and New Gurugram trade a longer commute for newer clubs and lower entry prices. Bengaluru's Sarjapur Road does the same job for families priced out of Indiranagar.",
			"Hyderabad's Financial District and Nanakramguda suit buyers who want a new tower near offices. Mumbai's Lower Parel is a different product: smaller carpet, higher ticket, walkable social life."
		]
	},
	{
		id: "buying-guide",
		title: "Buying Guide",
		kicker: "Before you book",
		image: img.livingA,
		excerpt: "What to check before paying a booking amount: RERA, carpet versus super area, possession letters, and the real cost of a home loan.",
		body: [
			"Match the project name on the RERA certificate with the brochure. Ask for the sanctioned plan, not only the sample flat.",
			"Super built-up area is what most Gurugram price lists quote. Carpet is what you live in. The gap can be 25–30 percent.",
			"A ready building lets you hear the neighbours and test the water pressure. An under-construction tower asks you to trust the possession month printed on the allotment letter."
		]
	},
	{
		id: "real-estate-news",
		title: "Real Estate News",
		kicker: "Desk notes",
		image: img.towersB,
		excerpt: "Short notes from the HavenNest desk: new clubhouse handovers, metro extensions, and which developers are still delivering on the quarter they promised.",
		body: [
			"Several Gurugram clubs that were marketed in 2023 are only now receiving occupation paperwork. Visit the amenity floor, not just the apartment.",
			"Bengaluru's metro extensions are already showing up in rent conversations along the outer ring, even where stations are a year away.",
			"These notes are part of the HavenNest demo catalogue. They are here so the Insights desk feels like a real section of the site."
		]
	}
];
function pageWindow(page, total) {
	if (total <= 1) return [1];
	if (total <= 6) return Array.from({ length: total }, (_, index) => index + 1);
	const items = [1];
	const start = Math.max(2, page - 1);
	const end = Math.min(total - 1, page + 1);
	if (start > 2) items.push("…");
	for (let index = start; index <= end; index += 1) items.push(index);
	if (end < total - 1) items.push("…");
	items.push(total);
	return items;
}
function paginate(items, page, size) {
	const total = Math.max(1, Math.ceil(items.length / size));
	const current = Math.min(Math.max(page, 1), total);
	const start = (current - 1) * size;
	return {
		total,
		current,
		slice: items.slice(start, start + size)
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Ctx = (0, import_react.createContext)(null);
function useApp() {
	const value = (0, import_react.useContext)(Ctx);
	if (!value) throw new Error("useApp must be used within AppStateProvider");
	return value;
}
var inputClass = "h-12 w-full rounded-control border border-line bg-card px-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-forest";
function validateContact(values, emailRequired) {
	const errors = {};
	if (values.name.trim().length < 2) errors.name = "Enter your full name";
	const phone = values.phone.replace(/\D/g, "");
	if (!/^[6-9]\d{9}$/.test(phone)) errors.phone = "Enter a valid 10-digit mobile number";
	if (emailRequired && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address";
	return errors;
}
function AppStateProvider({ children }) {
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [user, setUser] = (0, import_react.useState)(null);
	const [modal, setModal] = (0, import_react.useState)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			const rawSaved = localStorage.getItem("havennest-saved");
			const rawUser = localStorage.getItem("havennest-user");
			if (rawSaved) setSaved(JSON.parse(rawSaved));
			if (rawUser) setUser(JSON.parse(rawUser));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!modal) return void 0;
		const frame = requestAnimationFrame(() => setShown(true));
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			cancelAnimationFrame(frame);
			document.body.style.overflow = previous;
		};
	}, [modal]);
	function close() {
		setShown(false);
		window.setTimeout(() => setModal(null), 160);
	}
	function toast(text) {
		setMessage(text);
		window.setTimeout(() => setMessage(""), 2400);
	}
	const api = (0, import_react.useMemo)(() => ({
		saved,
		toggleSaved: (slug) => {
			setSaved((current) => {
				const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
				localStorage.setItem("havennest-saved", JSON.stringify(next));
				return next;
			});
		},
		isSaved: (slug) => saved.includes(slug),
		user,
		signOut: () => {
			localStorage.removeItem("havennest-user");
			setUser(null);
			toast("Signed out");
		},
		openLead: (mode, project) => setModal({
			kind: "lead",
			mode,
			project
		}),
		openLogin: () => setModal({ kind: "login" }),
		openVideo: (images, title) => setModal({
			kind: "video",
			images,
			title
		}),
		openGallery: (images, title, index = 0) => setModal({
			kind: "gallery",
			images,
			title,
			index
		}),
		openMap: (title, lat, lon) => setModal({
			kind: "map",
			title,
			lat,
			lon
		}),
		toast
	}), [saved, user]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ctx.Provider, {
		value: api,
		children: [
			children,
			modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center",
				role: "presentation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close dialog",
					className: cn("absolute inset-0 bg-forest-deep/60 transition-opacity", shown ? "opacity-100" : "opacity-0"),
					onClick: close
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					className: cn("relative z-10 max-h-[90vh] w-full overflow-auto rounded-card bg-card shadow-2xl transition duration-200", modal.kind === "gallery" || modal.kind === "video" || modal.kind === "map" ? "max-w-4xl" : "max-w-md", shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Close",
							onClick: close,
							className: "tap absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-full bg-card/90 text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						}),
						modal.kind === "lead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
							mode: modal.mode,
							project: modal.project,
							onClose: close
						}) : null,
						modal.kind === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, { onDone: (next) => {
							setUser(next);
							localStorage.setItem("havennest-user", JSON.stringify(next));
							toast(`Welcome, ${next.name.split(" ")[0]}`);
							close();
						} }) : null,
						modal.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTour, {
							images: modal.images,
							title: modal.title
						}) : null,
						modal.kind === "gallery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryLightbox, {
							images: modal.images,
							title: modal.title,
							start: modal.index
						}) : null,
						modal.kind === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pr-10 font-serif text-2xl",
								children: modal.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: modal.title,
								src: mapSrc(modal.lat, modal.lon),
								className: "mt-4 h-96 w-full rounded-control border border-line"
							})]
						}) : null
					]
				})]
			}) : null,
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-pill bg-forest px-4 py-2 text-sm text-card shadow-lg",
				children: message
			}) : null
		]
	});
}
var LEAD_COPY = {
	visit: {
		title: "Schedule a visit",
		body: "Tell us when to expect you. An advisor will confirm the site visit.",
		cta: "Request site visit",
		email: true
	},
	callback: {
		title: "Get a callback",
		body: "Share your number and we will call you about this home.",
		cta: "Request callback",
		email: false
	},
	enquire: {
		title: "Enquire",
		body: "Send your details and we will share pricing, availability and offers.",
		cta: "Send enquiry",
		email: true
	},
	list: {
		title: "List your property",
		body: "Tell us about the home. A HavenNest advisor will help you reach serious buyers.",
		cta: "Submit listing",
		email: true
	},
	expert: {
		title: "Talk to an expert",
		body: "Share what you need. We will match a project to your budget and timeline.",
		cta: "Request a call",
		email: true
	}
};
function LeadForm({ mode, project, onClose }) {
	const copy = LEAD_COPY[mode];
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		city: "Gurugram",
		propertyType: "Apartment",
		price: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	function submit(event) {
		event.preventDefault();
		const next = validateContact(values, copy.email);
		if (mode === "list" && !values.price.trim()) next.price = "Enter an expected price";
		setErrors(next);
		if (Object.keys(next).length) return;
		const existing = JSON.parse(localStorage.getItem("havennest-leads") || "[]");
		existing.push({
			...values,
			mode,
			project,
			at: Date.now()
		});
		localStorage.setItem("havennest-leads", JSON.stringify(existing));
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid size-12 place-items-center rounded-full bg-forest text-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-serif text-3xl",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [project ? `We have noted your interest in ${project}. ` : "", "A HavenNest advisor will reach out shortly."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "tap mt-6 h-11 rounded-pill bg-forest px-5 text-sm text-card",
				children: "Done"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "px-6 py-6",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted uppercase",
				children: "HavenNest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 pr-8 font-serif text-3xl",
				children: copy.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: copy.body
			}),
			project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: project
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							value: values.name,
							onChange: (event) => update("name", event.target.value),
							placeholder: "Your name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone number",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							inputMode: "numeric",
							value: values.phone,
							onChange: (event) => update("phone", event.target.value),
							placeholder: "10-digit mobile"
						})
					}),
					copy.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email address",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							type: "email",
							value: values.email,
							onChange: (event) => update("email", event.target.value),
							placeholder: "name@email.com"
						})
					}) : null,
					mode === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "City",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputClass,
								value: values.city,
								onChange: (event) => update("city", event.target.value),
								children: [
									"Gurugram",
									"Bengaluru",
									"Mumbai",
									"Hyderabad",
									"Pune",
									"Delhi"
								].map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: city }, city))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Property type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputClass,
								value: values.propertyType,
								onChange: (event) => update("propertyType", event.target.value),
								children: [
									"Apartment",
									"Villa",
									"Builder Floor",
									"Plot",
									"Commercial"
								].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: type }, type))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Expected price",
							error: errors.price,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputClass,
								value: values.price,
								onChange: (event) => update("price", event.target.value),
								placeholder: "₹ 2.5 Cr or ₹ 80,000 / month"
							})
						})
					] }) : null,
					mode === "expert" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What are you looking for?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "min-h-24 w-full rounded-control border border-line bg-card px-3 py-3 text-sm outline-none focus:border-forest",
							value: values.message,
							onChange: (event) => update("message", event.target.value),
							placeholder: "3 BHK in Gurugram, ready by 2027, under ₹4 Cr"
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "tap mt-5 h-12 w-full rounded-control bg-forest text-sm text-card",
				children: copy.cta
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 block text-muted",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-forest-soft",
				children: error
			}) : null
		]
	});
}
function LoginForm({ onDone }) {
	const [mode, setMode] = (0, import_react.useState)("login");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	function submit(event) {
		event.preventDefault();
		const next = {};
		if (mode === "signup" && name.trim().length < 2) next.name = "Enter your full name";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email";
		if (password.length < 6) next.password = "Use at least 6 characters";
		const accounts = JSON.parse(localStorage.getItem("havennest-accounts") || "[]");
		const existing = accounts.find((item) => item.email.toLowerCase() === email.trim().toLowerCase());
		if (!next.email && !next.password) {
			if (mode === "login") {
				if (existing && existing.password !== password) next.password = "That password does not match";
			} else if (existing) next.email = "An account with this email already exists";
		}
		setErrors(next);
		if (Object.keys(next).length) return;
		if (mode === "signup") {
			const account = {
				name: name.trim(),
				email: email.trim(),
				password
			};
			localStorage.setItem("havennest-accounts", JSON.stringify([...accounts, account]));
			onDone({
				name: account.name,
				email: account.email
			});
			return;
		}
		const display = existing?.name || email.trim().split("@")[0];
		if (!existing) localStorage.setItem("havennest-accounts", JSON.stringify([...accounts, {
			name: display,
			email: email.trim(),
			password
		}]));
		onDone({
			name: existing?.name || display,
			email: email.trim()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "px-6 py-6",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "pr-8 font-serif text-3xl",
				children: mode === "login" ? "Login" : "Create an account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "A demo account saved on this device. No password leaves the browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [
					mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							value: name,
							onChange: (event) => setName(event.target.value)
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							type: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Password",
						error: errors.password,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							type: "password",
							value: password,
							onChange: (event) => setPassword(event.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "tap mt-5 h-12 w-full rounded-control bg-forest text-sm text-card",
				children: mode === "login" ? "Login" : "Sign up"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 w-full text-sm text-muted",
				onClick: () => {
					setMode(mode === "login" ? "signup" : "login");
					setErrors({});
				},
				children: mode === "login" ? "New here? Create an account" : "Already have an account? Login"
			})
		]
	});
}
function VideoTour({ images, title }) {
	const [frame, setFrame] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setFrame((current) => (current + 1) % images.length), 1700);
		return () => window.clearInterval(timer);
	}, [images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: images[frame],
		alt: "",
		className: "h-80 w-full object-cover sm:h-[28rem]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-5 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-widest text-muted uppercase",
			children: "Walkthrough"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-2xl",
			children: title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				frame + 1,
				" / ",
				images.length
			]
		})]
	})] });
}
function GalleryLightbox({ images, title, start }) {
	const [index, setIndex] = (0, import_react.useState)(start);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: images[index],
		alt: `${title} photo ${index + 1}`,
		className: "h-80 w-full object-cover sm:h-[28rem]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between pr-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					index + 1,
					" / ",
					images.length
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-auto",
			children: images.map((image, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setIndex(imageIndex),
				className: cn("h-16 w-20 shrink-0 overflow-hidden rounded-control border", imageIndex === index ? "border-forest" : "border-line"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}, image + imageIndex))
		})]
	})] });
}
function pageOf(value) {
	const page = Number(value);
	return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
}
function buySearch(partial = {}) {
	return {
		place: "Gurugram",
		type: "Apartment",
		budget: "Any",
		locality: "",
		sort: "relevance",
		page: 1,
		...partial
	};
}
function rentSearch(partial = {}) {
	return buySearch({
		place: "Gurugram",
		type: "Any",
		...partial
	});
}
function commercialSearch(partial = {}) {
	return buySearch({
		place: "Gurugram",
		type: "Any",
		...partial
	});
}
function projectSearch(partial = {}) {
	return {
		place: "Gurugram",
		type: "Any",
		budget: "Any",
		possession: "Any",
		status: "all",
		sort: "featured",
		developer: "",
		page: 1,
		...partial
	};
}
function parseBuySearch(search, fallback) {
	return buySearch({
		...fallback,
		place: typeof search.place === "string" ? search.place : fallback.place,
		type: typeof search.type === "string" ? search.type : fallback.type,
		budget: typeof search.budget === "string" ? search.budget : fallback.budget,
		locality: typeof search.locality === "string" ? search.locality : fallback.locality,
		sort: typeof search.sort === "string" ? search.sort : fallback.sort,
		page: search.page == null ? fallback.page : pageOf(search.page)
	});
}
function parseProjectSearch(search) {
	const base = projectSearch();
	return projectSearch({
		place: typeof search.place === "string" ? search.place : base.place,
		type: typeof search.type === "string" ? search.type : base.type,
		budget: typeof search.budget === "string" ? search.budget : base.budget,
		possession: typeof search.possession === "string" ? search.possession : base.possession,
		status: typeof search.status === "string" ? search.status : base.status,
		sort: typeof search.sort === "string" ? search.sort : base.sort,
		developer: typeof search.developer === "string" ? search.developer : base.developer,
		page: search.page == null ? 1 : pageOf(search.page)
	});
}
var NAV = [
	{
		label: "Buy",
		to: "/buy",
		search: buySearch()
	},
	{
		label: "Rent",
		to: "/rent",
		search: rentSearch()
	},
	{
		label: "Projects",
		to: "/projects",
		search: projectSearch()
	},
	{
		label: "Commercial",
		to: "/commercial",
		search: commercialSearch()
	},
	{
		label: "Locations",
		to: "/locations"
	},
	{
		label: "Insights",
		to: "/insights"
	}
];
function Header() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const { user, openLogin, openLead, signOut } = useApp();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [accountOpen, setAccountOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setAccountOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "size-5 text-forest",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg tracking-tight sm:text-xl",
						children: "HavenNest"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-6 hidden h-full items-center gap-6 lg:flex",
					children: NAV.map((item) => {
						const active = path === item.to || path.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							search: "search" in item ? item.search : void 0,
							className: cn("flex h-full items-center border-b-2 text-sm", active ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"),
							children: item.label
						}, item.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => openLead("list"),
							className: "tap hidden h-10 items-center rounded-pill border border-line-strong px-4 text-sm sm:inline-flex",
							children: "List Property"
						}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setAccountOpen((value) => !value),
								className: "tap inline-flex h-10 items-center gap-2 rounded-pill bg-forest px-4 text-sm text-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "max-w-28 truncate",
									children: user.name.split(" ")[0]
								})]
							}), accountOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: signOut,
								className: "absolute right-0 mt-2 w-36 rounded-control border border-line bg-card px-3 py-2 text-left text-sm shadow",
								children: "Sign out"
							}) : null]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openLogin,
							className: "tap inline-flex h-10 items-center gap-2 rounded-pill bg-forest px-4 text-sm text-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Login / Sign Up"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": open ? "Close menu" : "Open menu",
							className: "grid size-10 place-items-center rounded-full border border-line lg:hidden",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid transition-[grid-template-rows] duration-200 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 border-t border-line px-4 py-3",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						search: "search" in item ? item.search : void 0,
						className: "flex h-11 items-center text-sm",
						children: item.label
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openLead("list"),
						className: "flex h-11 items-center text-sm",
						children: "List Property"
					})]
				})
			})
		})]
	});
}
function Footer() {
	const { openLead, toast } = useApp();
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function subscribe(event) {
		event.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setError("Enter a valid email");
			setDone(false);
			return;
		}
		const list = JSON.parse(localStorage.getItem("havennest-news") || "[]");
		localStorage.setItem("havennest-news", JSON.stringify([...list, email.trim()]));
		setError("");
		setDone(true);
		setEmail("");
		toast("You're on the list");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "w-full min-w-0 bg-forest-deep text-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-xl",
								children: "HavenNest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-sm text-card/70",
							children: "Homes. Investments. A Better Tomorrow."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
									href: "https://www.linkedin.com",
									label: "LinkedIn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
									href: "https://www.instagram.com",
									label: "Instagram",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
									href: "https://www.youtube.com",
									label: "YouTube",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
									href: "https://www.facebook.com",
									label: "Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
									href: "https://x.com",
									label: "X",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold",
										children: "𝕏"
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Buy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/buy",
							search: buySearch({ type: "Apartment" }),
							children: "Apartments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/buy",
							search: buySearch({
								type: "Villa",
								place: ""
							}),
							children: "Villas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/buy",
							search: buySearch({
								type: "Builder Floor",
								place: ""
							}),
							children: "Builder Floors"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/buy",
							search: buySearch({
								type: "Plot",
								place: ""
							}),
							children: "Plots & Land"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
							to: "/projects",
							search: projectSearch(),
							children: "New Projects"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Rent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
						to: "/rent",
						search: rentSearch(),
						children: "Residential"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
						to: "/commercial",
						search: commercialSearch(),
						children: "Commercial"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Locations",
					children: [
						"Gurugram",
						"Bengaluru",
						"Mumbai",
						"Hyderabad",
						"Delhi"
					].map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
						to: "/buy",
						search: buySearch({
							place: city,
							type: "Any"
						}),
						children: city
					}, city))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Insights",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/insights#market-trends",
							className: "text-sm text-card/75 hover:text-card",
							children: "Market Trends"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/insights#locality-guide",
							className: "text-sm text-card/75 hover:text-card",
							children: "Locality Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/insights#buying-guide",
							className: "text-sm text-card/75 hover:text-card",
							children: "Buying Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/insights#real-estate-news",
							className: "text-sm text-card/75 hover:text-card",
							children: "Real Estate News"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "text-sm text-card/75 hover:text-card",
									children: "About Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/careers",
									className: "text-sm text-card/75 hover:text-card",
									children: "Careers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-sm text-card/75 hover:text-card",
									children: "Contact Us"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-medium",
							children: "Stay updated"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-card/70",
							children: "Get the latest property insights and new launches in your inbox."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: subscribe,
							className: "mt-3 flex min-w-0 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (event) => setEmail(event.target.value),
								placeholder: "Enter your email",
								className: "h-11 min-w-0 flex-1 rounded-control bg-card px-3 text-sm text-ink outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Subscribe",
								className: "tap grid size-11 shrink-0 place-items-center rounded-control bg-gold text-forest",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-gold",
							children: error
						}) : null,
						done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-gold",
							children: "You're on the list."
						}) : null
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-card/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-card/60 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 HavenNest. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sitemap",
							children: "Sitemap"
						})
					]
				})]
			})
		})]
	});
}
function Social({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "grid size-8 place-items-center rounded-full border border-card/20 text-card/80 hover:text-card",
		children
	});
}
function FooterCol({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-col gap-2",
			children
		})]
	});
}
function FooterLink({ to, search, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		search,
		className: "text-sm text-card/75 hover:text-card",
		children
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return void 0;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setOn(true);
				observer.disconnect();
			}
		}, { threshold: .16 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", on && "reveal-in", className),
		children
	});
}
function SelectField({ label, value, options, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function onPointer(event) {
			if (!ref.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("pointerdown", onPointer);
		return () => document.removeEventListener("pointerdown", onPointer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((current) => !current),
			className: "flex h-14 w-full items-center justify-between rounded-control border border-line bg-card px-3 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs text-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm",
				children: value || "Any"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", open && "rotate-180") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute z-30 mt-1 max-h-64 w-full overflow-auto rounded-control border border-line bg-card p-1 shadow-lg transition origin-top", open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"),
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					onChange(option);
					setOpen(false);
				},
				className: cn("block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-chip", option === value && "bg-chip"),
				children: option
			}, option))
		})]
	});
}
function HeartButton({ slug, className }) {
	const { isSaved, toggleSaved } = useApp();
	const saved = isSaved(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": saved ? "Remove from saved" : "Save property",
		"aria-pressed": saved,
		onClick: (event) => {
			event.preventDefault();
			event.stopPropagation();
			toggleSaved(slug);
		},
		className: cn("grid size-9 place-items-center rounded-full bg-card/90 text-ink shadow-sm", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4 transition", saved && "fill-forest text-forest") })
	});
}
function Pagination({ page, total, onPage }) {
	if (total <= 1) return null;
	const items = pageWindow(page, total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 flex items-center justify-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Previous page",
				disabled: page <= 1,
				onClick: () => onPage(page - 1),
				className: "grid size-10 place-items-center rounded-lg text-ink disabled:opacity-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
			}),
			items.map((item, index) => item === "…" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-1 text-muted",
				children: "…"
			}, `gap-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onPage(item),
				className: cn("grid size-10 place-items-center rounded-lg text-sm", item === page ? "bg-forest text-card" : "text-ink hover:bg-chip"),
				children: item
			}, item)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Next page",
				disabled: page >= total,
				onClick: () => onPage(page + 1),
				className: "grid size-10 place-items-center rounded-lg text-ink disabled:opacity-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
			})
		]
	});
}
async function copyText(value) {
	try {
		await navigator.clipboard.writeText(value);
		return true;
	} catch {
		const area = document.createElement("textarea");
		area.value = value;
		document.body.appendChild(area);
		area.select();
		const ok = document.execCommand("copy");
		area.remove();
		return ok;
	}
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-SCxekiOa.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BV-X4Pyr.css";
var APP_NAME = "HavenNest";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "HavenNest — verified homes and new projects across India's prime cities."
			},
			{
				name: "theme-color",
				content: "#12352c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Outfit:wght@300;400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppStateProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen w-full min-w-0 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$14 = () => import("./routes-D8BWQ6Qx.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "HavenNest — Find a place worth coming home to." }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_-DRV7J2bR.mjs");
var Route$13 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./about-C8AOYis-.mjs");
var Route$12 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./buy-C7bT5rkb.mjs");
var Route$11 = createFileRoute("/buy")({
	validateSearch: (search) => parseBuySearch(search, buySearch()),
	head: () => ({ meta: [{ title: "Apartments for sale · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./careers-B30rsrt2.mjs");
var Route$10 = createFileRoute("/careers")({
	head: () => ({ meta: [{ title: "Careers · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./commercial-CpFshAEb.mjs");
var Route$9 = createFileRoute("/commercial")({
	validateSearch: (search) => parseBuySearch(search, commercialSearch()),
	head: () => ({ meta: [{ title: "Commercial spaces · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-Ces0KTS4.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./insights-CiwkfI7M.mjs");
var Route$7 = createFileRoute("/insights")({
	head: () => ({ meta: [{ title: "Insights · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./locations-tM5htCkp.mjs");
var Route$6 = createFileRoute("/locations")({
	head: () => ({ meta: [{ title: "Locations · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-BKYoFssL.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-Ckp19t_i.mjs");
var Route$4 = createFileRoute("/projects")({
	validateSearch: (search) => parseProjectSearch(search),
	head: () => ({ meta: [{ title: "New projects · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./rent-DweA9Vnx.mjs");
var Route$3 = createFileRoute("/rent")({
	validateSearch: (search) => parseBuySearch(search, rentSearch()),
	head: () => ({ meta: [{ title: "Homes for rent · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sitemap-BGxwNeI7.mjs");
var Route$2 = createFileRoute("/sitemap")({
	head: () => ({ meta: [{ title: "Sitemap · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-Cf6pyhd4.mjs");
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./property._slug-D0-L9YuJ.mjs");
var Route = createFileRoute("/property/$slug")({
	head: () => ({ meta: [{ title: "Property · HavenNest" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$14.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$15
	}),
	SplatRoute: Route$13.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$15
	}),
	AboutRoute: Route$12.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$15
	}),
	BuyRoute: Route$11.update({
		id: "/buy",
		path: "/buy",
		getParentRoute: () => Route$15
	}),
	CareersRoute: Route$10.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$15
	}),
	CommercialRoute: Route$9.update({
		id: "/commercial",
		path: "/commercial",
		getParentRoute: () => Route$15
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$15
	}),
	InsightsRoute: Route$7.update({
		id: "/insights",
		path: "/insights",
		getParentRoute: () => Route$15
	}),
	LocationsRoute: Route$6.update({
		id: "/locations",
		path: "/locations",
		getParentRoute: () => Route$15
	}),
	PrivacyRoute: Route$5.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$15
	}),
	ProjectsRoute: Route$4.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$15
	}),
	RentRoute: Route$3.update({
		id: "/rent",
		path: "/rent",
		getParentRoute: () => Route$15
	}),
	SitemapRoute: Route$2.update({
		id: "/sitemap",
		path: "/sitemap",
		getParentRoute: () => Route$15
	}),
	TermsRoute: Route$1.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$15
	}),
	PropertySlugRoute: Route.update({
		id: "/property/$slug",
		path: "/property/$slug",
		getParentRoute: () => Route$15
	})
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { destinationsFor as A, launchProjects as B, RENT_BUDGETS as C, cn as D, buySearch as E, formatArea as F, pinFor as G, mapSrc as H, formatCr as I, rentSearch as J, priceTrend as K, formatRent as L, filterHomes as M, filterProjects as N, commercialSearch as O, floorConfigs as P, useApp as Q, formatSqft as R, Pagination as S, SelectField as T, nearbyFor as U, localitiesFor as V, paginate as W, resolveListing as X, resolveCity as Y, similarListings as Z, LOGO_DEVELOPER as _, Route$9 as a, PROJECT_TYPES as b, ARTICLES as c, CITIES as d, CITY_GEO as f, LISTINGS as g, HeartButton as h, Route$4 as i, developerOf as j, copyText as k, BUY_BUDGETS as l, DEVELOPER_LOGOS as m, Route as n, Route$11 as o, CITY_NAMES as p, projectSearch as q, Route$3 as r, AMENITIES as s, router_exports as t, BUY_SORTS as u, POSSESSION_OPTIONS as v, Reveal as w, PROPERTY_TYPES as x, PROJECT_SORTS as y, homeFeatured as z };
