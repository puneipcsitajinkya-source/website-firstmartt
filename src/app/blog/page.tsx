import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllPosts, blogCategories } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Blog & Knowledge Hub: 100+ Guides on Hyperlocal Commerce",
  description:
    "FirstMartt's comprehensive library of 100+ authoritative articles on hyperlocal commerce, merchant digitalization, startup investing in India, and retail tech.",
  path: "/blog",
  keywords: [
    "Hyperlocal Commerce",
    "Startup Funding India",
    "Retail Technology Startup",
    "Local Merchant Digitalization",
    "Invest in Indian Startups",
    "Tier 2 Tier 3 Commerce",
    "What is hyperlocal commerce",
    "Future of hyperlocal commerce in India",
    "Local merchant digitalization India",
    "How local merchants can sell online in India",
    "AI in local retail supply chain India",
  ],
});

type Props = {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { q = "", category = "All", page = "1" } = await searchParams;
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPage = 9;

  let posts = getAllPosts();

  // Filter by Category
  if (category && category !== "All") {
    posts = posts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by Search Query
  if (q) {
    const query = q.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query) ||
        p.keywords.some((k) => k.toLowerCase().includes(query))
    );
  }

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (validPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title="Hyperlocal Commerce & Retail Hub"
        description="Explore 100+ in-depth guides, operational playbooks, and investor intelligence on local commerce, merchant digitalization, and retail technology in India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search & Category Filter Header */}
        <div className="mb-10 space-y-6">
          {/* Search Form */}
          <form action="/blog" method="GET" className="flex gap-2">
            {category && category !== "All" && (
              <input type="hidden" name="category" value={category} />
            )}
            <div className="relative w-full">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Search across 100+ articles (e.g. Kirana, Investor, Yavatmal, AI, ONDC)..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600/20"
            >
              Search
            </button>
            {(q || (category && category !== "All")) && (
              <Link
                href="/blog"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Reset
              </Link>
            )}
          </form>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">
              Categories:
            </span>
            {blogCategories.map((cat) => {
              const isActive =
                category.toLowerCase() === cat.toLowerCase() ||
                (!category && cat === "All");
              const targetUrl =
                cat === "All"
                  ? `/blog${q ? `?q=${encodeURIComponent(q)}` : ""}`
                  : `/blog?category=${encodeURIComponent(cat)}${
                      q ? `&q=${encodeURIComponent(q)}` : ""
                    }`;

              return (
                <Link
                  key={cat}
                  href={targetUrl}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <p>
            Showing <span className="font-semibold text-slate-900">{totalPosts}</span>{" "}
            total articles {category !== "All" && `in ${category}`}
            {q && ` matching "${q}"`}
          </p>
          <p>
            Page <span className="font-semibold text-slate-900">{validPage}</span> of{" "}
            <span className="font-semibold text-slate-900">{totalPages}</span>
          </p>
        </div>

        {/* Article Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <BlogPostGrid posts={paginatedPosts} />

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6"
              >
                <div>
                  <p className="text-sm text-slate-500">
                    Showing{" "}
                    <span className="font-semibold text-slate-900">
                      {startIndex + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-slate-900">
                      {Math.min(startIndex + postsPerPage, totalPosts)}
                    </span>{" "}
                    of <span className="font-semibold text-slate-900">{totalPosts}</span>{" "}
                    articles
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  {validPage > 1 && (
                    <Link
                      href={`/blog?page=${validPage - 1}${
                        category !== "All"
                          ? `&category=${encodeURIComponent(category)}`
                          : ""
                      }${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                      className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      ← Previous
                    </Link>
                  )}

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => {
                      return (
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - validPage) <= 2
                      );
                    })
                    .map((p, index, array) => {
                      const prev = array[index - 1];
                      const showEllipsis = prev && p - prev > 1;

                      return (
                        <span key={p} className="flex items-center">
                          {showEllipsis && (
                            <span className="px-2 text-xs text-slate-400">...</span>
                          )}
                          <Link
                            href={`/blog?page=${p}${
                              category !== "All"
                                ? `&category=${encodeURIComponent(category)}`
                                : ""
                            }${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                            className={`min-w-[32px] rounded-lg px-2.5 py-2 text-center text-xs font-bold transition-all ${
                              p === validPage
                                ? "bg-violet-600 text-white shadow-sm"
                                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-violet-700"
                            }`}
                          >
                            {p}
                          </Link>
                        </span>
                      );
                    })}

                  {validPage < totalPages && (
                    <Link
                      href={`/blog?page=${validPage + 1}${
                        category !== "All"
                          ? `&category=${encodeURIComponent(category)}`
                          : ""
                      }${q ? `&q=${encodeURIComponent(q)}` : ""}`}
                      className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              </nav>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
            <p className="text-base font-semibold text-slate-700">
              No articles match your query {q ? `"${q}"` : ""}{" "}
              {category !== "All" ? `in ${category}` : ""}.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try searching for &quot;kirana&quot;, &quot;investor&quot;, &quot;Maharashtra&quot;, or &quot;AI&quot;.
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-block rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-violet-700"
            >
              Clear filters and view all 100+ articles
            </Link>
          </div>
        )}
      </section>

      <CTA
        title="Looking to Partner with FirstMartt?"
        description="Whether you are a merchant digitizing your store, an angel investor exploring retail tech, or a delivery partner, connect with our team."
        primaryHref="/investment"
        primaryLabel="Investment Opportunity"
        secondaryHref="/contact"
        secondaryLabel="Contact Our Team"
      />
    </>
  );
}
