import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Problem We Solve",
  description:
    "FirstMartt addresses the digital gap facing India's local businesses—lack of online presence, fragmented tools, and competition from large ecommerce platforms.",
  path: "/problem",
  keywords: ["Local Business Marketplace", "Digital Transformation", "Hyperlocal Delivery Platform"],
});

export default function ProblemPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Problem We Solve", url: `${siteConfig.url}/problem` },
        ])}
      />
      <PageHeader
        title="The Problem We Solve"
        description="India's local businesses face a growing digital divide. FirstMartt is built to close that gap with purpose-built hyperlocal commerce infrastructure."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Problem We Solve" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## The Digital Gap

Millions of local merchants in India operate primarily offline. While consumers increasingly search and shop online, neighbourhood stores lack affordable tools to participate in digital commerce.

## Fragmented Technology

Existing solutions often require multiple vendors for inventory, payments, delivery, and marketing. Small businesses cannot afford the complexity or cost of assembling enterprise-grade stacks.

## Platform Disadvantage

Large ecommerce platforms optimize for scale and centralized supply. Local merchants struggle to compete on visibility, logistics, and customer acquisition without a dedicated local business digital platform.

## Lost Community Value

When local shopping declines, communities lose jobs, tax revenue, and neighbourhood character. The problem is not local commerce itself—it is the lack of modern infrastructure supporting it.

## Our Solution Approach

FirstMartt provides an integrated hyperlocal marketplace where merchants gain digital storefronts, customers discover nearby products, and both benefit from AI-powered efficiency—without sacrificing community connection.
          `.trim()}
        />
      </Prose>
      <CTA />
    </>
  );
}
