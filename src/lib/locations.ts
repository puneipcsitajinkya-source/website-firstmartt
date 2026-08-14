export type LocationEntry = {
  slug: string;
  name: string;
  type: "state" | "city";
  parent?: string;
  title: string;
  description: string;
  keywords: string[];
  headline: string;
  intro: string;
  cities?: string[];
  highlights: string[];
  serviceAreas: { type: "State" | "City"; name: string }[];
};

export const locations: LocationEntry[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    type: "state",
    title: "FirstMartt in Maharashtra — Hyperlocal Delivery Startup",
    description:
      "FirstMartt operates in Maharashtra, connecting local shops in Yavatmal, Mumbai, Pune, Nagpur, Amravati, Akola, and Nashik with customers through fast hyperlocal delivery.",
    keywords: [
      "Startup in Maharashtra",
      "Hyperlocal Delivery Maharashtra",
      "Quick Commerce Maharashtra",
      "FirstMartt Maharashtra",
      "Local Commerce Startup Maharashtra",
      "Hyperlocal ecommerce Maharashtra",
      "Maharashtra retail tech startup",
      "Hyperlocal shopping Maharashtra",
      "Vidarbha startup ecosystem",
    ],
    headline: "Hyperlocal Commerce in Maharashtra",
    intro:
      "FirstMartt is building India's hyperlocal commerce infrastructure from Maharashtra — combining massive retail density, entrepreneurial energy, and one of the country's strongest startup ecosystems.",
    cities: [
      "Yavatmal",
      "Nagpur",
      "Amravati",
      "Akola",
      "Wardha",
      "Chandrapur",
      "Gondia",
      "Pune",
      "Mumbai",
      "Thane",
      "Nashik",
      "Chhatrapati Sambhajinagar",
      "Kolhapur",
      "Solapur",
      "Nanded",
      "Jalgaon",
      "Latur"
    ],
    highlights: [
      "Headquartered in Yavatmal with pilot operations focused on neighbourhood retailers, kirana stores, and pharmacies.",
      "Targeting Maharashtra's ₹4 lakh crore+ unorganised retail market through trusted local shop partnerships.",
      "15-minute delivery model designed for dense urban corridors in Mumbai and Pune, and tier-2/3 city networks like Nagpur, Amravati, and Yavatmal.",
      "Supporting Maharashtra's Startup India ecosystem by digitising MSME retailers who employ millions across the state.",
    ],
    serviceAreas: [{ type: "State", name: "Maharashtra" }],
  },
  {
    slug: "yavatmal",
    name: "Yavatmal",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Yavatmal — Local Shop Delivery in 15 Minutes",
    description:
      "FirstMartt is piloting hyperlocal ecommerce in Yavatmal, Maharashtra — connecting neighbourhood kirana stores, pharmacies, and local shops with customers for fast delivery.",
    keywords: [
      "Hyperlocal Delivery Yavatmal",
      "Local Shops Yavatmal",
      "Quick Commerce Yavatmal",
      "FirstMartt Yavatmal",
      "Ecommerce Yavatmal Maharashtra",
      "Local commerce startup Yavatmal",
      "Vidarbha startup ecosystem",
      "Tier 3 city commerce India",
    ],
    headline: "Yavatmal Pilot — Local Commerce, Digitised",
    intro:
      "Yavatmal is where FirstMartt began — our pilot city proving that hyperlocal delivery can work sustainably in tier-3 India, powered by real neighbourhood shops rather than dark stores.",
    highlights: [
      "Pilot operations connecting local kirana, pharmacy, and specialty retailers with customers across Yavatmal.",
      "On-ground merchant onboarding with digital catalogues, inventory tools, and delivery coordination.",
      "15-minute delivery radius built around trusted local businesses customers already know.",
      "Creating local jobs for delivery partners and digital roles as the platform scales across Maharashtra.",
    ],
    serviceAreas: [
      { type: "City", name: "Yavatmal" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Nagpur — Central India's Fast Local Marketplace",
    description:
      "FirstMartt connects local retailers in Itwari, Sitabuldi, Dharampeth, and Mahal with customers across Nagpur for 15-minute delivery.",
    keywords: [
      "Hyperlocal Delivery Nagpur",
      "Quick Commerce Nagpur",
      "FirstMartt Nagpur",
      "Local Shops Nagpur",
      "Vidarbha Ecommerce Hub",
    ],
    headline: "Nagpur — Central India's Retail Engine",
    intro:
      "Nagpur's strategic location and thriving wholesale markets make it a prime hub for FirstMartt's merchant-led hyperlocal delivery network.",
    highlights: [
      "Connecting historic markets in Itwari and Sitabuldi with fast-growing residential wards.",
      "Direct wholesale-to-retail integration delivering unmatched product availability and pricing.",
      "Electric two-wheeler delivery fleet designed for rapid urban dispatch.",
    ],
    serviceAreas: [
      { type: "City", name: "Nagpur" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Pune — Instant Delivery from Trusted Neighborhood Shops",
    description:
      "FirstMartt delivers in 15 minutes from neighborhood retailers in Kothrud, Viman Nagar, Baner, Laxmi Road, and PCMC.",
    keywords: [
      "Quick Commerce Pune",
      "Hyperlocal Delivery Pune",
      "FirstMartt Pune",
      "Online Kirana Pune",
      "Retail Tech Startup Pune",
    ],
    headline: "Pune — High-Density Tech & Heritage Commerce",
    intro:
      "In Pune, FirstMartt combines traditional high-street merchant excellence with lightning-fast electric vehicle logistics for tech-savvy households.",
    highlights: [
      "Extensive coverage across IT corridors (Hinjewadi, Viman Nagar) and heritage retail zones (Laxmi Road, Tulshibaug).",
      "Zero dark store burn, supporting local family businesses and bakeries.",
      "Sub-15 minute average delivery times powered by real-time order batching.",
    ],
    serviceAreas: [
      { type: "City", name: "Pune" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Mumbai — India's Capital of Dense Retail Commerce",
    description:
      "FirstMartt empowers Mumbai's local shopkeepers across Bandra, Dadar, Andheri, and Borivali to offer instant 15-minute delivery.",
    keywords: [
      "Hyperlocal Delivery Mumbai",
      "Quick Commerce Mumbai",
      "FirstMartt Mumbai",
      "Local Merchant Platform Mumbai",
    ],
    headline: "Mumbai — High-Velocity Urban Commerce",
    intro:
      "In Mumbai's high-density neighborhoods, FirstMartt leverages existing retail density to deliver faster and more sustainably than warehouse-based quick commerce.",
    highlights: [
      "Empowering thousands of independent grocers, chemists, and specialty sweet makers.",
      "Zero inventory holding cost, immune to skyrocketing commercial warehouse rental costs.",
      "Hyper-localized route mapping navigating narrow galis and high-rise apartment complexes.",
    ],
    serviceAreas: [
      { type: "City", name: "Mumbai" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "amravati",
    name: "Amravati",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Amravati — Fast Doorstep Delivery for Vidarbha",
    description:
      "FirstMartt connects neighborhood shops in Rajapeth, Jawahar Road, and Camp with shoppers across Amravati.",
    keywords: [
      "Hyperlocal Delivery Amravati",
      "Quick Commerce Amravati",
      "FirstMartt Amravati",
      "Online Shopping Amravati",
    ],
    headline: "Amravati — Transforming Tier-2 Vidarbha Retail",
    intro:
      "Amravati is a key commercial and educational center in Vidarbha where FirstMartt empowers local merchants to thrive digitally.",
    highlights: [
      "Empowering local shopkeepers across Jawahar Road and Rajapeth with digital catalogs.",
      "Fast 15-minute delivery for daily groceries, student stationery, and medicines.",
      "Supporting local youth employment through EV rider fleet partnerships.",
    ],
    serviceAreas: [
      { type: "City", name: "Amravati" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "nashik",
    name: "Nashik",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Nashik — Fresh Mandi & Retail Delivery in 15 Minutes",
    description:
      "FirstMartt connects local stores and fresh produce vendors in Panchavati, College Road, and CIDCO with customers across Nashik.",
    keywords: [
      "Hyperlocal Delivery Nashik",
      "Quick Commerce Nashik",
      "FirstMartt Nashik",
      "Fresh Vegetables Online Nashik",
    ],
    headline: "Nashik — Farm Fresh & Industrial Powerhouse",
    intro:
      "Nashik's rich agricultural supply chains and growing urban population make it an ideal hub for fresh, fast hyperlocal commerce.",
    highlights: [
      "Direct APMC mandi integration delivering vegetables crisper and fresher than supermarket warehouses.",
      "Connecting established local brands on College Road with suburban families.",
      "Green delivery operations utilizing electric two-wheelers across the city.",
    ],
    serviceAreas: [
      { type: "City", name: "Nashik" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "chhatrapati-sambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Chhatrapati Sambhajinagar — Marathwada's Digital Marketplace",
    description:
      "FirstMartt empowers merchants in Gulmandi, CIDCO, and Cannought Place to offer 15-minute home delivery.",
    keywords: [
      "Hyperlocal Delivery Aurangabad",
      "Quick Commerce Sambhajinagar",
      "FirstMartt Sambhajinagar",
      "Marathwada Ecommerce",
    ],
    headline: "Chhatrapati Sambhajinagar — Capital of Marathwada Retail",
    intro:
      "Serving as the industrial and cultural hub of Marathwada, FirstMartt connects traditional bazaar merchants with modern residential hubs.",
    highlights: [
      "Digitizing Gulmandi and Cannought Place retailers with vernacular Marathi/Hindi tools.",
      "Express delivery for groceries, diagnostics, medicines, and festive apparel.",
      "Sustainable zero-warehouse model keeping economic value within the district.",
    ],
    serviceAreas: [
      { type: "City", name: "Chhatrapati Sambhajinagar" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "kolhapur",
    name: "Kolhapur",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Kolhapur — Instant Delivery from Trusted Local Stores",
    description:
      "FirstMartt digitizes merchants in Rajarampuri, Mahadwar Road, and Shahupuri for 15-minute delivery across Kolhapur.",
    keywords: [
      "Hyperlocal Delivery Kolhapur",
      "Quick Commerce Kolhapur",
      "FirstMartt Kolhapur",
      "Local Shops Kolhapur",
    ],
    headline: "Kolhapur — High-Affluence Western Maharashtra Hub",
    intro:
      "Kolhapur's deep entrepreneurial spirit and loyal merchant relationships are supercharged with FirstMartt's digital technology.",
    highlights: [
      "Connecting iconic local specialty food makers, jaggery traders, and retail shops.",
      "15-minute neighborhood delivery preserving local family business wealth.",
      "Next-day T+1 bank settlements giving merchants total working capital control.",
    ],
    serviceAreas: [
      { type: "City", name: "Kolhapur" },
      { type: "State", name: "Maharashtra" },
    ],
  },
  {
    slug: "solapur",
    name: "Solapur",
    type: "city",
    parent: "maharashtra",
    title: "FirstMartt in Solapur — Fast Doorstep Delivery for Textile & Trade City",
    description:
      "FirstMartt connects local stores in Navi Peth, Murarji Peth, and Station Road with shoppers across Solapur.",
    keywords: [
      "Hyperlocal Delivery Solapur",
      "Quick Commerce Solapur",
      "FirstMartt Solapur",
      "Online Grocery Solapur",
    ],
    headline: "Solapur — High-Density Border Commerce",
    intro:
      "Solapur's dense commercial markets and thriving textile trade benefit from FirstMartt's multi-vendor ordering and dispatch platform.",
    highlights: [
      "Digitizing Navi Peth and Murarji Peth retailers with seamless POS and inventory tools.",
      "Fast 15-minute delivery for everyday household needs and medicines.",
      "Zero-commission marketplace architecture supporting MSME store owners.",
    ],
    serviceAreas: [
      { type: "City", name: "Solapur" },
      { type: "State", name: "Maharashtra" },
    ],
  }
];

export function getLocationBySlug(slug: string): LocationEntry | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
