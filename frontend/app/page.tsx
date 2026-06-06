import { SiteNav } from '@/components/landing/site-nav'
import { Hero } from '@/components/landing/hero'
import { ProtocolDiagram } from '@/components/landing/protocol-diagram'
import { CirclesSection } from '@/components/landing/circles-section'
import { EscrowSection } from '@/components/landing/escrow-section'
import { PayrollSection } from '@/components/landing/payroll-section'
import { StellarSection } from '@/components/landing/stellar-section'
import { RoadmapSection } from '@/components/landing/roadmap-section'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* ambient backdrop */}
      <div className="grid-bg pointer-events-none fixed inset-0 opacity-30" />
      <div className="pointer-events-none fixed -left-40 top-0 size-[500px] rounded-full bg-indigo/10 blur-[140px]" />
      <div className="pointer-events-none fixed -right-40 top-[40%] size-[500px] rounded-full bg-violet/10 blur-[140px]" />

      <div className="relative">
        <SiteNav />
        <main>
          <Hero />
          <ProtocolDiagram />
          <CirclesSection />
          <EscrowSection />
          <PayrollSection />
          <StellarSection />
          <RoadmapSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
