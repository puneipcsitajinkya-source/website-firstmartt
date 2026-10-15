"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { contactPhone } from "@/lib/contact";

interface TicketOption {
  amount: number;
  label: string;
  badge: string;
  roundPercentage: number;
  kiranasFunded: number;
  monthlyGmvImpact: string;
  seedValuationReturn: string;
  seriesAReturn: string;
  perks: string[];
}

const ticketOptions: TicketOption[] = [
  {
    amount: 250000,
    label: "₹2.5 Lakh",
    badge: "Angel Starter Ticket",
    roundPercentage: 5,
    kiranasFunded: 60,
    monthlyGmvImpact: "₹18 Lakhs / mo",
    seedValuationReturn: "₹7.5L - ₹10L (3x - 4x)",
    seriesAReturn: "₹20L - ₹30L (8x - 12x)",
    perks: [
      "Standard i-SAFE / CCPS pre-seed allocation",
      "Quarterly investor updates & metrics memo",
      "Access to FirstMartt Angel community",
      "DPIIT Angel Tax exemption eligibility",
    ],
  },
  {
    amount: 500000,
    label: "₹5.0 Lakh",
    badge: "Most Popular Angel Ticket",
    roundPercentage: 10,
    kiranasFunded: 125,
    monthlyGmvImpact: "₹38 Lakhs / mo",
    seedValuationReturn: "₹15L - ₹20L (3x - 4x)",
    seriesAReturn: "₹40L - ₹60L (8x - 12x)",
    perks: [
      "Priority allocation in ₹50L pre-seed tranche",
      "Bi-monthly executive calls with founder",
      "Product roadmap preview & beta feature testing",
      "Pro-rata rights in Seed / Pre-Series A round",
    ],
  },
  {
    amount: 1000000,
    label: "₹10 Lakh",
    badge: "Strategic Angel / Syndicate",
    roundPercentage: 20,
    kiranasFunded: 250,
    monthlyGmvImpact: "₹75 Lakhs / mo",
    seedValuationReturn: "₹30L - ₹40L (3x - 4x)",
    seriesAReturn: "₹80L - ₹1.2 Cr (8x - 12x)",
    perks: [
      "Direct monthly strategy check-in with Ajinkya",
      "Observer status on operational reviews",
      "Guaranteed pro-rata rights in upcoming Seed round",
      "Co-branding opportunities in startup press releases",
    ],
  },
  {
    amount: 2500000,
    label: "₹25 Lakh",
    badge: "Anchor Pre-Seed Lead (50% Round)",
    roundPercentage: 50,
    kiranasFunded: 600,
    monthlyGmvImpact: "₹1.8 Crore / mo",
    seedValuationReturn: "₹75L - ₹1.0 Cr (3x - 4x)",
    seriesAReturn: "₹2.0 Cr - ₹3.0 Cr (8x - 12x)",
    perks: [
      "Co-lead investor status for ₹50L pre-seed",
      "Advisory / Board Observer seat",
      "Right of First Refusal (ROFR) on future rounds",
      "Direct involvement in Maharashtra regional expansion",
    ],
  },
];

const comparisonData = [
  {
    metric: "Infrastructure Model",
    firstmartt: "Collaborative Merchant Mesh (Existing Kiranas)",
    quickCommerce: "Capital-Intensive Dark Stores (Warehouses)",
    advantage: "FirstMartt",
  },
  {
    metric: "Capex Per Store / Node",
    firstmartt: "₹0 (Zero warehouse setup capex)",
    quickCommerce: "₹35L – ₹50L per dark store fitout",
    advantage: "FirstMartt",
  },
  {
    metric: "Monthly Rent & Facility Burn",
    firstmartt: "₹0 (Merchants bear real estate)",
    quickCommerce: "₹2.0L – ₹4.0L/month per location",
    advantage: "FirstMartt",
  },
  {
    metric: "Inventory Risk & Waste",
    firstmartt: "0% (Merchant owns stock, zero spoilage risk)",
    quickCommerce: "3% – 8% perishables write-offs",
    advantage: "FirstMartt",
  },
  {
    metric: "Unit Economics (CM3)",
    firstmartt: "Positive on every order from Day 1",
    quickCommerce: "Heavy delivery & discount subsidy burn",
    advantage: "FirstMartt",
  },
  {
    metric: "Tier-2 / Tier-3 Bharat Fit",
    firstmartt: "Native design for Maharashtra & Tier-2/3 cities",
    quickCommerce: "Unviable capex outside high-density Tier-1",
    advantage: "FirstMartt",
  },
  {
    metric: "Local Merchant Sentiment",
    firstmartt: "Empowers 60M+ local Kirana merchants",
    quickCommerce: "Faces trade protests and regulatory scrutiny",
    advantage: "FirstMartt",
  },
];

