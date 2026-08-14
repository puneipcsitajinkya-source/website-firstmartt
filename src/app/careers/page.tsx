import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Careers | Join FirstMartt's Remote Team",
  description:
    "Explore career opportunities at FirstMartt. We are hiring engineers, product builders, and operations specialists to build India's local commerce future.",
  path: "/careers",
  keywords: [
    "FirstMartt Careers",
    "Startup Jobs India",
    "Remote Engineering Roles",
    "Product Manager Startup India",
    "Join FirstMartt Team",
    "FirstMartt India",
    "AI Commerce Startup India",
    "Retail Technology Startup",
  ],
});

const benefits = [
  { title: "🏠 Remote First", description: "Flexible work arrangements to build from anywhere in India." },
  { title: "🚀 Fast Growth", description: "Join an early stage pre-seed startup and shape product direction." },
  { title: "💼 Equity Shares", description: "Ownership mindset supported by stock option (ESOP) opportunities." },
  { title: "💡 Collaborative Cult", description: "Work with team members driven by local merchant empowerment." },
];

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    description:
      "Take ownership of our multi-vendor catalog management and order routing APIs. Experience with Next.js, Node.js, and cloud database engines required.",
  },
  {
    title: "Product Manager (Merchant Tools)",
    department: "Product",
    location: "Hybrid (Maharashtra / Remote)",
    type: "Full-time",
    description:
      "Lead developer onboarding, inventory integration, and dashboard analytic portals for neighborhood shop partners.",
  },
  {
    title: "Logistics Operations Lead",
    department: "Operations",
    location: "Yavatmal (On-site / Pilot Zone)",
    type: "Full-time",
    description:
      "Manage local delivery partner hubs, route dispatcher metrics, and direct merchant fulfillment onboarding processes.",
  },
];

export default function CareersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Careers", url: `${siteConfig.url}/careers` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Careers at FirstMartt"
        description="We are building the infrastructure for Indian neighborhood retail. Join a mission-driven team dedicated to empowering MSME merchants."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Culture & Benefits */}
        <h2 className="font-display text-2xl font-bold text-slate-900 text-center">
          Why Build With Us?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="premium-card rounded-xl p-5">
              <h3 className="font-display font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>

        {/* Job Listings */}
        <h2 className="font-display text-2xl font-bold text-slate-900 mt-16">
          Open Positions
        </h2>
        <p className="mt-2 text-slate-600">
          Explore our current job opportunities. Send your resume along with a note about why you want to join FirstMartt.
        </p>

        <div className="mt-8 space-y-6">
          {openings.map((job) => (
            <article
              key={job.title}
              className="premium-card rounded-xl p-6 transition-transform hover:scale-[1.01]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {job.department} · {job.location} · {job.type}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-750"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Don't See Your Role?"
        description="We are always looking for passionate builders. Contact us directly and share how you can help optimize neighborhood commerce."
      />
    </>
  );
}
