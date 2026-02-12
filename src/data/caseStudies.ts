export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  region: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  keyServices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "family-office-restructuring",
    title: "Multi-Generational Family Office Restructuring",
    subtitle: "Establishing governance clarity across three generations and four jurisdictions",
    industry: "Family Office & Wealth Management",
    region: "Canada, US, Latin America",
    challenge:
      "A prominent family with significant assets across Canada, the United States, and Mexico faced governance challenges as the business transitioned from founder control to multi-generational stewardship. Unclear decision rights, conflicting tax strategies, and outdated legal structures created operational friction and family tension.",
    solution:
      "We conducted a comprehensive jurisdictional analysis and designed an integrated holding company structure with clear decision-making protocols. Our team implemented a family governance charter, established voting frameworks for each entity, and coordinated with local counsel in all three jurisdictions.",
    outcome:
      "The family achieved unified governance across all jurisdictions within 18 months. Decision-making time reduced by 60%, compliance costs decreased by 35%, and family alignment improved significantly.",
    metrics: [
      { label: "Decision-Making Time Reduction", value: "60%" },
      { label: "Compliance Cost Savings", value: "35%" },
      { label: "Implementation Timeline", value: "18 months" },
      { label: "Jurisdictions Coordinated", value: "3" },
    ],
    keyServices: [
      "Shareholder & Family Governance",
      "Holding Company & Ownership Design",
      "Risk Governance",
      "Operational Modernization",
    ],
  },
  {
    id: "cross-border-expansion",
    title: "Strategic Market Entry & Capital Structure Optimization",
    subtitle: "Enabling rapid expansion while maintaining tax efficiency and governance control",
    industry: "Technology & Software Services",
    region: "Canada to US & Latin America",
    challenge:
      "A Canadian technology company with strong domestic success wanted to expand aggressively into the US and Latin American markets. The founders faced complex decisions around capital structure, tax optimization, and maintaining control during growth.",
    solution:
      "We designed a sophisticated cross-border capital structure that optimized tax efficiency while preserving founder control. Our team structured subsidiary entities in strategic jurisdictions, implemented transfer pricing frameworks, and created a holding company that enabled efficient capital deployment.",
    outcome:
      "The company successfully expanded to 12 new markets within 24 months while maintaining founder control and achieving 28% tax optimization.",
    metrics: [
      { label: "New Markets Entered", value: "12" },
      { label: "Tax Optimization Achieved", value: "28%" },
      { label: "Implementation Timeline", value: "24 months" },
      { label: "Capital Deployment Efficiency", value: "+40%" },
    ],
    keyServices: [
      "Capital Planning and Financial Strategy",
      "Market Entry & Expansion",
      "Cross-Functional Execution",
      "Holding Company & Ownership Design",
    ],
  },
  {
    id: "succession-planning",
    title: "Founder Succession & Institutional Governance Transition",
    subtitle: "Transitioning from founder-led to institutional governance while preserving legacy",
    industry: "Manufacturing & Distribution",
    region: "Canada & US",
    challenge:
      "A 40-year-old manufacturing company faced a critical succession challenge as the founder approached retirement. The business lacked formal governance structures, decision-making authority was concentrated, and there was no clear succession plan.",
    solution:
      "We implemented a comprehensive succession and governance framework. Our team established a professional board structure with clear roles and responsibilities, created detailed succession plans for key leadership positions, and designed a phased transition strategy.",
    outcome:
      "The founder successfully transitioned to an advisory role within 18 months. The company achieved institutional-grade governance, attracted professional management talent, and increased EBITDA by 22%.",
    metrics: [
      { label: "EBITDA Growth", value: "+22%" },
      { label: "Transition Timeline", value: "18 months" },
      { label: "Key Leadership Positions Filled", value: "5" },
      { label: "Governance Maturity Score Improvement", value: "+85%" },
    ],
    keyServices: [
      "Shareholder & Family Governance",
      "Risk Governance",
      "Capital Planning and Financial Strategy",
      "Operational Modernization",
    ],
  },
];
