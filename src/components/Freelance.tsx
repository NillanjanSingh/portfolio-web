import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  'AI / ML prototypes',
  'LLM applications',
  'RAG systems',
  'AI agents',
  'ML pipelines',
  'Data analysis',
  'Automation',
  'Full-stack applications',
  'Mobile applications',
  'Quantitative research',
  'C++ / systems engineering',
]

export default function Freelance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 bg-[#0D1117]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-blue-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Freelance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Need something built?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-10"
          >
            I'm available for freelance projects involving AI, machine learning, intelligent
            applications, automation, data-driven systems, and software engineering.
          </motion.p>

          {/* Services grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {services.map((service, i) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                className="px-3 py-1.5 text-sm rounded-lg border border-white/[0.08] text-slate-400 bg-white/[0.025] hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/[0.06] transition-all duration-200 cursor-default"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20 group"
          >
            Let's build something
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
