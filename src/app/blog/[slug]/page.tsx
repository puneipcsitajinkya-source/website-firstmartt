import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Return all slugs for SSG pre-rendering
  return getAllSlugs().slice(0, 100).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found",
      description: "The requested blog article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ];

  const shareUrl = `${siteConfig.url}/blog/${post.slug}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), blogPostingSchema(post)]} />

      <article>
        <header className="border-b border-slate-200 bg-gradient-to-b from-violet-50 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                <li>
                  <Link href="/" className="hover:text-violet-700">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-violet-700">
                    Blog
                  </Link>
                </li>
                {post.category && (
                  <>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link
                        href={`/blog?category=${encodeURIComponent(post.category)}`}
                        className="hover:text-violet-700"
                      >
                        {post.category}
                      </Link>
                    </li>
                  </>
                )}
                <li aria-hidden="true">/</li>
                <li className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                  {post.category}
                </span>
              )}
              <time dateTime={post.publishedAt} className="text-xs text-slate-500">
                Published on{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500">{post.readingTime}</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 font-normal">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-900">Author:</span> {post.author}
                <span className="text-slate-300">•</span>
                <span className="font-semibold text-slate-900">Topics:</span>{" "}
                {post.keywords.slice(0, 3).join(", ")}
              </div>

              {/* Social Share Bar */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Share:</span>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedShareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition"
                  title="Share on WhatsApp"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition"
                  title="Share on LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-200 transition"
                  title="Share on X"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </header>

        <Prose className="max-w-4xl">
          <MarkdownContent content={post.content} />
        </Prose>

        {/* Related Articles SEO Internal Linking Section */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-slate-200 bg-slate-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-slate-900">Related Articles in {post.category}</h2>
              <p className="mt-1 text-xs text-slate-500">Explore more deep dives, operational playbooks, and research.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-violet-400 hover:shadow-md transition"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                        {rel.category}
                      </span>
                      <h3 className="mt-2 text-sm font-bold text-slate-900 line-clamp-2 hover:text-violet-700">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{rel.excerpt}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] text-slate-400">
                      <span>⏱ {rel.readingTime}</span>
                      <span className="font-semibold text-violet-600">Read →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTA
        title="Interested in FirstMartt's Ecosystem?"
        description="Whether you are a merchant digitizing your store, an angel investor exploring retail tech, or a delivery partner, connect with our team."
        primaryHref="/investment"
        primaryLabel="Investment Opportunity"
        secondaryHref="/contact"
        secondaryLabel="Contact Our Team"
      />
    </>
  );
}
