import { Code2, FileText, BookOpen, AtSign, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { KaitenLogo } from '@/components/kaiten-logo'
import { Button } from '@/components/ui/button'

const socials = [
  { icon: Code2, label: 'GitHub', href: '#' },
  { icon: BookOpen, label: 'Docs', href: '#' },
  { icon: FileText, label: 'Whitepaper', href: '#' },
  { icon: AtSign, label: 'X / Twitter', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <KaitenLogo />
          <h3 className="max-w-xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A financial operating system for the world&apos;s savers
          </h3>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/dashboard">Launch App</Link>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
              >
                <s.icon className="size-4" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>MIT © 2025 Kaiten Contributors</p>
          <p className="font-mono">
            Built on Stellar · Powered by Soroban
          </p>
        </div>
      </div>
    </footer>
  )
}
