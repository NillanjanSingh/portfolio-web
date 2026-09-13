import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

// ─── Animated Network Visualization ─────────────────────────────────────────
interface Node {
  id: string
  label: string
  x: number
  y: number
  color: string
  children?: { label: string; angle: number }[]
}

const NODES: Node[] = [
  {
    id: 'center',
    label: 'NILLANJAN',
    x: 70, y: 70,
    color: '#3B82F6',
  },
  {
    id: 'ai',
    label: 'AI / ML',
    x: 70, y: 25,
    color: '#7C3AED',
  },
  {
    id: 'quant',
    label: 'QUANT',
    x: 115, y: 70,
    color: '#06B6D4',
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    x: 70, y: 115,
    color: '#10B981',
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    x: 25, y: 70,
    color: '#F59E0B',
  },
]

function NetworkVisualization() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // Animated pulsing dots along edges
  const [dotPos, setDotPos] = useState(0)
  useEffect(() => {
    let frame: number
    let t = 0
    const animate = () => {
      t = (t + 0.003) % 1
      setDotPos(t)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const centerX = 70
  const centerY = 70

  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto relative" aria-hidden="true">
      <svg viewBox="0 0 140 140" className="w-full h-full" style={{ overflow: 'visible' }}>
        {/* Grid dots */}
        {Array.from({ length: 8 }).map((_, i) =>
          Array.from({ length: 8 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={14 + i * 16}
              cy={14 + j * 16}
              r="0.4"
              fill="rgba(255,255,255,0.08)"
            />
          ))
        )}

        {/* Lines from center to main nodes */}
        {NODES.slice(1).map((node) => {
          const isActive = hovered === node.id || hovered === null

          const dx = node.x - centerX
          const dy = node.y - centerY
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Calculate intersection with circle boundaries
          const centerR = 18 // Radius of central node's outer ring
          const nodeR = 13   // Radius of outer node's outer ring

          const startX = centerX + (dx / dist) * centerR
          const startY = centerY + (dy / dist) * centerR

          const endX = node.x - (dx / dist) * nodeR
          const endY = node.y - (dy / dist) * nodeR

          // animated dot along edge
          const lineDx = endX - startX
          const lineDy = endY - startY
          const dotX = startX + lineDx * dotPos
          const dotY = startY + lineDy * dotPos

          return (
            <g key={node.id + '-edge'}>
              <motion.line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={node.color}
                strokeWidth="0.6"
                strokeOpacity={isActive ? 0.5 : 0.15}
                initial={{ pathLength: 0 }}
                animate={animated ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
              {/* Moving dot */}
              {animated && (
                <circle
                  cx={dotX}
                  cy={dotY}
                  r="1"
                  fill={node.color}
                  opacity={isActive ? 0.8 : 0.2}
                />
              )}
            </g>
          )
        })}



        {/* Main nodes */}
        {NODES.map((node, i) => {
          const isCenter = node.id === 'center'
          const isHovered = hovered === node.id
          const isActive = hovered === null || isHovered || isCenter

          return (
            <g
              key={node.id}
              style={{ cursor: isCenter ? 'default' : 'pointer' }}
              onMouseEnter={() => !isCenter && setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Outer glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCenter ? 18 : 13}
                fill="none"
                stroke={node.color}
                strokeWidth="0.5"
                opacity={isActive ? (isHovered ? 0.6 : 0.25) : 0.08}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={animated ? { scale: 1, opacity: isActive ? (isHovered ? 0.6 : 0.25) : 0.08 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />

              {/* Inner circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCenter ? 14 : 10}
                fill={isCenter ? `${node.color}22` : `${node.color}15`}
                stroke={node.color}
                strokeWidth={isCenter ? '0.8' : '0.6'}
                opacity={isActive ? 1 : 0.3}
                initial={{ scale: 0, opacity: 0 }}
                animate={animated ? { scale: 1, opacity: isActive ? 1 : 0.3 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15, type: 'spring' }}
              />

              {/* Label */}
              <motion.text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={isCenter ? '3.6' : '2.6'}
                fontFamily="JetBrains Mono, monospace"
                fontWeight={isCenter ? '700' : '600'}
                fill={node.color}
                opacity={isActive ? 1 : 0.3}
                initial={{ opacity: 0 }}
                animate={animated ? { opacity: isActive ? 1 : 0.3 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              >
                {node.label}
              </motion.text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080B0F]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-blue-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
                Computer Science @ IIT Tirupati
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-5"
            >
              Nillanjan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Singh
              </span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={item}
              className="font-mono text-base text-slate-400 mb-6 leading-relaxed"
            >
              <span className="text-blue-400">AI Engineer</span>
              <span className="text-slate-600 mx-2">|</span>
              <span className="text-cyan-400">Quant Enthusiast</span>
              <span className="text-slate-600 mx-2">|</span>
              <span className="text-emerald-400">Systems Builder</span>
            </motion.p>

            {/* Supporting text */}
            <motion.p
              variants={item}
              className="text-lg text-slate-400 leading-relaxed mb-3 max-w-lg"
            >
              I build intelligent and high-performance systems at the intersection of
              AI, quantitative finance, and software engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20 focus-visible:outline-blue-400"
              >
                Explore my work
                <ArrowRight size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/5 focus-visible:outline-blue-400"
              >
                Let's connect
              </button>


            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4 mt-10 pt-8 border-t border-white/[0.06]">
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-slate-500 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

            </motion.div>
          </motion.div>

          {/* Right — visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <NetworkVisualization />
          </motion.div>
        </div>

        {/* Mobile visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:hidden mt-12 max-w-[320px] mx-auto"
        >
          <NetworkVisualization />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
      </motion.div>
    </section>
  )
}
