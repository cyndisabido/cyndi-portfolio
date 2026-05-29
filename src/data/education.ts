export type EducationItem = {
  id: string;
  institution: string;
  credential: string;
  location: string;
  period: string;
  details?: string;
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  details?: string;
};

export type AwardItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    id: "itm-degree",
    institution: "Instituto Tecnológico de Mérida",
    credential: "B.S. Computer Systems Engineering",
    location: "Mérida, Yucatán, México",
    period: "Aug 2000 – Jan 2005",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "ibm-ds",
    name: "IBM Data Science Professional Certificate",
    issuer: "Coursera / IBM",
    details: "Foundations through applied data science and machine learning workflows.",
  },
  {
    id: "ecornell-ml",
    name: "Applied Machine Learning and AI",
    issuer: "eCornell",
    details: "Applied machine learning methods and AI techniques for real-world data problems.",
  },
  {
    id: "cigna-genai",
    name: "Generative AI Technician",
    issuer: "Cigna",
    details: "Generative AI tools and workflows for enterprise data and analytics teams.",
  },
];

export const awards: AwardItem[] = [
  {
    id: "chaits-contest",
    title: "2nd Place — National Creativity Contest",
    organization: "Instituto Tecnológico de Mérida",
    period: "Summer 2004",
    description:
      "Co-designed Chaits, an educational science app in Macromedia Flash that used interactive cartoons to help children learn everyday science concepts.",
  },
];
