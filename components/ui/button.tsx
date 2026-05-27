import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex tracking-[0.1em] shrink-0 items-center justify-center rounded-full border border-solid font-normal uppercase whitespace-nowrap transition-all duration-300 outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#09090b] text-[#FFFBF5] border-[#09090b] hover:bg-zinc-800 hover:border-zinc-800",
        outline:
          "border-[#09090b] bg-transparent text-[#09090b] hover:bg-[#09090b] hover:text-[#FFFBF5]",
        outlineWhite:
          "border-[#FFFBF5] bg-transparent text-[#FFFBF5] hover:bg-[#FFFBF5] hover:text-[#09090b]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "border-transparent bg-transparent hover:text-prime-text-mut",
        ghostWhite:
          "border-transparent bg-transparent text-[#FFFBF5] hover:bg-white/10 hover:text-white",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default:
          "px-[18px] pb-[9px] pt-[11px] text-xs lg:text-sm",
        xs: "px-3 py-1.5 text-[10px]",
        sm: "px-4 py-2 text-xs",
        lg: "px-[22px] pb-[11px] pt-[13px] text-sm",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
