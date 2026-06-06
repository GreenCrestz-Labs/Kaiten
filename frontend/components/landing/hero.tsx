'use client'

import { motion } from 'motion/react'
import { ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Total Value Locked', value: '$48.2M', accent: 'text-cyan' },
  { label: 'Active Circles', value: '12,847', accent: 'text-violet' },
  { label: 'Payroll Processed', value: '$9.6M', accent: 'text-cyan' },
  { label: 'Arbitration Success', value: '98.4%', accent: 'text-violet' },
]

const floatingCards = [
  { label: 'Circle Payout', amount: '+$2,400 USDC', x: '6%', y: '24%', d: 0 },
  { label: 'Escrow Released', amount: '+$8,150 USDC', x: '78%', y: '18%', d: 0.6 },
  { label: 'Payroll · 42 wallets', amount: 'Settled · 6s', x: '82%', y: '62%', d: 1.1 },
  { label: 'ArbitronAI Ruling', amount: 'Anchored on-chain', x: '3%', y: '64%', d: 1.5 },
]

function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="relative size-[760px] max-w-[92vw]">
        {/* glow core */}
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[80px]" />

        <svg viewBox="0 0 760 760" className="size-full opacity-70">
          <defs>
            <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.13 200 / 0.9)" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 300 / 0.2)" />
            </linearGradient>
            <linearGradient id="ring2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.22 300 / 0.9)" />
              <stop offset="100%" stopColor="oklch(0.55 0.2 275 / 0.15)" />
            </linearGradient>
          </defs>
          <g className="origin-center animate-spin-slower">
            <circle cx="380" cy="380" r="360" fill="none" stroke="url(#ring1)" strokeWidth="1.5" strokeDasharray="3 12" />
          </g>
          <g className="origin-center animate-spin-slow">
            <circle cx="380" cy="380" r="280" fill="none" stroke="url(#ring2)" strokeWidth="2" strokeDasharray="160 600" strokeLinecap="round" />
            <circle cx="380" cy="100" r="5" fill="oklch(0.82 0.13 200)" />
          </g>
          <g className="origin-center animate-spin-reverse">
            <circle cx="380" cy="380" r="200" fill="none" stroke="url(#ring1)" strokeWidth="2" strokeDasharray="120 460" strokeLinecap="round" />
            <circle cx="580" cy="380" r="4" fill="oklch(0.62 0.22 300)" />
          </g>
          <g className="origin-center animate-spin-slow">
            <circle cx="380" cy="380" r="130" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <OrbitalRings />

      {/* floating financial cards */}
      {floatingCards.map((c) => (
        <motion.div
          key={c.label}
          className="absolute hidden lg:block"
          style={{ left: c.x, top: c.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + c.d * 0.2, duration: 0.7 }}
        >
          <div className="animate-float glass rounded-2xl border border-border px-4 py-3 shadow-xl shadow-black/40" style={{ animationDelay: `${c.d}s` }}>
            <p className="text-xs text-muted-foreground">{c.label}</p>
            <p className="font-mono text-sm font-semibold text-foreground">{c.amount}</p>
          </div>
        </motion.div>
      ))}

      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-cyan animate-pulse-glow" />
          Built on Stellar · Powered by Soroban
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Programmable
          <br />
          <span className="text-gradient">Group Finance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Trustless rotating savings circles, AI-governed escrow, and global
          payroll built on Stellar. One composable protocol for the world&apos;s savers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/dashboard">
              Launch App
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-secondary/30 px-7 text-foreground hover:bg-secondary"
          >
            <a href="#">
              <FileText className="size-4" />
              Read Whitepaper
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl border border-border px-4 py-5"
            >
              <p className={`font-heading text-2xl font-bold ${s.accent}`}>
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
