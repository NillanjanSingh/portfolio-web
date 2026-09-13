import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { experiences } from '../data/experience'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-32 bg-[#0D1117]" ref={ref}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[1px] bg-blue-400" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          Where I've worked.
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="relative pl-8 md:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <motion.div
                className="absolute left-[-5px] md:left-[27px] top-1 w-[11px] h-[11px] rounded-full border-2 border-blue-400 bg-blue-400/20 z-10"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15, type: 'spring' }}
                aria-hidden="true"
              />
              {/* Current indicator */}
              {exp.current && (
                <motion.div
                  className="absolute left-[-8px] md:left-[24px] top-[-2px] w-[17px] h-[17px] rounded-full border border-blue-400/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
              )}

              {/* Content card */}
              <div className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.035] hover:border-white/[0.12] transition-all duration-300">

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 font-mono text-xs rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-blue-400 font-medium text-sm">{exp.role}</p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + pi * 0.1 }}
                      className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" aria-hidden="true" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-xs rounded-md border border-white/[0.08] text-slate-500 bg-white/[0.025]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
