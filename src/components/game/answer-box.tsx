import { Check } from "lucide-react";
import type { AnswerStatus } from "@/hooks/use-addition-game";
import { cn } from "@/lib/utils";

interface AnswerBoxProps {
  typed: string;
  status: AnswerStatus;
  result: number;
  shakeKey: number;
  className?: string;
}

const AnswerBox = ({ typed, status, result, shakeKey, className }: AnswerBoxProps) => {
  const isCorrect = status === "correct";
  const isWrong = status === "wrong";
  const hasTyped = typed.length > 0;

  return (
    <div className={cn("flex w-full flex-col items-center gap-2", className)}>
      <div
        key={shakeKey}
        className={cn(
          "relative grid aspect-square w-full max-w-[140px] place-items-center rounded-2xl border-4 bg-card transition-colors sm:max-w-[164px] sm:rounded-3xl lg:max-w-[230px]",
          status === "idle" && "animate-pulse-glow border-panel-3/50",
          isWrong && "animate-shake-soft border-destructive bg-error-gradient",
          isCorrect && "animate-pop-in border-success bg-success-gradient shadow-panel-3"
        )}
      >
        <span
          className={cn(
            "tabular font-display text-display leading-none lg:text-mega",
            isCorrect && "animate-star-pop text-success",
            isWrong && "text-destructive",
            !isCorrect && !isWrong && (hasTyped ? "text-panel-3" : "text-muted-foreground/50")
          )}
        >
          {isCorrect ? result : hasTyped ? typed : "?"}
        </span>

        {isCorrect && (
          <span className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-pill border-4 border-success bg-card text-success shadow-sm">
            <Check className="h-5 w-5" strokeWidth={4} />
          </span>
        )}

        {isWrong && (
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-pill bg-destructive px-3 py-1 text-caption text-destructive-foreground shadow-sm">
            otra vez
          </span>
        )}
      </div>

      <p className="text-center text-caption text-muted-foreground">
        Tu respuesta
      </p>
    </div>
  );
};

export default AnswerBox;
