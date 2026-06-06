'use client'

import { useState } from 'react'
import { Bell, Search, Wallet, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { DashboardSidebar } from '@/components/dashboard/sidebar'

export function DashboardTopbar({ title }: { title: string }) {
  const [walletOpen, setWalletOpen] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const connected = true

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/70 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileNav(true)}
          className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>
        <h1 className="font-heading text-lg font-semibold text-foreground">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground md:flex">
          <Search className="size-4" />
          <span className="text-xs">Search…</span>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full border-border bg-secondary/40"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-cyan" />
        </Button>

        <Button
          onClick={() => setWalletOpen((v) => !v)}
          className="gap-2 rounded-full bg-secondary/60 text-foreground hover:bg-secondary"
        >
          <Wallet className="size-4 text-cyan" />
          <span className="font-mono text-xs">
            {connected ? 'G7X…4F2A' : 'Connect'}
          </span>
          <span className="size-1.5 rounded-full bg-cyan" />
        </Button>
      </div>

      {/* mobile nav drawer */}
      <AnimatePresence>
        {mobileNav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNav(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden"
            >
              <button
                onClick={() => setMobileNav(false)}
                className="absolute right-3 top-4 z-10 rounded-lg p-1.5 text-muted-foreground hover:text-foreground"
                aria-label="Close navigation"
              >
                <X className="size-5" />
              </button>
              <DashboardSidebar onNavigate={() => setMobileNav(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
