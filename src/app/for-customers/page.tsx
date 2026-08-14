import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Shop Local Stores Online — 15 to 30 Min Delivery | FirstMartt",
  description:
    "Order groceries, pharmacy, electronics, and daily essentials from trusted neighbourhood shops with 15–30 minute local delivery on FirstMartt. Support local retail with digital ease.",
  path: "/for-customers",
  keywords: [
    "Shop Local Online",
    "Neighbourhood shopping app",
    "Buy from local stores online",
    "Local Stores Marketplace",
    "15-Minute Delivery India",
    "Hyperlocal Grocery Delivery",
    "Quick commerce without dark stores",
    "FirstMartt Customers",
    "Neighbourhood store ecommerce",
    "Hyperlocal shopping Maharashtra",
    "Quick commerce Tier 2 Tier 3 India",
    "Online marketplace for local shops",
  ],
});

const customerFaqs = [
  {
    question: "How fast is delivery on FirstMartt?",
    answer:
      "Orders are fulfilled from real neighbourhood stores located within 2 to 4 km of your address. Deliveries typically arrive in 15 to 30 minutes.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "FirstMartt supports Instant UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash on Delivery (COD).",
  },
  {
    question: "How does FirstMartt ensure genuine products?",
    answer:
      "All products are sourced directly from verified brick-and-mortar retail shops and authorized distributors in your city, ensuring 100% genuine products with transparent expiration dates.",
  },
];

export default function ForCustomersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Customers", url: `${siteConfig.url}/for-customers` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(customerFaqs)]} />
      <PageHeader
        title="Shop Trusted Local Stores Online"
        description="Your favourite neighbourhood shops, digitized. Order groceries, medicines, electronics, and fresh daily essentials with 15 to 30 minute delivery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Customers" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt brings the convenience of modern quick commerce to your trusted neighbourhood shops. You no longer have to compromise between supporting local family-run businesses and getting instant doorstep delivery.

## 🛒 Multi-Category Shopping from Real Local Shops

With FirstMartt, explore and order from multiple verified local stores in one simple platform:
- **Groceries & Fresh Daily Essentials:** Fresh vegetables, fruits, dairy, bakery items, spices, and packaged food from top local Kiranas.
- **Medicines & Health:** Fast prescription fulfillment and wellness care from licensed neighbourhood pharmacies.
- **Electronics & Mobile Accessories:** Cables, chargers, adapters, and home electronics from trusted city retailers.
- **Home, Lifestyle & Stationery:** School books, office stationery, hardware tools, and household cleaning supplies.

---

## ⚡ Speed Meets Generational Trust

Why wait days for long-distance couriers or settle for anonymous warehouse dark-store batches?
- **15–30 Minute Doorstep Delivery:** Hyperlocal routing dispatches couriers immediately upon order confirmation.
- **100% Genuine, Fresh Stock:** Real retail inventory verified on store shelves, eliminating stale or near-expiry batches.
- **Flexible Payment Options:** Instant UPI, card payments, or Cash on Delivery (COD) for complete peace of mind.

---

## 🤝 Strengthening Your Local Community Economy

Every order placed on FirstMartt keeps 100% of retail earnings circulating within your local town and district economy. You empower local merchants, fund neighbourhood jobs, and sustain vibrant high-street retail ecosystems.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Experience Neighbourhood Quick Commerce"
        description="Discover the top local stores in your neighbourhood. Get notified as FirstMartt rolls out in your area."
        primaryHref="/contact"
        primaryLabel="Get Launch Updates"
      />
    </>
  );
}
