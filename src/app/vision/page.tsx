import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Our Vision",
  description:
    "FirstMartt's vision is to become India's leading hyperlocal commerce platform, empowering every local business to thrive in the digital economy.",
  path: "/vision",
  keywords: ["Hyperlocal Commerce Startup", "Local Commerce Platform", "Digital Platform for Local Businesses"],
});

export default function VisionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Vision", url: `${siteConfig.url}/vision` },
        ])}
      />
      <PageHeader
        title="Our Vision"
        description="To create a future where every local business in India has equal access to digital commerce tools and neighbourhood customers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Vision" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## A Digitally Empowered Local Economy

We envision an India where kirana stores, specialty retailers, and neighbourhood merchants operate as seamlessly online as they do on their shop floors. FirstMartt aims to be the platform that makes this possible at scale.

## Commerce That Serves Communities

Our vision extends beyond transactions. We see hyperlocal marketplaces as infrastructure for community resilience—keeping economic value local, preserving merchant livelihoods, and offering customers authentic neighbourhood shopping experiences enhanced by technology.

## Global Standards, Local Roots

FirstMartt aspires to build world-class retail technology with Indian local commerce at its heart. We want investors, partners, and entrepreneurs worldwide to recognize FirstMartt as the definitive local business marketplace for India.
          `.trim()}
        />
      </Prose>
      <CTA />
    </>
  );
}
