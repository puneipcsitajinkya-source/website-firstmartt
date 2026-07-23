export const siteConfig = {
  name: "FirstMartt",
  tagline: "India's Hyperlocal Commerce Platform for Local Businesses",
  description:
    "FirstMartt is an AI-powered hyperlocal marketplace startup in India connecting local businesses, merchants, and customers through a multi-vendor digital commerce platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://firstmartt.com",
  locale: "en_IN",
  language: "en",
  founder: {
    name: "FirstMartt Team",
    role: "Founders",
  },
  contact: {
    email: "firstmartsindia@gmail.com",
    phone: {
      countryCode: "+91",
      national: "8261807358",
      /** E.164 display for international visitors */
      international: "+91 8261807358",
      /** Used in tel: links */
      e164: "+918261807358",
      /** Used in wa.me links (digits only, no +) */
      whatsappId: "918261807358",
    },
    address: {
      streetAddress: "India",
      addressLocality: "Yavatmal",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
      postalCode: "445301",
    },
  },
  social: {
    twitter: "@firstmartt",
    linkedin: "https://linkedin.com/company/firstmartt",
  },
  keywords: [
    "FirstMartt",
    "FirstMartt India",
    "Hyperlocal Commerce Startup",
    "Hyperlocal Marketplace India",
    "Local Commerce Platform",
    "Multi Vendor Marketplace India",
    "Digital Platform for Local Businesses",
    "Startup Seeking Investment India",
    "AI Commerce Startup India",
    "Indian Startup",
    "Retail Technology Startup",
    "Local Business Marketplace",
    "Startup Investment Opportunity",
    "Invest in Indian Startup",
    "Pre-Seed Startup India",
    "Angel Investment Opportunity",
    "Venture Capital Startup",
    "Marketplace Startup",
    "Ecommerce Startup India",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-firstmartt", label: "Why FirstMartt" },
  { href: "/solutions", label: "Solutions" },
  { href: "/investment", label: "Investment" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/why-firstmartt", label: "Why FirstMartt" },
    { href: "/mission", label: "Our Mission" },
    { href: "/vision", label: "Our Vision" },
    { href: "/founder", label: "Founder Briefing" },
    { href: "/careers", label: "Careers" },
  ],
  platform: [
    { href: "/problem", label: "Problem We Solve" },
    { href: "/solutions", label: "Solutions Overview" },
    { href: "/for-customers", label: "For Customers" },
    { href: "/for-local-businesses", label: "For Local Businesses" },
    { href: "/for-delivery-partners", label: "For Delivery Partners" },
    { href: "/business-model", label: "Business Model" },
    { href: "/roadmap", label: "Roadmap" },
  ],
  investors: [
    { href: "/investment", label: "Investment Opportunity" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

