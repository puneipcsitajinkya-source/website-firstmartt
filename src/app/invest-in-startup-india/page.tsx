import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema, faqSchema, investmentOfferingSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";
import { IndianInvestorSuite } from "@/components/investors/IndianInvestorSuite";

export const metadata: Metadata = createMetadata({
  title:
    "Invest in Startup India | FirstMartt — Hyperlocal Commerce Investment Opportunity 2026",
  description:
    "Looking to invest in a startup in India? FirstMartt is a pre-seed hyperlocal commerce startup seeking ₹50 lakh funding. Explore India's $1.3T retail tech opportunity for Indian & international investors, NRIs, and VCs.",
  path: "/invest-in-startup-india",
  keywords: [
    // Primary ranking targets
    "invest in startup India",
    "invest in Indian startup",
    "startup investment opportunity India",
    "invest in startup India 2026",
    "best Indian startups to invest in",
    "Indian startup investment",
    "startup seeking funding India",
    // NRI / International
    "NRI investment in Indian startups",
    "foreign investment in Indian startups",
    "invest in Indian startups from USA",
    "invest in Indian startups from UK",
    "invest in Indian ecommerce startup",
    "FDI in Indian startup",
    "international investors Indian startup",
    // Sector-specific
    "hyperlocal commerce investment India",
    "retail tech startup investment India",
    "pre-seed startup India investment",
    "angel investment opportunity India 2026",
    "ecommerce startup funding India",
    "kirana digitization startup investment",
    // Abroad
    "invest in startup abroad from India",
    "global startup investment opportunities",
    "startup investment opportunities abroad",
    "best startups to invest in 2026",
  ],
});

const investorFaqs = [
  {
    question: "How can I invest in a startup in India?",
    answer:
      "You can invest in Indian startups through angel investing, venture capital funds, platforms like AngelList India, LetsVenture, or direct investment. FirstMartt welcomes direct pre-seed investment from angel investors, NRIs, family offices, and micro-VCs. India's FDI policy allows 100% foreign investment in marketplace e-commerce under the automatic route.",
  },
  {
    question: "Is FirstMartt a good startup to invest in?",
    answer:
      "FirstMartt is building India's hyperlocal commerce infrastructure — a capital-efficient, merchant-first platform digitizing 60M+ neighbourhood Kirana stores. With India's $1.3T retail market, 90%+ unorganized retail, and UPI-powered payments revolution, the hyperlocal commerce opportunity is massive. FirstMartt operates without dark stores, achieving positive unit economics from day one.",
  },
  {
    question: "Can NRIs and foreign investors invest in FirstMartt?",
    answer:
      "Yes. India permits FDI in marketplace e-commerce models under the automatic route. NRIs can invest via NRE/NRO accounts, and foreign investors through the FDI route with RBI compliance. FirstMartt provides all financial projections in both INR and USD. We recommend consulting with your legal advisor for specific compliance guidance.",
  },
  {
    question: "How much funding is FirstMartt raising?",
    answer:
      "FirstMartt is raising ₹50 lakh (approximately $60,000 USD) in pre-seed funding. Funds will be deployed toward technology platform development, merchant onboarding, delivery network setup, customer acquisition, and establishing a repeatable growth model in Maharashtra before scaling nationally.",
  },
  {
    question: "What makes hyperlocal commerce a good investment in India?",
    answer:
      "India's hyperlocal commerce market is driven by: (1) 60M+ MSME merchants needing digitization, (2) 900M+ smartphone users demanding convenience, (3) UPI processing 13B+ monthly transactions, (4) 90%+ retail still unorganized, and (5) proven demand from quick commerce players like Blinkit and Zepto. FirstMartt captures this opportunity without capital-intensive dark stores.",
  },
  {
    question: "What are the best sectors to invest in India in 2026?",
    answer:
      "Key high-growth sectors for startup investment in India in 2026 include: hyperlocal commerce and retail tech, AI/ML infrastructure, climate tech, health tech, fintech, and EV logistics. Hyperlocal commerce stands out with a $1.3T+ TAM and the rapid UPI-driven digital payments adoption making it the fastest-growing e-commerce segment in India.",
  },
  {
    question:
      "How do I invest in Indian startups from the USA, UK, or abroad?",
    answer:
      "Foreign investors can invest in Indian startups through: (1) FDI under the automatic route for marketplace models, (2) Angel networks like AngelList India and LetsVenture, (3) Venture capital funds with India exposure, or (4) Direct investment with FEMA/RBI compliance. FirstMartt provides streamlined investment frameworks for international investors and schedules calls across global time zones.",
  },
  {
    question: "What returns can I expect from investing in Indian startups?",
    answer:
      "India's startup ecosystem has delivered significant value creation — unicorn count has grown from 1 (Flipkart, 2012) to 100+ by 2026. Pre-seed and seed stage investments in high-growth sectors like hyperlocal commerce offer substantial upside potential, though all startup investments carry inherent risk. FirstMartt's capital-efficient model aims for sustainable growth rather than growth-at-all-costs.",
  },
];

