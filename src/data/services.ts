import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Globe,
  Cog,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  icon: LucideIcon;
  iconName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  benefits: string[];
  approach: { title: string; description: string }[];
  relatedServices: string[];
  technologyPartner?: {
    name: string;
    description: string;
    link: string;
  };
}

export const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Globe,
  Cog,
};

export const SERVICE_IMAGES: Record<string, string> = {
  "holding-company-ownership-design":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/cXPiiTaKFlRotktC.jpg",
  "shareholder-family-governance":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/PCQnUZCUBXRRCYzd.png",
  "capital-planning-financial-strategy":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/zgpYfTuKDBidIiyZ.jpg",
  "risk-governance":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/mRHqkissantipAaG.jpg",
  "cross-functional-execution":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/cXPiiTaKFlRotktC.jpg",
  "market-entry-expansion":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/lipDtdWnUicZrfRY.jpg",
  "operational-modernization":
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/zgpYfTuKDBidIiyZ.jpg",
};

export const services: Service[] = [
  {
    id: "1",
    slug: "holding-company-ownership-design",
    icon: Building2,
    iconName: "Building2",
    title: "Holding Company & Ownership Design",
    shortDescription:
      "Developing clear, efficient cross-border ownership structures with well-defined decision rights.",
    fullDescription:
      "Through our internal team and international partners, we design and implement holding company structures that provide clarity, efficiency, and resilience across multiple jurisdictions.",
    heroImage: SERVICE_IMAGES["holding-company-ownership-design"],
    benefits: [
      "Clear delineation of ownership rights and responsibilities across jurisdictions",
      "Tax-efficient structures that comply with international regulations",
      "Flexible frameworks that adapt to changing business needs",
      "Protection of assets through proper legal entity structuring",
      "Streamlined decision-making processes across borders",
      "Enhanced credibility with financial institutions and partners",
    ],
    approach: [
      { title: "Jurisdictional Analysis", description: "We analyze the regulatory, tax, and operational landscape of each relevant jurisdiction to identify optimal structuring opportunities." },
      { title: "Structure Design", description: "We architect holding company frameworks that balance control, liability protection, and operational efficiency." },
      { title: "Documentation & Implementation", description: "We prepare comprehensive legal documentation and coordinate with local counsel to ensure proper implementation." },
      { title: "Ongoing Optimization", description: "We monitor regulatory changes and business evolution to recommend structural adjustments as needed." },
    ],
    relatedServices: ["shareholder-family-governance", "capital-planning-financial-strategy"],
  },
  {
    id: "2",
    slug: "shareholder-family-governance",
    icon: Users,
    iconName: "Users",
    title: "Shareholder & Family Governance",
    shortDescription:
      "Establishing roles, voting frameworks, continuity plans, and dispute-prevention mechanisms.",
    fullDescription:
      "Through our internal team and international partners, we help families and shareholder groups establish governance frameworks that preserve relationships, prevent disputes, and ensure smooth transitions across generations.",
    heroImage: SERVICE_IMAGES["shareholder-family-governance"],
    benefits: [
      "Clear roles and responsibilities for all stakeholders",
      "Voting frameworks that balance control and fairness",
      "Succession planning that honors founder vision",
      "Dispute prevention and resolution mechanisms",
      "Family council and board structures",
      "Communication protocols that maintain alignment",
    ],
    approach: [
      { title: "Governance Assessment", description: "We assess current governance structures, family dynamics, and stakeholder expectations to identify gaps and opportunities." },
      { title: "Framework Development", description: "We develop comprehensive governance frameworks including voting rights, decision-making protocols, and dispute resolution mechanisms." },
      { title: "Documentation & Communication", description: "We create clear documentation and facilitate stakeholder communication to ensure understanding and buy-in." },
      { title: "Ongoing Facilitation", description: "We provide ongoing support through family councils, board meetings, and periodic governance reviews." },
    ],
    relatedServices: ["holding-company-ownership-design", "risk-governance"],
  },
  {
    id: "3",
    slug: "capital-planning-financial-strategy",
    icon: TrendingUp,
    iconName: "TrendingUp",
    title: "Capital Planning and Financial Strategy",
    shortDescription:
      "Structuring strategies for liquidity events, reinvestment, distributions, and long-term stakeholder cohesion.",
    fullDescription:
      "Through our internal team and international partners, we structure comprehensive capital strategies that align liquidity events, reinvestment opportunities, distributions, and long-term stakeholder cohesion.",
    heroImage: SERVICE_IMAGES["capital-planning-financial-strategy"],
    benefits: [
      "Strategic planning for liquidity events and exits",
      "Optimized distribution strategies that balance stakeholder interests",
      "Reinvestment frameworks that fuel growth",
      "Tax-efficient capital structures",
      "Long-term wealth preservation strategies",
      "Stakeholder alignment on financial objectives",
    ],
    approach: [
      { title: "Financial Analysis", description: "We analyze your current capital structure, cash flows, and stakeholder objectives to identify planning opportunities." },
      { title: "Strategy Development", description: "We develop comprehensive capital strategies addressing liquidity, distributions, reinvestment, and long-term wealth preservation." },
      { title: "Implementation Coordination", description: "We coordinate implementation across financial advisors, tax professionals, and legal counsel to ensure seamless execution." },
      { title: "Ongoing Optimization", description: "We monitor market conditions and business performance to recommend strategic adjustments and refinements." },
    ],
    relatedServices: ["holding-company-ownership-design", "cross-functional-execution"],
  },
  {
    id: "4",
    slug: "risk-governance",
    icon: Shield,
    iconName: "Shield",
    title: "Risk Governance",
    shortDescription:
      "Implementing practical safeguards to manage challenges such as residency changes, disputes, and banking constraints.",
    fullDescription:
      "Through our internal team and international partners, we implement practical risk governance frameworks and advanced insurance strategies designed to protect high-net-worth families and corporations.",
    heroImage: SERVICE_IMAGES["risk-governance"],
    benefits: [
      "Comprehensive risk identification and assessment",
      "Practical safeguards for residency and regulatory changes",
      "Advanced insurance strategies for wealth protection",
      "Dispute prevention and resolution mechanisms",
      "Banking and financial institution relationship management",
      "Institutional-grade governance and controls",
    ],
    approach: [
      { title: "Risk Assessment", description: "We conduct comprehensive risk assessments across jurisdictions, identifying operational, legal, tax, and financial vulnerabilities." },
      { title: "Insurance Strategy", description: "We design advanced insurance strategies including life insurance, liability coverage, and specialized HNW protection mechanisms." },
      { title: "Governance Implementation", description: "We implement practical governance frameworks and controls to mitigate identified risks and ensure compliance." },
      { title: "Ongoing Monitoring", description: "We provide continuous monitoring and periodic reviews to ensure risk frameworks remain effective and current." },
    ],
    relatedServices: ["shareholder-family-governance", "cross-functional-execution"],
  },
  {
    id: "5",
    slug: "cross-functional-execution",
    icon: Layers,
    iconName: "Layers",
    title: "Cross-Functional Execution",
    shortDescription:
      "Integrating legal, tax, insurance, and banking inputs into a unified, actionable plan.",
    fullDescription:
      "Through our internal team and international partners, we coordinate integrated execution across legal, tax, insurance, banking, and operational functions.",
    heroImage: SERVICE_IMAGES["cross-functional-execution"],
    benefits: [
      "Unified strategy across all professional disciplines",
      "Elimination of conflicting advice and coordination gaps",
      "Seamless implementation across jurisdictions",
      "Reduced timeline and improved efficiency",
      "Clear accountability and project management",
      "Institutional-grade execution and documentation",
    ],
    approach: [
      { title: "Stakeholder Coordination", description: "We convene all relevant advisors (legal, tax, insurance, banking) to ensure alignment on strategy and execution." },
      { title: "Execution Planning", description: "We develop detailed execution plans with clear timelines, responsibilities, and dependencies across all functions." },
      { title: "Implementation Management", description: "We manage the implementation process, ensuring coordination, quality control, and adherence to timelines." },
      { title: "Documentation & Handoff", description: "We ensure comprehensive documentation and provide clear handoff to ongoing advisors for long-term management." },
    ],
    relatedServices: ["capital-planning-financial-strategy", "risk-governance"],
  },
  {
    id: "6",
    slug: "market-entry-expansion",
    icon: Globe,
    iconName: "Globe",
    title: "Market Entry & Expansion",
    shortDescription:
      "Leveraging government and private-sector networks to support expansion across the Americas.",
    fullDescription:
      "Through our internal team and international partners, we leverage deep government and private-sector relationships to support expansion across the Americas.",
    heroImage: SERVICE_IMAGES["market-entry-expansion"],
    benefits: [
      "Market intelligence and regulatory landscape analysis",
      "Government relationship facilitation",
      "Local partnership identification and negotiation",
      "Regulatory compliance and licensing support",
      "Operational setup and integration guidance",
      "Ongoing market support and optimization",
    ],
    approach: [
      { title: "Market Assessment", description: "We assess target markets, regulatory environments, and competitive landscapes to develop entry strategies." },
      { title: "Relationship Facilitation", description: "We leverage our government and private-sector networks to facilitate introductions, partnerships, and regulatory approvals." },
      { title: "Operational Setup", description: "We guide entity formation, licensing, banking relationships, and operational infrastructure setup." },
      { title: "Ongoing Support", description: "We provide ongoing market support, regulatory monitoring, and strategic optimization as your business grows." },
    ],
    relatedServices: ["holding-company-ownership-design", "cross-functional-execution"],
  },
  {
    id: "7",
    slug: "operational-modernization",
    icon: Cog,
    iconName: "Cog",
    title: "Operational Modernization",
    shortDescription:
      "Deploying digital systems and tailored software to reduce friction, strengthen controls, and enhance visibility.",
    fullDescription:
      "Through our internal team and international partners, we deploy digital systems and tailored software to reduce friction, strengthen controls, and enhance visibility.",
    heroImage: SERVICE_IMAGES["operational-modernization"],
    benefits: [
      "Reduced operational friction and manual processes",
      "Enhanced visibility and real-time reporting",
      "Strengthened governance controls and compliance",
      "Improved decision-making through better data",
      "Scalable systems that grow with your business",
      "Institutional-grade technology infrastructure",
    ],
    approach: [
      { title: "Process Assessment", description: "We assess current processes, systems, and pain points to identify modernization opportunities." },
      { title: "Technology Selection", description: "We select and configure appropriate technology solutions, including Synexum Labs platform integration." },
      { title: "Implementation & Training", description: "We manage implementation, data migration, and comprehensive training to ensure successful adoption." },
      { title: "Optimization & Support", description: "We provide ongoing optimization, support, and enhancement as your operational needs evolve." },
    ],
    relatedServices: ["cross-functional-execution", "risk-governance"],
    technologyPartner: {
      name: "SynexumLabs",
      description:
        "Synexum Labs designs and implements practical digital systems that turn governance strategy into repeatable operations. Our technology platform integrates seamlessly with existing workflows to provide real-time visibility, automated compliance, and institutional-grade reporting.",
      link: "https://synexumlabs.com",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return services.filter((s) => service.relatedServices.includes(s.slug));
}
