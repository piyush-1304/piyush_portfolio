'use client'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import TrainingCerts from '@/components/sections/TrainingCerts'
import AchievementsGithub from '@/components/sections/AchievementsGithub'
import Terminal from '@/components/sections/Terminal'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

// Load canvas + cursor client-side only (no SSR)
const NeuralCanvas = dynamic(() => import('@/components/NeuralCanvas'), { ssr: false })
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* Effects */}
      <NeuralCanvas />
      <Cursor />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <TrainingCerts />
        <AchievementsGithub />
        <Terminal />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
