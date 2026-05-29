export type ProjectCategory =
  | "Platform"
  | "Machine Learning"
  | "AI Enablement"
  | "Analytics";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  businessProblem: string;
  built: string;
  impact: string;
  tools: string[];
  skills: string[];
};

export const projectCategories: ProjectCategory[] = [
  "Platform",
  "Machine Learning",
  "AI Enablement",
];

export const projects: Project[] = [
  {
    id: "feature-template-engine",
    title: "Feature Template Engine (FTE)",
    category: "Platform",
    businessProblem:
      "ML teams needed a scalable backend to generate, reuse, and govern features across healthcare models—without rebuilding logic for every new use case.",
    built:
      "Led the Feature Template Engine platform: backend services for reusable feature generation integrated with Databricks and PySpark workflows, plus documentation and onboarding for data scientists and engineers.",
    impact:
      "Standardized feature development across ML teams and reduced duplicate engineering work on shared healthcare analytics patterns.",
    tools: ["Python", "PySpark", "Databricks", "SQL", "GitHub"],
    skills: ["Platform leadership", "Feature engineering", "ML infrastructure"],
  },
  {
    id: "opioid-overdose-risk",
    title: "Opioid Overdose Risk Model",
    category: "Machine Learning",
    businessProblem:
      "Healthcare stakeholders required an evidence-based approach to identify opioid overdose risk to support proactive clinical and operational interventions.",
    built:
      "Developed a full ML pipeline—feature templates, model training with LightGBM, and validation workflows on Databricks—aligned to regulated healthcare data standards.",
    impact:
      "Enabled data-driven risk identification to inform clinical and operational decision-making in a high-stakes healthcare context.",
    tools: ["Python", "PySpark", "Databricks", "LightGBM", "XGBoost"],
    skills: ["Risk modeling", "Feature engineering", "Model validation"],
  },
  {
    id: "ai-enablement-program",
    title: "AI Enablement Demos & Workflows",
    category: "AI Enablement",
    businessProblem:
      "Teams across the organization needed practical, trustworthy ways to adopt AI-assisted development and analytics—not abstract tool overviews.",
    built:
      "Hands-on demos, training materials, and guided workflows using Cursor, GitHub Copilot, and Databricks Genie—tailored for both technical and non-technical users.",
    impact:
      "Accelerated AI tool adoption with reusable examples grounded in real healthcare data and platform work.",
    tools: ["Cursor", "GitHub Copilot", "Databricks Genie", "Python", "Jupyter"],
    skills: ["AI enablement", "Technical training", "Workflow design"],
  },
  {
    id: "glp1-utilization",
    title: "GLP-1 Utilization Identification",
    category: "Machine Learning",
    businessProblem:
      "Clinical and operational teams needed a reliable way to identify GLP-1 utilization patterns from complex healthcare claims and pharmacy data.",
    built:
      "End-to-end ML solution from feature engineering through model training and validation, using Python, PySpark, Databricks, and LightGBM on large-scale healthcare datasets.",
    impact:
      "Delivered a production-ready analytical model supporting clinical and operational decision-making around GLP-1 utilization.",
    tools: ["Python", "PySpark", "Databricks", "LightGBM", "SQL"],
    skills: ["Predictive modeling", "Healthcare analytics", "End-to-end ML"],
  },
];
