export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current: boolean
  description: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'worldquant',
    company: 'WorldQuant',
    role: 'Quantitative Research Consultant',
    period: 'June 2026 — Present',
    current: true,
    description: [
      'Developing quantitative trading models (alphas) designed to identify opportunities arising from market inefficiencies.',
      'Evaluating models through historical backtesting using long-term market data to assess robustness and consistency.',
    ],
    tags: ['Alpha Research', 'Quantitative Finance', 'Backtesting', 'Market Microstructure'],
  },
]
