export interface FAQItem {
  question: string;
  answer: string;
  category: "Strategy & Timing" | "Security & Compliance" | "Architecture & Technology" | "Support & SLA";
}

export const faqsData: FAQItem[] = [
  {
    question: "How do you ensure zero downtime during legacy system migrations?",
    answer: "We utilize proven blue-green cutover models and the Strangler Fig architectural pattern. Instead of a 'big bang' switch, we establish real-time bi-directional change data capture (CDC) pipelines between your legacy database and the target cloud systems. Both systems run in parallel with automated consistency verification until the new microservices are thoroughly verified, enabling risk-free instant cutover.",
    category: "Strategy & Timing"
  },
  {
    question: "How long does a typical enterprise system integration project take?",
    answer: "Project timelines depend on system complexity and the number of integration endpoints. Targeted point-to-point or webhook integrations typically complete in 2 to 4 weeks. Broad enterprise transformations—such as unifying an ERP with e-commerce, CRM, and real-time streaming warehouses—generally span 3 to 6 months with bi-weekly deployable milestones.",
    category: "Strategy & Timing"
  },
  {
    question: "How do you handle security, encryption, and regulatory compliance (SOC 2, HIPAA, GDPR)?",
    answer: "Security is engineered into the foundation of every bridge we build. All data in transit is encrypted using TLS 1.3 with mutual TLS (mTLS) where applicable. Sensitive records are encrypted at rest with customer-managed keys (KMS). We enforce OAuth 2.0 with JWT verification, zero-trust RBAC policies, and comprehensive audit trails designed to pass SOC 2 Type II, HIPAA, and GDPR regulatory scrutiny.",
    category: "Security & Compliance"
  },
  {
    question: "Can you build custom connectors for proprietary, in-house legacy software?",
    answer: "Yes. In addition to commercial integration suites (like MuleSoft, Workato, Boomi), our team regularly develops custom microservice connectors in Go, Node.js, and Python. We interface with legacy systems via database triggers, proprietary sockets, message queues, flat-file SFTP drops, or raw RPC endpoints.",
    category: "Architecture & Technology"
  },
  {
    question: "What does post-launch support and ongoing SLA coverage look like?",
    answer: "We offer enterprise Support Level Agreements (SLAs) including 24/7/365 active observability, automated synthetic health transactions, and guaranteed response times as fast as 15 minutes for critical severity incidents. Ongoing services include security patching, API version migration, and capacity scaling.",
    category: "Support & SLA"
  },
  {
    question: "Do our internal development teams retain full code ownership and documentation?",
    answer: "Absolutely. All source code, Terraform configurations, OpenAPI specifications, and architecture diagrams are pushed directly into your enterprise repositories (e.g. GitHub Enterprise, GitLab). We conduct thorough knowledge-transfer workshops and recorded handover walkthroughs for your engineering team.",
    category: "Architecture & Technology"
  }
];

