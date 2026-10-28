export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  metrics: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "api-middleware",
    title: "Enterprise System & API Integration",
    shortDesc: "Unified REST, GraphQL, and event-driven middleware architectures to connect enterprise applications seamlessly.",
    tagline: "Break down data silos with resilient API fabrics and microservices.",
    description: "We architect, build, and secure mission-critical API ecosystems and enterprise middleware. Whether unifying ERPs, CRMs, or legacy proprietary software, our custom connectors and ESB solutions provide bi-directional sync, sub-second latency, and fault-tolerant retry queues.",
    iconName: "Network",
    badge: "Core Specialty",
    features: [
      "Custom REST, GraphQL & gRPC API development",
      "MuleSoft, Boomi & Zapier/Workato enterprise connectors",
      "Event-driven webhooks & guaranteed message delivery",
      "API Gateway setup (Kong, Apigee, AWS API Gateway)",
      "OAuth2, mTLS & enterprise JWT authorization policies"
    ],
    techStack: ["MuleSoft", "GraphQL", "Kong", "Apigee", "Node.js", "Go", "Docker"],
    deliverables: [
      "API Design Spec (OpenAPI 3.0)",
      "Zero-Downtime Gateway Deployment",
      "Automated Contract Testing Suites",
      "Centralized Developer Portal & SDKs"
    ],
    metrics: "99.99% Guaranteed Uptime & Sub-25ms Latency"
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps Automation",
    shortDesc: "Scalable multi-cloud deployments, automated CI/CD pipelines, and enterprise Kubernetes governance.",
    tagline: "Modernize infrastructure for limitless scalability and continuous delivery.",
    description: "Transition your legacy infrastructure to high-availability cloud platforms. We design resilient multi-region architectures on AWS, Azure, and GCP, backed by Infrastructure as Code (Terraform) and automated GitOps pipelines.",
    iconName: "Cloud",
    badge: "Cloud Certified",
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
    metrics: "65% Faster Release Cycles & 35% Cloud Cost Reduction"
  },
  {
    id: "legacy-modernization",
    title: "Legacy Infrastructure Modernization",
    shortDesc: "Deconstruct brittle monoliths into agile microservices and cloud-native databases without business disruption.",
    tagline: "Eliminate technical debt and accelerate enterprise agility.",
    description: "Replace aging mainframe, AS/400, or monolithic systems with modular, maintainable cloud-native architectures. We employ strangler-fig migration patterns to incrementally decouple business services while preserving uninterrupted operations.",
    iconName: "Cpu",
    badge: "High ROI",
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

