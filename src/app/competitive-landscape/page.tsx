import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Competitive Landscape — FirstMartt vs Dark-Store Quick Commerce | India",
  description:
    "Compare FirstMartt's collaborative merchant mesh against dark-store quick commerce and centralized aggregators. Discover our capital-efficient moat in Tier-2/3 Bharat.",
  path: "/competitive-landscape",
  keywords: [
    "Hyperlocal Commerce Competition India",
    "Quick Commerce vs Local Commerce",
    "Quick commerce without dark stores",
    "Dark store model vs local merchant network",
    "Indian Hyperlocal Startups",
    "FirstMartt vs Quick Commerce",
    "Hyperlocal Marketplace Comparison",
    "Multi vendor marketplace vs single vendor",
    "AI in local retail supply chain India",
    "Kirana store digital platform",
  ],
});

const comparisonRows = [
  {
    dimension: "Core Model",
    darkStore: "Centralized dark-store fulfillment",
    aggregator: "Large-scale multi-vendor aggregation",
    firstmartt: "Neighbourhood merchant-first marketplace",
  },
  {
    dimension: "Merchant Relationship",
    darkStore: "No merchant involvement — platform owns inventory",
    aggregator: "Commission-heavy partnership",
    firstmartt: "Empowerment-first — merchants retain identity & control",
  },
  {
    dimension: "Capital Intensity",
    darkStore: "Very high (warehouses, inventory, cold chain)",
    aggregator: "High (logistics, marketing, subsidies)",
    firstmartt: "Low — leverages existing retail infrastructure",
  },
  {
    dimension: "Delivery Speed",
    darkStore: "10-15 minutes (limited to dark-store radius)",
    aggregator: "30-60 minutes",
    firstmartt: "15-30 minutes (neighbourhood radius)",
  },
  {
    dimension: "Product Breadth",
    darkStore: "Limited SKUs (typically grocery-focused)",
    aggregator: "Wide but standardized",
    firstmartt: "Full local catalogue (grocery, fashion, electronics, services)",
  },
  {
    dimension: "Community Impact",
    darkStore: "Displaces local stores",
    aggregator: "May compete with local merchants",
    firstmartt: "Strengthens local commerce ecosystem",
  },
  {
    dimension: "Tier-2/3 City Viability",
    darkStore: "Economically challenging — low density",
    aggregator: "Selective coverage only",
    firstmartt: "Designed for Tier-2/3 economics from day one",
  },
  {
    dimension: "Unit Economics",
    darkStore: "Negative — requires deep subsidies",
    aggregator: "Variable — depends on scale",
    firstmartt: "Positive unit economics by design — no warehouse CAPEX",
  },
];

const differentiators = [
  {
    icon: "🏪",
    title: "Merchant-First Philosophy",
    description:
      "While quick commerce builds dark stores that compete with local shops, FirstMartt digitizes existing merchants — preserving community commerce while adding digital convenience.",
  },
  {
    icon: "💡",
    title: "Capital-Light Operations",
    description:
      "No warehouses, no owned inventory, no cold chain infrastructure. FirstMartt achieves hyperlocal delivery by activating the existing retail network — dramatically reducing capital requirements.",
  },
  {
    icon: "🏙️",
    title: "Tier-2/3 City Native",
    description:
      "Built from Yavatmal, Maharashtra — not retrofitted from metro assumptions. Our unit economics, merchant relationships, and operational playbook are designed for India's small-city reality.",
  },
  {
    icon: "🤝",
    title: "Network Effects",
    description:
      "More merchants attract more customers. More customers drive more merchants. Unlike dark-store models, this flywheel strengthens local commerce rather than replacing it.",
  },
  {
    icon: "🧠",
    title: "AI-Enhanced, Not AI-Replaced",
    description:
      "We use AI for catalogue automation, demand forecasting, and delivery optimization — helping merchants work smarter, not replacing them with algorithms.",
  },
  {
    icon: "📊",
    title: "Transparent Economics",
    description:
      "Fair commissions, clear pricing, no hidden fees. Merchants see exactly what they earn. This transparency builds trust and drives long-term retention.",
  },
];

export default function CompetitiveLandscapePage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Competitive Landscape", url: `${siteConfig.url}/competitive-landscape` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "Hyperlocal Commerce Competitive Landscape India",
            description:
              "Fair and factual competitive analysis of India's hyperlocal commerce market.",
            path: "/competitive-landscape",
          }),
        ]}
      />
      <PageHeader
        title="Competitive Landscape"
        description="An honest, factual comparison of hyperlocal commerce approaches in India — and where FirstMartt's merchant-first model creates a distinct advantage."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitive Landscape" }]}
      />

      {/* Fairness Notice */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6">
          <h3 className="text-sm font-semibold text-blue-800">⚖️ Fair Comparison Notice</h3>
          <p className="mt-2 text-xs leading-relaxed text-blue-700">
            This page compares hyperlocal commerce model categories, not specific companies. All characterizations
            are based on publicly available industry information. We respect all players in the ecosystem and
            aim for factual, balanced analysis. We do not disparage competitors.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Model Comparison
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Three distinct approaches to hyperlocal commerce in India — each with different trade-offs.
        </p>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b-2 border-violet-200">
                <th className="px-4 py-4 text-left text-sm font-bold text-slate-900">Dimension</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">Dark-Store Q-Commerce</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">Large Aggregators</th>
                <th className="px-4 py-4 text-left text-sm font-bold text-violet-700">
                  FirstMartt
                  <span className="ml-1 inline-block rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-600">Our Model</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.dimension} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                  <td className="px-4 py-4 text-sm font-semibold text-slate-800">{row.dimension}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{row.darkStore}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{row.aggregator}</td>
                  <td className="px-4 py-4 text-sm font-medium text-violet-800 bg-violet-50/40">{row.firstmartt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            FirstMartt&apos;s Competitive Advantages
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff) => (
              <article key={diff.title} className="premium-card rounded-2xl p-6">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {diff.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                  {diff.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {diff.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See Our Business Model"
        description="Understand how FirstMartt's competitive advantages translate into sustainable revenue and scalable growth."
        primaryHref="/business-model"
        primaryLabel="Business Model"
        secondaryHref="/investment"
        secondaryLabel="Investment Opportunity"
      />
    </>
  );
}
