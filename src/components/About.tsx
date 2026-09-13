import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const domains = [
  { label: 'AI / ML', color: '#7C3AED', detail: 'RAG · Agents · Pipelines · LLMs' },
  { label: 'Quantitative Finance', color: '#06B6D4', detail: 'Alphas · Models · Backtesting' },
  { label: 'Systems', color: '#10B981', detail: 'C++ · Rust · Architecture · POSIX' },
  { label: 'Software', color: '#F59E0B', detail: 'Full-Stack · Real-Time · Mobile' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-32 bg-[#080B0F]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-[1px] bg-blue-400" />
              <span className="font-mono font-bold text-sm uppercase tracking-[1.2em] text-blue-400">About</span>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-400 leading-relaxed text-[17px]"
            >
              <p>
                I'm a Computer Science student at IIT Tirupati who enjoys solving difficult
                technical problems and building things that work in the real world.
              </p>
              <p>
                My interests span AI/ML, quantitative finance, systems programming, and
                full-stack engineering. I enjoy going beneath abstractions—from implementing
                vector search and processor simulators to building RAG applications and
                quantitative trading models.
              </p>
              <p>
                I like learning by building, experimenting with ideas, and understanding
                what happens underneath the tools I use.
              </p>
            </motion.div>

            {/* Tech stack highlight */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 pt-8 border-t border-white/[0.06]"
            >
            </motion.div>
          </div>

          {/* Right — domain visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {domains.map((domain, i) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl transition-all duration-300 group-hover:opacity-100 opacity-50"
                  style={{ background: domain.color }}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="font-semibold text-white text-sm mb-1 group-hover:text-white transition-colors"
                      style={{ color: domain.color }}
                    >
                      {domain.label}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {domain.detail}
                    </p>
                  </div>

                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: `${domain.color}22` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: domain.color }} />
                  </div>
                </div>

                {/* Background number */}
                <span className="absolute right-4 bottom-1 font-mono text-6xl font-black text-white/[0.02] select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div >
    </section >
  )
}
