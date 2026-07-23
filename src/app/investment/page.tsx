import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";

export const metadata: Metadata = createMetadata({
  title: "Investment Opportunity | FirstMartt Startup Briefing",
  description:
    "Explore FirstMartt's pre-seed investment opportunity. Learn about our hyperlocal commerce solution, business model, market opportunity, and funding requirements.",
  path: "/investment",
  keywords: [
    "Startup Investment Opportunity",
    "Invest in Indian Startup",
    "Pre-Seed Startup Funding",
    "Retail Technology TAM India",
    "Hyperlocal Marketplace Business Model",
    "FirstMartt Investor Relations",
  ],
});

export default function InvestmentPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Investment Opportunity", url: `${siteConfig.url}/investment` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Investment Opportunity"
        description="FirstMartt is a pre-seed stage Indian startup building the future of collaborative hyperlocal commerce. Explore our investor thesis and growth strategy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Investment" }]}
      />

      {/* Main Investor Briefing */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Executive Summary Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            {/* Who We Are & Problem */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">1. Executive Overview</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Who We Are:</strong> FirstMartt is an Indian hyperlocal eCommerce startup
                  connecting consumers with trusted neighborhood shops through a single digital marketplace.
                  We operate in the fast-growing retail-tech sector, focusing on merchant empowerment.
                </p>
                <p>
                  <strong>The Problem:</strong> Over 90% of India&apos;s retail commerce is unorganized,
                  operated by neighborhood MSMEs. These shops face digital exclusion—lacking the technical expertise,
                  delivery infrastructure, and bargaining power to compete with large quick commerce and centralized
                  e-commerce giants.
                </p>
                <p>
                  <strong>Our Solution:</strong> An integrated hyperlocal platform that equips neighborhood shops
                  with digital storefronts, automated cataloging tools, and a reliable shared delivery partner fleet.
                  We digitize existing retail stores, enabling 15-minute neighborhood deliveries without the high
                  capital expenditure of dark warehouses.
                </p>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">2. Market Opportunity (TAM)</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                India&apos;s retail market is projected to reach $1.3 Trillion by 2030. Hyperlocal commerce and digital
                enablement for local MSME stores (kiranas, pharmacies, local apparel, electronics) represent one of the
                largest untapped market opportunities.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">$1.3T+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Indian Retail TAM</span>
                </div>
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">60M+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">MSME Merchants</span>
                </div>
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">Q-Commerce</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hyperlocal Demand</span>
                </div>
              </div>
            </div>

            {/* Business Model */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">3. Business Model & Growth</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  FirstMartt operates a transaction-driven marketplace business model with multiple revenue streams designed for capital efficiency:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Transaction Commissions:</strong> A fee on every successful hyperlocal transaction processed through the platform.</li>
                  <li><strong>Merchant SaaS Tools:</strong> Optional subscriptions for premium seller tools, including advanced neighborhood demand analytics and marketing campaigns.</li>
                  <li><strong>Logistics Take-Rate:</strong> Delivery fee sharing with our independent courier network.</li>
                  <li><strong>Hyperlocal Ads:</strong> In-app promoted listings for local brands wanting neighborhood visibility.</li>
                </ul>
              </div>
            </div>

            {/* Growth Strategy & Why Now */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">4. Strategic Edge & Timing</h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Why Now?</strong> The convergence of India&apos;s UPI digital payment network, massive mobile connectivity,
                  and consumer expectations for rapid, convenient local shopping makes hyperlocal enablement highly timely.
                </p>
                <p>
                  <strong>Defensibility:</strong> Our growth strategy relies on collaborative network effects. By partnering with existing local stores, we secure localized inventory and customer trust, establishing a defensible network that is highly scalable and cost-efficient to grow.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Details Sidebar */}
          <div className="space-y-8">
            <div className="premium-card border-violet-200 bg-violet-50/20 rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-slate-900">Funding Opportunity</h3>
              <dl className="mt-4 space-y-4">
                <div className="border-b border-violet-100 pb-3">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Round</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-violet-700">Pre-Seed</dd>
                </div>
                <div className="border-b border-violet-100 pb-3">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Stage</dt>
                  <dd className="mt-1 font-display text-base font-semibold text-slate-900">Product & Pilot Validation</dd>
                </div>
                <div className="border-b border-violet-100 pb-3">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Use of Funds</dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    Product development, merchant onboarding, catalog automation, and initial pilot launch operations.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="premium-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-slate-900">Why Partner With Us?</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Capital-efficient model leveraging existing retail real estate.
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Large addressable retail marketplace in tier-2 and tier-3 Indian cities.
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Social impact that empowers neighborhood communities.
                </li>
              </ul>
            </div>

            <div className="premium-card rounded-2xl p-6 bg-gradient-to-br from-violet-900 to-indigo-950 text-white">
              <h3 className="font-display text-lg font-bold">Contact Founder</h3>
              <p className="mt-3 text-xs text-violet-200">
                Qualified angel investors, accelerators, and venture partners are invited to contact us directly to request our investor briefing deck.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Investment Inquiry`}
                  className="block w-full text-center rounded-lg bg-white py-2.5 text-xs font-semibold text-violet-900 transition hover:bg-violet-50"
                >
                  Email Founder
                </a>
                <a
                  href={`tel:${contactPhone.e164}`}
                  className="block w-full text-center rounded-lg border border-violet-300/40 py-2.5 text-xs font-semibold text-violet-100 transition hover:bg-violet-800/30"
                >
                  Call: {contactPhone.international}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Request Full Investor Deck"
        description="Learn more about our product architecture, market metrics, financial forecast, and pre-seed investment terms."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/faq"
        secondaryLabel="View FAQ"
      />
    </>
  );
}
