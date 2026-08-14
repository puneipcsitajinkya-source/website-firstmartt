import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";

export const metadata: Metadata = createMetadata({
  title: "FirstMartt Investment Opportunity | Indian Hyperlocal Commerce Startup",
  description:
    "Explore FirstMartt's pre-seed investment opportunity. Hyperlocal commerce platform for India's 60M+ local merchants — market opportunity, business model, traction, and unit economics.",
  path: "/investment",
  keywords: [
    "Startup Investment Opportunity",
    "Invest in Indian Startup",
    "Pre-Seed Startup Funding",
    "Retail Technology TAM India",
    "Hyperlocal Marketplace Business Model",
    "FirstMartt Investor Relations",
    "Indian Hyperlocal Commerce Startup",
    "invest in Indian startups",
    "India ecommerce investment",
  ],
});

export default function InvestmentPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Investors", url: `${siteConfig.url}/investors` },
    { name: "Investment Opportunity", url: `${siteConfig.url}/investment` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "FirstMartt Investment Opportunity",
            description:
              "Pre-seed investment opportunity in India's hyperlocal commerce platform for local businesses.",
            path: "/investment",
          }),
        ]}
      />
      <PageHeader
        title="Building India's Hyperlocal Commerce Network"
        description="FirstMartt is a pre-seed stage Indian startup building the future of collaborative hyperlocal commerce. Explore our investor thesis and growth strategy."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "Investment Opportunity" },
        ]}
      />

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">

            {/* 1. Investment Opportunity */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">1. Investment Opportunity</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                FirstMartt is seeking pre-seed investment to build India&apos;s hyperlocal commerce platform — connecting
                neighbourhood merchants with nearby customers through technology-enabled local shopping. We are
                building a capital-efficient, merchant-first marketplace designed for sustainable growth in India&apos;s
                $1.3 trillion retail market.
              </p>
            </div>

            {/* 2. The Problem */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">2. The Problem</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Over 90% of India&apos;s retail commerce is unorganized, operated by neighbourhood MSMEs. These
                shops face digital exclusion — lacking the technical expertise, delivery infrastructure, and
                bargaining power to compete with large quick commerce and centralized e-commerce giants.
              </p>
              <Link href="/problem" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Read full problem analysis →
              </Link>
            </div>

            {/* 3. Our Solution */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">3. Our Solution</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                An integrated hyperlocal platform that equips neighbourhood shops with digital storefronts,
                automated cataloging tools, and a reliable shared delivery partner fleet. We digitize existing
                retail stores, enabling 15-minute neighbourhood deliveries without the high capital expenditure
                of dark warehouses.
              </p>
              <Link href="/solutions" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Explore our solutions →
              </Link>
            </div>

            {/* 4. Why Hyperlocal Commerce */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">4. Why Hyperlocal Commerce</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                India&apos;s hyperlocal commerce opportunity is unique: 60M+ MSME merchants, 900M+ internet users,
                and the world&apos;s fastest-growing digital payments ecosystem (UPI). Quick commerce proved
                consumer demand for speed; FirstMartt serves the vastly larger long-tail of neighbourhood retail
                that dark-store models cannot economically reach.
              </p>
              <Link href="/why-firstmartt" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Why FirstMartt →
              </Link>
            </div>

            {/* 5. Indian Market Opportunity — INR + USD */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">5. Indian Market Opportunity</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                India&apos;s retail market is projected to reach $1.3 trillion (₹110+ lakh crore) by 2030.
                Hyperlocal commerce and digital enablement for local MSME stores represent one of the largest
                untapped market opportunities in the world.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">$1.3T+</span>
                  <span className="block text-xs text-violet-500">₹110+ Lakh Cr</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Indian Retail TAM</span>
                </div>
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">60M+</span>
                  <span className="block text-xs text-violet-500">6 Crore+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">MSME Merchants</span>
                </div>
                <div className="rounded-xl bg-violet-50 p-4">
                  <span className="font-display block text-2xl font-bold text-violet-700">900M+</span>
                  <span className="block text-xs text-violet-500">90 Crore+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Internet Users</span>
                </div>
              </div>
              <Link href="/market" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Full market analysis →
              </Link>
            </div>

            {/* 6. TAM / SAM / SOM */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">6. TAM / SAM / SOM</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-center">
                <div className="rounded-xl border border-violet-200 p-4">
                  <span className="premium-eyebrow text-xs">TAM</span>
                  <span className="font-display mt-2 block text-xl font-bold text-violet-700">$1.3T+</span>
                  <span className="text-xs text-slate-600">India Retail Market</span>
                </div>
                <div className="rounded-xl border border-violet-200 p-4">
                  <span className="premium-eyebrow text-xs">SAM</span>
                  <span className="font-display mt-2 block text-xl font-bold text-violet-700">$150B+</span>
                  <span className="text-xs text-slate-600">Digitally Addressable Hyperlocal</span>
                </div>
                <div className="rounded-xl border border-violet-200 p-4">
                  <span className="premium-eyebrow text-xs">SOM</span>
                  <span className="font-display mt-2 block text-xl font-bold text-violet-700">$5B+</span>
                  <span className="text-xs text-slate-600">5-7 Year Capture Target</span>
                </div>
              </div>
            </div>

            {/* 7. Business Model */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">7. Business Model</h2>
              <ul className="mt-6 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                <li><strong>Transaction Commissions:</strong> A fee on every successful hyperlocal transaction.</li>
                <li><strong>Merchant SaaS Tools:</strong> Premium subscriptions for analytics, marketing, and catalog tools.</li>
                <li><strong>Logistics Take-Rate:</strong> Delivery fee sharing with the courier network.</li>
                <li><strong>Hyperlocal Ads:</strong> Promoted listings for neighbourhood visibility.</li>
              </ul>
              <Link href="/business-model" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Full business model →
              </Link>
            </div>

            {/* 8. Unit Economics */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">8. Unit Economics</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Capital-efficient model with zero warehouse CAPEX, no owned inventory, organic-first customer
                acquisition through merchant networks, and short-radius delivery economics.
              </p>
              <Link href="/unit-economics" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Full unit economics analysis →
              </Link>
            </div>

            {/* 9. Traction */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">9. Traction</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We report only real, verified metrics. See our milestone timeline and growth data on the traction page.
              </p>
              <Link href="/traction" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                View traction & metrics →
              </Link>
            </div>

            {/* 10. Competitive Landscape */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">10. Competitive Landscape</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                FirstMartt&apos;s merchant-first, capital-light model creates structural advantages against both
                dark-store quick commerce and large aggregator platforms.
              </p>
              <Link href="/competitive-landscape" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Full competitive analysis →
              </Link>
            </div>

            {/* 11. Technology & AI Roadmap */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">11. Technology & AI Roadmap</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Modern cloud infrastructure with AI-powered catalogue automation, demand forecasting,
                delivery routing optimization, and personalized neighbourhood recommendations.
              </p>
              <Link href="/roadmap" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Product roadmap →
              </Link>
            </div>

            {/* 12. Expansion Strategy */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">12. Expansion Strategy</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                City-by-city rollout starting from Yavatmal, Maharashtra → Maharashtra state → Adjacent states
                (Gujarat, Karnataka, Telangana) → National scale. Each city is validated before scaling to the next.
              </p>
              <Link href="/roadmap" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                See expansion roadmap →
              </Link>
            </div>

            {/* 13. Founding Team */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">13. Founding Team</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Building from Yavatmal, Maharashtra with deep understanding of India&apos;s local retail ecosystem,
                MSME dynamics, and Tier-2/Tier-3 city economics.
              </p>
              <Link href="/founder" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                Founder briefing →
              </Link>
            </div>

            {/* 14. Regulatory Notes for Foreign Investors */}
            <div className="premium-card rounded-2xl p-8 border-l-4 border-l-indigo-400">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                14. For International Investors
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                India permits FDI in marketplace e-commerce models under the automatic route. FirstMartt
                operates as a marketplace platform (not inventory-based), which is generally eligible for
                100% FDI under current DIPP guidelines.
              </p>
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                <p className="text-xs text-amber-700">
                  <strong>Disclaimer:</strong> This is not legal or tax advice. Foreign investors should consult
                  qualified legal and tax professionals for investment structure, FDI compliance, and tax implications.
                </p>
              </div>
              <Link href="/investors/faq-international" className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800">
                International Investor FAQ →
              </Link>
            </div>

            {/* 15. Investment Ask */}
            <div className="premium-card rounded-2xl p-8 bg-violet-50/30 border-violet-200">
              <h2 className="font-display text-2xl font-bold text-slate-900">15. Investment Ask</h2>
              <dl className="mt-6 space-y-4">
                <div className="border-b border-violet-100 pb-3">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Round</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-violet-700">Pre-Seed</dd>
                </div>
                <div className="border-b border-violet-100 pb-3">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Stage</dt>
                  <dd className="mt-1 font-display text-base font-semibold text-slate-900">Product & Pilot Validation</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Use of Funds</dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    Product development, merchant onboarding, catalog automation, delivery partner network,
                    and initial pilot launch operations.
                  </dd>
                </div>
              </dl>
            </div>

            {/* 16. Investor FAQ */}
            <div className="premium-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">16. Investor FAQ</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/faq" className="btn-secondary px-4 py-2 text-sm">
                  Full FAQ (All Categories)
                </Link>
                <Link href="/investors/faq-international" className="btn-secondary px-4 py-2 text-sm">
                  International Investor FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Navigation */}
            <div className="premium-card rounded-2xl p-6 sticky top-24">
              <h3 className="font-display text-lg font-bold text-slate-900">Quick Navigation</h3>
              <nav className="mt-4">
                <ul className="space-y-2 text-sm">
                  {[
                    { href: "/market", label: "📊 Market Opportunity" },
                    { href: "/traction", label: "📈 Traction & Metrics" },
                    { href: "/unit-economics", label: "💰 Unit Economics" },
                    { href: "/competitive-landscape", label: "⚡ Competitive Landscape" },
                    { href: "/business-model", label: "🏗️ Business Model" },
                    { href: "/roadmap", label: "🗺️ Product Roadmap" },
                    { href: "/founder", label: "👤 Founder Briefing" },
                    { href: "/investors/faq-international", label: "🌍 International FAQ" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-violet-50 hover:text-violet-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Card */}
            <div className="premium-card rounded-2xl p-6 bg-gradient-to-br from-violet-900 to-indigo-950 text-white">
              <h3 className="font-display text-lg font-bold">Request Investor Deck</h3>
              <p className="mt-3 text-xs text-violet-200">
                Qualified angel investors, accelerators, and venture partners — request our detailed investor briefing.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Investor Deck Request`}
                  className="block w-full text-center rounded-lg bg-white py-2.5 text-xs font-semibold text-violet-900 transition hover:bg-violet-50"
                >
                  Email: {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${contactPhone.e164}`}
                  className="block w-full text-center rounded-lg border border-violet-300/40 py-2.5 text-xs font-semibold text-violet-100 transition hover:bg-violet-800/30"
                >
                  Call: {contactPhone.international}
                </a>
              </div>
              <p className="mt-4 text-xs text-violet-300/60 text-center">
                IST (UTC+5:30) · Mon-Sat 10 AM - 7 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Request Full Investor Deck"
        description="Learn more about our product architecture, market metrics, financial forecast, and pre-seed investment terms."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/investors"
        secondaryLabel="Investor Hub"
      />
    </>
  );
}
