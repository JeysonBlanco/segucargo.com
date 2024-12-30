export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  company: string;
  description: string;
  image: string;
  metrics: Metric[];
}