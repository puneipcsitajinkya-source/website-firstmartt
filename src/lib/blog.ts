export type { BlogPost } from "./blog-types";
import type { BlogPost } from "./blog-types";

import { marketAndHyperlocalPosts } from "./blog-data/market-and-hyperlocal";
import { merchantAndKiranaPosts } from "./blog-data/merchant-and-kirana";
import { investmentAndStartupPosts } from "./blog-data/investment-and-startup";
import { regionalAndBharatPosts } from "./blog-data/regional-and-bharat";
import { technologyAndLogisticsPosts } from "./blog-data/technology-and-logistics";

export const blogPosts: BlogPost[] = [
  ...marketAndHyperlocalPosts,
  ...merchantAndKiranaPosts,
  ...investmentAndStartupPosts,
  ...regionalAndBharatPosts,
  ...technologyAndLogisticsPosts,
];

export const blogCategories = [
  "All",
  "Hyperlocal Commerce",
  "Merchant Guides",
  "Investor & Funding",
  "Regional Bharat",
  "Retail Tech & AI",
] as const;

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "All") {
    return getAllPosts();
  }
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