const investmentHighlights = [
  {
    icon: "🇮🇳",
    title: "India's $1.3T Retail Market",
    description:
      "90%+ unorganized, 60M+ MSME merchants — the world's largest untapped retail digitization opportunity.",
  },
  {
    icon: "💰",
    title: "Capital-Efficient Model",
    description:
      "Zero dark store capex, zero inventory. Asset-light marketplace with positive unit economics from launch.",
  },
  {
    icon: "🚀",
    title: "Pre-Seed Stage Entry",
    description:
      "Ground-floor opportunity at ₹50 lakh raise. Maximum upside for early believers in India's retail transformation.",
  },
  {
    icon: "📱",
    title: "UPI-Powered Digital India",
    description:
      "900M+ internet users, 13B+ monthly UPI transactions — India's digital payments revolution fuels hyperlocal commerce.",
  },
  {
    icon: "🌍",
    title: "NRI & Foreign Investor Friendly",
    description:
      "100% FDI under automatic route. Financial projections in INR + USD. International time zone support.",
  },
  {
    icon: "🏪",
    title: "Merchant-First Network Effect",
    description:
      "Digitizing existing Kirana stores creates a distributed fulfilment mesh — no warehouses needed, 15-minute delivery.",
  },
];

const globalReasons = [
  {
    region: "🇺🇸 USA & UK Investors",
    reason:
      "India is the world's fastest-growing major digital economy. Pre-seed entry in India's $1.3T retail market offers portfolio diversification and outsized returns that mature Western markets rarely provide.",
  },
  {
    region: "🇦🇪 UAE & Middle East",
    reason:
      "With 10M+ NRIs in the Gulf, investing in Indian startups is both a financial opportunity and a way to support India's digital transformation. FirstMartt's model mirrors successful hyperlocal plays in MENA markets.",
  },
  {
    region: "🇸🇬 Singapore & Southeast Asia",
    reason:
      "India's hyperlocal commerce parallels Grab and Gojek's early trajectory in SEA — but in a market 10x larger. Tier-2/3 India is the last great consumer tech frontier.",
  },
  {
    region: "🇮🇳 Indian Angels & HNIs",
    reason:
      "You understand the Kirana ecosystem. You know the unit economics. FirstMartt gives you a chance to back the platform that will digitize the shops you grew up with — from Yavatmal to every city in Bharat.",
  },
];

