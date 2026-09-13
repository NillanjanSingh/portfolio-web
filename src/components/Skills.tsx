import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../data/skills'

const COLOR_MAP: Record<string, string> = {
  blue: '#3B82F6',
  violet: '#7C3AED',
  cyan: '#06B6D4',
  emerald: '#10B981',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-32 bg-[#080B0F]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[1px] bg-blue-400" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Tools I work with.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 mb-16 max-w-lg"
        >
          No proficiency bars — tools are tools. What matters is knowing when and how to use them.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const color = COLOR_MAP[group.color] || '#3B82F6'
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + gi * 0.1 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 group"
              >
                {/* Group header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-1 h-4 rounded-full" style={{ background: color }} />
                  <h3 className="text-sm font-semibold text-white font-mono">{group.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.35 + gi * 0.08 + si * 0.04 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-default"
                      style={{
                        borderColor: 'rgba(255,255,255,0.08)',
                        color: '#94A3B8',
                        background: 'rgba(255,255,255,0.025)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = color + '60'
                        e.currentTarget.style.color = color
                        e.currentTarget.style.background = color + '12'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.color = '#94A3B8'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
