'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CircleDollarSign,
  Lock,
  BrainCircuit,
  Globe2,
  Coins,
  Settings,
} from 'lucide-react'
import { KaitenLogo } from '@/components/kaiten-logo'
import { cn } from '@/lib/utils'

const nav = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Circles', href: '/dashboard/circles', icon: CircleDollarSign },
  { label: 'Escrow Vault', href: '/dashboard/escrow', icon: Lock },
  { label: 'ArbitronAI', href: '/dashboard/arbitron', icon: BrainCircuit },
  { label: 'Payroll', href: '/dashboard/payroll', icon: Globe2 },
  { label: 'Treasury', href: '/dashboard/treasury', icon: Coins },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-2 border-r border-sidebar-border bg-sidebar p-4">
      <div className="px-2 py-3">
        <Link href="/" aria-label="Kaiten home">
          <KaitenLogo />
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {nav.map((item) => {
          const active =
            item.href === '/dashboard'
              ? pathname === item.href
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors',
                active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_oklch(0.82_0.13_200)]" />
              )}
              <item.icon
                className={cn(
                  'size-4.5 transition-colors',
                  active ? 'text-cyan' : 'group-hover:text-foreground',
                )}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="glass rounded-xl border border-sidebar-border p-4">
        <p className="text-xs font-medium text-foreground">Stellar Mainnet</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-cyan animate-pulse-glow" />
          <span className="text-xs text-muted-foreground">
            All systems operational
          </span>
        </div>
      </div>
    </div>
  )
}
