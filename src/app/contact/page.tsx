import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { contactPhone, defaultWhatsAppMessage, getTelLink, getWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact FirstMartt for investment inquiries, partnerships, merchant onboarding, careers, and general questions about our hyperlocal commerce platform.",
  path: "/contact",
  keywords: ["Contact FirstMartt", "Startup for Investors", "FirstMartt India", "FirstMartt funding", "FirstMartt investment", "Startup Seeking Investment India"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      {/* <PageHeader
        title="Contact Us"
        description="Reach out for investment discussions, partnerships, merchant inquiries, careers, or general questions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      /> */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact Us</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-slate-500">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-violet-700 hover:text-violet-800"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Phone / WhatsApp</dt>
                <dd className="mt-1 space-y-2">
                  <a
                    href={getTelLink()}
                    className="block text-violet-700 hover:text-violet-800"
                  >
                    {contactPhone.international}
                  </a>
                  <p className="text-xs text-slate-500">
                    International format with India country code ({contactPhone.countryCode}).
                    Save this number to call or message us from anywhere in the world.
                  </p>
                  <a
                    href={getWhatsAppLink(defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
                  >
                    <span aria-hidden="true">💬</span>
                    Chat on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Location</dt>
                <dd className="mt-1 text-slate-600">
                  {siteConfig.contact.address.addressLocality},{" "}
                  {siteConfig.contact.address.addressRegion}, India
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">For Investors</dt>
                <dd className="mt-1 text-slate-600">
                  Angel investors, VCs, and strategic partners — mention &quot;Investment&quot; in
                  your subject line for priority response.
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
