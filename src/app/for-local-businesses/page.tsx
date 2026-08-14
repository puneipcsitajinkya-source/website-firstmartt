import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Digital Platform for Kirana Stores & Local Merchants | FirstMartt",
  description:
    "Transform your local retail store into a digital powerhouse with FirstMartt. Instant online catalogue, WhatsApp ordering, zero capex, and 15-30 min neighbourhood delivery.",
  path: "/for-local-businesses",
  keywords: [
    "Kirana store digital platform",
    "Digital Platform for Local Businesses",
    "Local merchant digitalization India",
    "Phygital retail platform India",
    "Kirana WhatsApp ordering system",
    "Digital storefront for local shops",
    "Onboard Retail Store Online",
    "Local Shop Merchant App",
    "Hyperlocal Seller Account India",
    "Grow Retail Business Digitally",
    "Online marketplace for local shops",
    "Digitize local retail India",
    "Neighbourhood store ecommerce",
    "MSME retail digitization India",
    "Quick commerce without dark stores",
  ],
});

const merchantFaqs = [
  {
    question: "How does FirstMartt help local Kirana stores compete with quick commerce apps?",
    answer:
      "FirstMartt gives neighbourhood retailers the same digital superpower as quick commerce apps without dark stores. Merchants get a free digital storefront, QR code catalogue, automated WhatsApp ordering, and access to a shared delivery fleet to fulfill 15-30 minute orders with zero inventory liability.",
  },
  {
    question: "What is the cost for a merchant to onboard on FirstMartt?",
    answer:
      "Onboarding is 100% zero-capex. Local stores can list their inventory without costly upfront software licenses or hardware investments. FirstMartt charges only a transparent, minimal marketplace commission on completed orders.",
  },
  {
    question: "Do merchants need technical skills to manage their store on FirstMartt?",
    answer:
      "No technical experience is needed. The FirstMartt Merchant App features one-click cataloguing, automated regional language support, voice search, and automated UPI payouts.",
  },
];

export default function ForLocalBusinessesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Local Businesses", url: `${siteConfig.url}/for-local-businesses` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(merchantFaqs)]} />
      <PageHeader
        title="Digital Platform for Kirana Stores & Local Businesses"
        description="Empowering India's neighbourhood retailers with digital storefronts, WhatsApp ordering, and 15-minute delivery — compete with large e-commerce giants with zero capex."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Local Businesses" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
FirstMartt is India's dedicated **phygital retail platform** designed to empower local brick-and-mortar stores. We believe physical retailers and Kiranas are the economic backbone of Indian communities. Our technology helps you expand your revenue, capture neighbourhood online demand, and compete head-to-head with quick commerce apps.

## 🚀 Expand Beyond Your Physical Storefront

Join a unified hyperlocal multi-vendor marketplace built for Indian commerce. Bringing your catalog online with FirstMartt unlocks powerful growth channels:
- **Instant Neighborhood Delivery:** Reach thousands of online customers located within a 3 to 5 km radius.
- **24/7 Digital Visibility:** Showcase your products and accept pre-orders even when your physical shutter is down.
- **Retain Customer Loyalty & Khata:** Preserve your direct relationships, trust, and traditional customer credit options while offering digital checkout.
- **Zero Capex Onboarding:** Start selling online without expensive hardware, warehouse leases, or developer fees.

---

## 🛠️ Simple, Enterprise-Grade Seller Tools

You don't need a technology background or complex software training. The FirstMartt Merchant App provides:
- **Instant AI Catalog Builder:** Load thousands of FMCG, grocery, and daily essential SKUs with verified barcodes and images in seconds.
- **WhatsApp & QR Code Ordering:** Let customers browse your digital menu and place instant orders via WhatsApp or scan-to-order QR stands.
- **Real-Time Inventory Management:** Track stock dynamics, prevent out-of-stock cancellations, and update pricing on the fly.
- **Automated UPI Direct Payouts:** Receive fast, transparent payouts directly to your bank account with complete ledger visibility.

---

## ⚡ Shared Hyperlocal Delivery Network (No Staff Hiring Required)

Never worry about hiring or managing delivery boys. When a customer orders:
1. Your store receives an instant audio-visual notification on the merchant dashboard.
2. You pack the order in your standard packaging.
3. A nearby FirstMartt verified delivery rider arrives, picks up the package, and delivers it to the customer within 15 to 30 minutes.
4. You keep your profits while our logistics network handles transit, live GPS tracking, and customer support.

---

## 💡 Frequently Asked Questions by Merchants

### How do I join the FirstMartt Local Retail Network?
Simply submit your store details via our partner onboarding form or reach out to our team on WhatsApp. Our local field team in your district will assist with catalog setup and onboarding within 24 hours.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Digitize Your Local Store Today"
        description="Partner with FirstMartt to build your digital future. Join hundreds of growing neighbourhood merchants."
        primaryHref="/contact"
        primaryLabel="Onboard Your Store"
      />
    </>
  );
}