const fundDeployment = [
  {
    percentage: "40%",
    amount: "₹20,00,000",
    category: "Technology Platform & AI",
    description:
      "Merchant Android POS app, customer iOS/Android apps, real-time dispatch engine, automated Kirana catalog scanner, and WhatsApp commerce bot.",
    icon: "💻",
    color: "from-violet-600 to-indigo-600",
  },
  {
    percentage: "25%",
    amount: "₹12,50,000",
    category: "Merchant Acquisition & Onboarding",
    description:
      "Field activation agents in Maharashtra (Yavatmal, Nagpur cluster), merchant training kits, digital barcode onboarding, and merchant retention incentives.",
    icon: "🏪",
    color: "from-blue-600 to-cyan-600",
  },
  {
    percentage: "20%",
    amount: "₹10,00,000",
    category: "Customer Acquisition & Local Marketing",
    description:
      "Hyperlocal BTL marketing, merchant co-branded store signage, customer referral loops, introductory discounts, and neighbourhood community campaigns.",
    icon: "🚀",
    color: "from-emerald-600 to-teal-600",
  },
  {
    percentage: "15%",
    amount: "₹7,50,000",
    category: "Logistics Fleet & Operational Reserves",
    description:
      "Shared delivery partner onboarding, safety equipment, legal/compliance filings, regulatory registrations, and working capital reserve.",
    icon: "🛵",
    color: "from-amber-600 to-orange-600",
  },
];

