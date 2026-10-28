export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: "FinTech" | "E-commerce" | "Logistics" | "Healthcare" | "SaaS";
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  duration: string;
  impactQuote: string;
  authorTitle: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "global-banking-integration",
    title: "Core Banking Modernization & Open Banking API Gateway",
    client: "Apex Financial Group",
    industry: "FinTech",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    summary: "Integrated a 25-year-old mainframe core banking ledger with modern Open Banking PSD2 APIs and mobile banking apps.",
    challenge: "Apex Financial operated on an IBM mainframe with rigid batch processing. New digital banking features took up to 8 months to ship, and high-frequency queries risked locking core ledger records during trading hours.",
    solution: "SP Innovate Solutions designed an event-driven CDC (Change Data Capture) middleware layer using Apache Kafka and Debezium, streaming ledger transactions into an in-memory Redis cluster and PostgreSQL read-replicas. An Apigee-powered OAuth2 API Gateway was deployed for external fintech integrations.",
    results: [
      { label: "API Response Time", value: "< 18ms" },
      { label: "Integration Throughput", value: "45k req/sec" },
      { label: "Feature Delivery Cycle", value: "8 wks vs 8 mos" },
      { label: "Mainframe Load Reduction", value: "-62%" }
    ],
    techStack: ["Apache Kafka", "Apigee", "Go", "Redis", "PostgreSQL", "Docker", "AWS"],
    duration: "6 Months",
    impactQuote: "SP Innovate Solutions bridged a quarter-century of legacy technology with our modern mobile apps without a single minute of downtime.",
    authorTitle: "EVP of Digital Engineering, Apex Financial"
  },
  {
    id: "omnichannel-retail-erp",
    title: "Omnichannel ERP, Shopify Plus & WMS Synchronization",
    client: "Velox Retail Global",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "Real-time bi-directional synchronization across SAP S/4HANA, 14 regional warehouses, and Shopify Plus storefronts.",
    challenge: "Inventory discrepancies caused over 4,000 oversold orders during peak holiday seasons. Data sync occurred via fragile nocturnal cron jobs that frequently failed or timed out under high order volume.",
    solution: "We architected an event-driven integration bus using AWS EventBridge and custom MuleSoft connectors. Real-time webhooks on checkout events update SAP inventory in real time with dead-letter queue resilience and automated inventory reconciliation.",
    results: [
      { label: "Stock Discrepancy", value: "0.001%" },
      { label: "Order Sync Latency", value: "< 1.2 sec" },
      { label: "Peak Black Friday GMV", value: "$48M processed" },
      { label: "Annual Cost Savings", value: "$1.4M" }
    ],
    techStack: ["MuleSoft", "AWS EventBridge", "SAP S/4HANA", "Shopify Plus API", "TypeScript", "Snowflake"],
    duration: "4 Months",
    impactQuote: "We processed record-breaking Black Friday sales with zero stockouts or cancelled orders. The sync reliability is astounding.",
    authorTitle: "Chief Technology Officer, Velox Retail"
  },
  {
    id: "freight-telemetry-pipeline",
    title: "IoT Telemetry Pipeline & Predictive Fleet Routing",
    client: "TransLogix Worldwide",
    industry: "Logistics",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    summary: "Ingested 120,000 live truck sensor streams to optimize delivery schedules and provide automated ETA notifications.",
    challenge: "Sensors generated over 300 million events daily, overwhelming legacy relational databases and leaving dispatchers blind to real-time delays, refrigeration failures, or route deviations.",
    solution: "Deployed a distributed Google Cloud streaming architecture utilizing Cloud Pub/Sub, Dataflow (Apache Beam), and BigQuery. Integrated automated push webhooks into customer shipping portals and dispatch TMS.",
    results: [
      { label: "Daily Events Ingested", value: "350M+" },
      { label: "Delivery Delay Alert Time", value: "< 3 seconds" },
      { label: "Fleet Fuel Savings", value: "14% Year 1" },
      { label: "Dispatch Manual Calls", value: "-78%" }
    ],
    techStack: ["Google Cloud Pub/Sub", "Dataflow", "BigQuery", "Python", "Kubernetes", "Kafka"],
    duration: "5 Months",
    impactQuote: "Our dispatchers now know about mechanical delays before the driver even pulls over. A game-changer for logistics efficiency.",
    authorTitle: "VP of Logistics Technology, TransLogix"
  },
  {
    id: "hipaa-ehr-interoperability",
    title: "HIPAA-Compliant FHIR/HL7 Health Record Interoperability",
    client: "MedPulse Health Network",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    summary: "Built a secure, end-to-end encrypted interoperability bridge connecting Epic EHR, diagnostic laboratories, and patient portals.",
    challenge: "Patient health data was locked in proprietary on-premises Epic and Cerner silos, creating clinical communication delays and compliance vulnerabilities during diagnostic lab data transfers.",
    solution: "Engineered a HITRUST and HIPAA-compliant integration layer utilizing HL7/FHIR v4 standards, automated mTLS authentication, KMS field-level encryption, and audit trail logging.",
    results: [
      { label: "Diagnostic Turnaround", value: "3x Faster" },
      { label: "Compliance Score", value: "100% HIPAA/HITRUST" },
      { label: "Connected Clinics", value: "280+ facilities" },
      { label: "Data Breach Incident Rate", value: "0" }
    ],
    techStack: ["FHIR/HL7", "Azure Health Data Services", "Node.js", "Terraform", "PostgreSQL", "mTLS"],
    duration: "7 Months",
    impactQuote: "SP Innovate provided unmatched healthcare compliance and technical precision throughout our EHR integration rollout.",
    authorTitle: "Chief Medical Information Officer, MedPulse"
  },
  {
    id: "saas-multi-tenant-billing",
    title: "SaaS Platform Scalability & Multi-Tenant Metering",
    client: "CloudMatrix Systems",
    industry: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    summary: "Migrated a single-tenant enterprise software product into a multi-tenant cloud SaaS with automated usage billing.",
    challenge: "Scaling manual customer onboarding required spinning up isolated EC2 instances per tenant, causing ballooning AWS costs and a 3-week provisioning lag for enterprise accounts.",
    solution: "Re-architected the system into a multi-tenant microservices topology on AWS EKS with tenant-isolated database schemas, Stripe usage billing, and an automated tenant provisioning engine.",
    results: [
      { label: "Tenant Provisioning Time", value: "< 90 seconds" },
      { label: "AWS Hosting Bill", value: "-52%" },
      { label: "Active Enterprise Users", value: "250,000+" },
      { label: "Uptime SLA Maintained", value: "99.98%" }
    ],
    techStack: ["Next.js", "AWS EKS", "Terraform", "Stripe API", "PostgreSQL", "Redis", "Datadog"],
    duration: "6 Months",
    impactQuote: "We scaled our B2B SaaS revenue by 4x without hiring additional DevOps engineers thanks to SP Innovate's architecture.",
    authorTitle: "Founder & CEO, CloudMatrix"
  }
];
