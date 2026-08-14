import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Delivery Partner Jobs & Flexible Earnings | FirstMartt Fleet",
  description:
    "Join FirstMartt as a hyperlocal delivery partner. Earn up to ₹25,000–₹35,000/month with flexible hours, short 2-4 km delivery radius, and weekly payouts.",
  path: "/for-delivery-partners",
  keywords: [
    "Delivery Partner Job India",
    "Hyperlocal Delivery Driver",
    "Earn Money Delivery Boy",
    "Flexible Delivery Jobs",
    "Delivery Rider Job Maharashtra",
    "Quick commerce delivery partner",
    "Gig economy delivery rider India",
    "Short distance delivery job",
    "EV delivery driver partner",
    "Hyperlocal delivery platform India",
    "Quick commerce Tier 2 Tier 3 India",
    "On-demand intra-city delivery platform",
  ],
});

const deliveryFaqs = [
  {
    question: "What are the requirements to become a FirstMartt Delivery Partner?",
    answer:
      "You must be 18+ years old, possess a valid Aadhaar Card, PAN Card, a two-wheeler (bike/scooter/EV) with Driving License and RC (or a bicycle for short distances), and a smartphone with an active internet connection.",
  },
  {
    question: "How much can I earn delivering with FirstMartt?",
    answer:
      "FirstMartt riders earn a base fare per order plus per-kilometer distance compensation, surge pay during peak hours, and milestone incentives. Full-time partners earn between ₹20,000 to ₹35,000 per month with transparent weekly bank deposits.",
  },
  {
    question: "How long are the delivery distances?",
    answer:
      "FirstMartt specializes in hyperlocal neighbourhood deliveries with typical trip distances between 1.5 km and 4 km, meaning less fatigue and lower fuel consumption compared to long-distance food delivery.",
  },
];

export default function ForDeliveryPartnersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "For Delivery Partners", url: `${siteConfig.url}/for-delivery-partners` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(deliveryFaqs)]} />
      <PageHeader
        title="Delivery Partner Fleet — Flexible Hours & Reliable Earnings"
        description="Deliver for local stores in your neighbourhood. Short travel distances (2–4 km), weekly bank payouts, and performance incentives."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Delivery Partners" },
        ]}
      />
      <Prose>
        <MarkdownContent
          content={`
Become an essential logistics backbone for your city's local economy. As a **FirstMartt Delivery Partner**, you connect neighbourhood stores with nearby customers, earning reliable income on your own schedule.

## 💰 Transparent Pay & Earning Benefits

We prioritize driver safety, fair compensation, and operational convenience:
- **Flexible Working Hours:** Choose full-time, part-time, or weekend shifts that fit your lifestyle.
- **Short Hyperlocal Trips (1.5 – 4 km):** No exhausting 15 km rides. Deliver within compact neighbourhood clusters to save on fuel and bike wear-and-tear.
- **Weekly Direct Bank Payouts:** Every rupee you earn is deposited directly into your bank account with complete trip breakdown transparency.
- **Surge & Festival Incentives:** Earn bonus compensation during evening peak hours, rainy weather, and local festive shopping seasons.
- **EV Friendly Network:** Compatible with electric two-wheelers for near-zero daily fuel running costs.

---

## 📱 Powered by Smart AI Logistics Technology

The FirstMartt Driver App makes deliveries seamless:
- **Automated Route Optimization:** Real-time turn-by-turn navigation avoiding traffic hotspots.
- **Zero Idle Wait Times:** Pre-packed merchant orders ensure you pick up and depart within 60–90 seconds of arriving at the store.
- **Earnings & Tips Tracker:** Monitor your daily trips, earnings, customer tips, and bonus milestones in real-time.

---

## 📋 Easy 3-Step Onboarding Process

1. **Submit Application:** Fill out the quick online partner form or contact our district hub on WhatsApp.
2. **Document Verification:** Upload your Aadhaar Card, PAN Card, Driving License, and Bank Details.
3. **Training & App Activation:** Complete a 15-minute digital briefing, collect your delivery kit, and start receiving delivery requests immediately.
          `.trim()}
        />
      </Prose>
      <CTA 
        title="Join the FirstMartt Delivery Fleet"
        description="Start earning in your city with flexible hours and competitive weekly payouts."
        primaryHref="/contact"
        primaryLabel="Apply as Delivery Partner"
      />
    </>
  );
}
