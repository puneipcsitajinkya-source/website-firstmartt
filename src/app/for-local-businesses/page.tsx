import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "For Local Businesses | Go Digital with FirstMartt",
  description:
    "Grow your retail store digitally. Join FirstMartt's hyperlocal marketplace to manage inventory, catalog products, and reach nearby online customers easily.",
  path: "/for-local-businesses",
  keywords: [
    "Digital Platform for Local Businesses",
    "Onboard Retail Store Online",
    "Local Shop Merchant App",
    "Hyperlocal Seller Account India",
    "Grow Retail Business Digitally",
  ],
});

export default function ForLocalBusinessesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Local Businesses", url: `${siteConfig.url}/for-local-businesses` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="For Local Businesses"
        description="Empowering local retailers to digitize, compete, and grow in the modern digital economy with zero complex coding."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Local Businesses" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt is designed to stand side-by-side with local brick-and-mortar stores. We believe physical retailers are the heart of Indian communities. Our technology is built to help you expand your reach, not replace your presence.

## Expand Beyond Your Storefront

Join a unified hyperlocal multi-vendor marketplace. By bringing your catalog online with FirstMartt, you unlock new revenue channels:
- **Instant Neighborhood Reach:** Sell to online customers located within your immediate vicinity.
- **24/7 Digital Visibility:** Showcase your products even when your physical doors are closed.
- **Retain Customer Relationships:** Preserve direct connections and credit options with your regulars.

## Simple, Enterprise-Grade Seller Tools

You don't need a technology background to run a digital store. Our easy merchant app provides:
- **Easy Catalog Builder:** Load and customize thousands of products in clicks.
- **Intelligent Inventory Manager:** Track stocks dynamically, preventing out-of-stock orders.
- **Actionable Performance Insights:** View analytics on popular products, revenues, and buyers.
- **Secure and Fast Payments:** Receive automated direct payouts through UPI and secure channels.

## Stress-Free Delivery Logistics

Don't worry about hiring delivery staff. When an order is placed:
- Our hyperlocal network matches the order with nearby delivery partners.
- A courier arrives, picks up the pre-packed order from your store, and fulfills it in minutes.
- You focus on quality inventory while we manage the transit.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Digitize Your Store Today"
        description="Partner with FirstMartt to build your digital future. Contact our merchant onboarding team."
        primaryHref="/contact"
        primaryLabel="Partner With Us"
      />
    </>
  );
}
