"use client";

import { useState } from "react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs, faqCategories, type FAQCategory } from "@/lib/faq";

export function FAQTabs() {
  const [active, setActive] = useState<FAQCategory>("general");

  const filtered = faqs.filter((faq) => faq.category === active);

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-2">
        {faqCategories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActive(cat.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === cat.key
                ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                : "bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="mt-8">
        <FAQAccordion items={filtered} />
      </div>
    </div>
  );
}
