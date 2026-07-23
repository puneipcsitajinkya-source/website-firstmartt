import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/lib/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about FirstMartt, our hyperlocal commerce platform, investment opportunity, and services for local businesses in India.",
  path: "/faq",
  keywords: ["FirstMartt FAQ", "Startup for Investors", "Hyperlocal Marketplace India"],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "FAQ", url: `${siteConfig.url}/faq` },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHeader
        title="Frequently Asked Questions"
        description="Answers to common questions about FirstMartt, our platform, investment opportunity, and partnership options."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FAQAccordion items={faqs} />
      </section>
      <CTA />
    </>
  );
}
