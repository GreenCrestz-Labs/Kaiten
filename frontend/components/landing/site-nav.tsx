'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { KaitenLogo } from '@/components/kaiten-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Protocol', href: '#protocol' },
  { label: 'Circles', href: '#circles' },
  { label: 'Escrow', href: '#escrow' },
  { label: 'Payroll', href: '#payroll' },
  { label: 'Roadmap', href: '#roadmap' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div
          className={cn(
            'flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300',
            scrolled && 'glass border border-border shadow-lg shadow-black/40',
          )}
        >
          <Link href="/" aria-label="Kaiten home">
            <KaitenLogo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              <a href="#">Whitepaper</a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/dashboard">Launch App</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
