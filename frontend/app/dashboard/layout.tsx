import { DashboardSidebar } from '@/components/dashboard/sidebar'
import type { ReactNode } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="grid-bg pointer-events-none fixed inset-0 opacity-20" />
      <div className="pointer-events-none fixed -left-40 top-1/4 size-[420px] rounded-full bg-indigo/10 blur-[140px]" />
      <div className="pointer-events-none fixed -right-40 bottom-0 size-[420px] rounded-full bg-violet/10 blur-[140px]" />

      <div className="relative flex">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 lg:block">
          <DashboardSidebar />
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  )
}
