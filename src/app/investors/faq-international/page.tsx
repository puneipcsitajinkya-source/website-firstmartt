import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";

export const metadata: Metadata = createMetadata({
  title: "International Investor FAQ | Investing in FirstMartt from Abroad",
  description:
    "FAQ for international investors considering FirstMartt. Covers FDI regulations, entity structure, currency, India market context, and how to invest in Indian startups from abroad.",
  path: "/investors/faq-international",
  keywords: [
    "Invest in Indian Startups from USA",
    "Invest in Indian Ecommerce from UK",
    "FDI India Ecommerce Regulations",
    "NRI Investment Indian Startups",
    "Foreign Investment Indian Retail Tech",
    "International Investor FAQ India",
    "India Startup Investment Guide",
    "India Startup Investment Opportunity 2026",
    "Invest in Indian Tech Startups",
    "foreign investment Indian retail tech",
  ],
});

const internationalFaqs = [
  {
    question: "Can foreign investors invest in FirstMartt?",
    answer:
      "Yes. India permits Foreign Direct Investment (FDI) in marketplace e-commerce models under the automatic route, subject to applicable regulations. FirstMartt operates as a marketplace platform (not inventory-based), which is generally eligible for 100% FDI under current DIPP guidelines. However, we strongly recommend consulting with legal and tax professionals familiar with Indian FDI regulations before making any investment decisions.",
  },
  {
    question: "What is FirstMartt's entity structure?",
    answer:
      "FirstMartt is incorporated as a Private Limited Company in India. This is the standard entity structure for Indian startups receiving external investment. Detailed structural information is available in our investor deck upon request.",
  },
  {
    question: "In what currency should I invest?",
    answer:
      "Investments are typically made in Indian Rupees (INR). Foreign investors can invest via the FDI route, which involves converting foreign currency to INR through authorized banking channels. All our market sizing and financial projections are presented in both INR and USD for clarity.",
  },
  {
    question: "What are the repatriation rules for returns on investment?",
    answer:
      "Under India's FDI framework, repatriation of investment proceeds (including dividends and exit proceeds) is generally permitted through authorized banking channels, subject to applicable tax withholding and RBI regulations. We recommend discussing specific repatriation mechanics with your tax advisor.",
  },
  {
    question: "How does FirstMartt compare to hyperlocal models in other markets?",
    answer:
      "India's hyperlocal commerce opportunity is unique due to its extremely fragmented retail sector (90%+ unorganized), high mobile penetration, and the UPI digital payments revolution. While there are parallels to Southeast Asian and Latin American hyperlocal models, India's scale (60M+ MSME merchants, 1.4B population) and infrastructure (UPI, Aadhaar) create a distinct market dynamic.",
  },
  {
    question: "What due diligence materials are available for international investors?",
    answer:
      "We provide: (1) Detailed investor deck with business model and financials, (2) Market research and TAM/SAM/SOM analysis in USD and INR, (3) Competitive landscape analysis, (4) Product demonstration, (5) Founding team background. Contact us to request materials. We are happy to schedule calls accommodating international time zones.",
  },
  {
    question: "What are the tax implications for foreign investors in Indian startups?",
    answer:
      "Tax implications depend on the investor's country of residence, applicable Double Tax Avoidance Agreements (DTAAs), and the type of investment instrument. India offers certain tax incentives for investments in DPIIT-recognized startups. This is not tax advice — please consult a qualified cross-border tax professional.",
  },
  {
    question: "Is there a minimum investment amount for international investors?",
    answer:
      "We discuss investment terms individually with qualified investors. There is no universal minimum, but we aim to work with investors who bring strategic value beyond capital — domain expertise, market access, or operational experience in commerce, retail tech, or emerging markets.",
  },
  {
    question: "How can I schedule a call with the FirstMartt team?",
    answer:
      "Email us at firstmartsindia@gmail.com with 'International Investor' in the subject line, or call +91 8261807358. We are available Monday-Saturday, 10 AM - 7 PM IST (UTC+5:30). We routinely schedule calls to accommodate US, UK, Singapore, and UAE time zones.",
  },
  {
    question: "What regulatory bodies oversee startup investments in India?",
    answer:
      "The key regulatory bodies are: (1) Reserve Bank of India (RBI) — governs FDI inflows and FEMA compliance, (2) Department for Promotion of Industry and Internal Trade (DPIIT) — startup recognition and policy, (3) Securities and Exchange Board of India (SEBI) — for Alternative Investment Funds (AIFs) and venture capital regulations. FirstMartt complies with all applicable Indian corporate and startup regulations.",
  },
];

export default function InternationalFaqPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Investors", url: `${siteConfig.url}/investors` },
    { name: "International FAQ", url: `${siteConfig.url}/investors/faq-international` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(internationalFaqs),
        ]}
      />
      <PageHeader
        title="International Investor FAQ"
        description="Answers to common questions from global VCs, NRI angel investors, family offices, and foreign funds interested in investing in FirstMartt and India's hyperlocal commerce market."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "International FAQ" },
        ]}
      />

      {/* Legal Disclaimer */}
      <section className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
          <h3 className="text-sm font-semibold text-amber-800">⚠️ Important Disclaimer</h3>
          <p className="mt-2 text-xs leading-relaxed text-amber-700">
            The information on this page is for general informational purposes only and does not constitute
            legal, tax, or investment advice. Regulatory frameworks and tax treaties may change. Foreign investors
            should consult qualified legal and tax professionals familiar with Indian FDI regulations and the
            investor&apos;s home jurisdiction before making investment decisions. FirstMartt does not provide
            investment, legal, or tax advisory services.
          </p>
        </div>
      </section>

      {/* India Market Context */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          India Market Context for International Investors
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="premium-card rounded-2xl p-6 text-center">
            <span className="font-display block text-2xl font-bold text-violet-700">$1.3T+</span>
            <span className="block text-sm text-slate-600">Retail Market by 2030</span>
          </div>
          <div className="premium-card rounded-2xl p-6 text-center">
            <span className="font-display block text-2xl font-bold text-violet-700">13B+</span>
            <span className="block text-sm text-slate-600">Monthly UPI Transactions</span>
          </div>
          <div className="premium-card rounded-2xl p-6 text-center">
            <span className="font-display block text-2xl font-bold text-violet-700">900M+</span>
            <span className="block text-sm text-slate-600">Internet Users</span>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          India&apos;s retail sector is the world&apos;s fourth-largest, yet over 90% remains unorganized and
          operated by neighbourhood MSMEs. The convergence of UPI digital payments, smartphone adoption, and
          consumer demand for convenience creates a once-in-a-generation digitization opportunity that FirstMartt
          is positioned to serve.{" "}
          <Link href="/market" className="text-violet-700 underline hover:text-violet-800">
            Read the full market analysis →
          </Link>
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FAQAccordion items={internationalFaqs} />
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="premium-card rounded-2xl bg-gradient-to-br from-violet-900 to-indigo-950 p-10 text-center text-white">
          <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-violet-200">
            We welcome conversations with international investors. Mention &quot;International Investor&quot;
            in your email subject for priority response.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${siteConfig.contact.email}?subject=International Investor Inquiry`}
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-violet-900 transition hover:bg-violet-50"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${contactPhone.e164}`}
              className="inline-flex rounded-lg border border-violet-300/40 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-800/30"
            >
              {contactPhone.international}
            </a>
          </div>
          <p className="mt-4 text-xs text-violet-300/60">
            Available Mon-Sat, 10 AM - 7 PM IST (UTC+5:30) · We accommodate international time zones
          </p>
        </div>
      </section>
    </>
  );
}