export default function InvestInStartupIndiaPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Investors", url: `${siteConfig.url}/investors` },
    {
      name: "Invest in Startup India",
      url: `${siteConfig.url}/invest-in-startup-india`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(investorFaqs),
          webPageSchema({
            name: "Invest in Startup India | FirstMartt Hyperlocal Commerce",
            description:
              "Explore pre-seed investment opportunity in FirstMartt — India's hyperlocal commerce platform digitizing 60M+ neighbourhood retailers.",
            path: "/invest-in-startup-india",
          }),
          investmentOfferingSchema(),
        ]}
      />
      <PageHeader
        title="Invest in a Startup in India"
        description="FirstMartt is building India's hyperlocal commerce infrastructure. We're raising ₹50 lakh in pre-seed funding to digitize neighbourhood retail and enable 15-minute local delivery — without dark stores."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "Invest in Startup India" },
        ]}
      />

      {/* Hero Investment Pitch */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl bg-gradient-to-br from-violet-900 to-indigo-950 p-10 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <span className="premium-eyebrow text-violet-300">
              Pre-Seed Investment Opportunity
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl">
              Why Invest in India&apos;s Hyperlocal Commerce Revolution?
            </h2>
            <p className="mt-6 text-lg text-violet-200">
              India&apos;s $1.3 trillion retail market is{" "}
              <strong className="text-white">90% unorganized</strong>. Over 60
              million neighbourhood stores serve billions of daily transactions —
              but lack digital tools. FirstMartt is the bridge.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-4 text-center">
              <div>
                <span className="font-display block text-3xl font-bold text-white">
                  $1.3T+
                </span>
                <span className="text-xs text-violet-300">
                  Retail TAM (India)
                </span>
              </div>
              <div>
                <span className="font-display block text-3xl font-bold text-white">
                  60M+
                </span>
                <span className="text-xs text-violet-300">MSME Merchants</span>
              </div>
              <div>
                <span className="font-display block text-3xl font-bold text-white">
                  ₹50L
                </span>
                <span className="text-xs text-violet-300">Pre-Seed Raise</span>
              </div>
              <div>
                <span className="font-display block text-3xl font-bold text-white">
                  15 min
                </span>
                <span className="text-xs text-violet-300">Delivery Target</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Indian Investor Deck & Pre-Seed Dashboard */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <IndianInvestorSuite />
      </section>

      {/* Investment Highlights */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            Investment Highlights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Why FirstMartt is one of the most compelling startup investment
            opportunities in India in 2026.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investmentHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="premium-card rounded-2xl p-6"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {highlight.icon}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Investors Globally Are Looking at India */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Why Global Investors Are Choosing India
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          From Silicon Valley to Singapore, from Dubai to Dalal Street — smart
          capital is flowing into India&apos;s digital infrastructure.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {globalReasons.map((item) => (
            <div
              key={item.region}
              className="premium-card rounded-2xl p-8 border-l-4 border-l-violet-500"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">
                {item.region}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Invest — Step by Step */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            How to Invest in FirstMartt
          </h2>
          <div className="mt-12 space-y-6">
            {[
              {
                step: "01",
                title: "Express Interest",
                description:
                  "Email us at firstmartsindia@gmail.com or call +91 8261807358 to schedule an introductory discussion.",
              },
              {
                step: "02",
                title: "Receive Investor Deck",
                description:
                  "We'll share our detailed pitch deck, business plan, financial model, and product demonstration.",
              },
              {
                step: "03",
                title: "Due Diligence & Discussion",
                description:
                  "Deep dive into our market data, unit economics, competitive landscape, and founding team.",
              },
              {
                step: "04",
                title: "Investment & Partnership",
                description:
                  "Complete investment documentation and join FirstMartt's growth journey as an early-stage partner.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="premium-card rounded-2xl p-6 flex gap-6 items-start"
              >
                <span className="font-display flex-shrink-0 text-3xl font-extrabold text-violet-200">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Links */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Explore the Full Investor Suite
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/investment",
              icon: "💼",
              label: "Investment Opportunity",
            },
            { href: "/market", icon: "🌍", label: "Market Analysis" },
            { href: "/traction", icon: "📈", label: "Traction & Metrics" },
            { href: "/unit-economics", icon: "📊", label: "Unit Economics" },
            {
              href: "/competitive-landscape",
              icon: "⚡",
              label: "Competitive Landscape",
            },
            { href: "/business-model", icon: "🏗️", label: "Business Model" },
            { href: "/roadmap", icon: "🗺️", label: "Product Roadmap" },
            {
              href: "/investors/faq-international",
              icon: "🌐",
              label: "International Investor FAQ",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="premium-card group rounded-xl p-5 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-2xl" role="img" aria-hidden="true">
                {link.icon}
              </span>
              <span className="font-display mt-3 block text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section — Critical for Google Rankings */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions About Investing in Indian Startups
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Answers for Indian angel investors, NRIs, international VCs, and
            anyone exploring startup investment opportunities in India.
          </p>
          <div className="mt-12 space-y-6">
            {investorFaqs.map((faq) => (
              <div key={faq.question} className="premium-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl bg-gradient-to-br from-violet-900 to-indigo-950 p-10 text-center text-white">
          <h2 className="font-display text-3xl font-extrabold">
            Ready to Invest in India&apos;s Retail Future?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-violet-200">
            Whether you&apos;re an Indian angel investor, NRI from the Gulf or
            USA, global VC, or family office — we&apos;d love to share our
            vision with you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=Investment Inquiry — Invest in Startup India`}
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-900 transition hover:bg-violet-50"
            >
              📧 {siteConfig.contact.email}
            </Link>
            <Link
              href={`tel:${contactPhone.e164}`}
              className="inline-flex rounded-lg border border-violet-300/40 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-800/30"
            >
              📞 {contactPhone.international}
            </Link>
          </div>
          <p className="mt-6 text-xs text-violet-300/60">
            Available Mon–Sat, 10 AM – 7 PM IST (UTC+5:30) · International time
            zones accommodated
          </p>
        </div>
      </section>

      <CTA
        title="Explore the Full Investment Thesis"
        description="Pitch deck, financial model, product demo, and business plan available on request."
        primaryHref="/contact"
        primaryLabel="Request Investor Deck"
        secondaryHref="/investors"
        secondaryLabel="Investor Hub"
      />
    </>
  );
}
