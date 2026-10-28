export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  highlightMetric: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Financial Group",
    avatarText: "MV",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    quote: "SP Innovate Solutions accomplished in 5 months what our internal teams struggled with for two years. Their mastery over event streaming, zero-downtime cutover, and high-frequency core banking APIs is extraordinary.",
    rating: 5,
    highlightMetric: "62% Reduction in Mainframe Load"
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "VP of Enterprise Engineering",
    company: "Velox Retail Global",
    avatarText: "ER",
    avatarUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
    quote: "Integrating SAP S/4HANA with our global e-commerce and logistics network seemed like an insurmountable challenge until SP Innovate stepped in. The reliability of their custom connectors gave us flawless holiday peak uptime.",
    rating: 5,
    highlightMetric: "99.999% Order Sync Reliability"
  },
  {
    id: "3",
    name: "David K. Henderson",
    role: "Director of Cloud Infrastructure",
    company: "TransLogix Worldwide",
    avatarText: "DH",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote: "The BigQuery and Kafka streaming pipeline they built processes over 350 million IoT events every day with zero latency hiccups. The engineering caliber and communicative clarity of their team are truly best-in-class.",
    rating: 5,
    highlightMetric: "350M+ Events Daily with <3s Alerting"
  },
  {
    id: "4",
    name: "Dr. Sarah Lin",
    role: "Chief Digital Officer",
    company: "MedPulse Health",
    avatarText: "SL",
    avatarUrl: "https://images.unsplash.com/photo-1594824813626-d62f4e414c56?auto=format&fit=crop&w=200&q=80",
    quote: "Their adherence to HIPAA, HITRUST, and strict cryptographic standards made our hospital integration audit effortless. They are the only team I would trust for mission-critical healthcare integrations.",
    rating: 5,
    highlightMetric: "100% HIPAA Audit Pass"
  },
  {
    id: "5",
    name: "Alexandre Moreau",
    role: "Co-Founder & VP Product",
    company: "CloudMatrix Systems",
    avatarText: "AM",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    quote: "SP Innovate helped us transition our monolithic platform into a Kubernetes multi-tenant SaaS. Our tenant provisioning dropped from weeks to under 90 seconds, directly driving our series B growth.",
    rating: 5,
    highlightMetric: "90-Second Instant Tenant Provisioning"
  }
];
