export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "evernorth-ds",
    company: "Evernorth (Cigna)",
    role: "Data Scientist",
    location: "Atlanta, GA",
    startDate: "Oct 2022",
    endDate: "Present",
    highlights: [
      "Lead AI-enabled data products and analytics solutions supporting clinical and operational decision-making.",
      "Built and led the Feature Template Engine backend platform, enabling scalable and reusable feature generation for ML workflows.",
      "Contribute to a Template Store (backend + UI) with LLM-powered feature discovery so users can explore analytical assets through natural language.",
      "Support AI enablement through practical demos, training materials, and guided workflows for technical and non-technical users.",
      "Built and productionized clinical classification models for complex data populations using XGBoost, Python, PySpark, and Databricks.",
      "Designed fairness checks and mitigation strategies to reduce performance disparities across subgroups.",
      "Implemented model and data drift analysis; created actionable alerts and governance dashboards.",
      "Authored ground‐truth target logic templates for 11 models, standardizing definitions and accelerating iteration",
      "Developed a Random Forest regression model in Python, using GeoPandas and PySpark on Domino to analyze the relationship between the Social Determinant Index and Total Medical Cost at the neighborhood level, leveraging geospatial joins, hyperparameter tuning, and feature importance analysis to identify key cost drivers.",
      "Developed and standardized reusable features across diverse domains—Demographics, Medical Claims, GeoSpatial, Pharma, Oncology, and Behavioral—enabling consistent, high‐quality data assets for analytics and modeling teams enterprise‐wide.",
      "Onboarded teams via office hours, training notebooks; created multiple jupyter notebooks and videos for How to Use Feature Template Store.",
    ],
  },
  {
    id: "cigna-reporting",
    company: "Accredo Health (Cigna)",
    role: "Data Reporting Engineer",
    location: "Atlanta, GA",
    startDate: "Dec 2015",
    endDate: "Oct 2022",
    highlights: [
      "Delivered reporting and data solutions supporting operational performance and business decision-making.",
      "Partnered with stakeholders to translate requirements into analytical outputs and dashboards.",
      "Improved data quality, transformation logic, and usability of enterprise reporting assets.",
      "Built and maintained Business Objects and PL/SQL reports aligned to client contracts and regulatory requirements.",
      "Led high-priority research and QA initiatives across large report portfolios.",
    ],
  },
  {
    id: "express-scripts-ba",
    company: "Cigna / Express Scripts",
    role: "Business Analyst",
    location: "Memphis, TN",
    startDate: "Mar 2013",
    endDate: "Dec 2015",
    highlights: [
      "Translated business requirements into technical solutions and supported UAT, validation, and stakeholder communication.",
      "Partnered with developers and QA on test scripts, cases, and release validation.",
      "Supported clients through upgrades and new feature rollouts in approved environments.",
    ],
  },
  {
    id: "agilethought-se",
    company: "AgileThought",
    role: "Software Engineer",
    location: "Mérida, MX · Memphis, TN",
    startDate: "Oct 2006",
    endDate: "Mar 2013",
    highlights: [
      "Developed enterprise systems and data workflows, building a strong foundation in backend systems, pipelines, and software design.",
      "Provided production support for Accredo Health and Medco pharmaceutical systems under tight SLAs.",
      "Built and enhanced PL/SQL packages across prescriptions, claims, inventory, EDI, and HIPAA-compliant reporting.",
      "Acted as primary business contact—translating urgent issues into technical fixes with development and QA teams.",
    ],
  },
];
