"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

/* ═══════════════════════════════════════════════════════════
   3-D BACKGROUND LAYER — sits behind all text
   Professional rotating rings, floating shapes, glowing orbs
═══════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════
   HERO SECTION — Text on top, 3-D background behind
═══════════════════════════════════════════════════════════ */
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
    <section
      className="relative overflow-hidden border-b"
      style={{
        background:
          "linear-gradient(175deg, #ffffff 0%, #f5f3ff 18%, #e0f2fe 42%, #f0f9ff 62%, #faf5ff 82%, #ffffff 100%)",
        borderColor: "rgba(56,189,248,0.2)",
        minHeight: "620px",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)",
        }}
      />


      {/* Text content — ON TOP */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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
              <motion.div variants={item}><HeroBadge /></motion.div>
              <motion.div variants={item}><HeroTitle /></motion.div>
              <motion.div variants={item}><HeroDescription /></motion.div>
              <motion.div variants={item}><HeroButtons /></motion.div>
              <motion.div variants={item}><TrustPoints /></motion.div>
            </>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}

/* ── Sub-components (unchanged text/layout) ──────────────── */

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
      {[
        { icon: "⚡", text: "Pre-Seed Stage" },
        { icon: "🚀", text: "15-Min Delivery" },
        { icon: "🧠", text: "AI-Powered Platform" },
      ].map((point) => (
        <li
          key={point.text}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm"
          style={{
            border: "1px solid rgba(56,189,248,0.3)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(240,249,255,0.9))",
          }}
        >
          <span>{point.icon}</span>
          {point.text}
        </li>
      ))}
    </ul>
  );
}
