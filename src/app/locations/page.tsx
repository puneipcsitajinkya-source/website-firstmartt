import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";

export const metadata: Metadata = createMetadata({
  title: "Locations — Where FirstMartt Operates in India",
  description:
    "Explore FirstMartt's hyperlocal delivery operations across India. Currently piloting in Maharashtra with expansion planned to major cities.",
  path: "/locations",
  keywords: [
    "FirstMartt Locations",
    "Hyperlocal Delivery India",
    "Startup in Maharashtra",
    "Quick Commerce Cities India",
  ],
});

export default function LocationsIndexPage() {
  return (
    <>
      <PageHeader
        title="FirstMartt Locations"
        description="We are building India's hyperlocal commerce network city by city — starting with real neighbourhoods, real shops, and real delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="premium-card group rounded-2xl p-8 transition hover:border-violet-300"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                {location.type === "state" ? "State" : "City"}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 group-hover:text-violet-700">
                {location.name}
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{location.intro}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-violet-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA
        title="Bring FirstMartt to Your City"
        description="We are expanding across Maharashtra and beyond. Partner with us as a merchant, delivery partner, or investor."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </>
  );
}
