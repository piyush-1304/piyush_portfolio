'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PERSON } from '@/lib/data'

const titles = ['AI/ML Engineer', 'ML Researcher', 'Backend Developer', 'LLM Builder']

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = titles[titleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setTitleIdx(i => (i + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 lg:px-16 pt-24 pb-16 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(0,245,255,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-[rgba(0,128,255,0.06)] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_12px_#00F5FF] animate-pulse" />
            <span className="font-mono text-[#00F5FF] text-xs tracking-[4px] uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-grotesk font-bold leading-[0.92] tracking-[-4px] mb-4"
            style={{ fontSize: 'clamp(56px, 9vw, 110px)' }}
          >
            <span className="block text-[#EAEAEA]">Piyush</span>
            <span
              className="block"
              style={{ background: 'linear-gradient(135deg, #00F5FF 0%, #0080ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Srivastava
            </span>
          </motion.h1>

          {/* Typewriter title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-[#00F5FF] text-lg lg:text-2xl mb-6 h-8"
          >
            <span className="opacity-50">&lt; </span>
            {displayed}
            <span className="animate-blink text-[#00F5FF]">|</span>
            <span className="opacity-50"> /&gt;</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#6B7280] text-base lg:text-lg leading-relaxed max-w-xl mb-12 font-inter"
          >
            {PERSON.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="font-mono text-xs tracking-[2px] uppercase text-[#0D0D0D] bg-[#00F5FF] font-bold px-7 py-4 transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:-translate-y-0.5"
              style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
            >
              ⚡ View Projects
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-[2px] uppercase text-[#EAEAEA] border border-[rgba(0,245,255,0.2)] px-7 py-4 transition-all duration-300 hover:border-[#00F5FF] hover:text-[#00F5FF] hover:-translate-y-0.5"
              style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
            >
              ✉ Contact Me
            </a>
            <a
              href="#"
              onClick={e => { e.preventDefault(); alert('Connect via email to get the resume: 13piyush04@gmail.com') }}
              className="font-mono text-xs tracking-[2px] uppercase text-[#6B7280] border border-[rgba(255,255,255,0.06)] px-7 py-4 transition-all duration-300 hover:border-[rgba(0,245,255,0.2)] hover:text-[#EAEAEA] hover:-translate-y-0.5"
              style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 100%,10px 100%,0 calc(100% - 10px))' }}
            >
              ↓ Download Resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-20 pt-8 border-t border-[rgba(255,255,255,0.05)]"
          >
            {[
              { n: '7+', l: 'Projects' },
              { n: '200+', l: 'Problems' },
              { n: '4★', l: 'HackerRank' },
              { n: '7.73', l: 'CGPA' },
            ].map(s => (
              <div key={s.l}>
                <div className="font-grotesk font-bold text-2xl" style={{ background: 'linear-gradient(135deg, #00F5FF, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.n}
                </div>
                <div className="font-mono text-[10px] text-[#6B7280] tracking-[2px] mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 lg:left-16 flex items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#00F5FF] animate-pulse" />
        <span className="font-mono text-[10px] text-[#6B7280] tracking-[3px] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
