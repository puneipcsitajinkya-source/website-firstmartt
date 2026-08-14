import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";

export const metadata: Metadata = createMetadata({
  title: "Investor Relations | FirstMartt — India's Hyperlocal Commerce Startup",
  description:
    "FirstMartt Investor Hub — explore our market opportunity, traction, unit economics, competitive landscape, and investment details. For Indian and international investors.",
  path: "/investors",
  keywords: [
    "FirstMartt Investor Relations",
    "Invest in FirstMartt",
    "Indian Startup Investment",
    "Hyperlocal Commerce Investment",
    "FirstMartt Funding",
    "Invest in Indian Startups",
    "India Ecommerce Investment",
  ],
});

const investorLinks = [
  {
    href: "/investment",
    icon: "💼",
    title: "Investment Opportunity",
    description: "Executive overview, business model, growth strategy, and pre-seed funding details.",
  },
  {
    href: "/market",
    icon: "🌍",
    title: "Market Opportunity",
    description: "India's $1.3T retail market, TAM/SAM/SOM in INR and USD, and hyperlocal commerce drivers.",
  },
  {
    href: "/traction",
    icon: "📈",
    title: "Traction & Metrics",
    description: "Real, verified milestones and growth data — transparent and honest reporting.",
  },
  {
    href: "/unit-economics",
    icon: "📊",
    title: "Unit Economics",
    description: "Revenue framework, cost structure, CAC/LTV dynamics, and path to profitability.",
  },
  {
    href: "/competitive-landscape",
    icon: "⚡",
    title: "Competitive Landscape",
    description: "Fair comparison of hyperlocal commerce models and FirstMartt's structural advantages.",
  },
  {
    href: "/business-model",
    icon: "🏗️",
    title: "Business Model",
    description: "Four revenue streams — commissions, SaaS, logistics, and hyperlocal advertising.",
  },
  {
    href: "/roadmap",
    icon: "🗺️",
    title: "Product Roadmap",
    description: "From pilot launch to multi-state expansion and AI-powered demand forecasting.",
  },
  {
    href: "/faq",
    icon: "❓",
    title: "Investor FAQ",
    description: "Answers to common questions from both Indian and international investors.",
  },
];

export default function InvestorsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Investors", url: `${siteConfig.url}/investors` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "FirstMartt Investor Relations",
            description:
              "Unified investor hub for FirstMartt — India's hyperlocal commerce startup.",
            path: "/investors",
          }),
        ]}
      />
      <PageHeader
        title="Investor Relations"
        description="Everything investors need to evaluate FirstMartt — market opportunity, business model, traction, unit economics, and investment details."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
      />

      {/* Dual Audience Welcome */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Indian Investors */}
          <div className="premium-card rounded-2xl p-8 border-l-4 border-l-violet-500">
            <span className="premium-eyebrow">🇮🇳 For Indian Investors</span>
            <h2 className="font-display mt-4 text-2xl font-bold text-slate-900">
              Indian Angel Investors, VCs & Family Offices
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              FirstMartt is building from Yavatmal, Maharashtra — ground-up. We understand India&apos;s local retail
              ecosystem, MSME dynamics, and Tier-2/Tier-3 city economics. Our traction, business model, and market
              data are presented with India-specific context and benchmarks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/investment" className="btn-primary px-4 py-2 text-sm">
                Investment Details
              </Link>
              <Link href="/faq" className="btn-secondary px-4 py-2 text-sm">
                Investor FAQ
              </Link>
            </div>
          </div>

          {/* International Investors */}
          <div className="premium-card rounded-2xl p-8 border-l-4 border-l-indigo-500">
            <span className="premium-eyebrow">🌏 For International Investors</span>
            <h2 className="font-display mt-4 text-2xl font-bold text-slate-900">
              Global VCs, NRI Networks & Foreign Funds
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              India&apos;s retail market is one of the world&apos;s largest untapped digital commerce opportunities.
              We present all market sizing in both INR and USD, include regulatory and FDI context, and frame our
              opportunity in globally legible terms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/market" className="btn-primary px-4 py-2 text-sm">
                Market Opportunity
              </Link>
              <Link href="/investors/faq-international" className="btn-secondary px-4 py-2 text-sm">
                International Investor FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources Grid */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            Investor Resources
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Deep-dive into every aspect of the FirstMartt opportunity.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="premium-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {link.icon}
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                  {link.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Deck Request */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl bg-gradient-to-br from-violet-900 to-indigo-950 p-10 text-center text-white">
          <h2 className="font-display text-3xl font-extrabold">
            Request Investor Deck
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-violet-200">
            Qualified angel investors, accelerators, venture capital firms, and strategic partners are invited
            to request our detailed investor briefing deck.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=Investor Deck Request`}
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-900 transition hover:bg-violet-50"
            >
              Email: {siteConfig.contact.email}
            </Link>
            <Link
              href={`tel:${contactPhone.e164}`}
              className="inline-flex rounded-lg border border-violet-300/40 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-800/30"
            >
              Call: {contactPhone.international}
            </Link>
          </div>
          <p className="mt-6 text-xs text-violet-300/60">
            Timezone: IST (UTC+5:30) · Available Mon-Sat, 10 AM - 7 PM IST
          </p>
        </div>
      </section>
    </>
  );
}
