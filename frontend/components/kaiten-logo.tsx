import { cn } from '@/lib/utils'

export function KaitenLogo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative flex size-8 items-center justify-center">
        <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
          <defs>
            <linearGradient id="kaiten-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.13 200)" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 300)" />
            </linearGradient>
          </defs>
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="url(#kaiten-mark)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="52 30"
          />
          <circle cx="16" cy="3" r="2.4" fill="oklch(0.82 0.13 200)" />
          <circle cx="16" cy="16" r="3.4" fill="url(#kaiten-mark)" />
        </svg>
      </span>
      {showText && (
        <span className="font-heading text-lg font-bold tracking-tight text-foreground">
          Kaiten<span className="ml-1 text-muted-foreground">回転</span>
        </span>
      )}
    </div>
  )
}
