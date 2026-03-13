'use client'
import { motion } from 'framer-motion'
import { EDUCATION } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 lg:px-16 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="02 · Education" title="Academic Background" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-8 relative overflow-hidden group transition-all duration-400 hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_0_40px_rgba(0,245,255,0.06)]"
              style={{ clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#0080ff] group-hover:w-full transition-all duration-500" />

              <span className="font-mono text-[10px] text-[#00F5FF] tracking-[2px] uppercase bg-[rgba(0,245,255,0.07)] px-2 py-1 mb-4 inline-block">
                {edu.tag}
              </span>
              <h3 className="font-grotesk font-bold text-[#EAEAEA] text-base mb-2 leading-snug">{edu.degree}</h3>
              <div className="font-mono text-[#00F5FF] text-xs mb-1">{edu.school}</div>
              <div className="font-mono text-[#6B7280] text-[11px] tracking-[1px] mb-4">
                {edu.location} · {edu.period}
              </div>

              {edu.courses.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                  {edu.courses.map(c => (
                    <span key={c} className="font-mono text-[9px] text-[#6B7280] border border-[rgba(0,245,255,0.1)] px-2 py-1 tracking-[1px]">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
