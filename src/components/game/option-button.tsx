import type { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type OptionTone = "sun" | "sky" | "berry" | "grape";
export type OptionState = "idle" | "correct" | "wrong" | "locked";

const optionButtonVariants = cva(
  "relative inline-flex select-none items-center justify-center overflow-hidden rounded-pill font-display font-extrabold leading-none transition-transform duration-100 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      tone: {
        sun: "bg-option-sun text-option-sun-fg shadow-chunky-sun",
        sky: "bg-option-sky text-option-sky-fg shadow-chunky-sky",
        berry: "bg-option-berry text-option-berry-fg shadow-chunky-berry",
        grape: "bg-option-grape text-option-grape-fg shadow-chunky-grape",
      },
      state: {
        idle: "hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-none",
        correct: "animate-pop-in bg-success text-success-foreground shadow-chunky-success",
        wrong: "animate-shake-soft bg-destructive-surface text-destructive shadow-none",
        locked: "pointer-events-none bg-muted text-muted-foreground shadow-xs opacity-70",
      },
      size: {
        default: "h-[4.5rem] text-4xl sm:h-20 lg:h-24 lg:text-5xl",
      },
    },
    defaultVariants: { state: "idle", size: "default" },
  }
);

interface OptionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: number;
  tone: OptionTone;
  state: OptionState;
}

const OptionButton = ({ value, tone, state, className, ...props }: OptionButtonProps) => (
  <button
    type="button"
    aria-label={`Respuesta ${value}`}
    disabled={state === "locked" || state === "correct"}
    className={cn(
      optionButtonVariants({
        tone: state === "idle" ? tone : undefined,
        state,
        size: "default",
      }),
      className
    )}
    {...props}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-shine"
    />
    <span className="relative tabular">{value}</span>
  </button>
);

export default OptionButton;
