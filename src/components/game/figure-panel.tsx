import { cva } from "class-variance-authority";
import Figure from "@/components/game/cartoon-figures";
import type { FigureKey } from "@/components/game/figure-data";
import { cn } from "@/lib/utils";

const panelVariants = cva(
  "relative flex animate-pop-in items-center justify-center rounded-3xl border-4 bg-gradient-to-b px-3 py-4 sm:px-4 sm:py-5",
  {
    variants: {
      tone: {
        "1": "border-panel-1 from-card to-panel-1-tint shadow-panel-1",
        "2": "border-panel-2 from-card to-panel-2-tint shadow-panel-2",
      },
    },
    defaultVariants: { tone: "1" },
  }
);

interface FigurePanelProps {
  count: number;
  kind: FigureKey;
  tone: "1" | "2";
  celebrating: boolean;
  className?: string;
}

const FigurePanel = ({ count, kind, tone, celebrating, className }: FigurePanelProps) => (
  <div className={cn(panelVariants({ tone }), className)}>
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 lg:gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={`${kind}-${index}`}
          className={cn(
            "block",
            celebrating
              ? "animate-celebrate-jump"
              : "animate-bounce-soft motion-reduce:animate-none"
          )}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <Figure
            kind={kind}
            className={cn(
              "h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
              celebrating && "animate-celebrate-spin"
            )}
            style={celebrating ? { animationDelay: `${index * 90}ms` } : undefined}
          />
        </span>
      ))}
    </div>
  </div>
);

export default FigurePanel;
