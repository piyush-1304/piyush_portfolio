'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ACHIEVEMENTS, PERSON } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function AchievementsGithub() {
  return (
    <>
      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative z-10 py-24 px-6 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="07 · Wins" title="Achievements" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-8 text-center transition-all hover:border-[rgba(0,245,255,0.25)] hover:shadow-[0_16px_48px_rgba(0,245,255,0.08)]"
                style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))' }}
              >
                <div className="text-4xl mb-4">{ach.icon}</div>
                <h3 className="font-grotesk font-bold text-[#EAEAEA] text-base mb-3">{ach.title}</h3>
                <p className="font-mono text-[11px] text-[#6B7280] leading-relaxed">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB ACTIVITY */}
      <section id="github" className="relative z-10 py-24 px-6 lg:px-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="08 · Activity" title="GitHub Stats" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-6 hover:border-[rgba(0,245,255,0.2)] transition-all"
              style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)' }}
            >
              <div className="font-mono text-[10px] text-[#00F5FF] tracking-[3px] uppercase mb-4">GitHub Statistics</div>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${PERSON.githubUser}&show_icons=true&theme=transparent&title_color=00F5FF&text_color=EAEAEA&icon_color=00F5FF&border_color=1a1a1a&hide_border=false`}
                alt="GitHub Stats"
                className="w-full"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                  const next = el.nextElementSibling as HTMLElement
                  if (next) next.style.display = 'flex'
                }}
              />
              <div className="hidden items-center justify-center h-32 font-mono text-[#6B7280] text-xs flex-col gap-2">
                <span>⌥</span>
                <span>github.com/{PERSON.githubUser}</span>
              </div>
            </motion.div>

            {/* Top langs card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-6 hover:border-[rgba(0,245,255,0.2)] transition-all"
              style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)' }}
            >
              <div className="font-mono text-[10px] text-[#00F5FF] tracking-[3px] uppercase mb-4">Top Languages</div>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${PERSON.githubUser}&layout=compact&theme=transparent&title_color=00F5FF&text_color=EAEAEA&icon_color=00F5FF&border_color=1a1a1a`}
                alt="Top Languages"
                className="w-full"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                }}
              />
            </motion.div>
          </div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#171717] border border-[rgba(255,255,255,0.06)] p-6 hover:border-[rgba(0,245,255,0.2)] transition-all"
            style={{ clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)' }}
          >
            <div className="font-mono text-[10px] text-[#00F5FF] tracking-[3px] uppercase mb-4">Contribution Graph</div>
            <img
              src={`https://ghchart.rshah.org/00F5FF/${PERSON.githubUser}`}
              alt="Contribution Graph"
              className="w-full opacity-80"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement
                el.style.display = 'none'
                const next = el.nextElementSibling as HTMLElement
                if (next) next.style.display = 'flex'
              }}
            />
            <div className="hidden items-center justify-center h-20 font-mono text-[#6B7280] text-xs gap-2">
              <span>View full activity at</span>
              <a href={PERSON.github} target="_blank" className="text-[#00F5FF] hover:underline">github.com/{PERSON.githubUser}</a>
            </div>
          </motion.div>

          {/* Visit GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-[2px] uppercase text-[#0D0D0D] bg-[#00F5FF] font-bold px-8 py-4 transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:-translate-y-0.5"
              style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
            >
              ⌥ Visit GitHub Profile →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
