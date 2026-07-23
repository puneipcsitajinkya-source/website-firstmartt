"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cardHover } from "@/lib/motion";

const features = [
  {
    number: "01",
    title: "Hyperlocal Marketplace",
    description:
      "Connect neighbourhood merchants with nearby customers through a multi-vendor marketplace built for Indian cities.",
    href: "/why-firstmartt",
  },
  {
    number: "02",
    title: "AI-Powered Commerce",
    description:
      "Intelligent search, demand forecasting, and merchant tools that help local businesses compete in the digital economy.",
    href: "/solutions",
  },
  {
    number: "03",
    title: "Merchant-First Platform",
    description:
      "Empowering local stores with digital storefronts, inventory management, and customer engagement tools.",
    href: "/for-local-businesses",
  },
  {
    number: "04",
    title: "Investment Ready",
    description:
      "A scalable retail technology startup seeking angel investors, venture capital, and strategic partners in India.",
    href: "/investment",
  },
];

const stats = [
  { value: "15 Min", label: "Delivery Promise" },
  { value: "Hyperlocal", label: "Commerce Focus" },
  { value: "AI + Retail", label: "Technology Stack" },
  { value: "Pre-Seed", label: "Funding Stage" },
];

const blogPosts = [
  {
    slug: "future-of-hyperlocal-commerce-india",
    title: "The Future of Hyperlocal Commerce in India",
  },
  {
    slug: "startup-funding-guide-india",
    title: "Startup Funding Guide in India",
  },
  {
    slug: "building-indias-next-commerce-platform",
    title: "Building India's Next Commerce Platform",
  },
];

function AnimatedCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} initial="rest" whileHover="hover" variants={cardHover}>
      {children}
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="relative -mt-8 px-4 sm:px-6 lg:px-8">
      <Stagger className="premium-glass mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl shadow-xl shadow-violet-200/20 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StaggerItem
            key={stat.label}
            className={`bg-white/90 px-6 py-8 text-center ${index < stats.length - 1 ? "md:border-r md:border-violet-100" : ""}`}
          >
            <p className="font-display text-2xl font-bold text-violet-700 sm:text-3xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Platform"
            title="A Hyperlocal Marketplace for Modern India"
            description="FirstMartt is an ecommerce startup in India focused on retail technology and local business empowerment. Our platform enables merchants to sell online while serving their communities."
          />
        </FadeIn>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <StaggerItem key={feature.title} as="article">
              <AnimatedCard className="premium-card group h-full rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <span className="font-display inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 text-sm font-bold text-white shadow-md shadow-violet-300/40">
                    {feature.number}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{feature.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition hover:gap-2.5"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15} className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function InvestmentSection() {
  return (
    <section className="premium-mesh border-y border-violet-100/80 bg-gradient-to-b from-violet-50/40 via-white to-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="Investors"
            title="Startup Seeking Funding in India"
            description="We are actively engaging with angel investors, venture capital firms, startup incubators, and accelerators. FirstMartt offers a compelling startup investment opportunity in the fast-growing hyperlocal commerce sector."
          />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link
              href="/investment"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:gap-3 hover:text-violet-800"
            >
              Learn about our investment opportunity
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <AnimatedCard className="premium-card mt-10 max-w-3xl rounded-2xl p-8 sm:p-10">
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Why Invest in FirstMartt?
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Large addressable market in Indian local retail",
                "Scalable multi-vendor marketplace model",
                "AI-driven commerce technology stack",
                "Merchant-first approach with strong unit economics potential",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </FadeIn>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Insights"
            title="Latest Insights"
            description="Expert perspectives on hyperlocal commerce, startup funding, and retail technology."
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <StaggerItem key={post.slug}>
              <AnimatedCard>
                <Link
                  href={`/blog/${post.slug}`}
                  className="premium-card group block rounded-2xl p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                    Article {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold text-slate-900 group-hover:text-violet-700">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition group-hover:gap-3">
                    Read article
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2} className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:gap-3 hover:text-violet-800"
          >
            View all articles
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
