interface Company {
  name: string;
  url: string;
  hasHashtag: boolean;
  isEmail: boolean;
  type: any;
  showExternalIcon: boolean;
}
export type JobType = {
  title: string;
  startDate: Date;
  endDate: Date;
  locationFormat: "remote" | "office" | "hybrid";
  workFormat: "part time" | "full time";
  description: string;
  requirements: string[];
  techStack: { name: string; iconName: string }[];
  company: Company;
};

export type ProjectType = {
  title: string;
  assets: string[];
  technologies: string[];
  description: string;
  type: "mobile" | "web" | "branding" | "native app";
  url: string;
  iconName: string;
};

export type TechStackType = {
  category: "Backend" | "Frontend" | "Mobile" | "DevOps" | "Others";
  technologies: string[];
};
