export type ExperienceEntry = {
  title: string;
  meta: string;
  points: string[];
  skills?: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string;
  contributions: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ServiceEntry = {
  title: string;
  description: string;
};
