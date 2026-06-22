export interface Preset {
  domain: string;
  name: string;
  type: string;
  seo: number;
  blog: number;
  linkedin: number;
  instagram: number;
  replies: number;
  faqs: number;
  updates: number;
  total: number;
}

export const PRESETS: Record<string, Preset> = {
  'acme-saas.com': {
    domain: 'acme-saas.com',
    name: 'Acme SaaS HQ',
    type: 'Software Company · Austin, TX',
    seo: 12,
    blog: 8,
    linkedin: 15,
    instagram: 2,
    replies: 9,
    faqs: 14,
    updates: 6,
    total: 66
  },
  'austindental.com': {
    domain: 'austindental.com',
    name: 'Austin Dental Clinic',
    type: 'Dental Clinic · Austin, TX',
    seo: 4,
    blog: 5,
    linkedin: 3,
    instagram: 8,
    replies: 5,
    faqs: 12,
    updates: 4,
    total: 41
  },
  'summitledger.com': {
    domain: 'summitledger.com',
    name: 'Summit Ledger & Co',
    type: 'Accounting Firm · Austin, TX',
    seo: 6,
    blog: 10,
    linkedin: 4,
    instagram: 1,
    replies: 7,
    faqs: 16,
    updates: 3,
    total: 47
  },
  'soleshoes.com': {
    domain: 'soleshoes.com',
    name: 'Sole Shoes Co.',
    type: 'Shoe Store · Austin, TX',
    seo: 8,
    blog: 6,
    linkedin: 5,
    instagram: 22,
    replies: 8,
    faqs: 10,
    updates: 8,
    total: 67
  },
  'default': {
    domain: 'yourbusiness.com',
    name: 'Your Business',
    type: 'Dental Clinic · Austin, TX',
    seo: 2,
    blog: 3,
    linkedin: 5,
    instagram: 5,
    replies: 4,
    faqs: 6,
    updates: 3,
    total: 28
  }
};
