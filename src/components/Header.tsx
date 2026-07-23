"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { easePremium } from "@/lib/motion";
import { navLinks } from "@/lib/site-config";

export function Header() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <motion.header
      className="premium-glass sticky top-0 z-50 border-b border-violet-100/70"
      initial={prefersReducedMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easePremium }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo size="sm" className="min-w-0 max-w-[50vw] shrink sm:max-w-none" />

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: easePremium }}
            >
              <Link
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-violet-50/80 hover:text-violet-800"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-3.5 right-3.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-secondary hidden px-3 py-2 text-sm lg:inline-flex xl:px-4"
          >
            Get in Touch
          </Link>
          <Link href="/investment" className="btn-primary hidden px-3 py-2 text-sm sm:inline-flex xl:px-4">
            Invest
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-200/80 text-slate-700 transition hover:bg-violet-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-violet-100/60 bg-white/95 px-4 py-4 backdrop-blur-lg lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-1 gap-2 border-t border-violet-100/60 pt-4 sm:grid-cols-2">
            <Link
              href="/contact"
              className="btn-secondary w-full justify-center py-3 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
            <Link
              href="/investment"
              className="btn-primary w-full justify-center py-3 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Invest
            </Link>
          </div>
        </nav>
      )}
    </motion.header>
  );
}
