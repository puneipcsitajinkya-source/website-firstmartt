import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Solutions",
  description:
    "FirstMartt offers hyperlocal marketplace solutions including merchant onboarding, digital storefronts, order management, and AI-powered commerce tools for local businesses.",
  path: "/solutions",
  keywords: [
    "Hyperlocal Marketplace India",
    "Local Store Marketplace",
    "Retail Technology",
    "Business Growth Platform",
    "Hyperlocal delivery platform India",
    "Multi Vendor Marketplace India",
    "AI Commerce Startup India",
    "Kirana store digital platform",
    "Online marketplace for local shops",
  ],
});

const solutions = [
  {
    title: "Merchant Marketplace",
    description:
      "Onboard local stores onto a multi-vendor marketplace with branded digital storefronts, catalog management, and order processing.",
  },
  {
    title: "Hyperlocal Delivery",
    description:
      "Enable fast neighbourhood fulfillment by connecting nearby inventory with local delivery partners for efficient last-mile logistics.",
  },
  {
    title: "AI Commerce Tools",
    description:
      "Leverage intelligent search, product recommendations, and demand forecasting to help merchants optimize inventory and increase sales.",
  },
  {
    title: "Customer Discovery",
    description:
      "Help customers find products from trusted local stores nearby, combining convenience with community shopping authenticity.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Provide merchants with actionable insights on sales trends, customer behaviour, and inventory performance.",
  },
  {
    title: "Payment Integration",
    description:
      "Support seamless digital payments including UPI and cards, reducing friction for both merchants and customers.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Solutions", url: `${siteConfig.url}/solutions` },
        ])}
      />
      <PageHeader
        title="Our Solutions"
        description="Comprehensive hyperlocal commerce solutions designed for Indian local businesses, merchants, and their customers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SolutionsGrid items={solutions} />
      </section>
      <CTA />
    </>
  );
}
