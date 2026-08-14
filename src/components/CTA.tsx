"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { easePremium } from "@/lib/motion";

type CTAProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTA({
  title = "Partner with FirstMartt",
  description = "Join us in building India's hyperlocal commerce future. Connect with our team for investment, partnerships, or careers.",
  primaryHref = "/contact",
  primaryLabel = "Get in Touch",
  secondaryHref = "/investment",
  secondaryLabel = "Investment Opportunity",
}: CTAProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-[#1a1025] to-violet-900 py-16">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(124,58,237,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(167,139,250,0.2) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-violet-200/80">{description}</p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.25, ease: easePremium }}
          >
            <Link
              href={primaryHref}
              className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/50 transition hover:from-violet-400 hover:to-violet-500"
            >
              {primaryLabel}
            </Link>
          </motion.div>
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.25, ease: easePremium }}
          >
            <Link
              href={secondaryHref}
              className="inline-block rounded-lg border border-violet-400/40 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-300 hover:bg-violet-900/30"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
