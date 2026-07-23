import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Roadmap | FirstMartt Product & Growth Milestones",
  description:
    "Explore FirstMartt's product development and growth roadmap. Learn about our pilot launch, AI tools integration, and national market expansion phases.",
  path: "/roadmap",
  keywords: [
    "FirstMartt Roadmap",
    "Product Launch Phases",
    "Retail Tech Milestones",
    "Startup Expansion Strategy India",
    "Pre-Seed Startup Roadmap",
  ],
});

const phases = [
  {
    phase: "Phase 1: Foundation & Pilot Launch",
    period: "Q1–Q2 2025",
    status: "Completed",
    statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    items: [
      "Core multi-vendor marketplace platform development",
      "Merchant onboarding toolkit and catalog builder application",
      "Pilot launch in initial city market (Maharashtra region)",
      "Initial pre-seed investor conversations and funding close",
    ],
  },
  {
    phase: "Phase 2: Product Growth & AI Integration",
    period: "Q3–Q4 2025",
    status: "In Progress",
    statusColor: "bg-violet-100 text-violet-800 border-violet-200",
    items: [
      "AI-powered local search engine and personalized listings",
      "Hyperlocal delivery partner application and routing engine",
      "Merchant analytics dashboards and promotional campaign manager",
      "Seed round fundraising preparation and briefing",
    ],
  },
  {
    phase: "Phase 3: Multi-City Expansion",
    period: "2026",
    status: "Planned",
    statusColor: "bg-slate-100 text-slate-700 border-slate-200",
    items: [
      "Platform launch in tier-2 and tier-3 cities across Western India",
      "Automated product catalog builder via photo recognition",
      "Strategic partnerships with regional distribution and logistics players",
      "Series A funding round raise for national scalability",
    ],
  },
  {
    phase: "Phase 4: Ecosystem & Financial Services",
    period: "2027+",
    status: "Planned",
    statusColor: "bg-slate-100 text-slate-700 border-slate-200",
    items: [
      "Embedded financial services (working capital credit, payments) for merchants",
      "API integrations for third-party logistics and billing systems",
      "National hyperlocal marketplace brand leadership across India",
    ],
  },
];

export default function RoadmapPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Roadmap", url: `${siteConfig.url}/roadmap` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Our Roadmap"
        description="A structured path from core software validation to scaling collaborative hyperlocal commerce across India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Roadmap" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-12">
          {phases.map((phase) => (
            <article key={phase.phase} className="relative">
              {/* Timeline marker */}
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full border-2 border-white bg-violet-600 shadow-sm" aria-hidden="true" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl font-bold text-slate-900">
                    {phase.phase}
                  </h2>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>
                <span className="text-sm font-semibold text-violet-700">
                  {phase.period}
                </span>
              </div>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 p-4 text-sm leading-relaxed text-slate-600"
                  >
                    <span className="text-violet-600 font-bold" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
