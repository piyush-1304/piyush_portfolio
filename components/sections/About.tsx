'use client'
import { motion } from 'framer-motion'
import { PERSON } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

const socials = [
  { icon: '⌥', label: 'GitHub', value: 'github.com/Piyush-1304', href: 'https://github.com/Piyush-1304' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/piyushsr13', href: 'https://www.linkedin.com/in/piyushsr13' },
  { icon: '✉', label: 'Email', value: '13piyush04@gmail.com', href: 'mailto:13piyush04@gmail.com' },
  { icon: '☎', label: 'Mobile', value: '+91-9305755567', href: 'tel:+919305755567' },
]

const chips = ['📍 Kanpur, UP, India', '🎓 B.Tech CSE · LPU', '🤖 AI / ML Focus', '⚡ Open to Work']

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 lg:px-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="01 · About" title="Who I Am" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {PERSON.about.map((para, i) => (
              <p key={i} className="text-[#6B7280] leading-relaxed mb-5 font-inter text-[15px]">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-8">
              {chips.map(c => (
                <span
                  key={c}
                  className="font-mono text-[11px] text-[#6B7280] border border-[rgba(0,245,255,0.12)] px-3 py-2 tracking-[1px] transition-all hover:border-[#00F5FF] hover:text-[#00F5FF]"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-5 bg-[#171717] border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(0,245,255,0.25)] hover:shadow-[-4px_0_20px_rgba(0,245,255,0.1)]"
                style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)' }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,245,255,0.07)] font-mono text-[#00F5FF] text-sm flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="font-grotesk font-semibold text-[#EAEAEA] text-sm">{s.label}</div>
                  <div className="font-mono text-[10px] text-[#00F5FF] tracking-[1px] mt-0.5">{s.value}</div>
                </div>
                <span className="ml-auto font-mono text-[#6B7280] text-xs">→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
