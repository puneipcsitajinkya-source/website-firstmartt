import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "For Customers | Shop Trusted Local Stores Online",
  description:
    "FirstMartt connects you with your favorite neighborhood shops. Shop groceries, pharmacy, electronics, and fashion from multiple local stores under one platform.",
  path: "/for-customers",
  keywords: [
    "Shop Local Online",
    "Local Stores Marketplace",
    "15-Minute Delivery India",
    "Hyperlocal Grocery Delivery",
    "FirstMartt Customers",
    "Neighbourhood store ecommerce",
    "Hyperlocal shopping Maharashtra",
    "Quick commerce Tier 2 Tier 3 India",
  ],
});

export default function ForCustomersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Customers", url: `${siteConfig.url}/for-customers` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="For Customers"
        description="Your neighborhood, digitized. Shop from your favorite trusted local stores across multiple categories and get lightning-fast delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Customers" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt brings the ease of digital shopping to your neighborhood. You no longer have to choose between supporting local family shops and the convenience of quick online delivery.

## Multi-Category Shopping Under One Roof

With FirstMartt, you can purchase items from different neighborhood categories in a single digital session:
- **Daily Essentials:** Kirana, fresh groceries, bakery items, dairy.
- **Health & Wellness:** Fast pharmacy deliveries and personal care.
- **Lifestyle & Home:** Fashion, books, sports gear, home essentials, and toys.
- **Specialty Products:** Flowers, bakery goods, pet supplies, and automobile accessories.

## Speed Meet Trust

Why wait days for shipping or settle for dark-store quality? FirstMartt delivers items directly from merchants you know and trust:
- **15-Minute Delivery:** Express delivery from nearby local stores.
- **Genuine Products:** Verified inventory direct from local shop shelves.
- **Flexible Ordering:** Shop online and pay securely with UPI, cards, or cash on delivery.

## Support Your Neighborhood Economy

Every purchase made through FirstMartt helps a local retailer grow. Instead of displacing brick-and-mortar storefronts, our platform increases their sales, supports local jobs, and strengthens your local neighborhood community.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Start Shopping Locally"
        description="Discover the best local shops in your neighborhood. Join our mailing list for launch updates."
        primaryHref="/contact"
        primaryLabel="Get Launch Updates"
      />
    </>
  );
}
