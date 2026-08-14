import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "India's Hyperlocal Commerce Market Opportunity",
  description:
    "Explore India's $1.3 trillion retail market opportunity. Understand the hyperlocal commerce TAM, SAM, SOM, digital payments adoption, and Tier-2/Tier-3 city growth driving FirstMartt.",
  path: "/market",
  keywords: [
    "India Retail Market Size",
    "Hyperlocal Commerce TAM",
    "India Ecommerce Market Opportunity",
    "Tier 2 Tier 3 City Commerce India",
    "India Digital Payments UPI",
    "India Retail Market 2030",
  ],
});

const marketStats = [
  {
    value: "$1.3T+",
    valueInr: "₹110+ Lakh Cr",
    label: "India Retail TAM by 2030",
    source: "Industry estimates",
  },
  {
    value: "60M+",
    valueInr: "6 Crore+",
    label: "MSME Retail Merchants",
    source: "MSME Ministry, Govt. of India",
  },
  {
    value: "$350B+",
    valueInr: "₹29+ Lakh Cr",
    label: "India E-commerce by 2030",
    source: "Bain & Company, Redseer",
  },
  {
    value: "900M+",
    valueInr: "90 Crore+",
    label: "Internet Users in India",
    source: "TRAI, IAMAI",
  },
];

const drivers = [
  {
    icon: "📱",
    title: "Smartphone & Internet Penetration",
    description:
      "India has 900M+ internet users with rapidly growing smartphone adoption in Tier-2 and Tier-3 cities, creating a massive new consumer base for hyperlocal digital commerce.",
  },
  {
    icon: "💳",
    title: "UPI & Digital Payments Revolution",
    description:
      "India's Unified Payments Interface (UPI) processed 13+ billion transactions monthly in 2024, making cashless commerce accessible to even the smallest neighbourhood stores.",
  },
  {
    icon: "🏘️",
    title: "Tier-2 & Tier-3 City Growth",
    description:
      "While metro cities are saturated with quick commerce, India's 500+ Tier-2 and Tier-3 cities represent the next wave of hyperlocal commerce adoption — with growing disposable incomes and limited organized retail.",
  },
  {
    icon: "🏪",
    title: "Retail Fragmentation",
    description:
      "Over 90% of India's $900B+ retail market remains unorganized, operated by neighbourhood MSMEs. These merchants need digital tools to compete — creating a massive addressable market for hyperlocal platforms.",
  },
  {
    icon: "📦",
    title: "Consumer Expectation Shift",
    description:
      "Post-pandemic, Indian consumers expect fast, convenient delivery from local stores. Quick commerce trained the habit; hyperlocal platforms can serve the much larger long-tail of neighbourhood retail.",
  },
  {
    icon: "🏛️",
    title: "Government & Policy Support",
    description:
      "Government initiatives like Digital India, Open Network for Digital Commerce (ONDC), and MSME digitization programs create a favourable regulatory environment for hyperlocal commerce platforms.",
  },
];

export default function MarketPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Market Opportunity", url: `${siteConfig.url}/market` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "India's Hyperlocal Commerce Market Opportunity",
            description:
              "Explore India's $1.3 trillion retail market opportunity for hyperlocal commerce platforms.",
            path: "/market",
          }),
        ]}
      />
      <PageHeader
        title="India's Hyperlocal Commerce Market Opportunity"
        description="A $1.3 trillion retail market, 60 million MSME merchants, and the world's fastest-growing digital payments ecosystem — the opportunity for hyperlocal commerce in India is immense."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Market Opportunity" }]}
      />

      {/* Market Sizing — Dual Currency */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Market Sizing at a Glance
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
          All figures shown in both USD and INR for Indian and international investors.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat) => (
            <div key={stat.label} className="premium-card rounded-2xl p-6 text-center">
              <span className="font-display block text-3xl font-bold text-violet-700">
                {stat.value}
              </span>
              <span className="mt-1 block text-sm font-semibold text-violet-500">
                {stat.valueInr}
              </span>
              <span className="mt-3 block text-sm font-semibold text-slate-700">
                {stat.label}
              </span>
              <span className="mt-1 block text-xs text-slate-400">
                Source: {stat.source}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TAM / SAM / SOM */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            TAM / SAM / SOM
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="premium-card rounded-2xl p-8 text-center">
              <span className="premium-eyebrow">TAM</span>
              <h3 className="font-display mt-4 text-2xl font-bold text-slate-900">
                Total Addressable Market
              </h3>
              <p className="font-display mt-2 text-3xl font-extrabold text-violet-700">
                $1.3T+ <span className="text-base text-violet-400">(₹110+ Lakh Cr)</span>
              </p>
              <p className="mt-4 text-sm text-slate-600">
                India&apos;s entire retail market including organized and unorganized sectors, projected to reach $1.3 trillion by 2030.
              </p>
            </div>
            <div className="premium-card rounded-2xl p-8 text-center">
              <span className="premium-eyebrow">SAM</span>
              <h3 className="font-display mt-4 text-2xl font-bold text-slate-900">
                Serviceable Addressable Market
              </h3>
              <p className="font-display mt-2 text-3xl font-extrabold text-violet-700">
                $150B+ <span className="text-base text-violet-400">(₹12.5+ Lakh Cr)</span>
              </p>
              <p className="mt-4 text-sm text-slate-600">
                The subset of Indian retail that is digitally addressable through hyperlocal commerce platforms — primarily neighbourhood retail in urban and semi-urban areas.
              </p>
            </div>
            <div className="premium-card rounded-2xl p-8 text-center">
              <span className="premium-eyebrow">SOM</span>
              <h3 className="font-display mt-4 text-2xl font-bold text-slate-900">
                Serviceable Obtainable Market
              </h3>
              <p className="font-display mt-2 text-3xl font-extrabold text-violet-700">
                $5B+ <span className="text-base text-violet-400">(₹4,000+ Cr)</span>
              </p>
              <p className="mt-4 text-sm text-slate-600">
                FirstMartt&apos;s realistic capture opportunity over 5-7 years across Maharashtra and adjacent states, based on city-by-city rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Drivers */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Why Hyperlocal Commerce? Why Now?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Six structural forces converging to create the largest retail technology opportunity in India.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drivers.map((driver) => (
            <article key={driver.title} className="premium-card rounded-2xl p-6">
              <span className="text-3xl" role="img" aria-hidden="true">
                {driver.icon}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                {driver.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {driver.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Data Sources Notice */}
      <section className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
          <h3 className="text-sm font-semibold text-amber-800">📊 Data Sources & Methodology</h3>
          <p className="mt-2 text-xs leading-relaxed text-amber-700">
            Market sizing figures are based on publicly available reports from Bain & Company, Redseer Consulting, NASSCOM, RBI, TRAI, and Government of India MSME Ministry data. All projections represent industry consensus estimates and are not guarantees of future market size. FirstMartt uses these figures as directional indicators, not precise forecasts.
          </p>
        </div>
      </section>

      <CTA
        title="Explore the Investment Opportunity"
        description="Learn how FirstMartt plans to capture this market with its merchant-first hyperlocal commerce platform."
        primaryHref="/investment"
        primaryLabel="View Investment Details"
        secondaryHref="/investors"
        secondaryLabel="Investor Hub"
      />
    </>
  );
}
