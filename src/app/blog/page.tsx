import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "FirstMartt blog featuring insights on hyperlocal commerce, startup funding in India, retail technology, and local business digital transformation.",
  path: "/blog",
  keywords: [
    "Hyperlocal Commerce",
    "Startup Funding India",
    "Retail Technology",
    "Digital Commerce Trends",
  ],
});

type Props = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { q = "", page = "1" } = await searchParams;
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPage = 4; // Yields multiple pages for demonstration

  let posts = getAllPosts();
  if (q) {
    const query = q.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
    );
  }

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Blog & Insights"
        description="Expert insights on hyperlocal commerce, retail technology, and local business digital enablement in India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <form action="/blog" method="GET" className="mb-10 flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Search
          </button>
          {q && (
            <a
              href="/blog"
              className="inline-flex items-center rounded-lg border border-slate-350 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-55"
            >
              Clear
            </a>
          )}
        </form>

        {paginatedPosts.length > 0 ? (
          <>
            <BlogPostGrid posts={paginatedPosts} />

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6"
              >
                <div>
                  <p className="text-sm text-slate-500">
                    Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
                    <span className="font-semibold">
                      {Math.min(startIndex + postsPerPage, totalPosts)}
                    </span>{" "}
                    of <span className="font-semibold">{totalPosts}</span> results
                  </p>
                </div>
                <div className="flex gap-2">
                  {currentPage > 1 && (
                    <a
                      href={`/blog?page=${currentPage - 1}${
                        q ? `&q=${encodeURIComponent(q)}` : ""
                      }`}
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Previous
                    </a>
                  )}
                  {currentPage < totalPages && (
                    <a
                      href={`/blog?page=${currentPage + 1}${
                        q ? `&q=${encodeURIComponent(q)}` : ""
                      }`}
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Next
                    </a>
                  )}
                </div>
              </nav>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
            <p className="text-slate-500">No articles match your query &quot;{q}&quot;.</p>
            <a href="/blog" className="mt-4 inline-block text-sm font-semibold text-violet-700">
              Clear search and view all articles
            </a>
          </div>
        )}
      </section>
      <CTA
        title="Have Questions?"
        description="Reach out to our team for investment inquiries, partnerships, or general questions about FirstMartt."
      />
    </>
  );
}
