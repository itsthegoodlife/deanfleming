import { cn } from "@/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  className?: string
  [key: string]: any
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
  ...props
}: GridPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5,${height}V.5H${width}`} fill="none" strokeDasharray="0" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  )
}