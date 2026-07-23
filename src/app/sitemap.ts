import type { MetadataRoute } from "next";
import { getAllPosts, getAllSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

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
  "/business-model",
  "/roadmap",
  "/founder",
  "/careers",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/investment" || path === "/blog" ? 0.9 : 0.8,
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

  return [...staticEntries, ...blogEntries];
}
