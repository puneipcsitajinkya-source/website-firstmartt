import { siteConfig } from "./site-config";
import { contactPhone } from "./contact";

type BreadcrumbItem = { name: string; url: string };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: contactPhone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    sameAs: [siteConfig.social.linkedin],
    foundingLocation: {
      "@type": "Place",
      name: "India",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: contactPhone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function locationLocalBusinessSchema(location: {
  name: string;
  description: string;
  slug: string;
  serviceAreas: { type: "State" | "City"; name: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} - ${location.name}`,
    description: location.description,
    url: `${siteConfig.url}/locations/${location.slug}`,
    email: siteConfig.contact.email,
    telephone: contactPhone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.name,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    areaServed: location.serviceAreas.map((area) => ({
      "@type": area.type === "State" ? "AdministrativeArea" : "City",
      name: area.name,
    })),
  };
}

export function personSchema(person?: {
  name?: string;
  role?: string;
  bio?: string;
}) {
  const p = person ?? siteConfig.founder;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name ?? siteConfig.founder.name,
    jobTitle: p.role ?? siteConfig.founder.role,
    description: p.bio ?? siteConfig.founder.bio,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: [siteConfig.social.linkedin],
  };
}

export function webPageSchema(page: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: `${siteConfig.url}${page.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    inLanguage: siteConfig.language,
  };
}


