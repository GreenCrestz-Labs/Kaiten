'use client'

import { motion } from 'motion/react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps'
import { Reveal } from '@/components/reveal'

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const hub: [number, number] = [8.5, 47.4] // Stellar settlement hub (CH)

const recipients: { name: string; coords: [number, number]; cur: string }[] = [
  { name: 'Lagos', coords: [3.4, 6.5], cur: 'NGN' },
  { name: 'Nairobi', coords: [36.8, -1.3], cur: 'KES' },
  { name: 'Mumbai', coords: [72.9, 19.1], cur: 'INR' },
  { name: 'São Paulo', coords: [-46.6, -23.5], cur: 'BRL' },
  { name: 'New York', coords: [-74, 40.7], cur: 'USD' },
  { name: 'Berlin', coords: [13.4, 52.5], cur: 'EUR' },
]

const currencies = ['USD', 'NGN', 'EUR', 'KES', 'INR', 'BRL']

const batch = [
  { region: 'West Africa', count: 18, amount: '$24,800', cur: 'NGN' },
  { region: 'East Africa', count: 11, amount: '$13,200', cur: 'KES' },
  { region: 'South Asia', count: 22, amount: '$31,500', cur: 'INR' },
]

export function PayrollSection() {
  return (
    <section id="payroll" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          PayRoll
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Global payroll,
          <br />
          <span className="text-gradient">settled in seconds</span>
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Load USDC once. Kaiten converts to each employee&apos;s currency via
          the Stellar DEX and settles to every wallet simultaneously — in under
          ten seconds.
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass relative overflow-hidden rounded-2xl border border-border p-2">
            <ComposableMap
              projectionConfig={{ scale: 145 }}
              className="h-auto w-full"
              style={{ background: 'transparent' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="oklch(0.27 0.015 270)"
                      stroke="oklch(1 0 0 / 0.06)"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: 'oklch(0.32 0.02 270)', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {recipients.map((r, i) => (
                <Line
                  key={`line-${r.name}`}
                  from={hub}
                  to={r.coords}
                  stroke="url(#payflow)"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  className="animate-dash"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              ))}

              <defs>
                <linearGradient id="payflow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.82 0.13 200)" />
                  <stop offset="100%" stopColor="oklch(0.62 0.22 300)" />
                </linearGradient>
              </defs>

              <Marker coordinates={hub}>
                <circle r={5} fill="oklch(0.62 0.22 300)" />
                <circle r={9} fill="none" stroke="oklch(0.62 0.22 300)" strokeWidth={1} className="animate-pulse-glow" />
              </Marker>

              {recipients.map((r) => (
                <Marker key={r.name} coordinates={r.coords}>
                  <circle r={3} fill="oklch(0.82 0.13 200)" />
                  <text
                    textAnchor="middle"
                    y={-8}
                    className="fill-muted-foreground"
                    style={{ fontSize: 7, fontFamily: 'var(--font-mono)' }}
                  >
                    {r.cur}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-2">
          <div className="flex flex-wrap gap-2">
            {currencies.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {batch.map((b, i) => (
              <motion.div
                key={b.region}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass flex items-center justify-between rounded-xl border border-border px-4 py-3.5"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {b.region}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {b.count} wallets · {b.cur}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {b.amount}
                  </p>
                  <p className="text-[10px] text-cyan">Settled · 6s</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm text-foreground">
            Total batch ·{' '}
            <span className="font-mono font-semibold">$69,500</span> across 51
            wallets, 3 currencies.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
