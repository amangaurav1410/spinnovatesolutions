export interface Partner {
  name: string;
  category: "Cloud Provider" | "Enterprise Middleware" | "Data Lakehouse" | "CRM/ERP" | "Observability";
  description: string;
}

export const partnersData: Partner[] = [
  { name: "Amazon Web Services", category: "Cloud Provider", description: "Advanced Tier Integration Partner" },
  { name: "Microsoft Azure", category: "Cloud Provider", description: "Gold Cloud Platform Solutions Partner" },
  { name: "Google Cloud", category: "Cloud Provider", description: "Premier Cloud Architecture Partner" },
  { name: "MuleSoft", category: "Enterprise Middleware", description: "Certified Integration & API Specialists" },
  { name: "Salesforce", category: "CRM/ERP", description: "Enterprise AppExchange Integration" },
  { name: "Apache Kafka / Confluent", category: "Data Lakehouse", description: "Event Streaming Architecture Leaders" },
  { name: "Snowflake", category: "Data Lakehouse", description: "Select Tier Data Modernization Partner" },
  { name: "Datadog", category: "Observability", description: "Certified Infrastructure Monitoring Partner" }
];

