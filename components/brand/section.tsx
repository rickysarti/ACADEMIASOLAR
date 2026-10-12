import { cn } from "@/lib/utils"

/** Etiqueta superior de sección: punto de sol + texto en versalitas. */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode
  tone?: "dark" | "light"
  className?: string
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "light" ? "text-sol-300" : "text-sol-700",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-amanecer" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  tone?: "dark" | "light"
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-[2rem] font-bold leading-[1.08] sm:text-4xl lg:text-[3.25rem]",
          tone === "light" ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            tone === "light" ? "text-white/70" : "text-ink-700",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
