import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, X, ChevronRight, AlertTriangle } from 'lucide-react'
import { projects, type Project } from '../data/projects'

// ─── Category colors ─────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  systems: '#10B981',
  quant:   '#06B6D4',
  ai:      '#7C3AED',
  fullstack: '#F59E0B',
}

// ─── Visualizations ───────────────────────────────────────────────────────────

function VecsViz() {
  const [step, setStep] = useState(0)
  const steps = ['Documents', 'Embeddings', 'HNSW Graph', 'Top-K Results']
  const colors = ['#3B82F6', '#7C3AED', '#06B6D4', '#10B981']

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 1800)
    return () => clearInterval(t)
  }, [steps.length])

  return (
    <div className="w-full h-36 flex items-center justify-center gap-2 select-none" aria-hidden="true">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`flex flex-col items-center transition-all duration-500 ${i === step ? 'scale-110' : 'opacity-40'}`}>
            <div className="w-2 h-2 rounded-full mb-1.5 transition-colors duration-500"
              style={{ background: i === step ? colors[i] : '#334155' }} />
            <div className="px-2 py-1 rounded text-[9px] font-mono border transition-all duration-500"
              style={{
                borderColor: i === step ? colors[i] + '66' : 'rgba(255,255,255,0.06)',
                color: i === step ? colors[i] : '#4B5563',
                background: i === step ? colors[i] + '15' : 'transparent',
              }}>
              {s}
            </div>
          </div>
          {i < steps.length - 1 && <ChevronRight size={10} className="text-slate-700 flex-shrink-0" />}
        </div>
      ))}
    </div>
  )
}

