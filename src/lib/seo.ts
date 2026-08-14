import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" ? `${siteConfig.name} | ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  const verification: Record<string, string> = {};
  if (siteConfig.analytics.gscVerification) {
    verification.google = siteConfig.analytics.gscVerification;
  }
  if (siteConfig.analytics.bingVerification) {
    verification.other = siteConfig.analytics.bingVerification;
  }

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: authors?.map((name) => ({ name })) ?? [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    ...(Object.keys(verification).length > 0 && { verification }),
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    category: "technology",
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
