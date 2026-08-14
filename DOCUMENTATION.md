# FirstMartt Platform Documentation

A comprehensive technical, architectural, and operational documentation for the **FirstMartt** web platform.

---

## 📖 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Repository Architecture](#3-repository-architecture)
4. [Routing & Page Hierarchy](#4-routing--page-hierarchy)
5. [Component Architecture](#5-component-architecture)
6. [API Endpoints & Email System](#6-api-endpoints--email-system)
7. [SEO, Open Graph & Structured Data (JSON-LD)](#7-seo-open-graph--structured-data-json-ld)
8. [Design System & Styling Guide](#8-design-system--styling-guide)
9. [Environment Configuration & Variables](#9-environment-configuration--variables)
10. [Local Development & Build Scripts](#10-local-development--build-scripts)
11. [Deployment & Production Guidelines](#11-deployment--production-guidelines)

---

## 1. Project Overview

**FirstMartt** is India’s Hyperlocal Multi-Vendor Digital Commerce platform designed to bridge local merchants, customers, and delivery partners into a unified digital marketplace ecosystem.

- **Brand Name**: FirstMartt
- **Tagline**: India's Hyperlocal Commerce Platform for Local Businesses
- **Base URL**: `https://www.firstmartt.com`
- **Contact Email**: `firstmartsindia@gmail.com`
- **Headquarters / Registered Region**: Yavatmal, Maharashtra, India (PIN: 445301)

---

## 2. Tech Stack & Dependencies

### Core Framework & Runtime
- **Next.js 16.2 (App Router)**: Server-side rendering (SSR), Static Site Generation (SSG), and API Route handlers.
- **React 19**: Modern UI rendering engine with Server and Client Components.
- **TypeScript 5**: Static type checking and interface contracts across pages and utilities.

### Styling & UI Libraries
- **Tailwind CSS v4 (`@tailwindcss/postcss`)**: Utility-first CSS engine with CSS-variable-based theme tokens.
- **Framer Motion (`framer-motion` ^12)**: Smooth micro-interactions, scroll-triggered reveals, and transitions.
- **React Phone Number Input (`react-phone-number-input`)**: International and national mobile input formatting with country flags and validation.

### Backend & Tooling
- **Nodemailer (`nodemailer` ^9)**: SMTP-based email dispatch for the contact and inquiry pipelines.
- **ESLint 9**: Linting and coding standard enforcement.

---

## 3. Repository Architecture

```plaintext
c:\website\
├── public/                     # Static files (SVGs, favicons, logos, robots assets)
├── src/
│   ├── app/                    # Next.js App Router (Pages, layouts, metadata & APIs)
│   │   ├── (marketing)/        # All public marketing and informational routes
│   │   │   ├── about/          # Company history, team and values
│   │   │   ├── business-model/ # Revenue streams and ecosystem mechanics
│   │   │   ├── careers/        # Open job positions and hiring philosophy
│   │   │   ├── contact/        # Contact details & inquiry form
│   │   │   ├── faq/            # FAQ accordion categorized by user personas
│   │   │   ├── for-customers/  # Benefits for everyday shoppers
│   │   │   ├── for-delivery-partners/ # Rider onboarding & payouts
│   │   │   ├── for-local-businesses/  # Merchant onboarding & seller tools
│   │   │   ├── founder/        # Founder profile & strategic memo
│   │   │   ├── investment/     # Investor deck, pre-seed metrics & pitch
│   │   │   ├── locations/      # Geographic availability & rollouts
│   │   │   ├── mission/        # Mission manifesto
│   │   │   ├── privacy/        # Data privacy & GDPR/IT Act compliance
│   │   │   ├── problem/        # Deep dive into retail fragmentation in India
│   │   │   ├── roadmap/        # Product and business milestone roadmap
│   │   │   ├── solutions/      # Comprehensive feature overview
│   │   │   ├── terms/          # Terms of Service
│   │   │   ├── vision/         # 5-year outlook & ecosystem roadmap
│   │   │   └── why-firstmartt/ # Competitive comparison table
│   │   ├── blog/               # Dynamic blog system
│   │   │   ├── page.tsx        # Blog index with categories & search
│   │   │   └── [slug]/         # Individual article reading view
│   │   ├── api/                # API Route handlers
│   │   │   └── contact/        # POST /api/contact email submission handler
│   │   ├── feed.xml/           # Dynamic RSS / Atom feed generator
│   │   ├── global/             # Global layout extensions
│   │   ├── apple-icon.tsx      # Dynamic Apple Touch Icon generator
│   │   ├── favicon.ico         # App Favicon
│   │   ├── globals.css         # Global styling, tokens, and custom scrollbars
│   │   ├── icon.tsx            # Dynamic Next.js SVG/PNG App Icon
│   │   ├── layout.tsx          # Root HTML layout with Navigation, Footer & JSON-LD
│   │   ├── manifest.ts         # PWA Web Manifest (installable web app)
│   │   ├── not-found.tsx       # Custom 404 Error page
│   │   ├── opengraph-image.tsx # Edge dynamic OG Image generator
│   │   ├── page.tsx            # High-conversion Homepage
│   │   ├── robots.ts           # Search engine crawling rules (robots.txt)
│   │   └── sitemap.ts          # Automated XML Sitemap generator
│   ├── components/             # Reusable React UI Components
│   │   ├── blog/               # Blog cards, reading progress, and TOC components
│   │   ├── home/               # Homepage hero, stats counter, trust badges, testimonials
│   │   ├── media/              # Responsive image cards and loaders
│   │   ├── motion/             # Framer motion wrapper components
│   │   ├── solutions/          # Solution grids and interactive tabs
│   │   ├── ContactForm.tsx     # Client-side contact form with validation & state
│   │   ├── CTA.tsx             # Universal high-conversion call-to-action block
│   │   ├── FAQAccordion.tsx    # Expandable animated FAQ component
│   │   ├── Footer.tsx          # Footer with category navigation and social links
│   │   ├── Header.tsx          # Responsive sticky navigation bar with mobile drawer
│   │   ├── JsonLd.tsx          # Injects JSON-LD structured data in <script> tags
│   │   ├── Logo.tsx            # SVG vector logo component
│   │   ├── PageHeader.tsx      # Standardized hero banner for subpages
│   │   ├── Prose.tsx           # Typography container for legal & markdown content
│   │   ├── SectionHeader.tsx   # Reusable section heading + subtitle + badge
│   │   └── WhatsAppButton.tsx  # Floating quick-chat WhatsApp widget
│   └── lib/                    # Shared Data Models, SEO Engines & Configurations
│       ├── blog.ts             # Static blog data, category filters, reading time
│       ├── contact.ts          # Contact methods, office coordinates & addresses
│       ├── faq.ts              # FAQ data source organized by persona
│       ├── locations.ts        # City directory and serviceable area data
│       ├── motion.ts           # Framer motion animation variants and transitions
│       ├── schema.ts           # Schema.org JSON-LD generation functions
│       ├── seo.ts              # Metadata generation helper functions
│       └── site-config.ts      # Single source of truth for site-wide configuration
├── .env.example                # Sample environment variables template
├── package.json                # Project dependencies and script declarations
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
└── tsconfig.json               # TypeScript compiler options
```

---

## 4. Routing & Page Hierarchy

| Route Path | File Location | Purpose | Key Content / Features |
| :--- | :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Homepage | Hero section, 3-pillar ecosystem, metrics, merchant onboarding CTA. |
| `/about` | `src/app/about/page.tsx` | About FirstMartt | Founding story, values, executive summary, company milestones. |
| `/why-firstmartt` | `src/app/why-firstmartt/page.tsx` | Value Proposition | Direct comparison vs legacy aggregators (commissions, local support). |
| `/solutions` | `src/app/solutions/page.tsx` | Solutions Suite | Multi-vendor dashboard, inventory management, instant hyperlocal delivery. |
| `/for-local-businesses` | `src/app/for-local-businesses/page.tsx` | Merchant Portal | Digital catalog setup, same-day settlement, zero-barrier onboarding. |
| `/for-customers` | `src/app/for-customers/page.tsx` | Customer Portal | Instant 15-30 min delivery, local shop discovery, live tracking. |
| `/for-delivery-partners` | `src/app/for-delivery-partners/page.tsx` | Driver Portal | Flexible hours, fair payouts, insurance, safety benefits. |
| `/business-model` | `src/app/business-model/page.tsx` | Monetization | Revenue model (micro-commissions, premium subscriptions, advertising). |
| `/investment` | `src/app/investment/page.tsx` | Investor Relations | Pre-seed deck request, market size (TAM/SAM/SOM), unit economics. |
| `/founder` | `src/app/founder/page.tsx` | Founder Briefing | Founder vision, execution strategy, and direct contact. |
| `/roadmap` | `src/app/roadmap/page.tsx` | Product Roadmap | Phase 1 (Hyperlocal Rollout) through Phase 4 (AI Demand Forecasting). |
| `/blog` | `src/app/blog/page.tsx` | Blog Index | Searchable & filterable articles on commerce, retail, and tech. |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Article Detail | Complete article content, reading progress bar, table of contents, author box. |
| `/contact` | `src/app/contact/page.tsx` | Contact Us | Contact form, phone, WhatsApp direct link, email, office map details. |
| `/faq` | `src/app/faq/page.tsx` | FAQ | Grouped FAQs for customers, merchants, riders, and investors. |
| `/locations` | `src/app/locations/page.tsx` | Service Areas | Coverage areas, upcoming regional launch hubs. |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy Policy | Data protection policy, user data handling, cookie disclosures. |
| `/terms` | `src/app/terms/page.tsx` | Terms of Service | User agreement, merchant terms, delivery liability. |

---

## 5. Component Architecture

### Core Layout Components
- **`Header`** (`src/components/Header.tsx`):
  - Sticky glassmorphic navigation bar with backdrop blur.
  - Interactive desktop links with active state indicator.
  - Full-screen animated mobile menu with CTA buttons.
- **`Footer`** (`src/components/Footer.tsx`):
  - 4-column structured footer (Company, Platform, Investors, Legal).
  - Newsletter / inquiry quick actions and copyright declarations.
- **`PageHeader`** (`src/components/PageHeader.tsx`):
  - Uniform banner for all inner marketing pages with breadcrumb support, title, subtitle, and primary actions.

### Interactive Components
- **`ContactForm`** (`src/components/ContactForm.tsx`):
  - Handles client-side submission with React `useState`.
  - Integrates `react-phone-number-input` for validated international phone numbers.
  - Visual loading spinner, inline validation, and success/error status messages.
- **`FAQAccordion`** (`src/components/FAQAccordion.tsx`):
  - Expandable items with Framer Motion layout animation and accessible ARIA attributes.
- **`WhatsAppButton`** (`src/components/WhatsAppButton.tsx`):
  - Fixed floating action button linking directly to `wa.me/918261807358` with pre-filled greeting text.

---

## 6. API Endpoints & Email System

### Contact Submission Endpoint
- **Path**: `src/app/api/contact/route.ts`
- **Method**: `POST`
- **Request Headers**: `Content-Type: application/json`

#### Request Payload:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "countryCode": "+91",
  "mobile": "8261807358",
  "subject": "Merchant Partnership Inquiry",
  "message": "We would like to onboard 15 stores onto the FirstMartt platform."
}
```

#### Response (Success):
```json
{
  "success": true
}
```

#### Response (Validation Error):
```json
{
  "error": "Name, email, mobile number, and message are required."
}
```

#### Local Development Graceful Fallback:
If `SMTP_USER` and `SMTP_PASS` are omitted during development, the API logs the payload to the terminal and returns `{ "success": true, "mocked": true }` so testing is never blocked.

---

## 7. SEO, Open Graph & Structured Data (JSON-LD)

### Structured Data (`src/lib/schema.ts`)
The application automatically generates Schema.org valid JSON-LD schemas:
1. **Organization Schema**: Company name, logo, founders, contact details, social URLs.
2. **LocalBusiness Schema**: Physical address, geo-coordinates, postal code, and business categories.
3. **BreadcrumbList Schema**: Automatic breadcrumb trail for subpages and blog articles.
4. **BlogPosting Schema**: Full metadata including `headline`, `image`, `datePublished`, `author`, and `publisher`.

### Metadata & OpenGraph
- **`src/app/sitemap.ts`**: Dynamically compiles all static routes and blog post slugs into an XML sitemap at `/sitemap.xml`.
- **`src/app/robots.ts`**: Serves robots.txt granting access to search crawlers.
- **`src/app/opengraph-image.tsx`**: Uses `@vercel/og` engine to dynamically generate branded social share images.

---

## 8. Design System & Styling Guide

### CSS Variables & Palette (`src/app/globals.css`)
```css
:root {
  --background: #fafafa;
  --foreground: #0f0a1a;
  --primary: #7c3aed;         /* Royal Purple Accent */
  --primary-dark: #6d28d9;    /* Dark Purple */
  --primary-darker: #5b21b6;
  --primary-light: #ede9fe;   /* Light Lavender */
  --accent: #a78bfa;          /* Soft Purple */
  --premium-dark: #0a0612;    /* Deep Midnight Dark */
  --premium-surface: #14101f; /* Surface Dark Container */
  --premium-border: rgba(124, 58, 237, 0.12);
  --premium-glow: rgba(124, 58, 237, 0.25);
}
```

### Typography
- **Headings / Display**: Inter / System Display font with tight tracking (`font-display`).
- **Body / Prose**: Inter with optimized legibility and smooth antialiasing (`font-sans`).

---

## 9. Environment Configuration & Variables

Create a `.env` file in the root directory:

```env
# Base Production URL
NEXT_PUBLIC_SITE_URL=https://firstmartt.com

# SMTP Server Credentials
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO_EMAIL=firstmartsindia@gmail.com
```

---

## 10. Local Development & Build Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server on `http://localhost:3000` with fast-refresh. |
| `npm run build` | Compiles and optimizes the application for production deployment. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint across all `.ts`, `.tsx`, and `.js` files. |

---

## 11. Deployment & Production Guidelines

### Deploying on Vercel
1. Push the repository to GitHub/GitLab.
2. Import the project into Vercel.
3. Configure the environment variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
4. Click **Deploy**. Vercel will automatically build and assign an SSL certificate.

### Node.js / Docker Server Deployment
1. Build the artifact:
   ```bash
   npm run build
   ```
2. Start the standalone server:
   ```bash
   npm run start
   ```
3. Ensure port `3000` (or `PORT` environment variable) is exposed and reverse-proxied via Nginx / Cloudflare.
