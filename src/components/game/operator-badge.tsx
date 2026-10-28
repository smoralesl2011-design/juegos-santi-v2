import { cn } from "@/lib/utils";
import type { MathSymbol } from "@/components/game/operations";

type OperatorTone = "plus" | "minus" | "equals";

interface OperatorBadgeProps {
  symbol: MathSymbol | "=";
  tone: OperatorTone;
  pulsing?: boolean;
  className?: string;
}

const OperatorBadge = ({ symbol, tone, pulsing = false, className }: OperatorBadgeProps) => (
  <div className={cn("animate-pop-in", className)}>
    <div
      aria-hidden="true"
      className={cn(
        "grid h-12 w-12 place-items-center rounded-pill font-display leading-none text-foreground select-none sm:h-14 sm:w-14 lg:h-20 lg:w-20",
        tone === "plus" && "bg-operator-plus shadow-chunky-sun",
        tone === "minus" && "bg-operator-minus shadow-chunky-sky",
        tone === "equals" && "bg-operator-equals shadow-chunky-success",
        pulsing && "animate-operator-pulse motion-reduce:animate-none"
      )}
    >
      <span className="text-2xl font-extrabold sm:text-3xl lg:text-5xl">{symbol}</span>
    </div>
  </div>
);

export default OperatorBadge;
