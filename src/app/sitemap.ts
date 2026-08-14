import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
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
  const now = new Date();

  // Static landing pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency:
      path === ""
        ? "daily"
        : path === "/blog" || path === "/research" || path === "/locations"
          ? "daily"
          : path === "/investment" || path === "/global" || path === "/investors" || path === "/market"
            ? "weekly"
            : "monthly",
    priority:
      path === ""
        ? 1.0
        : path === "/investment" || path === "/blog" || path === "/global" || path === "/investors" || path === "/market"
          ? 0.95
          : path === "/locations" || path === "/traction" || path === "/unit-economics" || path === "/competitive-landscape" || path === "/investors/faq-international" || path === "/research"
            ? 0.9
            : path === "/about" || path === "/solutions" || path === "/for-local-businesses" || path === "/business-model" || path === "/why-firstmartt"
              ? 0.85
              : 0.75,
  }));

  // All dynamic blog entries (O(N) iteration)
  const allPosts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || now),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // All location landing pages
  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries, ...locationEntries];
}
