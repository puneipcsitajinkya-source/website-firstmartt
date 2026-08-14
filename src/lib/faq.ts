export type FAQCategory =
  | "general"
  | "indian-investors"
  | "international-investors"
  | "merchants"
  | "customers";

export type FAQItem = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const faqCategories: { key: FAQCategory; label: string }[] = [
  { key: "general", label: "General" },
  { key: "indian-investors", label: "For Indian Investors" },
  { key: "international-investors", label: "For International Investors" },
  { key: "merchants", label: "For Merchants" },
  { key: "customers", label: "For Customers" },
];

export const faqs: FAQItem[] = [
  // ── General ──────────────────────────────────────────────
  {
    question: "What is FirstMartt?",
    answer:
      "FirstMartt is an Indian hyperlocal commerce startup building a multi-vendor marketplace and digital platform for local businesses. We connect neighbourhood merchants with nearby customers through technology-enabled local shopping.",
    category: "general",
  },
  {
    question: "What makes FirstMartt different from other marketplaces?",
    answer:
      "FirstMartt takes a merchant-first approach, empowering local stores with digital tools while preserving community commerce authenticity. Our platform focuses on neighbourhood inventory and sustainable unit economics rather than pure aggregation.",
    category: "general",
  },
  {
    question: "Which markets does FirstMartt serve?",
    answer:
      "FirstMartt is focused on India, starting with pilot city markets in Maharashtra and expanding to additional urban and semi-urban regions. Our platform is designed for India's unique local retail landscape, especially Tier-2 and Tier-3 cities.",
    category: "general",
  },
  {
    question: "What technology does FirstMartt use?",
    answer:
      "FirstMartt leverages modern cloud infrastructure, AI-powered commerce tools, mobile-first design, and integrated payment and logistics systems to deliver a seamless hyperlocal marketplace experience.",
    category: "general",
  },
  {
    question: "Does FirstMartt have career opportunities?",
    answer:
      "Yes. We are building a talented team across engineering, product, operations, and growth. Visit our careers page for current openings or reach out through contact for general applications.",
    category: "general",
  },

  // ── Indian Investors ─────────────────────────────────────
  {
    question: "Is FirstMartt seeking investment?",
    answer:
      "Yes. FirstMartt is a pre-seed stage startup seeking funding from angel investors, venture capital firms, startup incubators, accelerators, and strategic partners interested in India's hyperlocal commerce sector.",
    category: "indian-investors",
  },
  {
    question: "What is the current funding stage?",
    answer:
      "FirstMartt is at pre-seed stage, seeking capital for product validation, pilot operations, and initial merchant onboarding. We welcome conversations with angel investors, seed funds, and accelerators.",
    category: "indian-investors",
  },
  {
    question: "What is FirstMartt's business model?",
    answer:
      "We operate a transaction-driven marketplace with four revenue streams: transaction commissions, merchant SaaS subscriptions, logistics fee sharing, and hyperlocal advertising. This multi-stream approach is designed for capital efficiency.",
    category: "indian-investors",
  },
  {
    question: "How large is the addressable market?",
    answer:
      "India's retail market is projected to reach $1.3 trillion (₹110+ lakh crore) by 2030. Over 90% remains unorganized, operated by 60M+ MSME merchants — one of the world's largest digital commerce opportunities.",
    category: "indian-investors",
  },
  {
    question: "How does FirstMartt compare to quick commerce players?",
    answer:
      "Unlike dark-store models (Zepto, Blinkit) that require heavy capital for warehouses and inventory, FirstMartt digitizes existing merchant inventory with zero warehouse CAPEX. This makes our model viable in Tier-2/3 cities where dark stores are economically challenging.",
    category: "indian-investors",
  },
  {
    question: "What are the SEBI/AIF compliance considerations?",
    answer:
      "FirstMartt is structured as a standard Indian Private Limited Company and follows all applicable DPIIT startup recognition and corporate compliance requirements. For investors investing through Alternative Investment Funds (AIFs), the fund manager typically handles SEBI compliance. We recommend consulting your fund or legal advisor for AIF-specific regulatory questions.",
    category: "indian-investors",
  },
  {
    question: "How can Indian investors learn more?",
    answer:
      "Investors can contact us at firstmartsindia@gmail.com with 'Investment' in the subject line. We provide detailed information about our business model, roadmap, traction, and funding requirements to qualified investors.",
    category: "indian-investors",
  },

  // ── International Investors ──────────────────────────────
  {
    question: "Can foreign investors invest in FirstMartt?",
    answer:
      "Yes. India permits FDI in marketplace e-commerce models under the automatic route. FirstMartt operates as a marketplace platform (not inventory-based), generally eligible for 100% FDI. We recommend consulting legal professionals familiar with Indian FDI regulations before investing.",
    category: "international-investors",
  },
  {
    question: "What currency are investments made in?",
    answer:
      "Investments are typically made in Indian Rupees (INR). Foreign investors can invest via the FDI route, converting foreign currency to INR through authorized banking channels. We present all market sizing in both INR and USD for clarity.",
    category: "international-investors",
  },
  {
    question: "How does India's hyperlocal market compare to other regions?",
    answer:
      "India's retail fragmentation (90%+ unorganized), UPI digital payments adoption (13B+ monthly transactions), and 900M+ internet users create a unique hyperlocal commerce opportunity that is significantly larger than comparable markets in Southeast Asia or Latin America.",
    category: "international-investors",
  },
  {
    question: "What about repatriation of investment returns?",
    answer:
      "Under India's FDI framework, repatriation of investment proceeds (dividends and exit) is generally permitted through authorized banking channels, subject to applicable tax withholding and RBI regulations. Consult your tax advisor for specifics.",
    category: "international-investors",
  },
  {
    question: "How can international investors contact FirstMartt?",
    answer:
      "Email firstmartsindia@gmail.com with 'International Investor' in the subject line. We are available Mon-Sat, 10 AM - 7 PM IST (UTC+5:30) and routinely accommodate US, UK, Singapore, and UAE time zones.",
    category: "international-investors",
  },

  // ── Merchants ────────────────────────────────────────────
  {
    question: "How can local businesses join FirstMartt?",
    answer:
      "Merchants can express interest through our contact page. Our team provides onboarding support including digital storefront setup, catalog management, and order processing tools.",
    category: "merchants",
  },
  {
    question: "What does it cost for merchants to join?",
    answer:
      "We offer low-barrier onboarding with transparent commission-based pricing. There are no hidden fees, and optional premium SaaS tools are available for merchants who want advanced analytics and marketing capabilities.",
    category: "merchants",
  },
  {
    question: "Do merchants retain control of their store identity?",
    answer:
      "Absolutely. Unlike aggregator models, FirstMartt preserves each merchant's brand identity, pricing control, and customer relationships. Merchants operate their own digital storefronts within our marketplace ecosystem.",
    category: "merchants",
  },

  // ── Customers ────────────────────────────────────────────
  {
    question: "How does ordering on FirstMartt work?",
    answer:
      "Customers discover nearby local stores, browse real-time inventory, place orders, and receive delivery within 15-30 minutes from neighbourhood merchants — all through a single platform.",
    category: "customers",
  },
  {
    question: "Which product categories are available?",
    answer:
      "FirstMartt supports the full breadth of local retail — groceries, fashion, electronics, pharmacy, home goods, and services. The exact catalog varies by city and available merchants.",
    category: "customers",
  },
];

/** Get all FAQ items (flat list for backward compatibility) */
export function getAllFaqs(): FAQItem[] {
  return faqs;
}

/** Get FAQ items filtered by category */
export function getFaqsByCategory(category: FAQCategory): FAQItem[] {
  return faqs.filter((faq) => faq.category === category);
}
