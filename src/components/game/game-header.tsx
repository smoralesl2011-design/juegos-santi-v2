import { RotateCcw, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_STARS = 5;

interface GameHeaderProps {
  score: number;
  onReset: () => void;
}

const GameHeader = ({ score, onReset }: GameHeaderProps) => {
  const filledStars = Math.min(score, MAX_STARS);

  return (
    <header className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className="grid h-12 w-12 shrink-0 animate-bounce-soft place-items-center rounded-blob bg-primary text-primary-foreground shadow-chunky-primary motion-reduce:animate-none sm:h-14 sm:w-14"
        >
          <span className="font-display text-title font-extrabold">+</span>
        </div>
        <div>
          <h1 className="font-display text-title leading-tight text-foreground sm:text-headline">
            ¡Vamos a sumar!
          </h1>
          <p className="text-caption text-muted-foreground">
            Cuenta los dibujos y busca el resultado
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-pill border-2 border-border bg-card/90 px-3 py-2 shadow-xs backdrop-blur sm:gap-3 sm:px-4">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-secondary shadow-chunky-sun"
        >
          <Star className="h-6 w-6 fill-foreground text-foreground" />
        </span>

        <div className="flex flex-col">
          <p className="text-caption uppercase tracking-wide text-muted-foreground">
            Sumas correctas
          </p>
          <div className="flex items-center gap-2">
            <span
              key={score}
              className="tabular animate-star-pop font-display text-title font-extrabold leading-none text-foreground"
            >
              {score}
            </span>
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: MAX_STARS }).map((_, index) => (
                <Star
                  key={index}
                  className={cn(
                    "h-4 w-4 sm:h-5 sm:w-5",
                    index < filledStars
                      ? "fill-star text-star"
                      : "fill-star-empty text-star-empty"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          aria-label="Empezar el marcador de cero"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-muted text-muted-foreground transition-transform duration-100 hover:-translate-y-0.5 hover:text-foreground active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default GameHeader;
