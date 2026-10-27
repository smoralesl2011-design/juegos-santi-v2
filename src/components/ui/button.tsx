import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        playful:
          "bg-primary text-primary-foreground shadow-chunky-primary transition-transform duration-100 ease-out hover:-translate-y-0.5 active:translate-y-1 active:shadow-none",
        key: "border-2 border-border bg-key text-key-foreground shadow-chunky-key transition-transform duration-100 ease-out hover:-translate-y-0.5 active:translate-y-1 active:shadow-none",
        check:
          "bg-success text-success-foreground shadow-chunky-success transition-transform duration-100 ease-out hover:-translate-y-0.5 active:translate-y-1 active:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2 [&_svg]:size-4",
        sm: "h-9 rounded-md px-3 [&_svg]:size-4",
        lg: "h-11 rounded-md px-8 [&_svg]:size-5",
        icon: "h-10 w-10 [&_svg]:size-4",
        kid: "h-14 rounded-md px-3 font-display text-2xl font-extrabold [&_svg]:size-6",
        "kid-lg": "h-16 rounded-md px-5 font-display text-3xl font-extrabold [&_svg]:size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
