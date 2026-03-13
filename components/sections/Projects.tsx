'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { PROJECTS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="relative z-10 py-24 px-6 lg:px-16 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="04 · Work" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onHoverStart={() => setHovered(proj.id)}
              onHoverEnd={() => setHovered(null)}
              className={`relative bg-[#171717] border p-9 group transition-all duration-400 overflow-hidden ${
                proj.featured
                  ? 'md:col-span-2 border-[rgba(0,245,255,0.15)] bg-gradient-to-br from-[#171717] to-[rgba(0,245,255,0.02)]'
                  : 'border-[rgba(255,255,255,0.06)]'
              } ${hovered === proj.id ? 'border-[rgba(0,245,255,0.25)] shadow-[0_24px_64px_rgba(0,245,255,0.09)] -translate-y-1.5' : ''}`}
              style={{ clipPath: 'polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))' }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[rgba(0,245,255,0.04)] to-transparent transition-opacity duration-400 ${hovered === proj.id ? 'opacity-100' : 'opacity-0'}`} />

              {/* Featured badge */}
              {proj.featured && (
                <span className="absolute top-6 right-6 font-mono text-[9px] text-[#00F5FF] border border-[rgba(0,245,255,0.3)] px-2 py-1 tracking-[2px] uppercase">
                  Featured
                </span>
              )}

              <div className="relative z-10">
                <div className="font-mono text-[11px] text-[#00F5FF] opacity-50 tracking-[2px] mb-3">{proj.id} —</div>
                <h3 className="font-grotesk font-bold text-[#EAEAEA] text-lg mb-4 leading-snug">{proj.title}</h3>
                <p className="font-mono text-[11.5px] text-[#6B7280] leading-[1.8] mb-5">{proj.description}</p>

                {/* Impact */}
                {proj.impact.length > 0 && (
                  <div className="mb-5">
                    {proj.impact.map(item => (
                      <div key={item} className="flex items-start gap-2 mb-1">
                        <span className="text-[#00F5FF] font-mono text-xs mt-0.5">›</span>
                        <span className="font-mono text-[11px] text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map(t => (
                    <span key={t} className="font-mono text-[9px] text-[#00F5FF] border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.05)] px-2.5 py-1 tracking-[1px]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#00F5FF] flex items-center gap-2 hover:gap-4 transition-all duration-300"
                  >
                    View on GitHub →
                  </a>
                  <span className="font-mono text-[10px] text-[#6B7280]">{proj.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Piyush-1304"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-[2px] uppercase text-[#6B7280] border border-[rgba(255,255,255,0.06)] px-8 py-4 transition-all duration-300 hover:border-[rgba(0,245,255,0.25)] hover:text-[#00F5FF]"
            style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
          >
            <span>⌥</span> More Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