export function IndianInvestorSuite() {
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(1); // Default to ₹5.0 Lakh
  const [activeTab, setActiveTab] = useState<"calculator" | "comparison" | "deployment" | "perks">("calculator");
  
  // Pitch deck form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEntity, setFormEntity] = useState("Angel Investor");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const selectedTicket = ticketOptions[selectedTicketIndex];

  const handleDeckRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone || !formEmail || !formName) {
      setFormError("Please fill in your name, email, and phone number.");
      return;
    }

    setFormSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          countryCode: "+91",
          mobile: formPhone,
          subject: `Investor Deck Request [Ticket: ${selectedTicket.label}] from ${formEntity}`,
          message: `Investor Interest from ${formName} (${formEntity}). Interested in ${selectedTicket.label} ticket (${selectedTicket.roundPercentage}% of ₹50L pre-seed round). Please share pitch deck and financial model.`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request. Please WhatsApp us directly.");
      }

      setFormSuccess(true);
    } catch (err: any) {
      setFormError(err.message || "Failed to submit. Please contact founder directly via WhatsApp.");
    } finally {
      setFormSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ajinkya, I am an Indian investor interested in FirstMartt's ₹50 Lakh Pre-Seed round (${selectedTicket.label} ticket). I'd like to review your pitch deck and schedule a discussion.`
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white via-violet-50/30 to-white p-6 shadow-2xl shadow-violet-500/10 sm:p-10 lg:p-12">
      {/* Glow highlight */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />

      {/* Header Badge & Title */}
      <div className="relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-100/80 px-4 py-1.5 text-xs font-semibold text-violet-800 shadow-sm backdrop-blur">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>🇮🇳 Pre-Seed Round Open: ₹50 Lakhs ($60,000 USD)</span>
        </div>

        <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Empowering Indian Angels & HNIs to Back{" "}
          <span className="premium-gradient-text">Bharat&apos;s Retail Future</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Zero dark stores. Positive unit economics from day one. Back the platform digitizing 60 million+ 
          neighbourhood Kirana stores across Maharashtra and India.
        </p>

        {/* Quick Highlights Bar */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <span className="text-xs font-medium text-slate-500">Target Raise</span>
            <p className="font-display mt-1 text-2xl font-bold text-violet-700">₹50 Lakhs</p>
            <span className="text-[11px] text-emerald-600 font-semibold">Pre-Seed Stage</span>
          </div>
          <div className="rounded-xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <span className="text-xs font-medium text-slate-500">Tax Advantage</span>
            <p className="font-display mt-1 text-2xl font-bold text-slate-900">100% Exempt</p>
            <span className="text-[11px] text-violet-600 font-medium">Sec 56(2)(viib) / DPIIT</span>
          </div>
          <div className="rounded-xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <span className="text-xs font-medium text-slate-500">Initial Market</span>
            <p className="font-display mt-1 text-2xl font-bold text-slate-900">Maharashtra</p>
            <span className="text-[11px] text-slate-500">Tier-2/3 Retail Focus</span>
          </div>
          <div className="rounded-xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <span className="text-xs font-medium text-slate-500">Capex Model</span>
            <p className="font-display mt-1 text-2xl font-bold text-emerald-600">₹0 Dark Stores</p>
            <span className="text-[11px] text-slate-500">Asset-Light Network</span>
          </div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-violet-100 pb-4">
        {[
          { id: "calculator", label: "🧮 Interactive ROI Calculator" },
          { id: "comparison", label: "⚡ FirstMartt vs Dark Stores (QC)" },
          { id: "deployment", label: "📊 ₹50L Fund Deployment" },
          { id: "perks", label: "🛡️ Indian Angel Tax & Benefits" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-violet-700 text-white shadow-md shadow-violet-500/20"
                : "bg-white/80 text-slate-700 hover:bg-violet-100/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Interactive Pre-Seed Calculator */}
      {activeTab === "calculator" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left: Ticket Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Select Your Desired Investment Ticket
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Choose a ticket size to simulate round allocation, operational milestone unlocks, and target return scenarios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {ticketOptions.map((opt, idx) => (
                <button
                  key={opt.label}
                  onClick={() => setSelectedTicketIndex(idx)}
                  className={`cursor-pointer rounded-2xl border p-4 text-left transition-all ${
                    selectedTicketIndex === idx
                      ? "border-violet-600 bg-violet-50/80 shadow-md ring-2 ring-violet-500"
                      : "border-slate-200 bg-white hover:border-violet-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-slate-900">
                      {opt.label}
                    </span>
                    <span
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        selectedTicketIndex === idx
                          ? "border-violet-600 bg-violet-600"
                          : "border-slate-300"
                      }`}
                    >
                      {selectedTicketIndex === idx && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </div>
                  <span className="mt-1 inline-block text-xs font-semibold text-violet-700">
                    {opt.badge}
                  </span>
                  <div className="mt-3 text-xs text-slate-500">
                    Allocation: <strong className="text-slate-800">{opt.roundPercentage}% of round</strong>
                  </div>
                </button>
              ))}
            </div>

            {/* Investor Perks for Selected Ticket */}
            <div className="rounded-2xl border border-violet-200 bg-white/90 p-5 shadow-sm">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-violet-900">
                Investor Privileges for {selectedTicket.label} Ticket:
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {selectedTicket.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Simulated Returns & Operational Impact */}
          <div className="lg:col-span-6 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-violet-300">Selected Ticket</span>
                <p className="font-display text-3xl font-extrabold text-white">{selectedTicket.label}</p>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-emerald-400">Round Share</span>
                <p className="font-display text-2xl font-bold text-white">{selectedTicket.roundPercentage}%</p>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4 backdrop-blur border border-white/5">
                <span className="text-xs text-violet-200">Kiranas Digitized in MH</span>
                <p className="font-display mt-1 text-2xl font-bold text-emerald-400">
                  {selectedTicket.kiranasFunded}+
                </p>
                <span className="text-[11px] text-slate-400">Direct operational impact</span>
              </div>
              <div className="rounded-xl bg-white/5 p-4 backdrop-blur border border-white/5">
                <span className="text-xs text-violet-200">Monthly GMV Run-rate</span>
                <p className="font-display mt-1 text-2xl font-bold text-violet-300">
                  {selectedTicket.monthlyGmvImpact}
                </p>
                <span className="text-[11px] text-slate-400">At pilot maturity</span>
              </div>
            </div>

            {/* Projected Scenarios */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                Target Return Scenarios (Illustrative)
              </h4>

              <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm">
                <div>
                  <span className="font-semibold text-white">Seed Round (Next 12–18 mos)</span>
                  <span className="block text-[11px] text-slate-400">Target ₹15 Cr Valuation</span>
                </div>
                <span className="font-bold text-emerald-400">{selectedTicket.seedValuationReturn}</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-sm">
                <div>
                  <span className="font-semibold text-white">Series A (24–36 mos)</span>
                  <span className="block text-[11px] text-slate-400">Target ₹40 Cr+ Valuation</span>
                </div>
                <span className="font-bold text-emerald-400">{selectedTicket.seriesAReturn}</span>
              </div>
            </div>

            {/* Founder Direct Connect CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.contact.phone.whatsappId}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-600 shadow-lg shadow-emerald-500/25"
              >
                <span>💬 WhatsApp Founder ({selectedTicket.label})</span>
              </a>
              <a
                href={`tel:${contactPhone.e164}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span>📞 Call +91 8261807358</span>
              </a>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-400">
              Direct line to founder Ajinkya · Pitch deck and financial model shared within 1 hour
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Comparison - FirstMartt vs Dark Stores */}
      {activeTab === "comparison" && (
        <div className="mt-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Why Indian Angels Choose Merchant-Mesh Over Quick Commerce Burn
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Dark store quick commerce burns crores on real estate, inventory spoilage, and discount subsidies.
              FirstMartt takes an asset-light, capital-efficient route that empowers local retailers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-violet-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-violet-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Strategic Dimension</th>
                  <th className="p-4 font-bold text-violet-200 bg-violet-800/80">
                    🚀 FirstMartt (Collaborative)
                  </th>
                  <th className="p-4 font-semibold text-slate-300">
                    🏢 Quick Commerce (Blinkit / Zepto)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-violet-50/50 transition">
                    <td className="p-4 font-semibold text-slate-900">{row.metric}</td>
                    <td className="p-4 font-medium text-emerald-700 bg-violet-50/30">
                      <span className="inline-block mr-1.5">✅</span>
                      {row.firstmartt}
                    </td>
                    <td className="p-4 text-slate-600">
                      <span className="inline-block mr-1.5 text-rose-500">❌</span>
                      {row.quickCommerce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: ₹50L Fund Deployment */}
      {activeTab === "deployment" && (
        <div className="mt-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Clear & Disciplined Use of ₹50 Lakh Pre-Seed Funds
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Every rupee is engineered to build verifiable traction, onboard revenue-generating merchants,
              and reach milestone profitability in Maharashtra.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fundDeployment.map((item) => (
              <div
                key={item.category}
                className="premium-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-display text-2xl font-extrabold text-violet-700">
                      {item.percentage}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-base font-bold text-slate-900">
                    {item.amount}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-violet-900">
                    {item.category}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Angel Tax & Benefits */}
      {activeTab === "perks" && (
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="premium-card rounded-2xl p-6 border-l-4 border-l-emerald-500">
            <span className="text-3xl">🛡️</span>
            <h4 className="font-display mt-3 text-lg font-bold text-slate-900">
              100% Angel Tax Exemption
            </h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Section 56(2)(viib) of the Income Tax Act exemption for DPIIT registered startups. 
              Zero tax liability on premium share issuances for resident Indian investors.
            </p>
          </div>
          <div className="premium-card rounded-2xl p-6 border-l-4 border-l-violet-500">
            <span className="text-3xl">📜</span>
            <h4 className="font-display mt-3 text-lg font-bold text-slate-900">
              Clean i-SAFE / CCPS Terms
            </h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Standardized India-friendly convertible equity agreements (i-SAFE / CCPS), 
              ensuring clear legal title, straightforward cap table, and easy rollover into Seed round.
            </p>
          </div>
          <div className="premium-card rounded-2xl p-6 border-l-4 border-l-indigo-500">
            <span className="text-3xl">🏛️</span>
            <h4 className="font-display mt-3 text-lg font-bold text-slate-900">
              Section 80-IAC Holiday
            </h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              3 consecutive years 100% corporate tax holiday under Startup India initiative, 
              maximizing retained earnings and enterprise value compounding.
            </p>
          </div>
        </div>
      )}

      {/* Inline Investor Pitch Deck Request Form */}
      <div className="mt-12 rounded-2xl border border-violet-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
            Confidential Investor Memo
          </span>
          <h3 className="font-display mt-2 text-2xl font-bold text-slate-900">
            Request Pitch Deck, Financial Model & Cap Table
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            We share our full investor packet with accredited Indian angels, HNIs, family offices, and VCs.
          </p>
        </div>

        {formSuccess ? (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800">
            <span className="text-3xl">🎉</span>
            <h4 className="font-display mt-2 text-lg font-bold">Request Received!</h4>
            <p className="mt-1 text-sm">
              Thank you, {formName}. Founder Ajinkya will send the FirstMartt Investor Deck and 
              financial projections to <strong>{formEmail}</strong> within 1 hour.
            </p>
            <div className="mt-4">
              <a
                href={`https://wa.me/${siteConfig.contact.phone.whatsappId}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
              >
                💬 Need it immediately? Ping Ajinkya on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDeckRequest} className="mt-6 max-w-2xl mx-auto space-y-4">
            {formError && (
              <div className="rounded-lg bg-rose-50 p-3 text-xs text-rose-700 border border-rose-200">
                {formError}
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@angelnetwork.in"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Mobile / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">Investor Category</label>
                <select
                  value={formEntity}
                  onChange={(e) => setFormEntity(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-600 focus:outline-none bg-white"
                >
                  <option value="Angel Investor">Angel Investor (Individual)</option>
                  <option value="Family Office / HNI">Family Office / HNI</option>
                  <option value="Angel Syndicate Lead">Angel Syndicate / Club</option>
                  <option value="Micro-VC / Venture Fund">Micro-VC / Venture Fund</option>
                  <option value="NRI Investor">NRI Investor (Gulf / US / UK)</option>
                  <option value="Strategic Retail CXO">Retail Industry CXO / Founder</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={formSubmitting}
                className="cursor-pointer w-full rounded-xl bg-violet-700 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-800 disabled:opacity-50"
              >
                {formSubmitting ? "Sending Request..." : `Request Investor Deck for ${selectedTicket.label} Ticket →`}
              </button>
            </div>
            <p className="text-center text-[11px] text-slate-500">
              🔒 Information held under strict confidentiality. No spam. Founder responds personally.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
