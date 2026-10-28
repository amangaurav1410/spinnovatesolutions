export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  avatar: string;
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
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    specialty: ["Enterprise Integration", "Distributed Systems", "Cloud Governance"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "2",
    name: "Rachel Chen",
    role: "VP of Cloud & DevOps Engineering",
    bio: "Former Kubernetes Foundation contributor and cloud reliability lead. Specializes in multi-cloud architecture, zero-downtime database migrations, and GitOps pipelines.",
    initials: "RC",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    specialty: ["Kubernetes (CKA)", "Terraform", "Site Reliability"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    role: "Head of Data Engineering & Streaming",
    bio: "Pioneered petabyte-scale event streaming pipelines at premier tech unicorns. Master of Apache Kafka, Snowflake lakehouses, and real-time operational BI.",
    initials: "VM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    specialty: ["Apache Kafka", "Snowflake", "dbt & Real-Time Analytics"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "4",
    name: "Jessica Albright",
    role: "Principal Security & Compliance Architect",
    bio: "Certified Information Systems Security Professional (CISSP). Guides our engineering practices across SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliance certifications.",
    initials: "JA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    specialty: ["SOC 2 Compliance", "API Security (OAuth2/mTLS)", "Zero Trust"],
    linkedin: "https://linkedin.com"
  }
];
