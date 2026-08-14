import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Traction & Growth Metrics",
  description:
    "FirstMartt's real traction and growth metrics. See our merchant onboarding, customer adoption, order volume, and expansion milestones — verified and transparent.",
  path: "/traction",
  keywords: [
    "FirstMartt Traction",
    "Startup Growth Metrics",
    "Hyperlocal Startup Traction India",
    "Indian Startup Metrics",
    "FirstMartt Growth",
    "FirstMartt India",
    "Hyperlocal Commerce Startup",
    "Retail Technology Startup",
  ],
});

const milestones = [
  {
    date: "2024",
    title: "Ideation & Research",
    description:
      "Market research across Yavatmal and Maharashtra. Identified the digital gap facing 90%+ of India's unorganized retail merchants.",
    status: "completed" as const,
  },
  {
    date: "2025 H1",
    title: "Platform Development",
    description:
      "Built the core hyperlocal commerce platform — multi-vendor marketplace, merchant dashboard, delivery partner integration, and AI-powered catalog tools.",
    status: "completed" as const,
  },
  {
    date: "2025 H2",
    title: "Pilot Launch Preparation",
    description:
      "Finalizing merchant onboarding pipeline, delivery partner recruitment, and pilot city selection in Maharashtra.",
    status: "in-progress" as const,
  },
  {
    date: "2026",
    title: "Pre-Seed Fundraise & Pilot",
    description:
      "Seeking pre-seed investment to fund pilot operations, merchant acquisition, and initial market validation in first target cities.",
    status: "upcoming" as const,
  },
  {
    date: "2026-2027",
    title: "Maharashtra Expansion",
    description:
      "Scale across 5-10 cities in Maharashtra based on pilot learnings. Build operational playbook for city-by-city rollout.",
    status: "upcoming" as const,
  },
  {
    date: "2027+",
    title: "Multi-State Growth",
    description:
      "Expand to adjacent states (Gujarat, Karnataka, Telangana) and begin seed round fundraise for national scale.",
    status: "upcoming" as const,
  },
];

export default function TractionPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Traction & Metrics", url: `${siteConfig.url}/traction` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "FirstMartt Traction & Growth Metrics",
            description:
              "Real traction and growth metrics from FirstMartt's hyperlocal commerce platform.",
            path: "/traction",
          }),
        ]}
      />
      <PageHeader
        title="Traction & Growth Metrics"
        description="Transparent, verified milestones from our journey building India's hyperlocal commerce platform. We only publish real numbers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Traction & Metrics" }]}
      />

      {/* Transparency Notice */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6">
          <h3 className="text-sm font-semibold text-blue-800">🔍 Transparency Commitment</h3>
          <p className="mt-2 text-xs leading-relaxed text-blue-700">
            FirstMartt is committed to honest reporting. All metrics displayed on this page are real and verifiable.
            We do not fabricate traction numbers, inflate statistics, or present projections as achieved results.
            Sections marked &quot;Coming soon&quot; will be updated as we reach those milestones.
          </p>
        </div>
      </section>

      {/* Key Metrics — Coming Soon */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
          Key Metrics
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
          Updated as milestones are achieved. Real data only — no fabricated numbers.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Merchants Onboarded", value: "Coming Soon", icon: "🏪" },
            { label: "Orders Processed", value: "Coming Soon", icon: "📦" },
            { label: "Cities Active", value: "Coming Soon", icon: "🏙️" },
            { label: "GMV Processed", value: "Coming Soon", icon: "💰" },
          ].map((metric) => (
            <div key={metric.label} className="premium-card rounded-2xl p-6 text-center">
              <span className="text-3xl" role="img" aria-hidden="true">
                {metric.icon}
              </span>
              <span className="font-display mt-4 block text-2xl font-bold text-slate-400">
                {metric.value}
              </span>
              <span className="mt-2 block text-sm font-semibold text-slate-600">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-violet-50/40 border-y border-violet-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-slate-900">
            Our Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            From ideation to execution — key milestones on our path to building India&apos;s hyperlocal commerce platform.
          </p>
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-violet-300 to-slate-200 md:left-1/2 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <div key={milestone.title} className={`relative flex items-start gap-6 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-md ${
                      milestone.status === "completed"
                        ? "bg-violet-600 text-white"
                        : milestone.status === "in-progress"
                        ? "bg-amber-500 text-white"
                        : "bg-slate-200 text-slate-500"
                    } md:absolute md:left-1/2 md:-translate-x-1/2`}
                  >
                    {milestone.status === "completed" ? "✓" : milestone.status === "in-progress" ? "▶" : "○"}
                  </div>
                  {/* Card */}
                  <div className={`premium-card flex-1 rounded-2xl p-6 ${i % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"}`}>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      milestone.status === "completed"
                        ? "bg-violet-100 text-violet-700"
                        : milestone.status === "in-progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {milestone.date}
                    </span>
                    <h3 className="font-display mt-3 text-lg font-bold text-slate-900">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Interested in Our Progress?"
        description="Request our latest investor briefing deck with up-to-date traction data and financial projections."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/investment"
        secondaryLabel="Investment Details"
      />
    </>
  );
}
