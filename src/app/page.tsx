import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import {
  BlogPreviewSection,
  FeaturesSection,
  InvestmentSection,
  StatsBar,
} from "@/components/home/AnimatedSections";
import { HeroSection } from "@/components/home/HeroSection";
import { localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <HeroSection />
      <CTA />
      <StatsBar />
      <FeaturesSection />
      <InvestmentSection />
      <BlogPreviewSection />
      <CTA
        title="Ready to Connect?"
        description="Whether you're an investor, merchant, or future team member — we'd love to hear from you."
      />
    </>
  );
}
