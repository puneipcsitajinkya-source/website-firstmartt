export type { BlogPost } from "./blog-types";
import type { BlogPost } from "./blog-types";

import { marketAndHyperlocalPosts } from "./blog-data/market-and-hyperlocal";
import { merchantAndKiranaPosts } from "./blog-data/merchant-and-kirana";
import { investmentAndStartupPosts } from "./blog-data/investment-and-startup";
import { regionalAndBharatPosts } from "./blog-data/regional-and-bharat";
import { technologyAndLogisticsPosts } from "./blog-data/technology-and-logistics";
import { cityHyperlocalPosts } from "./blog-data/city-hyperlocal-playbooks";
import { retailCategoryPosts } from "./blog-data/retail-category-guides";
import { generateProgrammaticPosts } from "./blog-data/programmatic-seo-engine";
import { seoMastery100Posts } from "./blog-data/seo-mastery-100";
import { seoMasteryVolume2Posts } from "./blog-data/seo-mastery-volume-2";
import { indianStartupAndInvestment100Posts } from "./blog-data/indian-startup-and-investment-100";
import { indianStartupAndInvestmentVolume2Posts } from "./blog-data/indian-startup-and-investment-volume-2";
import { offlineToOnlinePart1Posts } from "./blog-data/offline-to-online-part1";
import { offlineToOnlinePart2Posts } from "./blog-data/offline-to-online-part2";
import { merchantOnboardingGuidePosts } from "./blog-data/merchant-onboarding-guides";
import { locationSEOPosts } from "./blog-data/location-seo-articles";
import { industryAuthorityPosts } from "./blog-data/industry-authority-articles";

// Master Blog Posts collection
const programmaticArticles = generateProgrammaticPosts();

// Deduplicate by slug to ensure 100% uniqueness
const rawBlogPosts: BlogPost[] = [
  ...merchantOnboardingGuidePosts,
  ...locationSEOPosts,
  ...industryAuthorityPosts,
  ...marketAndHyperlocalPosts,
  ...merchantAndKiranaPosts,
  ...investmentAndStartupPosts,
  ...regionalAndBharatPosts,
  ...technologyAndLogisticsPosts,
  ...cityHyperlocalPosts,
  ...retailCategoryPosts,
  ...seoMastery100Posts,
  ...seoMasteryVolume2Posts,
  ...indianStartupAndInvestment100Posts,
  ...indianStartupAndInvestmentVolume2Posts,
  ...offlineToOnlinePart1Posts,
  ...offlineToOnlinePart2Posts,
  ...programmaticArticles,
];

const postMap = new Map<string, BlogPost>();
for (const post of rawBlogPosts) {
  if (!postMap.has(post.slug)) {
    postMap.set(post.slug, post);
  }
}

export const blogPosts: BlogPost[] = Array.from(postMap.values());

export const blogCategories = [
  "All",
  "Hyperlocal Commerce",
  "Merchant Guides",
  "Investor & Funding",
  "Regional Bharat",
  "Retail Tech & AI",
  "City Playbooks",
  "Retail Categories",
  "Gig Economy & Fleet",
  "ONDC & Policy",
  "Consumer Guides",
] as const;

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return postMap.get(slug);
}

export function getAllSlugs(): string[] {
  return Array.from(postMap.keys());
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "All") {
    return getAllPosts();
  }
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category.toLowerCase() === category.toLowerCase())
    .slice(0, limit);
}
