'use client'
import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 lg:px-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="03 · Skills" title="Technical Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-7 group transition-all duration-400 hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_16px_48px_rgba(0,245,255,0.07)]"
              style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-grotesk font-semibold text-[#EAEAEA] text-sm">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-[10px] text-[#6B7280] border border-[rgba(0,245,255,0.1)] px-3 py-1.5 tracking-[1px] cursor-default transition-all hover:border-[#00F5FF] hover:text-[#00F5FF] hover:bg-[rgba(0,245,255,0.05)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
