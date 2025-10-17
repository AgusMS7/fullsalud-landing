import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Jerarquía principal de botones Full Salud
        default: "bg-[hsl(var(--fullsalud-green))] text-white hover:bg-[hsl(var(--fullsalud-green-dark))] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
        secondary: "bg-[hsl(var(--fullsalud-teal))] text-white hover:bg-[hsl(var(--fullsalud-teal-dark))] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
        outline: "border-2 border-[hsl(var(--fullsalud-teal))] bg-transparent text-[hsl(var(--fullsalud-teal))] hover:bg-[hsl(var(--fullsalud-teal-light))] transition-all duration-300",
        
        // Otros variantes
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Medical Theme Variants
        medical: "bg-gradient-hero text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02]",
        success: "bg-gradient-success text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02]",
        provider: "bg-gradient-provider text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02]",
        medicalOutline: "border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[hsl(var(--fullsalud-teal))] backdrop-blur-md transition-all duration-300 hover:scale-[1.02]",
        successOutline: "border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[hsl(var(--fullsalud-green))] backdrop-blur-md transition-all duration-300 hover:scale-[1.02]",
        ghostWhite: "border-2 border-white bg-white/10 text-white hover:bg-white hover:text-secondary backdrop-blur-md transition-all duration-300 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
