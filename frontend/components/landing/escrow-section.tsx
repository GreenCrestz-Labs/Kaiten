'use client'

import { motion } from 'motion/react'
import { Check, FileText, Hash, ShieldQuestion } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const milestones = [
  { label: 'Deposit locked', done: true, value: '$12,000 USDC' },
  { label: 'Design delivered', done: true, value: '40%' },
  { label: 'Build delivered', done: false, value: '40%' },
  { label: 'Final acceptance', done: false, value: '20%' },
]

const evidence = [
  { party: 'Payer', label: 'Contract terms.pdf' },
  { party: 'Payee', label: 'Delivery log + git history' },
  { party: 'Payee', label: 'Communication thread' },
]

export function EscrowSection() {
  return (
    <section id="escrow" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Escrow Vault + ArbitronAI
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Conditional payments,
          <br />
          <span className="text-gradient">resolved by AI</span>
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Funds release automatically when conditions are met. When they&apos;re
          disputed, ArbitronAI reviews the evidence and anchors a verifiable
          ruling on-chain.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Escrow vault */}
        <Reveal>
          <div className="glass h-full rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">
                Escrow Vault · #8842
              </p>
              <span className="rounded-full bg-cyan/15 px-2.5 py-1 text-[10px] font-medium text-cyan">
                Active
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {milestones.map((m, i) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-foreground">
                      <span
                        className={`flex size-5 items-center justify-center rounded-full ${
                          m.done
                            ? 'bg-cyan/20 text-cyan'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {m.done ? <Check className="size-3" /> : i + 1}
                      </span>
                      {m.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {m.value}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                      initial={{ width: 0 }}
                      whileInView={{ width: m.done ? '100%' : '12%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="text-xs text-muted-foreground">State</span>
              <span className="font-mono text-xs text-foreground">
                MILESTONE_2_PENDING
              </span>
            </div>
          </div>
        </Reveal>

        {/* AI arbitration */}
        <Reveal delay={1}>
          <div className="glass relative h-full overflow-hidden rounded-2xl border border-border p-6">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-violet/20 blur-3xl" />
            <div className="flex items-center gap-2">
              <ShieldQuestion className="size-5 text-violet" />
              <p className="text-sm font-semibold text-foreground">
                ArbitronAI · Dispute Review
              </p>
            </div>

            <div className="mt-5 space-y-2">
              {evidence.map((e, i) => (
                <motion.div
                  key={e.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-2.5"
                >
                  <FileText className="size-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-foreground">
                      {e.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Submitted by {e.party}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-5 rounded-xl border border-violet/40 bg-violet/10 p-4"
            >
              <p className="text-[10px] uppercase tracking-widest text-violet">
                Verdict
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                Release 80% to payee, refund 20% to payer. Milestone 2 partially
                fulfilled per delivery evidence.
              </p>
              <div className="mt-3 flex items-center gap-2 border-t border-violet/20 pt-3">
                <Hash className="size-3.5 text-cyan" />
                <span className="truncate font-mono text-[10px] text-muted-foreground">
                  anchored · stellar:0x9f3a…d21c · ledger 58,204,119
                </span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
