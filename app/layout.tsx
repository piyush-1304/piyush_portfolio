import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piyush Srivastava — AI/ML Engineer',
  description: 'Portfolio of Piyush Srivastava, AI/ML Engineer and CS student at LPU. Building intelligent systems, ML pipelines, and AI-powered applications.',
  keywords: ['AI', 'ML', 'Machine Learning', 'Portfolio', 'Piyush Srivastava', 'LPU'],
  authors: [{ name: 'Piyush Srivastava' }],
  openGraph: {
    title: 'Piyush Srivastava — AI/ML Engineer',
    description: 'Building intelligent systems, machine learning models, and AI-powered backend applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D0D0D] text-[#EAEAEA] overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
