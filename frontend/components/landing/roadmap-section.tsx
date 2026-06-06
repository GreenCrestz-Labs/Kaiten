'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'

const milestones = [
  { title: 'Testnet launch', sub: 'Circles + Escrow', date: 'Q2 2025', done: true },
  { title: 'ArbitronAI v1', sub: 'Text evidence arbitration', date: 'Q2 2025', done: true },
  { title: 'PayRoll beta', sub: 'Multi-currency settlement', date: 'Q3 2025', done: false },
  { title: 'Mainnet launch', sub: 'Audited contracts live', date: 'Q3 2025', done: false },
  { title: 'DAO governance', sub: 'Treasury multisig → on-chain vote', date: 'Q1 2026', done: false },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative mx-auto max-w-3xl px-6 py-28">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Roadmap
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          The road to mainnet
        </h2>
      </Reveal>

      <div className="relative mt-14 pl-8">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-cyan/60 via-violet/40 to-transparent" />
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className={`absolute -left-[29px] top-1 flex size-4 items-center justify-center rounded-full border ${
                m.done
                  ? 'border-cyan bg-cyan/20 shadow-[0_0_14px_-2px_oklch(0.82_0.13_200/0.8)]'
                  : 'border-border bg-secondary'
              }`}
            >
              {m.done && <span className="size-1.5 rounded-full bg-cyan" />}
            </span>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  {m.title}
                </p>
                <p className="text-sm text-muted-foreground">{m.sub}</p>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                {m.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
