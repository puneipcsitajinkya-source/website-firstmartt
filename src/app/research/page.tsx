import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { researchReports } from "@/lib/research";

export const metadata: Metadata = createMetadata({
  title: "Hyperlocal Commerce Research | FirstMartt India",
  description:
    "Original research from FirstMartt on hyperlocal commerce, Tier-2/Tier-3 city retail, merchant digitization, and the future of local commerce in India.",
  path: "/research",
  keywords: [
    "Hyperlocal Commerce Research India",
    "Tier 2 Tier 3 City Commerce Research",
    "India Retail Market Research",
    "Local Merchant Digitization Study",
    "FirstMartt Research",
  ],
});

const stats = [
  { value: "$1.3T+", label: "Indian Retail TAM by 2030" },
  { value: "60M+", label: "MSME Merchants in India" },
  { value: "90%+", label: "Unorganized Retail" },
  { value: "900M+", label: "Internet Users in India" },
];

const icons = ["📊", "🛒", "🧑‍💼", "📱", "📦", "✅"];

export default function ResearchPage() {
  const report = researchReports[0];
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Research", url: `${siteConfig.url}/research` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "Hyperlocal Commerce Research",
            description: "Original research from FirstMartt on hyperlocal commerce in India.",
            path: "/research",
          }),
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0612] via-[#14101f] to-[#0f0a1a]">
        {/* Mesh glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8"
        >
          <ol className="flex items-center gap-2 text-xs text-violet-400/70">
            <li>
              <Link href="/" className="hover:text-violet-300 transition">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-violet-300 font-medium">Research</li>
          </ol>
        </nav>

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
            Original Research
          </span>

          <h1 className="font-display mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Future of{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#a78bfa 0%,#7c3aed 50%,#c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hyperlocal Commerce
            </span>{" "}
            in India
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-violet-200/70 sm:text-lg">
            Data-driven insights into merchant digitization, consumer behaviour, and the
            massive retail opportunity in India&apos;s Tier-2 and Tier-3 cities.
          </p>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-violet-700/30 bg-violet-900/20 px-5 py-5 text-center backdrop-blur-sm"
              >
                <span className="font-display block text-3xl font-extrabold text-white">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs font-medium text-violet-300/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Philosophy Strip ─────────────────────────────── */}
      <section className="border-b border-violet-100/60 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-lg shadow-lg shadow-violet-300/30">
            🔬
          </span>
          <div>
            <p className="text-sm font-semibold text-violet-900">Our Research Philosophy</p>
            <p className="mt-0.5 text-sm text-slate-600">
              All research is grounded in real data, merchant interviews, and credible third-party
              sources. We never fabricate findings or present speculation as fact.
            </p>
          </div>
        </div>
      </section>

      {/* ── Flagship Report ───────────────────────────────────────── */}
      {report && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Report card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-violet-100/60">
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-950 to-[#0a0612] px-8 py-12 sm:px-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-600/20 blur-3xl"
              />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-700/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    Flagship Report
                  </span>
                  <h2 className="font-display mt-4 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                    {report.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-violet-400">{report.subtitle}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-violet-200/60">
                    {report.description}
                  </p>
                </div>
                {report.status === "coming-soon" && (
                  <div className="shrink-0 self-start">
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-500/15 px-4 py-2 text-xs font-semibold text-amber-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                      </span>
                      Research in Progress
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Report sections grid */}
            <div className="bg-white px-8 py-10 sm:px-12">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Report Outline
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Six in-depth chapters covering the full hyperlocal commerce landscape.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {report.sections.map((section, i) => (
                  <div
                    key={section.title}
                    className="group relative rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-violet-50/30 p-6 shadow-sm transition-shadow hover:shadow-md hover:shadow-violet-100/60"
                  >
                    <span
                      className="text-2xl"
                      role="img"
                      aria-hidden="true"
                    >
                      {icons[i] ?? "📄"}
                    </span>
                    <h4 className="mt-3 text-sm font-bold text-violet-700">
                      {String(i + 1).padStart(2, "0")}. {section.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology & Data sources */}
            <div className="border-t border-slate-100 bg-slate-50/60 px-8 py-10 sm:px-12">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Methodology */}
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Methodology
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {report.methodology}
                  </p>
                </div>

                {/* Data Sources */}
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Data Sources
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {report.dataSources.map((source) => (
                      <li
                        key={source}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 text-[10px] font-bold">
                          ✓
                        </span>
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Early Access CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900 to-indigo-950 px-8 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(167,139,250,0.18) 0%, transparent 70%)",
            }}
          />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-700/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Limited Early Access
          </span>
          <h2 className="font-display relative mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Get the Full Report When It Launches
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-violet-200/70">
            The complete report includes detailed findings, data charts, merchant interview
            transcripts, and actionable market data for investors and commerce professionals.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`mailto:${siteConfig.contact.email}?subject=Research Report Early Access`}
              className="btn-primary px-6 py-3 text-sm shadow-lg shadow-violet-900/50"
            >
              Request Early Access
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-violet-200 transition hover:bg-white/10"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Explore the Investment Opportunity"
        description="Our research informs our strategy. See how FirstMartt plans to capture the hyperlocal commerce market."
        primaryHref="/investment"
        primaryLabel="Investment Details"
        secondaryHref="/investors"
        secondaryLabel="Investor Hub"
      />
    </>
  );
}
