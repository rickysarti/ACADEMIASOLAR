import { cn } from "@/lib/utils"

type Tone = "dark" | "light"

/**
 * Isotipo "Ascenso": una A formada por dos trazos que suben hacia el sol.
 * El travesaño es la línea de horizonte (verde) y el sol corona el vértice.
 * Funciona sobre fondo claro (tone="dark") y oscuro (tone="light").
 */
export function LogoMark({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  // ids estáticos: varias instancias comparten la misma definición de degradé
  const id = `as-${tone}`
  const ink = tone === "light" ? "#FFFFFF" : "#0B1324"

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={`sun-${id}`} x1="18" y1="3" x2="30" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={`horizon-${id}`} x1="13" y1="0" x2="35" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22C55E" />
          <stop offset="1" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="10" r="6.5" fill={`url(#sun-${id})`} />
      <path d="M8.5 42 20.2 21.5M39.5 42 27.8 21.5" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <path d="M14.5 34h19" stroke={`url(#horizon-${id})`} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({
  tone = "dark",
  className,
  markClassName,
  showWordmark = true,
}: {
  tone?: Tone
  className?: string
  markClassName?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} className={cn("h-9 w-9", markClassName)} />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[1.35rem] leading-none tracking-[-0.03em]",
            tone === "light" ? "text-white" : "text-ink-950",
          )}
        >
          <span className="font-medium">academia</span>
          <span className={cn("font-extrabold", tone === "light" ? "text-sol-400" : "text-sol-600")}>solar</span>
        </span>
      )}
    </span>
  )
}
