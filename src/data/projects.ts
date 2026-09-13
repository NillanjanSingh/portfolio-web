export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  tech: string[]
  github?: string
  live?: string
  category: 'systems' | 'quant' | 'ai' | 'fullstack'
  featured?: boolean
  backtest?: string
  backtestDisclaimer?: string
}

export const projects: Project[] = [
  {
    id: 'vecs',
    number: '01',
    title: 'VECS',
    subtitle: 'High-Performance C++ Vector Store',
    description: 'An out-of-core vector search engine built from scratch in C++, designed to perform vector search without requiring the entire dataset to reside in RAM.',
    longDescription: [
      'POSIX mmap for out-of-core data access with zero-copy text serialization',
      'llama.cpp embedding pipeline with thread-local model instances',
      'Custom thread pool for concurrent query processing',
      'HNSW approximate nearest-neighbor search with dynamic multi-layer graph',
      'Fine-grained node locking for concurrent graph mutations',
    ],
    tech: ['C++', 'CMake', 'POSIX', 'llama.cpp', 'HNSW'],
    github: 'https://github.com/NillanjanSingh/vecs',
    category: 'systems',
    featured: true,
  },
  {
    id: 'verse',
    number: '02',
    title: 'VERSE',
    subtitle: 'RISC-V Architecture Simulator',
    description: 'A cycle-accurate RISC-V RV32IM simulator built in Rust, implementing a five-stage processor pipeline and a configurable memory hierarchy.',
    longDescription: [
      'Cycle-accurate 5-stage pipeline: Fetch → Decode → Execute → Memory → Writeback',
      'RV32IM ISA with full integer and multiply/divide support',
      'Dynamic memory layout, MMIO, and custom macro-assembler',
      'Pseudo-instruction expansion and strict 32-bit little-endian machine code',
      'L1 instruction cache, L1 data cache, L2 cache, and virtual memory trace replay',
      'Reproducible development environment via Nix',
    ],
    tech: ['Rust', 'RISC-V', 'Computer Architecture', 'Nix'],
    github: 'https://github.com/NillanjanSingh/verse',
    category: 'systems',
    featured: true,
  },
  {
    id: 'legalease',
    number: '03',
    title: 'LegalEase',
    subtitle: 'AI-Powered Legal Awareness App',
    description: 'A mobile application designed to make constitutional law awareness more accessible through an AI-powered conversational interface.',
    longDescription: [
      'Flutter frontend with custom UI components and persistent conversation state',
      'Retrieval-Augmented Generation over constitutional law documents',
      'LLM API integration with fallback mechanisms for fault tolerance',
      'Firebase Google authentication and session management',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'LLM APIs', 'RAG'],
    github: '', // Add when available
    category: 'ai',
    featured: true,
  },
  {
    id: 'unisphere',
    number: '04',
    title: 'Unisphere',
    subtitle: 'Real-Time Community Platform',
    description: 'A full-stack real-time community platform designed around scalable campus communication.',
    longDescription: [
      'Scalable server/channel ecosystem with low-latency messaging',
      'Real-time file sharing and infinite scrolling via Socket.io',
      'Audio/video conferencing powered by LiveKit',
      'PostgreSQL with Prisma ORM for type-safe data access',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'LiveKit'],
    github: '', // Add when available
    category: 'fullstack',
  },
  {
    id: 'iv-predictor',
    number: '05',
    title: 'Implied Volatility Predictor',
    subtitle: 'Machine Learning for Options',
    description: 'A machine learning pipeline for predicting implied volatility in options markets, focused on capturing nonlinear market dynamics and producing robust volatility surface models.',
    longDescription: [
      'Historical options data ingestion with feature analysis',
      'Nonlinear ML modeling for volatility surface construction',
      'Prediction error optimization and quantitative risk management',
      'PyTorch-based deep learning alongside classical sklearn baselines',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
    github: 'https://github.com/NillanjanSingh/implied-volatility-predictor',
    category: 'quant',
  },
  {
    id: 'overnight-return',
    number: '06',
    title: 'Overnight Return Predictor',
    subtitle: 'Systematic Equity Prediction',
    description: 'A leakage-free quantitative pipeline designed to forecast overnight equity gaps across a broad universe of assets.',
    longDescription: [
      '208 assets with intraday data and lazy loading for memory efficiency',
      'Feature engineering: OLS, Logistic Regression, EWMA, rolling kurtosis',
      'Tail-risk confidence scoring and next-open execution simulation',
      'Transaction-cost modeling at 15 bps round-trip with out-of-sample evaluation',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Scikit-learn'],
    github: 'https://github.com/NillanjanSingh/overnight-return-predictor',
    category: 'quant',
    backtest: '107% out-of-sample net return (May 2025 – Jul 2026)',
    backtestDisclaimer: 'Backtest result — not live investment performance',
  },
]
