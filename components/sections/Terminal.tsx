'use client'
import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { TERMINAL_COMMANDS, PERSON } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

interface Line {
  type: 'input' | 'output' | 'error' | 'welcome'
  content: string
}

const WELCOME: Line[] = [
  { type: 'welcome', content: '<span class="text-[#00F5FF]">Piyush Srivastava Portfolio Terminal v2.0</span>' },
  { type: 'welcome', content: '<span class="text-[#6B7280]">Type <span class="text-[#00F5FF]">help</span> to see available commands.</span>' },
  { type: 'welcome', content: '' },
]

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    setLines(prev => [
      ...prev,
      { type: 'input', content: trimmed },
    ])

    if (!trimmed) return

    setHistory(prev => [trimmed, ...prev.slice(0, 19)])
    setHistIdx(-1)

    if (trimmed === 'clear') {
      setLines(WELCOME)
      return
    }

    if (trimmed === 'github') {
      setLines(prev => [
        ...prev,
        { type: 'output', content: TERMINAL_COMMANDS.github },
      ])
      setTimeout(() => window.open(PERSON.github, '_blank'), 500)
      return
    }

    if (TERMINAL_COMMANDS[trimmed]) {
      setLines(prev => [
        ...prev,
        { type: 'output', content: TERMINAL_COMMANDS[trimmed] },
      ])
    } else {
      setLines(prev => [
        ...prev,
        {
          type: 'error',
          content: `<span class="text-red-400">Command not found: <span class="text-[#EAEAEA]">${trimmed}</span>. Type <span class="text-[#00F5FF]">help</span> for available commands.</span>`,
        },
      ])
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(next)
      setInput(history[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : history[next])
    }
  }

  return (
    <section id="terminal" className="relative z-10 py-24 px-6 lg:px-16 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="09 · Interactive" title="Developer Terminal" center />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-none overflow-hidden border border-[rgba(0,245,255,0.2)] shadow-[0_0_80px_rgba(0,245,255,0.1)]"
        >
          {/* Terminal bar */}
          <div className="bg-[#0F0F0F] border-b border-[rgba(255,255,255,0.05)] px-4 py-3 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="font-mono text-[11px] text-[#6B7280] ml-auto tracking-[2px]">piyush@portfolio ~ bash</span>
          </div>

          {/* Terminal body */}
          <div
            ref={bodyRef}
            onClick={() => inputRef.current?.focus()}
            className="bg-[#0A0A0A] p-6 min-h-[380px] max-h-[460px] overflow-y-auto cursor-text"
          >
            {lines.map((line, i) => (
              <div key={i} className="font-mono text-[13px] leading-[1.75] mb-1">
                {line.type === 'input' && (
                  <div>
                    <span className="text-[#00F5FF]">piyush@portfolio</span>
                    <span className="text-[#6B7280]">:~$</span>
                    <span className="text-[#EAEAEA] ml-2">{line.content}</span>
                  </div>
                )}
                {line.type === 'output' && (
                  <div
                    className="text-[#6B7280] whitespace-pre-wrap pl-4 border-l border-[rgba(0,245,255,0.1)] ml-1 my-2"
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                )}
                {line.type === 'error' && (
                  <div className="pl-4 my-1" dangerouslySetInnerHTML={{ __html: line.content }} />
                )}
                {line.type === 'welcome' && (
                  <div dangerouslySetInnerHTML={{ __html: line.content }} />
                )}
              </div>
            ))}

            {/* Input row */}
            <div className="flex items-center gap-2 mt-2">
              <span className="font-mono text-[13px] text-[#00F5FF] flex-shrink-0">piyush@portfolio</span>
              <span className="font-mono text-[13px] text-[#6B7280] flex-shrink-0">:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent border-none outline-none font-mono text-[13px] text-[#EAEAEA] caret-[#00F5FF]"
                placeholder="type a command..."
              />
            </div>
          </div>
        </motion.div>

        {/* Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mt-6"
        >
          {['help', 'projects', 'skills', 'about', 'contact', 'github', 'clear'].map(cmd => (
            <button
              key={cmd}
              onClick={() => { handleCommand(cmd); inputRef.current?.focus() }}
              className="font-mono text-[10px] text-[#6B7280] border border-[rgba(0,245,255,0.1)] px-3 py-1.5 tracking-[1px] hover:border-[#00F5FF] hover:text-[#00F5FF] transition-all"
            >
              {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
