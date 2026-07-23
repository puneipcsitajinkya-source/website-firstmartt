import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { MarkdownContent, Prose } from "@/components/Prose";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
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

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), blogPostingSchema(post)]} />

      <article>
        <header className="border-b border-slate-200 bg-gradient-to-b from-violet-50 to-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
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
                <li aria-hidden="true">/</li>
                <li className="text-slate-700">{post.title}</li>
              </ol>
            </nav>
            <time dateTime={post.publishedAt} className="text-sm text-slate-500">
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{post.description}</p>
            <p className="mt-4 text-sm text-slate-500">
              By {post.author} · {post.readingTime}
            </p>
          </div>
        </header>

        <Prose>
          <MarkdownContent content={post.content} />
        </Prose>
      </article>

      <CTA
        title="Interested in FirstMartt?"
        description="Explore our investment opportunity or connect with our team."
        primaryHref="/investment"
        primaryLabel="Investment Opportunity"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
