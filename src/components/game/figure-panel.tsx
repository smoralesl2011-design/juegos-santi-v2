import { cva } from "class-variance-authority";
import Figure from "@/components/game/cartoon-figures";
import type { FigureKey } from "@/components/game/figure-data";
import { cn } from "@/lib/utils";

const panelVariants = cva(
  "relative flex animate-pop-in items-center justify-center rounded-2xl border-4 bg-gradient-to-b px-2.5 py-3 sm:rounded-3xl sm:px-4 sm:py-5",
  {
    variants: {
      tone: {
        "1": "border-panel-1 from-card to-panel-1-tint shadow-panel-1",
        "2": "border-panel-2 from-card to-panel-2-tint shadow-panel-2",
      },
      /** Subtraction: the box shows the figures that are taken away. */
      removing: {
        true: "border-dashed",
        false: "",
      },
    },
    defaultVariants: { tone: "1", removing: false },
  }
);

interface FigurePanelProps {
  count: number;
  kind: FigureKey;
  tone: "1" | "2";
  celebrating: boolean;
  removing?: boolean;
  className?: string;
}

const FigurePanel = ({
  count,
  kind,
  tone,
  celebrating,
  removing = false,
  className,
}: FigurePanelProps) => (
  <div
    className={cn(panelVariants({ tone, removing }), className)}
    aria-label={removing ? "Dibujos que se quitan" : undefined}
  >
    <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-3">
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
              "h-10 w-10 sm:h-14 sm:w-14 lg:h-[4.5rem] lg:w-[4.5rem]",
              removing && "opacity-50 saturate-50",
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
