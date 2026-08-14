import type { BlogPost } from "../blog-types";

interface CategoryConfig {
  name: string;
  slugId: string;
  marginRange: string;
  dailyTurnover: string;
  shelfLife: string;
  challenges: string[];
  digitalOpportunities: string[];
  techRequirements: string[];
  complianceNotes: string;
  sampleItems: string[];
}

const retailCategoriesList: CategoryConfig[] = [
  {
    name: "Independent Kirana & General Stores",
    slugId: "kirana-and-general-stores",
    marginRange: "10% to 18%",
    dailyTurnover: "₹15,000 to ₹60,000",
    shelfLife: "30 to 180 days (packaged FMCG)",
    challenges: [
      "Deadstock accumulation on slow-moving branded FMCG items",
      "Manual credit ledger (khata) tracking with delayed cash recovery",
      "Competition from venture-backed dark stores undercutting prices"
    ],
    digitalOpportunities: [
      "Instant WhatsApp & app-based reordering for loyal neighborhood households",
      "Automated stock level reorder alerts for high-velocity staples (atta, dal, oil)",
      "Instant UPI digital payment reconciliation with automated payment reminders"
    ],
    techRequirements: ["Barcode scanner mobile integration", "Fast POS touch-screen terminal", "Vernacular Marathi/Hindi voice search"],
    complianceNotes: "FSSAI registration, GSTIN for turnover above threshold, MSME Udyam registration.",
    sampleItems: ["Fortune Sunlite Oil", "Aashirvaad Shudh Chakki Atta", "Tata Salt", "Amul Butter", "Maggi 2-Minute Noodles"]
  },
  {
    name: "Retail Pharmacies & Chemists",
    slugId: "retail-pharmacies-and-chemists",
    marginRange: "18% to 28%",
    dailyTurnover: "₹25,000 to ₹1,00,000",
    shelfLife: "1 to 3 years (strict batch expiry management)",
    challenges: [
      "Mandatory Schedule H & H1 prescription verification compliance",
      "Managing batch-level expiry dates and near-expiry returns to distributors",
      "Emergency night delivery coordination for critical therapeutics"
    ],
    digitalOpportunities: [
      "Automated optical character recognition (OCR) for handwritten doctor prescriptions",
      "Chronic medication monthly auto-refill subscriptions for senior citizens",
      "Real-time substitute molecule finder for generic drug recommendations"
    ],
    techRequirements: ["Drug license document vault", "Prescription audit log storage", "Batch & expiry tracking ERP"],
    complianceNotes: "State Pharmacy Council registered pharmacist on-site, Form 20/21 retail drug license, Schedule X strict controls.",
    sampleItems: ["Paracetamol 650mg", "Metformin 500mg", "Telmisartan 40mg", "First Aid Antiseptic Bandages", "Digital Thermometers"]
  },
  {
    name: "Fresh Fruits & Vegetable Mandi Vendors",
    slugId: "fresh-fruits-and-vegetables",
    marginRange: "22% to 35%",
    dailyTurnover: "₹8,000 to ₹35,000",
    shelfLife: "1 to 3 days (highly perishable)",
    challenges: [
      "Rapid moisture loss and weight shrinkage throughout daily trading hours",
      "Volatile daily APMC mandi wholesale price fluctuations",
      "Customer expectation of physical inspection and sorting"
    ],
    digitalOpportunities: [
      "Dynamic morning vs evening automated discounted pricing to clear stock with zero waste",
      "Curated pre-washed, sorted family combo baskets for instant 15-minute fulfillment",
      "Direct farm-to-shop morning sourcing visibility that guarantees peak crispness"
    ],
    techRequirements: ["Bluetooth digital weighing scale integration", "Dynamic variable-weight item checkout", "Real-time price override engine"],
    complianceNotes: "Local municipal APMC trading license, FSSAI street vendor/retail registration.",
    sampleItems: ["Farm Fresh Tomatoes", "Desi Onions", "Green Capsicum", "Fresh Spinach (Palak)", "Nagpur Oranges"]
  },
  {
    name: "Artisanal Bakeries & Cake Shops",
    slugId: "artisanal-bakeries-and-cake-shops",
    marginRange: "35% to 55%",
    dailyTurnover: "₹12,000 to ₹50,000",
    shelfLife: "24 to 72 hours (fresh bakery products)",
    challenges: [
      "Fragile packaging requirement for multi-tier celebratory cakes during two-wheeler transit",
      "Accurate scheduling of customized birthday and anniversary orders",
      "Short shelf-life for cream-based pastries and artisanal sourdough breads"
    ],
    digitalOpportunities: [
      "Interactive 3D custom cake designer with live photo and text customization",
      "Scheduled advance deliveries paired with party candles, balloons, and gifts",
      "Evening flash sales on fresh daily bread and tea-time snacks"
    ],
    techRequirements: ["Temperature-controlled thermal delivery bag protocols", "Custom cake photo upload engine", "Live order milestone notifications"],
    complianceNotes: "FSSAI food manufacturing license, eggless/non-veg labeling compliance.",
    sampleItems: ["Fresh Dutch Chocolate Cake", "Pineapple Pastry", "Whole Wheat Garlic Bread", "Almond Cookies", "Red Velvet Cupcakes"]
  },
  {
    name: "Traditional Sweet Shops & Farsan Stores",
    slugId: "traditional-sweets-and-farsan",
    marginRange: "30% to 45%",
    dailyTurnover: "₹20,000 to ₹1,20,000 (surges 500% during festivals)",
    shelfLife: "3 to 15 days (ghee and mawa items)",
    challenges: [
      "Massive seasonal festival demand spikes (Diwali, Raksha Bandhan, Ganesh Utsav)",
      "Strict temperature and hygiene maintenance for milk-based mawa sweets",
      "Managing custom assorted gift box packaging efficiently during rush hours"
    ],
    digitalOpportunities: [
      "Pre-booked festival corporate gifting hampers with multi-address bulk delivery",
      "Subscription plans for daily fresh morning farsan (dhokla, jalebi, samosas)",
      "Geographic delivery expansion across entire city radius without opening new retail branches"
    ],
    techRequirements: ["Peak-load server capacity for festive sales", "Assorted gift box bundle builder", "Fast thermal receipt printer integration"],
    complianceNotes: "FSSAI food registration, display of 'Best Before' dates on open sweet display trays as per FSSAI regulations.",
    sampleItems: ["Kaju Katli", "Motichoor Laddu", "Fresh Jalebi", "Bhavnagari Gathiya", "Assorted Dry Fruit Sweets"]
  },
  {
    name: "Local Dairy Booths & Milk Outlets",
    slugId: "dairy-booths-and-milk-outlets",
    marginRange: "8% to 15% (processed milk), 25% to 40% (paneer, ghee, curd)",
    dailyTurnover: "₹18,000 to ₹75,000",
    shelfLife: "24 to 48 hours (fresh milk and curd)",
    challenges: [
      "Ultra-early morning 5:30 AM to 7:00 AM delivery window requirement",
      "Managing daily subscription modifications (vacation pauses, quantity changes)",
      "Low unit margins on standard pouch milk requiring high-margin cross-selling"
    ],
    digitalOpportunities: [
      "Automated prepaid morning wallet subscriptions with 1-click doorstep drop-off",
      "Cross-selling fresh artisanal paneer, organic eggs, and bread with morning milk",
      "Zero-contact silent morning door-drop delivery verification with photo proof"
    ],
    techRequirements: ["Recurring wallet balance engine", "Driver morning milk route sequencing app", "Doorstep photo delivery proof"],
    complianceNotes: "FSSAI dairy processing & distribution license, periodic milk adulteration testing reports.",
    sampleItems: ["Fresh Cow Milk 1L", "Buffalo Milk Full Cream", "Malai Paneer 200g", "Thick Curd (Dahi) 500g", "Cow Ghee 500ml"]
  },
  {
    name: "Hardware, Electrical & Plumbing Stores",
    slugId: "hardware-electrical-and-plumbing",
    marginRange: "20% to 35%",
    dailyTurnover: "₹20,000 to ₹80,000",
    shelfLife: "Indefinite (non-perishable durable goods)",
    challenges: [
      "Extensive catalog of thousands of technical micro-SKUs (screws, pipes, fittings, switches)",
      "Customer difficulty in describing specific technical part specifications",
      "Bulky and heavy items requiring specialized two-wheeler or three-wheeler transport"
    ],
    digitalOpportunities: [
      "Photo-based part identification where customers snap photos of broken pipes or valves",
      "Emergency 20-minute delivery of repair components directly to plumbers and electricians on-site",
      "B2B contractor credit accounts with digital project-wise billing"
    ],
    techRequirements: ["Image similarity AI part search", "Multi-tier vehicle dispatch (2-wheeler vs cargo auto)", "Technical spec attribute filters"],
    complianceNotes: "BIS quality standards certification for electrical cables and switches, GST compliance.",
    sampleItems: ["LED Bulb 9W Cool White", "Modular Switch 6A", "CPVC Pipe Fittings 1-inch", "Teflon Tape Roll", "Cordless Drill Screwdriver"]
  },
  {
    name: "Books, Stationery & Office Supplies",
    slugId: "books-stationery-and-office-supplies",
    marginRange: "25% to 40%",
    dailyTurnover: "₹10,000 to ₹40,000 (peaks during school reopening seasons)",
    shelfLife: "Indefinite (paper and office stationery)",
    challenges: [
      "Intense seasonal peaks in June/July during academic school curriculum start",
      "Massive diversity of specific school textbook publishers and notebook formats",
      "Low average order value on single pens and pencils requiring bundled minimum orders"
    ],
    digitalOpportunities: [
      "1-Click curated school bookset bundles customized for specific local school syllabi",
      "High-speed urgent document printing and bound delivery within 25 minutes",
      "Corporate monthly office stationery replenishment subscriptions"
    ],
    techRequirements: ["Document PDF upload & instant page count pricing", "School curriculum bundle selector", "High-speed printing integration"],
    complianceNotes: "Copyright protection compliance, authorized publisher reseller credentials.",
    sampleItems: ["Classmate Long Notebooks (Pack of 6)", "Parker Vector Rollerball Pen", "A4 Copier Paper 75GSM Ream", "Camel Oil Pastels 25 Shades", "Student Geometry Box"]
  },
  {
    name: "Mobile Accessories & Electronics Repair Stores",
    slugId: "mobile-accessories-and-electronics-repair",
    marginRange: "35% to 65%",
    dailyTurnover: "₹15,000 to ₹60,000",
    shelfLife: "6 to 18 months (gadgets and fast-changing phone models)",
    challenges: [
      "Rapid obsolescence of tempered glass and cases as new phone models launch weekly",
      "Customer anxiety regarding genuine OEM components vs counterfeit replicas",
      "Logistics for pickup, diagnostic repair, and return delivery of delicate smartphones"
    ],
    digitalOpportunities: [
      "Doorstep phone repair dispatch with live diagnostic tracking and warranty certificates",
      "Instant 15-minute delivery of chargers, fast data cables, OTG adapters, and power banks",
      "Trade-in exchange evaluation for old electronics with instant digital payouts"
    ],
    techRequirements: ["IMEI and serial number tracking", "Live repair workbench video stream", "Warranty claim barcode generation"],
    complianceNotes: "E-waste management rules authorization, GST invoicing with serial number tracking.",
    sampleItems: ["Type-C Fast Charging Cable 65W", "20W USB-C Power Adapter", "10,000mAh Power Bank", "Bluetooth Wireless Earbuds", "Tempered Glass Screen Protector"]
  },
  {
    name: "Footwear & Leather Goods Stores",
    slugId: "footwear-and-leather-goods",
    marginRange: "30% to 50%",
    dailyTurnover: "₹15,000 to ₹70,000",
    shelfLife: "1 to 2 years",
    challenges: [
      "High return rate due to shoe sizing discrepancies and fit issues",
      "Inventory fragmentation across multiple sizes (UK 6 to 11) and colorways",
      "Seasonal shifts from monsoon waterproof sandals to festive wedding footwear"
    ],
    digitalOpportunities: [
      "'Try 2 Sizes at Home' 15-minute delivery where rider waits 5 minutes while customer tests fit",
      "Digital size recommendation algorithm based on customer's foot dimensions",
      "Specialty regional leathercraft direct sales (e.g., authentic Kolhapuri chappals)"
    ],
    techRequirements: ["Multi-size try-and-buy dispatch workflow", "Shoe size conversion chart UX", "Instant reverse pickup barcode integration"],
    complianceNotes: "BIS footwear quality standards conformity, leather provenance certification.",
    sampleItems: ["Men's Formal Leather Shoes", "Orthopedic Comfort Slippers", "Waterproof Monsoon Sandals", "Handcrafted Kolhapuri Chappals", "Running Sports Shoes"]
  },
  {
    name: "Apparel, Saree & Ethnic Wear Boutiques",
    slugId: "apparel-saree-and-ethnic-wear",
    marginRange: "35% to 55%",
    dailyTurnover: "₹25,000 to ₹1,50,000",
    shelfLife: "6 to 12 months (seasonal fashion)",
    challenges: [
      "High return and exchange requests due to color nuance and fabric tactile preferences",
      "Extensive inventory capital locked in festive ethnic wear and bridal collections",
      "Need for custom blouse tailoring and alteration turnaround"
    ],
    digitalOpportunities: [
      "Live video shopping consultation with boutique master draper before ordering",
      "Integrated doorstep tailor dispatch for measurement taking and altered garment return",
      "Curated festival and wedding season wardrobe lookbooks delivered in 30 minutes"
    ],
    techRequirements: ["High-res zoomable fabric texture viewer", "Video call integration with store clerk", "Tailoring measurement input UI"],
    complianceNotes: "Textile labeling (fabric blend disclosure), GST invoicing.",
    sampleItems: ["Pure Silk Paithani Saree", "Cotton Chanderi Kurti", "Men's Festive Kurta Set", "Embroidered Dupatta", "Traditional Nauvari Saree"]
  },
  {
    name: "Pet Food, Grooming & Veterinary Supplies",
    slugId: "pet-food-grooming-and-veterinary",
    marginRange: "22% to 38%",
    dailyTurnover: "₹10,000 to ₹45,000",
    shelfLife: "6 to 18 months (dry kibble and pet medicine)",
    challenges: [
      "Heavy weight of large 10kg to 20kg dog food bags requiring careful courier dispatch",
      "Emergency veterinary prescription requirements for sick pets during off-hours",
      "Niche breed-specific nutritional demands requiring specialized product curation"
    ],
    digitalOpportunities: [
      "Automated monthly pet kibble and litter replenishment subscriptions",
      "Instant 20-minute emergency delivery of tick/flea treatments and prescription recovery food",
      "Integrated appointment booking with neighborhood veterinary doctors and groomers"
    ],
    techRequirements: ["Pet profile engine (breed, age, weight)", "Automated auto-ship subscription schedule", "Heavy parcel cargo vehicle routing"],
    complianceNotes: "FSSAI compliance for pet edibles, animal welfare regulatory guidelines.",
    sampleItems: ["Royal Canin Maxi Adult Dog Food 10kg", "Whiskas Wet Cat Food Gravy Pouches", "Anti-Tick & Flea Pet Shampoo", "Calcium Bone Chews", "Pet Odor Eliminator Spray"]
  },
  {
    name: "Puja Samagri & Spiritual Essentials",
    slugId: "puja-samagri-and-spiritual-essentials",
    marginRange: "30% to 50%",
    dailyTurnover: "₹8,000 to ₹35,000 (surges 800% during festival periods)",
    shelfLife: "6 to 24 months",
    challenges: [
      "Hundreds of specific ritual items needed for intricate Vedic ceremonies (hawan, griha pravesh, satyanarayan)",
      "High purity standards required by devout customers (pure cow ghee, unadulterated camphor)",
      "Sudden early morning festival demand for fresh flowers, mango leaves, and durva grass"
    ],
    digitalOpportunities: [
      "Complete 1-Click pre-packaged ritual ceremony kits curated by verified temple priests",
      "Daily morning fresh flower and garland doorstep subscription delivery at 6:00 AM",
      "Custom brass idol and pooja thali engraving with express doorstep dispatch"
    ],
    techRequirements: ["Pre-assembled ritual kit itemizer", "Fresh daily flower morning route coordinator", "Priest referral affiliate integration"],
    complianceNotes: "FSSAI compliance for edible prasad and holy water, AGMARK certification for pure cow ghee.",
    sampleItems: ["Pure Bhimseni Camphor", "Hawan Samagri 500g Pack", "Handmade Agarbatti Incense Sticks", "Brass Diya Lamp", "Pure Sandalwood (Chandan) Paste"]
  },
  {
    name: "Organic & Health Food Specialty Stores",
    slugId: "organic-and-health-food-stores",
    marginRange: "25% to 45%",
    dailyTurnover: "₹15,000 to ₹55,000",
    shelfLife: "3 to 12 months",
    challenges: [
      "Customer skepticism regarding authentic organic certification (Jaivik Bharat / USDA)",
      "Higher price points requiring clear educational marketing on health benefits",
      "Shorter natural shelf-life due to absence of chemical preservatives"
    ],
    digitalOpportunities: [
      "Scannable QR codes showing complete farm traceability and laboratory pesticide residue tests",
      "Nutritional diet consultation bundles paired with diabetic-friendly or keto grocery deliveries",
      "Direct partnerships with local farmer producer organizations (FPOs)"
    ],
    techRequirements: ["Batch-level lab certificate viewer", "Nutritional calorie and macro calculator", "Organic certification badge verification"],
    complianceNotes: "NPOP & PGS-India organic certification, FSSAI organic food regulations.",
    sampleItems: ["Cold-Pressed Wood-Gharat Groundnut Oil", "Organic A2 Gir Cow Bilona Ghee", "Unpolished Little Millet (Kutki)", "Raw Wild Forest Honey", "Gluten-Free Quinoa Flour"]
  }
];

