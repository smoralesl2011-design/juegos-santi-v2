import { cn } from "@/lib/utils";

interface OperatorBadgeProps {
  symbol: "+" | "=";
  tone: "plus" | "equals";
  pulsing?: boolean;
  className?: string;
}

const OperatorBadge = ({ symbol, tone, pulsing = false, className }: OperatorBadgeProps) => (
  <div className={cn("animate-pop-in", className)}>
    <div
      aria-hidden="true"
      className={cn(
        "grid h-14 w-14 place-items-center rounded-pill font-display leading-none text-foreground select-none sm:h-16 sm:w-16 lg:h-20 lg:w-20",
        tone === "plus"
          ? "bg-operator-plus shadow-chunky-sun"
          : "bg-operator-equals shadow-chunky-success",
        pulsing && "animate-operator-pulse motion-reduce:animate-none"
      )}
    >
      <span className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{symbol}</span>
    </div>
  </div>
);

export default OperatorBadge;
