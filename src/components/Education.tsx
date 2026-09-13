import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const timeline = [
  { year: '2024', label: 'JEE Advanced', detail: 'AIR 4433' },
  { year: '2024', label: 'JEE Mains', detail: '99.46 percentile' },
  { year: '2024', label: 'CBSE Class 12', detail: '93%' },
  { year: '2022', label: 'CBSE Class 10', detail: '96.6%' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="relative py-32 bg-[#080B0F]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[1px] bg-blue-400" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Education</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          Education.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* IIT Tirupati — primary, large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] hover:border-blue-500/35 transition-all duration-300"
          >
            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Indian Institute of Technology Tirupati
                </h3>
                <p className="text-blue-400 font-medium text-sm mt-1">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-600 uppercase">Period</span>
                <span className="font-mono text-sm text-slate-300">2024 — 2028</span>
              </div>
            </div>
          </motion.div>

          {/* Academic timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-5">Academic record</p>
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.label}`}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <div className="w-12 text-center">
                  <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-slate-500 transition-colors">
                    {item.year}
                  </span>
                </div>
                <div className="w-px h-8 bg-white/[0.06]" />
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-white/60 group-hover:text-white/80 transition-colors">
                    {item.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
