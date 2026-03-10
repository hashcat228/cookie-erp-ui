import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      // Display
      "display-2xl": "text-display-2xl font-bold",
      "display-xl": "text-display-xl font-bold",
      "display-lg": "text-display-lg font-bold",

      // Headings
      "heading-xl": "text-heading-xl font-bold",
      "heading-lg": "text-heading-lg font-bold",
      "heading-md": "text-heading-md font-medium",
      "heading-sm": "text-heading-sm font-medium",
      "heading-xs": "text-heading-xs font-medium",

      // Body
      "body-lg": "text-body-lg font-normal",
      "body-md": "text-body-md font-normal",
      "body-sm": "text-body-sm font-normal",
      "body-xs": "text-body-xs font-normal",

      // Labels
      "label-lg": "text-label-lg font-medium",
      "label-md": "text-label-md font-medium",
      "label-sm": "text-label-sm font-medium",

      // Code
      "code-lg": "text-code-lg font-mono",
      "code-md": "text-code-md font-mono",
      "code-sm": "text-code-sm font-mono",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label" | "code"
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild = false, as = "p", ...props }, ref) => {
    const Comp = asChild ? Slot : as
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
