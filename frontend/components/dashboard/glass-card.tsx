import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function GlassCard({
  children,
  className,
  glow,
}: {
  children: ReactNode
  className?: string
  glow?: boolean
}) {
  return (
    <div
      className={cn(
        'glass relative overflow-hidden rounded-2xl border border-border p-5 transition-colors hover:border-cyan/30',
        className,
      )}
    >
      {glow && (
        <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-violet/15 blur-3xl" />
      )}
      {children}
    </div>
  )
}
