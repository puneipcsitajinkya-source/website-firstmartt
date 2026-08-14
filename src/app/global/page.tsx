import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Invest in FirstMartt — Hyperlocal Commerce Investment Opportunity | India",
  description:
    "FirstMartt is building India's hyperlocal commerce platform, connecting local retailers with customers through 15-minute delivery. Explore the investment opportunity for global investors.",
  path: "/global",
  keywords: [
    "India Ecommerce Investment Opportunity",
    "Quick Commerce Startup Funding India",
    "Series A Hyperlocal Delivery India",
    "Invest in Hyperlocal Startup India",
    "Indian Retail Technology Investment",
    "Pre-Seed Startup India",
    "Foreign Investment Indian Retail Tech",
    "NRI investment Indian startups",
    "India Startup Investment Opportunity 2026",
    "FDI India ecommerce",
    "Invest in Indian Tech Startups",
  ],
});

const marketStats = [
  { label: "Indian Retail Market", value: "$1.3T+", detail: "Projected by 2028" },
  { label: "Unorganised Retail Share", value: "~88%", detail: "Kirana & local shops dominate" },
  { label: "Quick Commerce Growth", value: "40%+ CAGR", detail: "Fastest-growing ecommerce segment" },
  { label: "Target Delivery Window", value: "15 min", detail: "From trusted local shops" },
];

export default function GlobalInvestorsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Global Investors", url: `${siteConfig.url}/global` },
  ];

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema(breadcrumbs)]} />
      <PageHeader
        title="Investment Opportunity — FirstMartt"
        description="Backing India's next generation of local commerce infrastructure. A pre-seed hyperlocal platform connecting neighbourhood retailers with customers through 15-minute delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Global Investors" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">Market Context for International Investors</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            India is the world&apos;s fastest-growing major ecommerce market, yet the vast majority of retail
            transactions still happen through unorganised local shops — kirana stores, pharmacies, and
            neighbourhood specialty retailers. Quick-commerce players have proven demand for speed, but most
            rely on capital-intensive dark stores. FirstMartt takes a different approach: we connect existing
            local merchants to customers, preserving neighbourhood retail while delivering in as fast as 15 minutes.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are headquartered in Yavatmal, Maharashtra — operating within India&apos;s Startup India ecosystem
            and targeting a state with one of the country&apos;s largest retail economies. Our pre-seed stage
            offers early access to a platform positioned at the intersection of quick commerce, MSME digitisation,
            and AI-powered retail infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat) => (
            <div key={stat.label} className="premium-card rounded-xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-violet-600">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="premium-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">Investment Thesis</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Asset-light model leveraging existing local retail inventory</li>
              <li>Multi-category marketplace: grocery, pharmacy, food, lifestyle</li>
              <li>AI-driven merchant tools for catalogues, demand forecasting, and routing</li>
              <li>Pilot validated in tier-2 India before scaling to metro corridors</li>
            </ul>
          </div>
          <div className="premium-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">Use of Funds</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Platform engineering and mobile app development</li>
              <li>Merchant onboarding across Maharashtra pilot cities</li>
              <li>Delivery network build-out and logistics optimisation</li>
              <li>Go-to-market and brand building for customer acquisition</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/investment" className="btn-primary">
            Full Investor Briefing
          </Link>
          <Link href="/business-model" className="btn-secondary">
            Business Model
          </Link>
          <Link href="/roadmap" className="btn-secondary">
            Roadmap
          </Link>
          <Link href="/contact" className="btn-secondary">
            Schedule a Call
          </Link>
        </div>
      </section>

      <CTA
        title="Interested in Investing?"
        description="We welcome conversations with angel investors, VCs, and strategic partners globally."
        primaryHref="/contact"
        primaryLabel="Contact Investor Relations"
        secondaryHref="/investment"
        secondaryLabel="Read Full Briefing"
      />
    </>
  );
}