function generateCategoryArticle(cat: CategoryConfig, index: number): BlogPost {
  const publishedDate = `2026-02-${String(14 - (index % 10)).padStart(2, "0")}`;
  const slug = `how-to-digitize-${cat.slugId}-retail-guide`;
  
  const title = `How ${cat.name} Can Digitize & Thrive in the Hyperlocal Quick Commerce Era: Complete Playbook`;
  const description = `A comprehensive operational and financial guide for ${cat.name} in India. Learn how to increase margins to ${cat.marginRange}, manage inventory, prevent deadstock, and achieve 15-minute delivery economics.`;
  const excerpt = `Step-by-step digitalization blueprint for ${cat.name}. Master inventory turnover, digital khata, WhatsApp ordering, and zero-commission hyperlocal delivery to dominate local market share.`;
  
  const readingTime = `${Math.floor(8 + (index % 3))} min read`;

  const keywords = [
    `How to digitize ${cat.name.toLowerCase()}`,
    `${cat.name} online delivery India`,
    `${cat.name} profit margins`,
    `POS billing software for ${cat.name.toLowerCase()}`,
    `Hyperlocal quick commerce for ${cat.name.toLowerCase()}`,
    `Retail business growth playbook India`,
    `FirstMartt merchant guide`
  ];

  const content = `
# How ${cat.name} Can Digitize & Thrive in India's Hyperlocal Commerce Era

The retail landscape for **${cat.name}** across India is undergoing the most profound digital transformation in modern commercial history. With typical gross margins ranging from **${cat.marginRange}** and daily store revenues between **${cat.dailyTurnover}**, specialty store owners who adopt modern digital inventory and 15-minute hyperlocal delivery are seeing 35% to 60% revenue growth.

---

## Key Financial & Operational Benchmark Metrics

| Metric | Industry Standard | FirstMartt Digital Benchmark |
| :--- | :--- | :--- |
| **Gross Margin** | ${cat.marginRange} | +3% to +5% (optimized sourcing & zero waste) |
| **Typical Shelf Life** | ${cat.shelfLife} | 30% faster stock turnover rate |
| **Customer Order Frequency** | 1.8 orders / month | 4.6 orders / month (via automated app reordering) |
| **Cash Settlement Cycle** | 3–7 days (legacy platforms) | T+1 Direct Bank / UPI Settlement |
| **Customer Retention Rate** | 45% (walk-in footfall) | 78% (omnichannel app + in-store loyalty) |

---

## The Core Operational Challenges Facing ${cat.name}

Independent retailers in this sector face three systemic headwinds:

${cat.challenges.map((ch, i) => `### ${i + 1}. ${ch}\nTraditional pen-and-paper management or basic desktop billing systems fail to provide real-time inventory visibility, resulting in stockouts during rush hours and capital locked in slow-moving items.`).join("\n\n")}

---

## 3 High-Impact Digital Growth Opportunities

${cat.digitalOpportunities.map((opp, i) => `### Opportunity ${i + 1}: ${opp}\nBy enabling omnichannel digital ordering, ${cat.name} expand their catchment radius from 500 meters of walk-in footfall to a **3 to 5-kilometer high-density delivery zone**, tripling their addressable customer base overnight.`).join("\n\n")}

---

## Technological Requirements for Seamless Operation

To compete effectively against multi-billion-dollar corporate supermarket chains, store owners need specialized, lightweight technology:

${cat.techRequirements.map((req) => `- **${req}:** Designed for ease of use by counter staff without requiring extensive IT training.`).join("\n")}

### Sample High-Velocity Digital Catalog Items
${cat.sampleItems.map((item) => `- ${item}`).join("\n")}

---

## Regulatory Compliance & Licensing Checklist

Operating a modernized ${cat.name} requires adherence to statutory standards:
> **Statutory Notice:** ${cat.complianceNotes}

---

## Step-by-Step Onboarding with FirstMartt

Local store owners can launch their digital storefront on FirstMartt in under 30 minutes:
1. **Catalog Setup via AI OCR:** Snap photos of your shelves or wholesale invoices to auto-populate product names, images, GST rates, and vernacular descriptions.
2. **Dynamic Geofence Radius:** Define your instant 15-minute delivery radius and set your operating hours.
3. **Automated Order Dispatch:** Receive audio-visual order alerts on your smartphone, pack the items, and hand them over to verified FirstMartt EV delivery couriers.
4. **Instant Daily Settlement:** All payments are deposited directly to your bank account on a T+1 schedule with complete ledger transparency.

*Ready to scale your ${cat.name}? Partner with FirstMartt today to digitize your store and unlock thousands of new local customers.*
  `.trim();

  return {
    slug,
    title,
    description,
    excerpt,
    publishedAt: publishedDate,
    updatedAt: publishedDate,
    author: "FirstMartt Retail Practice Group",
    category: "Retail Categories",
    readingTime,
    keywords,
    content,
  };
}

export const retailCategoryPosts: BlogPost[] = retailCategoriesList.map((cat, idx) =>
  generateCategoryArticle(cat, idx)
);
