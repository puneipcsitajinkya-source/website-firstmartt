import type { Metadata } from "next";
import { Prose, MarkdownContent } from "@/components/Prose";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "FirstMartt terms and conditions governing use of our website and hyperlocal commerce platform services.",
  path: "/terms",
  keywords: ["FirstMartt Terms and Conditions"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Terms & Conditions", url: `${siteConfig.url}/terms` },
        ])}
      />
      <PageHeader
        title="Terms & Conditions"
        description="Last updated: July 2025. Please read these terms carefully before using FirstMartt services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <Prose>
        <MarkdownContent
          content={`
## Acceptance of Terms

By accessing or using the FirstMartt website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.

## Use of Website

You may use our website for lawful purposes only. You agree not to misuse the site, attempt unauthorized access, or interfere with platform operations.

## Intellectual Property

All content on this website—including text, logos, graphics, and software—is owned by FirstMartt or its licensors and protected by applicable intellectual property laws.

## Investment Information

Information on this website about investment opportunities is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. Investment decisions should be made based on formal documentation and professional advice.

## Merchant Services

Merchants participating in the FirstMartt platform are subject to separate merchant agreements governing fees, obligations, and service terms.

## Disclaimer

Our website and services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.

## Limitation of Liability

To the maximum extent permitted by law, FirstMartt shall not be liable for indirect, incidental, or consequential damages arising from use of our website or services.

## Governing Law

These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.

## Contact

For questions about these terms, contact firstmartsindia@gmail.com.
          `.trim()}
        />
      </Prose>
    </>
  );
}
