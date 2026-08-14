import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "About FirstMartt",
  description:
    "Learn about FirstMartt, an Indian hyperlocal commerce startup building a multi-vendor marketplace and digital platform for local businesses across India.",
  path: "/about",
  keywords: ["Indian Startup", "Hyperlocal Marketplace India", "About FirstMartt", "FirstMartt India", "FirstMartt startup", "FirstMartt founders", "FirstMartt Yavatmal", "Local Commerce Platform"],
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "About", url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="About FirstMartt"
        description="We are an Indian startup on a mission to transform how local businesses connect with customers through technology, trust, and community."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt is a hyperlocal commerce startup headquartered in India, building a local business marketplace that empowers merchants and delights customers. We combine retail technology with deep understanding of Indian neighbourhood commerce.

## Who We Are

Founded by entrepreneurs passionate about local business empowerment, FirstMartt operates at the intersection of ecommerce, AI, and community retail. Our team brings experience in technology, operations, and Indian market dynamics.

## What We Do

We provide a digital platform for local businesses to establish online presence, manage orders, and reach customers beyond their physical storefronts. Our multi-vendor marketplace model aggregates neighbourhood supply while preserving merchant identity.

## Our Focus

FirstMartt targets India's vast local retail sector—millions of merchants serving communities across urban and semi-urban markets. We believe technology should amplify local commerce, not replace it.

## For Investors and Partners

We welcome conversations with angel investors, venture capital firms, incubators, accelerators, and strategic partners who share our vision for India's commerce future.
          `.trim()}
        />
      </Prose>
      <CTA />
    </>
  );
}
