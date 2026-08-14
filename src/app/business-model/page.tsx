import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Business Model | FirstMartt Hyperlocal Marketplace",
  description:
    "Learn about FirstMartt's business model. Discover how our transaction commission, merchant SaaS subscription, advertising, and logistics fees scale.",
  path: "/business-model",
  keywords: [
    "Marketplace Business Model",
    "Hyperlocal Revenue Streams",
    "SaaS for Local Retailers",
    "Startup Unit Economics India",
    "FirstMartt Business Model",
    "FirstMartt business model",
    "Hyperlocal commerce business model",
    "Multi vendor marketplace vs single vendor",
  ],
});

const revenueStreams = [
  {
    title: "1. Transaction Commission",
    description: "A standard percentage take-rate applied to all gross merchandise value (GMV) processed through our marketplace. This aligns our success directly with merchant growth.",
    icon: "💳",
  },
  {
    title: "2. Merchant SaaS Subscriptions",
    description: "Optional monthly subscription tiers giving sellers access to premium digital tools, advanced localized neighborhood analytics, automated catalog creation, and direct marketing engines.",
    icon: "📈",
  },
  {
    title: "3. Hyperlocal Logistics Fee",
    description: "Logistics fulfillment fees for on-demand deliveries. We optimize last-mile routing using delivery partners, capturing margins on local dispatch convenience.",
    icon: "🛵",
  },
  {
    title: "4. Neighborhood Advertising",
    description: "In-app promoted search listings, banner slots, and localized discount campaigns that enable merchants to stand out and attract customers within their immediate zone.",
    icon: "📢",
  },
];

export default function BusinessModelPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Business Model", url: `${siteConfig.url}/business-model` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Our Business Model"
        description="A scalable, capital-efficient hyperlocal marketplace model built on mutual growth, technology enablement, and sustainable unit economics."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Business Model" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          How FirstMartt Creates and Captures Value
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          We align interest across all stakeholders: merchants increase turnover, consumers save time, couriers find flexible work, and the platform grows on commission and value-added SaaS.
        </p>

        {/* Revenue Streams Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {revenueStreams.map((stream) => (
            <article
              key={stream.title}
              className="premium-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl" role="img" aria-hidden="true">
                  {stream.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                  {stream.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {stream.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Value Alignment Section */}
        <div className="mt-16 bg-violet-50/40 border border-violet-100 rounded-2xl p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">Capital-Efficient Scaling</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                By leveraging existing local retail inventory, we do not require massive capital investments for warehouse infrastructure, physical stock, or dark stores. This dramatically improves payback periods and allows FirstMartt to scale quickly across cities while maintaining positive unit economics.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">Key Economic Drivers</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <strong>High Merchant Retention:</strong> Driven by low commission costs and direct digital integration.
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <strong>Dense Logistics Zone:</strong> Short order-to-delivery radius improves logistics margin.
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  <strong>Multiple Expansion Verticals:</strong> From pharmacy to local apparel, sports, and groceries.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
