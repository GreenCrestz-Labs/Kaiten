'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { CircleDollarSign, Lock, BrainCircuit, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const modules = [
  {
    id: 'circles',
    name: 'Circles',
    sub: 'ROSCA Engine',
    icon: CircleDollarSign,
    desc: 'On-chain rotating savings groups with verifiable reputation and automated payouts.',
    angle: -90,
  },
  {
    id: 'escrow',
    name: 'Escrow Vault',
    sub: 'Conditional Payments',
    icon: Lock,
    desc: 'Milestone and time-locked escrow that releases funds automatically on conditions.',
    angle: 0,
  },
  {
    id: 'arbitron',
    name: 'ArbitronAI',
    sub: 'Dispute Resolution',
    icon: BrainCircuit,
    desc: 'AI reviews evidence, produces rulings, and anchors verdicts to the Stellar ledger.',
    angle: 90,
  },
  {
    id: 'payroll',
    name: 'PayRoll',
    sub: 'Cross-Border',
    icon: Globe2,
    desc: 'One-click multi-currency payroll settled via the Stellar DEX in under 10 seconds.',
    angle: 180,
  },
]

const RADIUS = 190

export function ProtocolDiagram() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="protocol" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          The Protocol
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Four primitives, one core
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Composable on-chain modules orbit a single Soroban settlement core. Use
          one, or compose them into something entirely new.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-16 flex aspect-square w-full max-w-[560px] items-center justify-center">
        {/* connecting lines */}
        <svg
          viewBox="0 0 560 560"
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          {modules.map((m) => {
            const rad = (m.angle * Math.PI) / 180
            const x = 280 + Math.cos(rad) * RADIUS
            const y = 280 + Math.sin(rad) * RADIUS
            return (
              <line
                key={m.id}
                x1="280"
                y1="280"
                x2={x}
                y2={y}
                stroke="url(#flow)"
                strokeWidth="1.5"
                className="animate-dash"
                style={{ opacity: active && active !== m.id ? 0.2 : 0.8 }}
              />
            )
          })}
          <defs>
            <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.13 200)" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 300)" />
            </linearGradient>
          </defs>
        </svg>

        {/* central core */}
        <div className="relative z-10 flex size-32 flex-col items-center justify-center rounded-full border border-border glass text-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-2xl" />
          <span className="font-heading text-lg font-bold text-foreground">
            Soroban
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Core
          </span>
        </div>

        {/* modules */}
        {modules.map((m) => {
          const rad = (m.angle * Math.PI) / 180
          const x = 50 + (Math.cos(rad) * RADIUS) / 5.6
          const y = 50 + (Math.sin(rad) * RADIUS) / 5.6
          const Icon = m.icon
          const isActive = active === m.id
          return (
            <motion.button
              key={m.id}
              onHoverStart={() => setActive(m.id)}
              onHoverEnd={() => setActive(null)}
              onFocus={() => setActive(m.id)}
              onBlur={() => setActive(null)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left focus:outline-none"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ scale: isActive ? 1.06 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div
                className={`glass w-44 rounded-2xl border p-4 transition-all duration-300 ${
                  isActive
                    ? 'border-cyan/60 shadow-[0_0_30px_-6px_oklch(0.82_0.13_200_/_0.5)]'
                    : 'border-border'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-cyan">
                    <Icon className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {m.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{m.sub}</p>
                  </div>
                </div>
                <motion.p
                  initial={false}
                  animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  className="overflow-hidden text-xs leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 block">{m.desc}</span>
                </motion.p>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
