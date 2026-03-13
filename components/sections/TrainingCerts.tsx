'use client'
import { motion } from 'framer-motion'
import { TRAINING, CERTIFICATIONS } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TrainingCerts() {
  return (
    <>
      {/* TRAINING */}
      <section id="training" className="relative z-10 py-24 px-6 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="05 · Training" title="Experience" />
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00F5FF] to-transparent" />
            {TRAINING.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-10 bg-[#171717] border border-[rgba(255,255,255,0.06)] p-8 transition-all hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_0_40px_rgba(0,245,255,0.06)]"
                style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)' }}
              >
                <div className="absolute -left-[41px] top-7 w-3 h-3 rounded-full bg-[#00F5FF] shadow-[0_0_16px_#00F5FF]" />
                <div className="font-mono text-[10px] text-[#00F5FF] tracking-[2px] mb-2">{item.date}</div>
                <h3 className="font-grotesk font-bold text-[#EAEAEA] text-lg mb-1">{item.title}</h3>
                <div className="font-mono text-xs text-[#6B7280] mb-4">{item.org}</div>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4 font-inter">{item.description}</p>
                <ul className="space-y-1">
                  {item.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-[#00F5FF] font-mono text-xs mt-0.5">›</span>
                      <span className="font-mono text-[11px] text-[#6B7280]">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="relative z-10 py-24 px-6 lg:px-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="06 · Credentials" title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-5 bg-[#171717] border border-[rgba(255,255,255,0.06)] p-6 transition-all hover:border-[rgba(0,245,255,0.25)] hover:shadow-[0_10px_40px_rgba(0,245,255,0.07)]"
                style={{ clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))' }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{cert.icon}</span>
                <div>
                  <div className="font-grotesk font-semibold text-[#EAEAEA] text-sm leading-snug mb-1">{cert.name}</div>
                  <div className="font-mono text-[10px] text-[#00F5FF] tracking-[1px]">{cert.issuer}</div>
                  <div className="font-mono text-[10px] text-[#6B7280] mt-1">{cert.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
