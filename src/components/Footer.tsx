import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { contactPhone, defaultWhatsAppMessage, getTelLink, getWhatsAppLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-violet-900/30 bg-[#0f0a1a]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo showText={true} size="md" variant="dark" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-violet-200/70">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-violet-300/60">
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-violet-300">
              {siteConfig.contact.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-violet-300/60">
            <a href={getTelLink()} className="hover:text-violet-300">
              {contactPhone.international}
            </a>
            <span className="mx-1.5 text-violet-500/50">·</span>
            <a
              href={getWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300"
            >
              WhatsApp
            </a>
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-violet-500"
            >
              Get in Touch
            </Link>
            <a
              href={getWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">Company</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-violet-200/70 hover:text-violet-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">Platform</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.platform.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-violet-200/70 hover:text-violet-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">
            Investors & Legal
          </h3>
          <ul className="mt-4 space-y-2">
            {[...footerLinks.investors, ...footerLinks.legal].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-violet-200/70 hover:text-violet-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-violet-900/30 py-6 text-center text-sm text-violet-400/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built in India.
      </div>
    </footer>
  );
}
