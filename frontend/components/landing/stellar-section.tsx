'use client'

import { Clock, Coins, ArrowLeftRight, DollarSign, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Clock,
    title: '5-second finality',
    desc: 'ROSCA payouts and payroll settlement are near-instant on Stellar.',
    className: 'sm:col-span-2',
  },
  {
    icon: Coins,
    title: '$0.00001 fees',
    desc: 'Micro-contributions from low-income savers are economically viable.',
    className: '',
  },
  {
    icon: ArrowLeftRight,
    title: 'Stellar DEX',
    desc: 'On-chain FX conversion for payroll with no centralized exchange.',
    className: '',
  },
  {
    icon: DollarSign,
    title: 'USDC settlement',
    desc: 'Battle-tested, widely off-rampable Circle stablecoin.',
    className: '',
  },
  {
    icon: Code2,
    title: 'Soroban contracts',
    desc: 'Expressive Rust smart contracts with deterministic execution.',
    className: 'sm:col-span-2',
  },
]

export function StellarSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Why Stellar
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          The right rails for the
          <br />
          <span className="text-gradient">underbanked world</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i} className={c.className}>
            <div className="group glass relative h-full overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-cyan/40">
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-violet/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-cyan">
                <c.icon className="size-5" />
              </span>
              <p className="mt-4 font-heading text-lg font-semibold text-foreground">
                {c.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
