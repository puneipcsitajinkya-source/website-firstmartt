import type { Metadata } from "next";
import { Prose, MarkdownContent } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "FirstMartt privacy policy explaining how we collect, use, and protect personal information on our hyperlocal commerce platform.",
  path: "/privacy",
  keywords: ["FirstMartt Privacy Policy"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Privacy Policy", url: `${siteConfig.url}/privacy` },
        ])}
      />
      <PageHeader
        title="Privacy Policy"
        description="Last updated: July 2025. This policy describes how FirstMartt handles your personal information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## Information We Collect

We may collect information you provide directly, such as name, email address, phone number, and business details when you contact us, register as a merchant, or express investment interest.

## How We Use Information

We use collected information to respond to inquiries, provide platform services, improve our website, communicate updates, and comply with legal obligations.

## Data Sharing

We do not sell personal information. We may share data with service providers who assist our operations under confidentiality agreements, or when required by law.

## Data Security

We implement reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, or disclosure.

## Cookies

Our website may use cookies and similar technologies to improve user experience and analyze site traffic. You can manage cookie preferences through your browser settings.

## Your Rights

Depending on applicable law, you may request access, correction, or deletion of your personal information by contacting us at firstmartsindia@gmail.com.

## Changes to This Policy

We may update this privacy policy periodically. Material changes will be posted on this page with an updated revision date.

## Contact

For privacy-related questions, contact us at firstmartsindia@gmail.com.
          `.trim()}
        />
      </Prose>
    </>
  );
}
