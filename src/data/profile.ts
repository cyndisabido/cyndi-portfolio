export const profile = {
  name: "Cyndi Sabido",
  title: "Data Scientist | AI Enablement & Product Development",
  location: "Atlanta, GA",
  email: "cyndi.sabido@gmail.com",
  phone: "(901) 574-4418",
  profileImage: "/images/profile/profile.jpg",
  resumePath: "/resume/Cyndi_Sabido_Resume.pdf",
  heroHeadline: "Transforming Data through Data Science & AI Enablement",
  heroSubheadline:
    "Data scientist with a software engineering foundation. Leading and collaborating across machine learning, reusable feature template platforms, and user-facing tools—translating complex work into clear business value.",
  tagline:
    "Data Scientist · AI Enablement · Software Engineer",
  about: [
    "I'm a bilingual (English/Spanish) data scientist with a strong software engineering background and deep experience in healthcare analytics. I build AI-enabled data products and scalable analytics solutions that support clinical and operational decision-making.",
    "At Evernorth, I built and led the Feature Template Engine backend platform and contribute to a Template Store with LLM-powered feature discovery—helping teams generate reusable features and explore analytical assets through natural language.",
    "I've developed end-to-end ML solutions including GLP-1 utilization identification and opioid overdose risk models using Python, PySpark, Databricks, and LightGBM.",
    "I'm equally focused on AI enablement: practical demos, training materials, and guided workflows for technical and non-technical users—with tools like Cursor, Copilot, and Databricks Genie.",
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Native" },
  ],
  social: {
    linkedin: "https://linkedin.com/in/cyndisabido",
    github: "",
    kaggle: "https://www.kaggle.com",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Selected Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Profile = typeof profile;
