"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cardHover } from "@/lib/motion";
import type { BlogPost } from "@/lib/blog";

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Stagger className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <StaggerItem key={post.slug} as="article">
          <motion.article
            className="group h-full overflow-hidden rounded-xl border border-slate-200 transition-colors hover:border-violet-200 hover:shadow-md"
            initial="rest"
            whileHover={prefersReducedMotion ? "rest" : "hover"}
            variants={cardHover}
          >
            <Link href={`/blog/${post.slug}`} className="block p-6">
              <time dateTime={post.publishedAt} className="text-sm text-slate-500">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-violet-700">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">{post.readingTime}</span>
                <span className="text-sm font-semibold text-violet-700 transition group-hover:translate-x-1">
                  Read more →
                </span>
              </div>
            </Link>
          </motion.article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
