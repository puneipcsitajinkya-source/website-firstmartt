"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cardHover } from "@/lib/motion";
import type { BlogPost } from "@/lib/blog";

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <StaggerItem key={post.slug} as="article">
          <motion.article
            className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-violet-300 hover:shadow-md"
            initial="rest"
            whileHover={prefersReducedMotion ? "rest" : "hover"}
            variants={cardHover}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 ring-1 ring-inset ring-violet-700/10">
                  {post.category || "Hyperlocal"}
                </span>
                <time dateTime={post.publishedAt} className="text-xs text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h2 className="mt-3 text-lg font-bold tracking-tight text-slate-900 line-clamp-2 group-hover:text-violet-700">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-xs font-medium text-slate-400">
                ⏱ {post.readingTime}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-xs font-semibold text-violet-600 group-hover:text-violet-800"
              >
                Read article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
