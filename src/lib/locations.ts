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
      "FirstMartt operates in Maharashtra, connecting local shops in Yavatmal, Mumbai, Pune, and Nagpur with customers through fast hyperlocal delivery.",
    keywords: [
      "Startup in Maharashtra",
      "Hyperlocal Delivery Maharashtra",
      "Quick Commerce Maharashtra",
      "FirstMartt Maharashtra",
      "Local Commerce Startup Maharashtra",
    ],
    headline: "Hyperlocal Commerce in Maharashtra",
    intro:
      "FirstMartt is building India's hyperlocal commerce infrastructure from Maharashtra — a state that combines massive retail density, entrepreneurial energy, and one of the country's strongest startup ecosystems.",
    cities: ["Yavatmal", "Mumbai", "Pune", "Nagpur"],
    highlights: [
      "Headquartered in Yavatmal with a pilot launch focused on neighbourhood retailers and kirana stores.",
      "Targeting Maharashtra's ₹4 lakh crore+ unorganised retail market through trusted local shop partnerships.",
      "15-minute delivery model designed for dense urban corridors in Mumbai and Pune, and tier-2 city networks like Nagpur and Yavatmal.",
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
    ],
    headline: "Yavatmal Pilot — Local Commerce, Digitised",
    intro:
      "Yavatmal is where FirstMartt began — our pilot city for proving that hyperlocal delivery can work in tier-2 India, powered by real neighbourhood shops rather than dark-store warehouses.",
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
];

export function getLocationBySlug(slug: string): LocationEntry | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
