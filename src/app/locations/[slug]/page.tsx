import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, locationLocalBusinessSchema } from "@/lib/schema";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return createMetadata({
      title: "Location Not Found",
      description: "The requested FirstMartt location page could not be found.",
      path: `/locations/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: location.name, url: `${siteConfig.url}/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), locationLocalBusinessSchema(location)]} />
      <PageHeader
        title={location.headline}
        description={location.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.name },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {location.cities && (
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-slate-900">Cities We Serve</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {location.cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-800"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="premium-card rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Why {location.name} Matters for Hyperlocal Commerce
          </h2>
          <ul className="mt-6 space-y-4">
            {location.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-slate-600 leading-relaxed">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {location.parent && (
          <p className="mt-8 text-slate-600">
            Part of our{" "}
            <Link href={`/locations/${location.parent}`} className="font-semibold text-violet-600 hover:text-violet-700">
              {location.parent.charAt(0).toUpperCase() + location.parent.slice(1)} operations
            </Link>
            .
          </p>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Link href="/for-customers" className="premium-card rounded-xl p-6 transition hover:border-violet-300">
            <h3 className="font-semibold text-slate-900">For Customers</h3>
            <p className="mt-2 text-sm text-slate-600">Shop local stores with 15-minute delivery.</p>
          </Link>
          <Link href="/for-local-businesses" className="premium-card rounded-xl p-6 transition hover:border-violet-300">
            <h3 className="font-semibold text-slate-900">For Merchants</h3>
            <p className="mt-2 text-sm text-slate-600">Digitise your shop and reach more customers.</p>
          </Link>
          <Link href="/for-delivery-partners" className="premium-card rounded-xl p-6 transition hover:border-violet-300">
            <h3 className="font-semibold text-slate-900">For Delivery Partners</h3>
            <p className="mt-2 text-sm text-slate-600">Earn with flexible hyperlocal delivery routes.</p>
          </Link>
        </div>
      </section>

      <CTA
        title={`Join FirstMartt in ${location.name}`}
        description="Whether you are a local shop owner, delivery partner, or investor — we would love to connect."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
      />
    </>
  );
}
