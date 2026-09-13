import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, CheckCheck } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* silent */ }
  }

  return (
    <section id="contact" className="relative py-32 bg-[#080B0F]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-blue-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Let's build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              interesting.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-12"
          >
            Have a project, research idea, or technical problem worth exploring? Get in touch.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-3">Email</p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 group flex items-center gap-2"
              >
                {siteConfig.email}
                <Mail size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
              </a>
              <button
                onClick={copyEmail}
                className="p-2 text-slate-600 hover:text-slate-300 transition-colors rounded-lg hover:bg-white/5"
                aria-label="Copy email address"
              >
                {copied ? <CheckCheck size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.1] hover:border-white/25 text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5 text-sm font-medium"
                aria-label="GitHub profile"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.1] hover:border-white/25 text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5 text-sm font-medium"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.1] hover:border-white/25 text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5 text-sm font-medium"
            >
              <Mail size={16} />
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
