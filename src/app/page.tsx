import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import {
  BlogPreviewSection,
  FeaturesSection,
  InvestmentSection,
  StatsBar,
} from "@/components/home/AnimatedSections";
import { HeroSection } from "@/components/home/HeroSection";
import { localBusinessSchema, faqSchema } from "@/lib/schema";

/** Direct-answer FAQ for AI search / featured snippets (Section 16 of SEO plan) */
const directAnswerFaqs = [
  {
    question: "What is FirstMartt?",
    answer:
      "FirstMartt is an AI-powered hyperlocal marketplace startup in India connecting local businesses, merchants, and customers through a multi-vendor digital commerce platform. We digitize neighbourhood retail stores, enabling 15-30 minute local deliveries without dark-store infrastructure.",
  },
  {
    question: "What problem does FirstMartt solve?",
    answer:
      "Over 90% of India's retail commerce is unorganized, operated by neighbourhood MSMEs who lack digital tools. FirstMartt bridges this gap by giving local merchants digital storefronts, automated catalogs, and shared delivery networks — so they can compete with large e-commerce platforms.",
  },
  {
    question: "How does FirstMartt make money?",
    answer:
      "FirstMartt earns revenue through four streams: transaction commissions on marketplace orders, optional merchant SaaS subscriptions for premium tools, logistics fee sharing with delivery partners, and hyperlocal advertising for promoted merchant listings.",
  },
  {
    question: "Where does FirstMartt operate?",
    answer:
      "FirstMartt is headquartered in Yavatmal, Maharashtra, India. We are focused on India's Tier-2 and Tier-3 cities, starting with Maharashtra and expanding to adjacent states.",
  },
  {
    question: "What is the investment opportunity?",
    answer:
      "FirstMartt is at pre-seed stage seeking investment from angel investors, venture capital firms, and strategic partners. India's retail market is projected to reach $1.3 trillion by 2030, with hyperlocal commerce representing a massive untapped opportunity across 60 million+ MSME merchants.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(directAnswerFaqs)]} />
      <HeroSection />
      <CTA />
      <StatsBar />
      <FeaturesSection />
      <InvestmentSection />

      {/* Direct-Answer FAQ for AI Search Optimization */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          About FirstMartt
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Quick answers about India&apos;s hyperlocal commerce platform.
        </p>
        <div className="mt-12 space-y-6">
          {directAnswerFaqs.map((faq) => (
            <div key={faq.question} className="premium-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/investors" className="btn-primary px-5 py-2.5 text-sm">
            Investor Hub
          </Link>
          <Link href="/market" className="btn-secondary px-5 py-2.5 text-sm">
            Market Opportunity
          </Link>
          <Link href="/faq" className="btn-secondary px-5 py-2.5 text-sm">
            Full FAQ
          </Link>
        </div>
      </section>

      <BlogPreviewSection />
      <CTA
        title="Ready to Connect?"
        description="Whether you're an investor, merchant, or future team member — we'd love to hear from you."
      />
    </>
  );
}
