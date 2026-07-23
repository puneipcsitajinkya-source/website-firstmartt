"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easePremium },
    },
  };

  if (prefersReducedMotion) {
    return (
      <section className="border-b border-violet-100 bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{description}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-violet-100 bg-gradient-to-b from-violet-50 via-white to-white">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {breadcrumbs && (
          <motion.div variants={item}>
            <Breadcrumbs items={breadcrumbs} />
          </motion.div>
        )}
        <motion.h1
          className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          variants={item}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600"
          variants={item}
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-violet-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
