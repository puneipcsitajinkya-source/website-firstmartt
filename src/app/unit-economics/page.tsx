import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Unit Economics & Contribution Margins | FirstMartt Hyperlocal Platform",
  description:
    "Explore FirstMartt's unit economics — CM3 contribution margins, asset-light zero-dark-store architecture, take rate, CAC/LTV, and path to sustainable profitability.",
  path: "/unit-economics",
  keywords: [
    "Startup Unit Economics",
    "Hyperlocal Marketplace Unit Economics",
    "Indian Startup Profitability",
    "FirstMartt Unit Economics",
    "Marketplace Take Rate",
    "Contribution margin quick commerce India",
    "Dark store model vs local merchant network",
    "Customer Acquisition Cost India",
    "Unit economics of hyperlocal delivery",
    "Hyperlocal commerce business model",
    "Quick commerce without dark stores",
  ],
});

const economicPillars = [
  {
    icon: "💳",
    title: "Transaction Revenue",
    metric: "Commission-Based",
    description:
      "A percentage-based take rate on every order processed through the platform. Our commission structure is designed to be significantly lower than traditional aggregator platforms, incentivizing merchant adoption while maintaining healthy platform margins.",
    status: "Model Defined",
  },
  {
    icon: "📊",
    title: "Customer Acquisition Cost (CAC)",
    metric: "Coming Soon",
    description:
      "We anticipate low CAC driven by organic local-network effects — word-of-mouth from neighbourhood merchants to their existing customer base. This eliminates the expensive paid-acquisition model that burdens many marketplace startups.",
    status: "Pre-Launch Estimate",
  },
  {
    icon: "🔄",
    title: "Customer Lifetime Value (LTV)",
    metric: "Coming Soon",
    description:
      "Hyperlocal commerce drives high repeat purchase frequency — customers order from nearby stores weekly or more. This high-frequency, low-churn model creates strong LTV relative to CAC, even at modest average order values.",
    status: "Pre-Launch Estimate",
  },
  {
    icon: "📈",
    title: "Take Rate",
    metric: "Model Defined",
    description:
      "Our blended take rate combines transaction commissions, optional SaaS subscription revenue, logistics fee sharing, and hyperlocal advertising. We target a take rate that is fair to merchants while building a sustainable business.",
    status: "Model Defined",
  },
];

const costAdvantages = [
  {
    title: "No Warehouse CAPEX",
    value: "₹0",
    description: "Zero warehouse, dark-store, or cold-chain infrastructure investment. Merchants use their existing retail space.",
  },
  {
    title: "No Owned Inventory",
    value: "₹0",
    description: "Marketplace model — inventory remains with merchants. No working capital locked in stock.",
  },
  {
    title: "Low Customer Acquisition",
    value: "Organic-First",
    description: "Merchants bring their existing customer relationships to the platform. Network effects reduce paid marketing dependency.",
  },
  {
    title: "Efficient Delivery",
    value: "Short Radius",
    description: "Average delivery radius of 2-5 km means lower logistics costs per order compared to city-wide or intercity delivery.",
  },
];

export default function UnitEconomicsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Unit Economics", url: `${siteConfig.url}/unit-economics` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "Unit Economics | FirstMartt Hyperlocal Marketplace",
            description:
              "FirstMartt's unit economics framework for hyperlocal commerce.",
            path: "/unit-economics",
          }),
        ]}
      />
      <PageHeader
        title="Unit Economics"
        description="Our capital-efficient hyperlocal model is designed for positive unit economics from early stages — no deep subsidies, no warehouse burn."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Unit Economics" }]}
      />

      {/* Honest Disclosure */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
          <h3 className="text-sm font-semibold text-amber-800">📋 Disclosure</h3>
          <p className="mt-2 text-xs leading-relaxed text-amber-700">
            FirstMartt is a pre-seed stage startup. The unit economics described below reflect our business model
            design and pre-launch estimates. Actual performance data will be published on our{" "}
            <a href="/traction" className="underline hover:text-amber-900">traction page</a>{" "}
            as we achieve operational milestones. We do not present projections as achieved results.
          </p>
        </div>
      </section>

      {/* Economic Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Revenue & Cost Framework
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Four pillars of our unit economics model — designed for capital efficiency from day one.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {economicPillars.map((pillar) => (
            <article key={pillar.title} className="premium-card rounded-2xl p-8">
              <div className="flex items-start justify-between">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {pillar.icon}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  pillar.status === "Model Defined"
                    ? "bg-violet-100 text-violet-700"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {pillar.status}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-slate-900">
                {pillar.title}
              </h3>
              <p className="font-display mt-2 text-lg font-semibold text-violet-600">
                {pillar.metric}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Structural Cost Advantages */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            Structural Cost Advantages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Why FirstMartt&apos;s merchant-first model achieves fundamentally different economics than dark-store or warehouse-based models.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {costAdvantages.map((adv) => (
              <div key={adv.title} className="premium-card rounded-2xl p-6 text-center">
                <span className="font-display block text-2xl font-bold text-violet-700">
                  {adv.value}
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{adv.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path to Profitability */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Path to Profitability
        </h2>
        <div className="mt-12 space-y-8">
          <div className="premium-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">Phase 1: Prove Unit Economics</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Validate transaction-level profitability in pilot cities. Demonstrate that each order generates positive contribution margin after delivery costs, payment processing, and merchant payouts.
            </p>
          </div>
          <div className="premium-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">Phase 2: Scale with SaaS Revenue</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Layer merchant SaaS subscriptions and hyperlocal advertising revenue on top of transaction commissions. This multi-stream approach reduces dependency on any single revenue source and improves blended margins.
            </p>
          </div>
          <div className="premium-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">Phase 3: Network Effect Acceleration</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              As merchant density increases within each city, delivery distances shorten, customer acquisition costs drop, and order frequency rises. This creates a self-reinforcing cycle toward city-level profitability.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Review Our Full Business Model"
        description="See how our unit economics framework connects to FirstMartt's broader revenue strategy and market opportunity."
        primaryHref="/business-model"
        primaryLabel="Business Model"
        secondaryHref="/investment"
        secondaryLabel="Investment Details"
      />
    </>
  );
}
