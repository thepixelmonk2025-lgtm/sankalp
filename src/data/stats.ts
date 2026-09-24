// TODO: Replace with real statistics from client

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: { en: string; mr: string };
}

export const stats: Stat[] = [
  {
    id: 'beneficiaries',
    value: 5000,
    suffix: '+',
    label: { en: 'Beneficiaries Reached', mr: 'लाभार्थी' },
  },
  {
    id: 'villages',
    value: 30,
    suffix: '+',
    label: { en: 'Villages Covered', mr: 'गावे' },
  },
  {
    id: 'programs',
    value: 4,
    suffix: '',
    label: { en: 'Active Programs', mr: 'सक्रिय उपक्रम' },
  },
  {
    id: 'years',
    value: 8,
    suffix: '+',
    label: { en: 'Years of Service', mr: 'सेवेची वर्षे' },
  },
  {
    id: 'volunteers',
    value: 200,
    suffix: '+',
    label: { en: 'Volunteers', mr: 'स्वयंसेवक' },
  },
];
