"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  "Pre-Seed Stage",
  "15-Min Delivery",
  "AI-Powered Platform",
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: easePremium },
    },
  };

  const MotionWrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <section className="premium-mesh relative overflow-hidden border-b border-violet-100/80 bg-gradient-to-b from-white via-violet-50/30 to-white">
      <FloatingOrbs />
      <div className="premium-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <MotionWrapper
          className="text-center"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            animate: "visible",
            variants: container,
          })}
        >
          {prefersReducedMotion ? (
            <>
              <HeroBadge />
              <HeroTitle />
              <HeroDescription />
              <HeroButtons />
              <TrustPoints />
            </>
          ) : (
            <>
              <motion.div variants={item}>
                <HeroBadge />
              </motion.div>
              <motion.div variants={item}>
                <HeroTitle />
              </motion.div>
              <motion.div variants={item}>
                <HeroDescription />
              </motion.div>
              <motion.div variants={item}>
                <HeroButtons />
              </motion.div>
              <motion.div variants={item}>
                <TrustPoints />
              </motion.div>
            </>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}

function HeroBadge() {
  return (
    <p className="premium-eyebrow mx-auto w-fit">
      Indian Startup · Seeking Investment
    </p>
  );
}

function HeroTitle() {
  return (
    <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
      <span className="premium-gradient-text">{siteConfig.name}</span>
      <span className="mt-2 block text-slate-900">
        India&apos;s Next-Gen Local Commerce Platform
      </span>
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
      {siteConfig.description} Empowering neighbourhood merchants with 15-minute delivery,
      AI-driven tools, and a premium digital marketplace experience.
    </p>
  );
}

function HeroButtons() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      >
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </motion.div>
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      >
        <Link href="/investment" className="btn-secondary">
          Investment Opportunity
        </Link>
      </motion.div>
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      >
        <Link href="/solutions" className="btn-secondary">
          Explore Solutions
        </Link>
      </motion.div>
    </div>
  );
}

function TrustPoints() {
  return (
    <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
      {trustPoints.map((point) => (
        <li
          key={point}
          className="rounded-full border border-violet-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm"
        >
          {point}
        </li>
      ))}
    </ul>
  );
}
