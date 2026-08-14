import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Our Mission",
  description:
    "FirstMartt's mission is to democratize digital commerce for local businesses in India through accessible technology and merchant-first marketplace design.",
  path: "/mission",
  keywords: ["Business Growth Platform", "Local Business Digital Platform", "Merchant Marketplace", "Digitize local retail India", "Digital Platform for Local Businesses", "Local merchant digitalization India"],
});

export default function MissionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Mission", url: `${siteConfig.url}/mission` },
        ])}
      />
      <PageHeader
        title="Our Mission"
        description="Empowering local merchants with the tools, reach, and support they need to grow in India's digital commerce landscape."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mission" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## Democratize Digital Commerce

Our mission is to make enterprise-grade commerce technology accessible to every local business in India—regardless of size, location, or technical expertise.

## Put Merchants First

We design every product decision around merchant success. Fair economics, intuitive tools, and responsive support define the FirstMartt merchant experience.

## Build Trust Through Technology

Customers and merchants deserve reliable, transparent platforms. We invest in secure infrastructure, accurate inventory systems, and AI that enhances—not replaces—human commerce relationships.

## Create Sustainable Value

For investors, partners, employees, and communities, FirstMartt pursues growth grounded in sustainable unit economics and genuine local business impact.
          `.trim()}
        />
      </Prose>
      <CTA />
    </>
  );
}
