export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    id: "ml-data",
    title: "Machine Learning & Data",
    items: [
      "LightGBM",
      "XGBoost",
      "Predictive modeling",
      "Feature engineering",
      "AI/ML product development",
      "PySpark",
      "pandas",
      "NumPy",
      "scikit-learn",
    ],
  },
  {
    id: "platforms",
    title: "Platforms & Tools",
    items: [
      "Databricks",
      "Feature Template Engine (FTE)",
      "Python",
      "SQL",
      "Streamlit",
      "React",
      "GitHub",
      "Cursor",
      "Visual Studio Code",
    ],
  },
  {
    id: "ai-enablement",
    title: "AI Enablement",
    items: [
      "GitHub Copilot",
      "Databricks Genie",
      "LLM-powered feature discovery",
      "Demo development",
      "Guided workflows",
      "Notebook-based training",
    ],
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    items: [
      "Healthcare analytics",
      "SAP Business Objects",
      "Oracle PL/SQL",
      "Data visualization",
      "Report specification & QA",
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    items: [
      "Backend systems",
      "Data pipelines",
      "Production support",
      "JavaScript",
      "C",
    ],
  },
  {
    id: "soft",
    title: "Cross-Functional Strengths",
    items: [
      "Stakeholder communication",
      "Cross-functional leadership",
      "Technical ↔ business translation",
      "Bilingual (EN / ES)",
      "Product-minded delivery",
    ],
  },
];