function VerseViz() {
  const stages = ['Fetch', 'Decode', 'Execute', 'Memory', 'WB']
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(s => (s + 1) % stages.length), 700)
    return () => clearInterval(t)
  }, [stages.length])

  return (
    <div className="w-full h-36 flex items-center justify-center" aria-hidden="true">
      <div className="flex items-center gap-1">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div className="px-2.5 py-3 rounded text-[9px] font-mono text-center transition-all duration-300"
              style={{
                background: i === active ? '#10B98120' : '#0F172A',
                border: `1px solid ${i === active ? '#10B981' : 'rgba(255,255,255,0.08)'}`,
                color: i === active ? '#10B981' : '#4B5563',
                transform: i === active ? 'translateY(-3px)' : 'none',
                minWidth: '44px',
                boxShadow: i === active ? '0 4px 12px rgba(16,185,129,0.15)' : 'none',
              }}>
              {s}
            </div>
            {i < stages.length - 1 && (
              <div className="w-3 h-px transition-all duration-300"
                style={{ background: i < active ? '#10B981' : 'rgba(255,255,255,0.1)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function LegalEaseViz() {
  const flow = ['User Query', 'Retrieval', 'Legal Context', 'LLM', 'Answer']
  const colors = ['#3B82F6', '#7C3AED', '#06B6D4', '#F59E0B', '#10B981']
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(s => (s + 1) % flow.length), 1200)
    return () => clearInterval(t)
  }, [flow.length])

  return (
    <div className="w-full h-36 flex items-center justify-center" aria-hidden="true">
      <div className="flex flex-col items-center gap-1">
        {flow.map((s, i) => (
          <div key={s} className="flex flex-col items-center">
            <div className="px-5 py-1.5 rounded text-[9px] font-mono transition-all duration-400 text-center w-32"
              style={{
                background: i === active ? colors[i] + '22' : 'transparent',
                border: `1px solid ${i === active ? colors[i] : 'rgba(255,255,255,0.07)'}`,
                color: i === active ? colors[i] : '#374151',
                transform: i === active ? 'scale(1.05)' : 'scale(1)',
                boxShadow: i === active ? `0 2px 12px ${colors[i]}25` : 'none',
              }}>
              {s}
            </div>
            {i < flow.length - 1 && (
              <div className="w-px h-2"
                style={{ background: i < active ? colors[i] + '80' : 'rgba(255,255,255,0.08)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function UnisphereViz() {
  return (
    <div className="w-full h-36 flex items-center justify-center gap-6" aria-hidden="true">
      <div className="flex flex-col items-center gap-0 text-[9px] font-mono">
        {[
          { label: 'Client', color: '#3B82F6' },
          { label: 'Next.js', color: '#7C3AED' },
          { label: 'API / WS', color: '#06B6D4' },
          { label: 'PostgreSQL', color: '#10B981' },
        ].map((item, i, arr) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="px-3 py-1 rounded border text-center min-w-[72px]"
              style={{ borderColor: item.color + '50', color: item.color, background: item.color + '12' }}>
              {item.label}
            </div>
            {i < arr.length - 1 && <div className="w-px h-2" style={{ background: item.color + '40' }} />}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-[9px] font-mono">
        {[
          { label: 'Socket.io', sub: 'Real-time', color: '#F59E0B' },
          { label: 'LiveKit', sub: 'Audio/Video', color: '#EC4899' },
        ].map((item) => (
          <div key={item.label} className="px-3 py-2 rounded border"
            style={{ borderColor: item.color + '50', color: item.color, background: item.color + '12' }}>
            <div className="font-semibold">{item.label}</div>
            <div style={{ fontSize: '8px', opacity: 0.7 }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IVViz() {
  const rows = 5
  const cols = 8
  const surface = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => {
      const x = (j / (cols - 1)) - 0.5
      const y = (i / (rows - 1)) - 0.5
      return 0.2 + 0.6 * (x * x * 3 + y * y * 2)
    })
  )
  const maxV = Math.max(...surface.flat())
  const minV = Math.min(...surface.flat())

  const colorFor = (v: number) => {
    const t = (v - minV) / (maxV - minV)
    const r = Math.round(59 + t * 196)
    const g = Math.round(130 - t * 80)
    const b = Math.round(246 - t * 240)
    return `rgb(${r},${g},${b})`
  }

  return (
    <div className="w-full h-36 flex items-end justify-center pb-2" aria-hidden="true">
      <div className="flex flex-col gap-0.5"
        style={{ transform: 'perspective(400px) rotateX(35deg) rotateZ(-3deg)' }}>
        {surface.map((row, i) => (
          <div key={i} className="flex gap-0.5">
            {row.map((v, j) => (
              <div key={j} className="rounded-sm"
                style={{ width: 16, height: v * 28, background: colorFor(v), opacity: 0.8 }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function OvernightViz() {
  const steps = ['208 Assets', 'Intraday', 'Features', 'OLS + LR', 'EWMA', 'Execution']
  const colors = ['#06B6D4', '#3B82F6', '#7C3AED', '#F59E0B', '#10B981', '#EC4899']
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(s => (s + 1) % steps.length), 1000)
    return () => clearInterval(t)
  }, [steps.length])

  return (
    <div className="w-full h-36 flex flex-wrap items-center justify-center gap-1.5 px-4 content-center" aria-hidden="true">
      {steps.map((s, i) => (
        <div key={s} className="px-2.5 py-1.5 rounded text-[9px] font-mono transition-all duration-300"
          style={{
            background: i === active ? colors[i] + '20' : 'transparent',
            border: `1px solid ${i === active ? colors[i] : 'rgba(255,255,255,0.08)'}`,
            color: i === active ? colors[i] : '#4B5563',
            transform: i === active ? 'scale(1.1)' : 'scale(1)',
            boxShadow: i === active ? `0 2px 8px ${colors[i]}20` : 'none',
          }}>
          {s}
        </div>
      ))}
    </div>
  )
}

const VIZ_MAP: Record<string, () => JSX.Element> = {
  vecs: VecsViz,
  verse: VerseViz,
  legalease: LegalEaseViz,
  unisphere: UnisphereViz,
  'iv-predictor': IVViz,
  'overnight-return': OvernightViz,
}

// ─── Project Card ─────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project
  index: number
  onExpand: (p: Project) => void
}

function ProjectCard({ project, index, onExpand }: ProjectCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const VizComponent = VIZ_MAP[project.id]
  const color = CATEGORY_COLORS[project.category]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => onExpand(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onExpand(project) }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${color}00, ${color}80, ${color}00)` }} />

      {/* Visualization */}
      <div className="px-4 pt-5 pb-2 border-b border-white/[0.05] bg-[#0a0f1a]/50 min-h-[160px] flex items-center">
        {VizComponent && <VizComponent />}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-slate-600">{project.number}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase"
                style={{ color, background: color + '15', border: `1px solid ${color}30` }}>
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5 font-mono">{project.subtitle}</p>
          </div>
          <ChevronRight size={16}
            className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 font-mono text-[10px] rounded border border-white/[0.08] text-slate-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

// ─── Project Modal ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const VizComponent = VIZ_MAP[project.id]
  const color = CATEGORY_COLORS[project.category]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#0D1117] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${color}00, ${color}, ${color}00)` }} />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-slate-600">{project.number}</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase"
              style={{ color, background: color + '15', border: `1px solid ${color}30` }}>
              {project.category}
            </span>
          </div>

          <h2 id="modal-title" className="text-3xl font-bold text-white mb-1">{project.title}</h2>
          <p className="font-mono text-sm text-slate-500 mb-6">{project.subtitle}</p>

          {VizComponent && (
            <div className="rounded-xl border border-white/[0.07] bg-[#080B0F] mb-6 px-4 py-2">
              <VizComponent />
            </div>
          )}

          <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Technical Details</h3>
            <ul className="space-y-2">
              {project.longDescription.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.backtest && (
            <div className="mb-6 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-300 font-mono text-xs font-semibold mb-1">
                    {project.backtestDisclaimer}
                  </p>
                  <p className="text-slate-400 text-sm">{project.backtest}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 font-mono text-xs rounded-md border border-white/[0.08] text-slate-400">
                  {t}
                </span>
              ))}
            </div>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 text-sm text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/5"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} />
                View on GitHub
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-600">GitHub link coming soon</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Projects Section ─────────────────────────────────────────────────────────
export default function Projects() {
  const [expanded, setExpanded] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-32 bg-[#080B0F]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-blue-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Things I've Built.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-xl"
          >
            Projects where AI, systems, mathematics, and software meet.{' '}
            <span className="text-slate-600">Click any project for details.</span>
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onExpand={setExpanded}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <ProjectModal project={expanded} onClose={() => setExpanded(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
