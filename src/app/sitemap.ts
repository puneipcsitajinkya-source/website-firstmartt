import type { MetadataRoute } from "next";
import { getAllPosts, getAllSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { locations } from "@/lib/locations";

const staticPages = [
  "",
  "/about",
  "/why-firstmartt",
  "/vision",
  "/mission",
  "/problem",
  "/solutions",
  "/for-customers",
  "/for-local-businesses",
  "/for-delivery-partners",
  "/investment",
  "/investors",
  "/market",
  "/traction",
  "/unit-economics",
  "/competitive-landscape",
  "/investors/faq-international",
  "/global",
  "/business-model",
  "/roadmap",
  "/founder",
  "/careers",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/blog",
  "/research",
  "/locations",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/investment" || path === "/blog" || path === "/global" || path === "/investors" || path === "/market"
        ? 0.9
        : path === "/locations" || path === "/traction" || path === "/unit-economics" || path === "/competitive-landscape" || path === "/investors/faq-international"
        ? 0.85
        : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllSlugs().map((slug) => {
    const post = getAllPosts().find((p) => p.slug === slug);
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: post ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries, ...locationEntries];
}
