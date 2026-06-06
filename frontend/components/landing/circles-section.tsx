'use client'

import { motion } from 'motion/react'
import { ShieldCheck, Zap, UserCheck, Gavel } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const members = Array.from({ length: 8 })
const features = [
  { icon: UserCheck, title: 'On-chain reputation', desc: 'Every contribution builds a verifiable, portable credit score.' },
  { icon: Zap, title: 'Automated payouts', desc: 'The pot rotates to the next member the instant a cycle closes.' },
  { icon: ShieldCheck, title: 'Zero admin trust', desc: 'Rules live in the contract. No treasurer, no paper ledger.' },
  { icon: Gavel, title: 'Programmable penalties', desc: 'Late contributions trigger encoded slashing automatically.' },
]

function CircleViz() {
  const R = 120
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center">
      <div className="absolute size-44 rounded-full bg-cyan/10 blur-3xl" />
      <svg viewBox="0 0 320 320" className="absolute inset-0 size-full">
        <circle
          cx="160"
          cy="160"
          r={R}
          fill="none"
          stroke="oklch(1 0 0 / 0.08)"
          strokeWidth="1"
        />
        <circle
          cx="160"
          cy="160"
          r={R}
          fill="none"
          stroke="url(#circleFlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="40 720"
          className="animate-spin-slow origin-center"
          style={{ transformBox: 'fill-box' }}
        />
        <defs>
          <linearGradient id="circleFlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.13 200)" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 300)" />
          </linearGradient>
        </defs>
      </svg>

      {/* center pot */}
      <div className="z-10 flex size-24 flex-col items-center justify-center rounded-full border border-border glass">
        <span className="font-heading text-xl font-bold text-foreground">
          $4.8k
        </span>
        <span className="text-[10px] text-muted-foreground">Pot · Cycle 3</span>
      </div>

      {members.map((_, i) => {
        const angle = (i / members.length) * Math.PI * 2 - Math.PI / 2
        const x = 50 + (Math.cos(angle) * R) / 1.6
        const y = 50 + (Math.sin(angle) * R) / 1.6
        const isNext = i === 2
        return (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ scale: isNext ? [1, 1.18, 1] : 1 }}
            transition={{ duration: 2, repeat: isNext ? Infinity : 0 }}
          >
            <div
              className={`flex size-10 items-center justify-center rounded-full border text-xs font-semibold ${
                isNext
                  ? 'border-cyan/70 bg-cyan/15 text-cyan shadow-[0_0_18px_-4px_oklch(0.82_0.13_200/0.7)]'
                  : 'border-border bg-secondary text-muted-foreground'
              }`}
            >
              {String.fromCharCode(65 + i)}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function CirclesSection() {
  return (
    <section id="circles" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            Circles · ROSCA
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Savings circles,
            <br />
            <span className="text-gradient">finally trustless</span>
          </h2>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground">
            The most-used savings vehicle for the unbanked — Susu, Chama, Tontine,
            Arisan — re-imagined as a Soroban contract. Members pool USDC, take
            turns receiving the pot, and build reputation with every cycle.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass rounded-xl border border-border p-4"
              >
                <f.icon className="size-5 text-violet" />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  {f.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <CircleViz />
        </Reveal>
      </div>
    </section>
  )
}
