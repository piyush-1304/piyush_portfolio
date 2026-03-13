'use client'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { PERSON } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const contacts = [
    { icon: '✉', label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/piyushsr13', href: PERSON.linkedin },
    { icon: '⌥', label: 'GitHub', value: 'github.com/Piyush-1304', href: PERSON.github },
    { icon: '☎', label: 'Mobile', value: PERSON.phone, href: `tel:${PERSON.phone}` },
  ]

  return (
    <section id="contact" className="relative z-10 py-24 px-6 lg:px-16 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="10 · Connect" title="Let's Build Something." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy + links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#6B7280] font-inter text-[15px] leading-relaxed mb-10">
              Open to internships, full-time roles, and collaborations. If you have an exciting AI/ML project or opportunity, I'd love to hear from you.
            </p>
            <div className="flex flex-col gap-4">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 bg-[#171717] border border-[rgba(255,255,255,0.06)] p-4 transition-all hover:border-[rgba(0,245,255,0.25)] hover:shadow-[-4px_0_20px_rgba(0,245,255,0.08)]"
                  style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)' }}
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-[rgba(0,245,255,0.07)] text-[#00F5FF] font-mono text-sm flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-grotesk font-semibold text-[#EAEAEA] text-sm">{c.label}</div>
                    <div className="font-mono text-[10px] text-[#00F5FF] mt-0.5">{c.value}</div>
                  </div>
                  <span className="ml-auto font-mono text-[#6B7280] text-xs">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#171717] border border-[rgba(0,245,255,0.2)] p-10 text-center"
                style={{ clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))' }}
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-grotesk font-bold text-[#00F5FF] text-xl mb-2">Message Sent!</h3>
                <p className="font-mono text-[#6B7280] text-xs">I'll get back to you at {PERSON.email} soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-[11px] tracking-[2px] text-[#6B7280] border border-[rgba(255,255,255,0.06)] px-5 py-2 hover:border-[#00F5FF] hover:text-[#00F5FF] transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(field => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="font-mono text-[11px] text-[#6B7280] tracking-[2px] uppercase">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as 'name' | 'email']}
                      onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                      required
                      className="bg-[#171717] border border-[rgba(255,255,255,0.06)] px-5 py-4 text-[#EAEAEA] font-inter text-sm outline-none focus:border-[#00F5FF] transition-colors placeholder-[#3a3a3a]"
                      style={{ clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)' }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] text-[#6B7280] tracking-[2px] uppercase">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Hi Piyush, I'd like to connect about..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    className="bg-[#171717] border border-[rgba(255,255,255,0.06)] px-5 py-4 text-[#EAEAEA] font-inter text-sm outline-none focus:border-[#00F5FF] transition-colors placeholder-[#3a3a3a] resize-none"
                    style={{ clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start font-mono text-xs font-bold tracking-[2px] uppercase text-[#0D0D0D] bg-[#00F5FF] px-8 py-4 transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
