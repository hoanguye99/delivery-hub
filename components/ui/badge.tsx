import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva("w-fit flex justify-center items-center border", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      light: "",
      // secondary: 'bg-info-background border-info-border text-info-base',
      disabled: "bg-grey-disabled border-border-1 text-typography-disabled",
    },
    size: {
      large: "h-10 px-4 gap-2",
      medium: "h-8 px-3 gap-2",
      small: "h-6 px-2 gap-1.5",
      sm: "h-7 px-2.5 gap-1.5",
    },
    iconOnly: {
      true: "rounded-full aspect-square !px-0",
    },
    boxy: {
      true: "rounded-lg",
      false: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    boxy: false,
    iconOnly: false,
    size: "small",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  size,
  iconOnly,
  boxy,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant, size, iconOnly, boxy }),
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
