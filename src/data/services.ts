export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  image: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  metrics: string;
  methodology?: { step: string; title: string; desc: string }[];
  faqs?: ServiceFaqItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "integration-business-analyst",
    title: "Enterprise System Integration & Business Analysis",
    shortDesc: "End-to-end business process modeling, requirement engineering, and robust API & middleware architectures connecting complex enterprise systems.",
    tagline: "Bridge the gap between strategic business objectives and bulletproof technical execution.",
    description: "Our premier flagship service integrates strategic business analysis with robust enterprise system integration. We discover bottlenecks, map existing and future workflows, define rigorous technical specifications, and engineer resilient integration pipelines across ERPs, CRMs, legacy databases, and cloud platforms. We eliminate data silos, automate complex cross-system handoffs, and ensure every technical integration directly accelerates business performance.",
    iconName: "Network",
    badge: "Flagship Primary Service",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Process Discovery & Value-Stream Mapping (BPMN 2.0)",
      "Business & Technical Requirement Specification (BRD/FRD)",
      "Platform-Agnostic Enterprise Middleware & Custom Connectors",
      "Real-time Bi-directional Data Sync & Event-Driven Architecture",
      "API Gateway Governance (Kong, Apigee, MuleSoft, Boomi)",
      "Compliance & Data Sovereignty Governance (Privacy Act, GDPR, SOC2)"
    ],
    techStack: [
      "MuleSoft",
      "Boomi",
      "Workato",
      "GraphQL",
      "REST / gRPC",
      "Apache Kafka",
      "Kong API Gateway",
      "Node.js / TypeScript",
      "Jira & Confluence"
    ],
    deliverables: [
      "End-to-End Business Requirements & Architecture Specification",
      "Enterprise Service Bus (ESB) & Reusable API Ecosystem",
      "Zero-Downtime System Cutover & Data Migration Strategy",
      "Automated Integration Testing & Synthetic Health Monitoring",
      "Executive Dashboard for Data Flow Transparency & Error Auditing"
    ],
    metrics: "99.99% Uptime, Sub-50ms Transaction Latency & 70% Reduction in Manual Processes",
    methodology: [
      {
        step: "01",
        title: "Stakeholder Discovery & Process Mapping",
        desc: "We interview key operational stakeholders, audit existing software silos, and map true information flow across your organization."
      },
      {
        step: "02",
        title: "Specification & Data Contract Design",
        desc: "We draft precise Business Requirement Documents (BRD) and OpenAPI 3.0 contracts that eliminate ambiguity between business and IT."
      },
      {
        step: "03",
        title: "Platform-Agnostic Middleware Architecture",
        desc: "We build resilient, decoupled integration layers with automated retry queues, idempotent endpoints, and strict validation."
      },
      {
        step: "04",
        title: "Validation, Testing & Go-Live Governance",
        desc: "Through automated regression testing and parallel runs, we execute smooth, zero-downtime cutovers backed by full documentation."
      }
    ],
    faqs: [
      {
        question: "Why combine Business Analysis with System Integration?",
        answer: "Most integration projects fail not because of coding errors, but because of misunderstood business logic and disjointed process handoffs. By pairing experienced Business Analysts directly with integration architects, we ensure your systems talk to each other in direct alignment with real-world business workflows."
      },
      {
        question: "Do you lock us into a proprietary integration platform?",
        answer: "Never. We are strictly platform-agnostic. Whether your organization uses MuleSoft, Boomi, Workato, Azure Logic Apps, AWS EventBridge, or custom open-source microservices, we build modular, reusable APIs that you fully own."
      },
      {
        question: "How do you handle sensitive data and Australian privacy regulations?",
        answer: "All integrations are engineered with end-to-end encryption in transit (mTLS/TLS 1.3) and at rest, tokenized PII handling, and strict adherence to the Australian Privacy Act, APRA CPS 234, and global SOC2 standards."
      }
    ]
  },
  {
    id: "business-analyst",
    title: "Strategic Business Analysis & Requirements Engineering",
    shortDesc: "Transform ambiguity into actionable roadmaps. Our senior BAs clarify business cases, define system requirements, and orchestrate change management.",
    tagline: "Define what should change, why it matters, and how to verify success.",
    description: "Avoid expensive software missteps. Our senior business analysts partner with your C-suite, operations leaders, and engineering teams to identify root causes, formalize user stories, model process workflows, and evaluate vendor solutions. We translate high-level company vision into testable, high-impact functional requirements.",
    iconName: "FileSpreadsheet",
    badge: "Core Service",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Strategic Business Case Development & Cost-Benefit Analysis",
      "Process Optimization & As-Is / To-Be Workflow Modeling",
      "Agile User Story Mapping & Backlog Grooming",
      "Vendor Assessment & RFP / RFI Tender Management",
      "User Acceptance Testing (UAT) Coordination & Governance"
    ],
    techStack: [
      "Jira Enterprise",
      "Confluence",
      "Miro / Figma",
      "Lucidchart / BPMN",
      "SQL Data Validation",
      "Power BI",
      "Notion"
    ],
    deliverables: [
      "Comprehensive Business Requirements Document (BRD)",
      "Interactive Process Workflow Diagrams & Flowcharts",
      "Agile Product Backlog with Detailed Acceptance Criteria",
      "Vendor Evaluation Matrix & Strategic Recommendation Memo",
      "UAT Test Plan & Stakeholder Sign-Off Matrix"
    ],
    metrics: "4x Faster Project Delivery & 85% Reduction in Scope Creep",
    methodology: [
      {
        step: "01",
        title: "Root Cause Investigation",
        desc: "We analyze operational bottlenecks and separate actual business needs from superficial feature requests."
      },
      {
        step: "02",
        title: "Future-State Process Design",
        desc: "We create lean, modernized workflow blueprints that streamline operations before committing to software builds."
      },
      {
        step: "03",
        title: "Requirement Engineering",
        desc: "We write unambiguous user stories, edge-case conditions, and acceptance criteria ready for engineering sprints."
      },
      {
        step: "04",
        title: "Change Management & UAT",
        desc: "We guide business teams through testing, pilot validation, and organizational rollout to maximize adoption."
      }
    ],
    faqs: [
      {
        question: "When should we bring in a Business Analyst?",
        answer: "The best time is before any code is written or vendor contracts are signed. Bringing in a BA during strategic planning prevents costly re-work, eliminates scope creep, and ensures technology directly serves measurable business KPIs."
      },
      {
        question: "Can your Business Analysts work with our internal development team?",
        answer: "Yes, our BAs seamlessly embed into internal Scrum/Kanban teams, collaborating with Product Owners and developers to refine backlogs and clarify functional requirements."
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps Automation",
    shortDesc: "Scalable multi-cloud deployments, automated CI/CD pipelines, and enterprise Kubernetes governance.",
    tagline: "Modernize infrastructure for limitless scalability and continuous delivery.",
    description: "Transition your legacy infrastructure to high-availability cloud platforms. We design resilient multi-region architectures on AWS, Azure, and GCP, backed by Infrastructure as Code (Terraform) and automated GitOps pipelines.",
    iconName: "Cloud",
    badge: "Cloud Certified",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-cloud migration & zero-downtime cutover strategy",
      "Container orchestration with Kubernetes (EKS, AKS, GKE)",
      "Infrastructure as Code (Terraform, Pulumi, CloudFormation)",
      "GitOps CI/CD pipelines (GitHub Actions, GitLab, ArgoCD)",
      "24/7 Observability & APM (Datadog, Prometheus, Grafana)"
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
    deliverables: [
      "Cloud Architecture Blueprint & Well-Architected Review",
      "Automated Terraform Infrastructure Modules",
      "Full CI/CD Pipeline Configuration",
      "Disaster Recovery & Multi-AZ Failover Playbook"
    ],
    metrics: "65% Faster Release Cycles & 35% Cloud Cost Reduction",
    methodology: [
      {
        step: "01",
        title: "Cloud Readiness & Security Audit",
        desc: "Review current compute, network topology, and compliance posture against Well-Architected frameworks."
      },
      {
        step: "02",
        title: "IaC & Multi-Environment Blueprinting",
        desc: "Codify infrastructure with Terraform to guarantee reproducible, automated environments from dev to prod."
      },
      {
        step: "03",
        title: "Automated Deployment Pipelines",
        desc: "Build self-testing GitOps CI/CD workflows that deploy updates with zero user downtime."
      },
      {
        step: "04",
        title: "Observability & SRE Handover",
        desc: "Configure automated alerting, runbooks, and synthetic monitoring for complete visibility."
      }
    ]
  },
  {
    id: "legacy-modernization",
    title: "Legacy Infrastructure Modernization",
    shortDesc: "Deconstruct brittle monoliths into agile microservices and cloud-native databases without business disruption.",
    tagline: "Eliminate technical debt and accelerate enterprise agility.",
    description: "Replace aging mainframe, AS/400, or monolithic systems with modular, maintainable cloud-native architectures. We employ strangler-fig migration patterns to incrementally decouple business services while preserving uninterrupted operations.",
    iconName: "Cpu",
    badge: "High ROI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Monolith decomposition via Strangler Fig pattern",
      "Legacy database migration (Oracle/SQL Server to PostgreSQL/Cloud Spanner)",
      "COBOL, .NET Framework & Java EE modernization to modern Go/Node/TypeScript",
      "Automated regression testing & parallel run verification",
      "Security remediation & modern compliance retrofitting"
    ],
    techStack: ["PostgreSQL", "Cloud Spanner", "Docker", "Node.js", "TypeScript", "Redis"],
    deliverables: [
      "Legacy Audit & Dependency Graph",
      "Strangler Pattern Roadmap & Milestones",
      "Automated Data Replication Sync Layer",
      "Zero-Disruption Cutover Plan"
    ],
    metrics: "Zero Business Interruption & 80% Reduction in Maintenance Overhead"
  },
  {
    id: "data-pipelines",
    title: "Real-Time Data Pipelines & BI Integration",
    shortDesc: "Streaming ETL/ELT pipelines, enterprise data lakes, and automated analytics for real-time decision intelligence.",
    tagline: "Turn disjointed raw logs and records into instant actionable insights.",
    description: "Harness the full value of your enterprise data. We engineer petabyte-scale streaming and batch data pipelines using Apache Kafka, Snowflake, BigQuery, and dbt to feed live executive dashboards and predictive AI models.",
    iconName: "Database",
    badge: "Data & AI Ready",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time event streaming with Apache Kafka & Confluent",
      "Scalable data lakehouse setup (Snowflake, BigQuery, Databricks)",
      "Automated ETL/ELT transformation modeling with dbt",
      "Data lineage, cataloging & strict governance (GDPR/HIPAA)",
      "Live BI Dashboard integration (PowerBI, Tableau, Looker)"
    ],
    techStack: ["Apache Kafka", "Snowflake", "Google BigQuery", "dbt", "Airflow", "Databricks", "Python"],
    deliverables: [
      "Data Lakehouse Schema & Partitioning Model",
      "Automated Real-Time Streaming Ingestion Engine",
      "Data Quality & Validation Monitoring Alerts",
      "Executive Analytics & BI Semantic Layer"
    ],
    metrics: "Real-Time Data Sync Under 500ms & 10x Query Speedup"
  },
  {
    id: "saas-engineering",
    title: "Custom SaaS Engineering & Maintenance",
    shortDesc: "End-to-end multi-tenant SaaS platforms engineered for security, high concurrency, and recurring growth.",
    tagline: "Build custom digital products tailored to your specialized market.",
    description: "From greenfield product inception to scaling existing B2B SaaS applications, we deliver robust, accessible, and high-performing web platforms. Featuring multi-tenant isolation, enterprise SSO (SAML/Okta), automated billing, and 99.95% SLAs.",
    iconName: "Layers",
    badge: "Turnkey Solution",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-tenant architecture with tenant-level data isolation",
      "Enterprise Single Sign-On (SAML, Okta, Azure AD, Auth0)",
      "Stripe & Paddle usage-based billing integration",
      "Role-Based Access Control (RBAC) & detailed audit trails",
      "Ongoing proactive monitoring, security patching & SLA support"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Stripe", "Auth0"],
    deliverables: [
      "Production-Ready Web Application & Mobile API",
      "Enterprise Tenant Management Portal",
      "Comprehensive Integration Documentation",
      "24/7 SLA Engineering Support Agreement"
    ],
    metrics: "99.95% Availability SLA & SOC2 Ready Architecture"
  }
];
