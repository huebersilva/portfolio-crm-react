export type IconKey =
  | 'bolt'
  | 'tag'
  | 'bars'
  | 'recover'
  | 'star'
  | 'clock'
  | 'cap'
  | 'check'
  | 'shield';

export interface Stat {
  count: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface SkillItem {
  title: string;
  body: string;
}

export interface MockRow {
  name: string;
  sub: string;
  status: string;
  statusTone: 'done' | 'testing';
}

export interface Project {
  icon: IconKey;
  tag: string;
  title: string;
  body: string;
  resultValue: string;
  resultLabel: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  badge?: string;
  body: string;
  date: string;
  location: string;
}

export interface EduItem {
  icon: IconKey;
  title: string;
  body: string;
  badge: string;
}

export interface ToggleRow {
  label: string;
  sub: string;
  on: boolean;
}

export interface Content {
  htmlLang: string;
  nav: { skills: string; about: string; experience: string; work: string; education: string; contact: string };
  langSwitch: { self: string; otherLabel: string; otherHref: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mockTitle: string;
    mockColSegment: string;
    mockColStatus: string;
    mockRows: MockRow[];
    floatBrand: string;
    floatValue: string;
  };
  stats: Stat[];
  skills: {
    eyebrow: string;
    title: string;
    items: SkillItem[];
    chartTitle: string;
    chartPeriod: string;
    chartCaption: string;
    chartAriaLabel: string;
    chartTableCaption: string;
    chartTableBrand: string;
    chartTableValue: string;
  };
  about: {
    eyebrow: string;
    pre: string;
    highlight1: string;
    mid: string;
    highlight2: string;
    post: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Project[];
  };
  governance: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    panelTitle: string;
    releasedLabel: string;
    toggles: ToggleRow[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: EduItem[];
  };
  contact: {
    title: string;
    body: string;
    email: string;
    phone: string;
    phoneHref: string;
    linkedinLabel: string;
    linkedinHref: string;
    footer: string;
  };
}
