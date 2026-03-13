'use client'
import { motion } from 'framer-motion'
import { PERSON } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#111111] border-t border-[rgba(0,245,255,0.08)] px-6 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[11px] text-[#6B7280] tracking-[1px]">
          © 2026 <span className="text-[#00F5FF]">Piyush Srivastava</span>
        </div>
        <div className="font-mono text-[11px] text-[#6B7280] tracking-[1px]">
          AI/ML Engineer · LPU Phagwara
        </div>
        <div className="flex items-center gap-6">
          <a href={PERSON.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#6B7280] hover:text-[#00F5FF] transition-colors tracking-[1px]">
            GitHub
          </a>
          <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#6B7280] hover:text-[#00F5FF] transition-colors tracking-[1px]">
            LinkedIn
          </a>
          <a href={`mailto:${PERSON.email}`}
            className="font-mono text-[11px] text-[#6B7280] hover:text-[#00F5FF] transition-colors tracking-[1px]">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
