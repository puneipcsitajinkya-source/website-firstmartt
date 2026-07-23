import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "For Delivery Partners | Earn with FirstMartt",
  description:
    "Join FirstMartt as a delivery partner. Enjoy flexible working hours, transparent earnings, and advanced hyperlocal routing technology.",
  path: "/for-delivery-partners",
  keywords: [
    "Delivery Partner Job India",
    "Hyperlocal Delivery Driver",
    "Earn Money Delivery Boy",
    "Flexible Delivery Jobs",
    "FirstMartt Partners",
  ],
});

export default function ForDeliveryPartnersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Delivery Partners", url: `${siteConfig.url}/for-delivery-partners` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="For Delivery Partners"
        description="Earn money on your own schedule. Join FirstMartt's hyperlocal delivery network and support local businesses in your city."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Delivery Partners" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
Become an essential link in neighborhood commerce. As a FirstMartt delivery partner, you connect nearby stores with customers, ensuring secure and rapid last-mile fulfillment.

## Why Deliver with FirstMartt?

We prioritize driver safety, fair compensation, and operational convenience:
- **Work on Your Schedule:** Log on and deliver whenever you choose.
- **Transparent and Fair Pay:** Earn per delivery with bonuses for peak hours.
- **Localized Delivery Zones:** Short travel distances keep you close to your home base.
- **Support Neighborhood Shops:** Help local merchants deliver products to their community.

## Powered by Smart Logistics Technology

Our delivery driver application simplifies operations:
- **Hyperlocal Route Optimization:** Navigate using the fastest turn-by-turn routes.
- **Express Dispatching:** Spend less time waiting at stores and more time earning.
- **Direct Digital Cashouts:** Track earnings in real-time with transparent weekly payouts.

## How to Join

Getting started is simple and quick:
1. **Submit Application:** Contact our onboarding team through the web form.
2. **Document Check:** Bring your vehicle registration, driving license, and identity proofs.
3. **Download Partner App:** Get trained, set up your profile, and start accepting deliveries.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Join Our Delivery Fleet"
        description="Start earning with FirstMartt. Connect with our partner onboarding team today."
        primaryHref="/contact"
        primaryLabel="Apply to Deliver"
      />
    </>
  );
}
