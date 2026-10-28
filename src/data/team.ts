export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  specialty: string[];
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Siddharth Patel",
    role: "Founder & Chief Solutions Architect",
    bio: "Ex-MuleSoft & AWS Principal Architect with 16+ years designing mission-critical enterprise middleware and distributed systems for Fortune 500 banks and healthcare providers.",
    initials: "SP",
    specialty: ["Enterprise Integration", "Distributed Systems", "Cloud Governance"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "2",
    name: "Rachel Chen",
    role: "VP of Cloud & DevOps Engineering",
    bio: "Former Kubernetes Foundation contributor and cloud reliability lead. Specializes in multi-cloud architecture, zero-downtime database migrations, and GitOps pipelines.",
    initials: "RC",
    specialty: ["Kubernetes (CKA)", "Terraform", "Site Reliability"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    role: "Head of Data Engineering & Streaming",
    bio: "Pioneered petabyte-scale event streaming pipelines at premier tech unicorns. Master of Apache Kafka, Snowflake lakehouses, and real-time operational BI.",
    initials: "VM",
    specialty: ["Apache Kafka", "Snowflake", "dbt & Real-Time Analytics"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "4",
    name: "Jessica Albright",
    role: "Principal Security & Compliance Architect",
    bio: "Certified Information Systems Security Professional (CISSP). Guides our engineering practices across SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliance certifications.",
    initials: "JA",
    specialty: ["SOC 2 Compliance", "API Security (OAuth2/mTLS)", "Zero Trust"],
    linkedin: "https://linkedin.com"
  }
];

