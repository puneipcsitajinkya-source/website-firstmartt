import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faq";
import { FAQTabs } from "@/components/FAQTabs";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about FirstMartt for investors, merchants, and customers — covering our hyperlocal commerce platform, investment opportunity, FDI, and services in India.",
  path: "/faq",
  keywords: [
    "FirstMartt FAQ",
    "Startup for Investors",
    "Hyperlocal Marketplace India",
    "Indian Startup Investment FAQ",
    "International Investor FAQ India",
    "What is hyperlocal commerce",
    "Hyperlocal commerce business model",
    "FirstMartt ecommerce",
    "FirstMartt app",
  ],
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
        description="Answers to common questions about FirstMartt — organized for investors, merchants, and customers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FAQTabs />
      </section>
      <CTA />
    </>
  );
}
