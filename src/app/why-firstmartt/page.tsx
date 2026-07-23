import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Why FirstMartt | Empowering Indian Hyperlocal Retail",
  description:
    "Discover why FirstMartt is the future of hyperlocal commerce in India. Learn about our merchant-first digital platform, AI retail tools, and sustainable unit economics.",
  path: "/why-firstmartt",
  keywords: [
    "Why FirstMartt",
    "Hyperlocal Commerce Startup",
    "Merchant First Platform",
    "Digital Platform for Local Businesses",
    "Retail Technology Startup India",
  ],
});

export default function WhyFirstMarttPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Why FirstMartt", url: `${siteConfig.url}/why-firstmartt` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Why FirstMartt"
        description="Empowering India's millions of neighborhood retailers with next-generation digital infrastructure, building a collaborative future for hyperlocal commerce."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why FirstMartt" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt is not just another marketplace; we are a collaborative infrastructure built specifically for the unique dynamics of Indian neighborhood commerce. Instead of replacing physical stores with dark warehouses, we digitize and connect existing merchants to unlock rapid local delivery.

## 1. Collaborative Hyperlocal Model

Unlike centralized ecommerce platforms that isolate local merchants, FirstMartt operates as a collaborative marketplace. We build digital bridges, connecting nearby customers with their trusted local neighborhood shops. This keeps commerce wealth within the local community.

## 2. Full-Stack Digital Onboarding

We eliminate the technical complexity of digital transformation for small businesses. FirstMartt provides small merchants with:
- **Instant Digital Storefronts:** Branded catalogs created in minutes.
- **Integrated Catalog Management:** Simple stock, pricing, and category tools.
- **Localized Last-Mile Logistics:** On-demand delivery partner dispatch.

## 3. Advanced AI-Driven Tools

To help neighborhood retailers compete with quick commerce giants, we leverage modern AI and machine learning tools:
- **Smart Demand Prediction:** Helping merchants stock the right inventory.
- **Intelligent Local Search:** Showing customers the most relevant items in their vicinity.
- **Automated Cataloging:** Enabling instant listing via product photo uploads.

## 4. Built for Indian Retail Dynamics

Indian commerce is defined by proximity, credit relationships, and trust. FirstMartt is engineered to preserve these values. Our platform facilitates direct merchant-customer relationships, enabling store owners to retain their identity and customer loyalty in the digital space.

## 5. Sustainable Startup Unit Economics

Our hyperlocal network leverages existing retail space instead of building expensive real estate. This enables a lower cost structure, sustainable commission rates, and a clear, profitable path to scale.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Be Part of Our Journey"
        description="Whether you are a local business owner looking to grow, or an investor seeking the next big retail tech opportunity in India — we want to hear from you."
      />
    </>
  );
}
