import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Founder",
  description:
    "Meet the founders behind FirstMartt, an Indian hyperlocal commerce startup building a digital platform for local businesses and seeking investment.",
  path: "/founder",
  keywords: ["Indian Startup", "Entrepreneurship India", "FirstMartt Founder", "FirstMartt founders", "FirstMartt Yavatmal", "FirstMartt startup", "Local commerce startup Yavatmal"],
});

export default function FounderPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Founder", url: `${siteConfig.url}/founder` },
        ])}
      />
      <PageHeader
        title="Our Founder"
        description="FirstMartt was founded by entrepreneurs committed to transforming India's local commerce landscape through technology and community focus."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Founder" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## Leadership with Purpose

The FirstMartt founding team brings together expertise in technology, ecommerce, and Indian market dynamics. Our founders identified a critical gap: local businesses lacked accessible digital infrastructure while consumers increasingly expected online convenience.

## Entrepreneurial Vision

Driven by entrepreneurship and innovation, our leadership team is building FirstMartt as a long-term platform—not a short-term aggregation play. We believe India's next great commerce company will emerge from empowering local merchants rather than displacing them.

## Commitment to Stakeholders

Our founders maintain open communication with investors, partners, merchants, and team members. Transparency, execution discipline, and merchant empathy guide every strategic decision.

## Connect with Us

Angel investors, venture capital firms, and strategic partners interested in connecting with our founding team are welcome to reach out through our contact page.
          `.trim()}
        />
      </Prose>
      <CTA />
    </>
  );
}
