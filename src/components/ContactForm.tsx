"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneValue) {
      setSubmitStatus({ type: "error", message: "Mobile number is required." });
      return;
    }
    setSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          countryCode: "", // Captured inside the formatted mobile string
          mobile: phoneValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setPhoneValue("");
    } catch (err: any) {
      setSubmitStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
    >
      {submitStatus.type && (
        <div
          className={`rounded-lg p-4 text-sm font-semibold ${
            submitStatus.type === "success"
              ? "bg-emerald-50 border border-emerald-250 text-emerald-800"
              : "bg-rose-50 border border-rose-255 text-rose-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      {/* Country Code & Mobile Number Fields */}
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1">
          Mobile Number
        </label>
        <PhoneInput
          placeholder="Enter mobile number"
          value={phoneValue}
          onChange={setPhoneValue}
          defaultCountry="IN"
          numberInputProps={{
            id: "mobile",
            required: true,
          }}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        >
          <option value="Investment Inquiry">Investment Inquiry</option>
          <option value="Partnership">Partnership Inquiry</option>
          <option value="Merchant Onboarding">Merchant Onboarding</option>
          <option value="Careers">Careers / Hiring</option>
          <option value="General Inquiry">General / Feedback</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Describe your inquiry details..."
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:opacity-50"
      >
        {submitting ? "Sending Message..." : "Send Message"}
      </button>
      <p className="text-xs text-center text-slate-500">
        Forms are processed securely. Direct support is available via email/WhatsApp links.
      </p>
    </form>
  );
}
