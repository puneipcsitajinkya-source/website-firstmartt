export type ResearchReport = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  status: "published" | "coming-soon";
  sections: {
    title: string;
    content: string;
  }[];
  methodology: string;
  dataSources: string[];
};

export const researchReports: ResearchReport[] = [
  {
    slug: "future-hyperlocal-commerce-tier-2-tier-3-india",
    title: "The Future of Hyperlocal Commerce in Tier-2 and Tier-3 India",
    subtitle: "A FirstMartt Research Report",
    description:
      "Original research exploring the state of hyperlocal commerce adoption, merchant digitization, and consumer behaviour in India's Tier-2 and Tier-3 cities — with data, merchant interviews, and market projections.",
    publishedAt: "2025-08-01",
    updatedAt: "2025-08-01",
    author: "FirstMartt Team",
    status: "coming-soon",
    sections: [
      {
        title: "Executive Summary",
        content:
          "India's Tier-2 and Tier-3 cities represent the next frontier of hyperlocal commerce. While metro cities are saturated with quick commerce and large e-commerce platforms, smaller cities remain largely underserved — creating a massive market opportunity for platforms that understand local retail dynamics.",
      },
      {
        title: "The Digital Divide in Small-City Retail",
        content:
          "Over 90% of retail in Tier-2 and Tier-3 cities remains unorganized. Local merchants lack digital storefronts, inventory management systems, and access to delivery networks. This digital divide limits their ability to serve customers who increasingly expect online convenience.",
      },
      {
        title: "Consumer Behaviour Shifts",
        content:
          "Post-pandemic, consumers in smaller cities have adopted digital payments (UPI) and online shopping habits. However, they still prefer local stores for fresh products, trust, and immediate availability — creating demand for hyperlocal platforms that bridge online and offline.",
      },
      {
        title: "Merchant Pain Points",
        content:
          "Key challenges identified through merchant interviews include: lack of affordable technology solutions, competition from large platforms offering deep discounts, difficulty managing inventory across channels, and limited access to customer analytics.",
      },
      {
        title: "The Hyperlocal Opportunity",
        content:
          "Platforms that can digitize existing merchant inventory, provide affordable technology tools, and enable neighbourhood delivery at low cost are positioned to capture a significant share of India's $1.3 trillion retail market — starting with cities where competition from dark-store models is minimal.",
      },
      {
        title: "Conclusions & Implications",
        content:
          "The hyperlocal commerce opportunity in Tier-2 and Tier-3 India is real, large, and growing. FirstMartt's merchant-first approach is specifically designed for this market segment — capital-efficient, community-driven, and built on existing retail infrastructure.",
      },
    ],
    methodology:
      "This research combines primary data collection (merchant interviews, consumer observations in Maharashtra) with secondary analysis of publicly available market reports from Bain & Company, Redseer Consulting, NASSCOM, and RBI data. All findings are directional and based on available evidence.",
    dataSources: [
      "Bain & Company — India Retail Report",
      "Redseer Consulting — Quick Commerce Analysis",
      "NASSCOM — Digital Commerce in India",
      "RBI — Digital Payments Statistics",
      "MSME Ministry, Government of India",
      "TRAI — Internet & Mobile Statistics",
      "FirstMartt Primary Research — Merchant Interviews (Maharashtra)",
    ],
  },
];

export function getAllReports(): ResearchReport[] {
  return researchReports;
}

export function getReportBySlug(slug: string): ResearchReport | undefined {
  return researchReports.find((r) => r.slug === slug);
}
