# Piyush Srivastava — Portfolio

A futuristic AI/ML Engineer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **JetBrains Mono + Space Grotesk** (fonts)
- Neural network particle canvas (vanilla Canvas API)

## Features

- ⚡ Interactive neural network background (mouse-reactive particles)
- 🖱 Custom animated cursor with ring
- 📟 Developer terminal with real commands (`help`, `projects`, `skills`, `about`, `contact`, `github`, `clear`)
- 🎞 Framer Motion scroll-triggered animations on every section
- 📊 Live GitHub stats + contribution graph via API
- 📝 Contact form with validation
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode (default)
- ⚡ Optimized for Vercel deployment

## Sections

1. Hero — Name, typewriter title
2.  CTA buttons, stats
3. About — Bio, social links
4. Education — LPU, Class XII, Class X
5. Skills — 6 skill categories with tags
6. Projects — 7 project cards with tech + impact
7. Training — Cipher School
8. Certifications — 4 certs
9. Achievements — 3 achievement cards
10. GitHub Activity — Stats + contribution graph
11. Terminal — Interactive developer terminal
12. Contact — Form + contact links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy on Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Click **Deploy** — zero configuration needed!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

All portfolio data is in `lib/data.ts` — edit it to update your info, projects, skills, etc.

## Color Theme

| Token | Value |
|-------|-------|
| Background | `#0D0D0D` |
| Cards | `#171717` |
| Accent | `#00F5FF` |
| Text | `#EAEAEA` |
| Muted | `#6B7280` |
