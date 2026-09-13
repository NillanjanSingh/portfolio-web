import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#080B0F] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-slate-500">
            <span className="text-blue-400 font-semibold">Nillanjan Singh</span>
            {' '}© 2026
          </p>
          <p className="font-mono text-xs text-slate-700 mt-1 max-w-xs">
            Build things. Understand how they work. Then build them better.
          </p>
        </div>

        {/* Right — social */}
        <div className="flex items-center gap-4">
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {siteConfig.socials.linkedin && (
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-600 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
