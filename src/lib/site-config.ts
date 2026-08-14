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
    /** Brief bio for Person schema and founder authority pages */
    bio: "Building India's hyperlocal commerce infrastructure to empower local businesses, merchants, and communities through technology.",
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
  /** Analytics & verification IDs (loaded from environment variables) */
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    gscVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
    bingVerification: process.env.BING_SITE_VERIFICATION ?? "",
  },
  keywords: [
    // Brand keywords (Tier A)
    "FirstMartt",
    "FirstMartt India",
    "FirstMartt startup",
    "FirstMartt investment",
    "FirstMartt funding",
    "FirstMartt business model",
    // Commercial / Investor keywords (Tier B — Indian)
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
    "Indian hyperlocal commerce startup",
    "hyperlocal commerce platform India",
    "Indian ecommerce startup investment",
    "hyperlocal startup investment",
    "Indian startup investment opportunity",
    "Indian retail technology startup",
    "local business digitalization India",
    // Commercial / Investor keywords (Tier B — Foreign/International)
    "invest in Indian startups",
    "India ecommerce investment",
    "FDI India ecommerce",
    "NRI investment Indian startups",
    "foreign investment Indian retail tech",
    "India market entry ecommerce",
    "India startup investment opportunity",
    // Informational keywords (Tier C)
    "what is hyperlocal commerce",
    "future of hyperlocal commerce in India",
    "hyperlocal commerce business model",
    "Tier-2 city ecommerce India",
    "Tier-3 city commerce India",
    "local merchant marketplace",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-firstmartt", label: "Why FirstMartt" },
  { href: "/solutions", label: "Solutions" },
  { href: "/investors", label: "Investors" },
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
    { href: "/investors", label: "Investor Hub" },
    { href: "/investment", label: "Investment Opportunity" },
    { href: "/market", label: "Market Opportunity" },
    { href: "/traction", label: "Traction & Metrics" },
    { href: "/unit-economics", label: "Unit Economics" },
    { href: "/competitive-landscape", label: "Competitive Landscape" },
    { href: "/investors/faq-international", label: "International Investor FAQ" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact" },
  ],
} as const;


