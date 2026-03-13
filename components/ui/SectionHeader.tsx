'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-[#00F5FF] text-[11px] tracking-[4px] uppercase opacity-60">//</span>
        <span className="font-mono text-[#00F5FF] text-[11px] tracking-[4px] uppercase">{eyebrow}</span>
        <span className="flex-1 h-[1px] bg-[rgba(0,245,255,0.12)] max-w-[160px]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-grotesk font-bold leading-[0.95] tracking-[-2px]"
        style={{ fontSize: 'clamp(36px, 5.5vw, 58px)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[#6B7280] mt-4 font-inter text-base max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
