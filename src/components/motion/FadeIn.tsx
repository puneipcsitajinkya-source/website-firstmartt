"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants = direction === "up" ? fadeUp : { hidden: { opacity: 0 }, visible: fadeUp.visible(delay) };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={variants}
    >
      {children}
    </Component>
  );
}
