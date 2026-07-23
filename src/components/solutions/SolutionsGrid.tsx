"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cardHover } from "@/lib/motion";

type Solution = {
  title: string;
  description: string;
};

export function SolutionsGrid({ items }: { items: Solution[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((solution) => (
        <StaggerItem key={solution.title} as="article">
          <motion.article
            className="h-full rounded-xl border border-slate-200 p-6 transition-colors hover:border-violet-200 hover:shadow-md"
            initial="rest"
            whileHover={prefersReducedMotion ? "rest" : "hover"}
            variants={cardHover}
          >
            <h2 className="text-lg font-semibold text-slate-900">{solution.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{solution.description}</p>
          </motion.article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
