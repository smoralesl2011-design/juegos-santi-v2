import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { Lock, Play } from "lucide-react";
import Figure from "@/components/game/cartoon-figures";
import type { GameEntry } from "@/components/menu/games";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tileVariants = cva(
  "relative flex animate-pop-in flex-col items-center gap-3 rounded-3xl border-4 bg-gradient-to-b px-5 py-6 text-center sm:gap-4 sm:px-6 sm:py-7",
  {
    variants: {
      tone: {
        orange: "border-panel-1 from-card to-panel-1-tint shadow-panel-1",
        blue: "border-panel-2 from-card to-panel-2-tint shadow-panel-2",
      },
    },
    defaultVariants: { tone: "orange" },
  }
);

const badgeVariants = cva(
  "grid h-12 w-12 shrink-0 place-items-center rounded-pill font-display text-3xl font-extrabold leading-none sm:h-14 sm:w-14 sm:text-4xl",
  {
    variants: {
      tone: {
        orange: "bg-option-sun text-option-sun-fg shadow-chunky-sun",
        blue: "bg-option-sky text-option-sky-fg shadow-chunky-sky",
      },
    },
    defaultVariants: { tone: "orange" },
  }
);

const GameTile = ({ game }: { game: GameEntry }) => {
  const isReady = game.status === "ready" && game.path;

  return (
    <article className={cn(tileVariants({ tone: game.tone }))} aria-labelledby={`juego-${game.id}`}>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {game.figures.map((kind, index) => (
          <span
            key={`${game.id}-${kind}`}
            className="block animate-bounce-soft motion-reduce:animate-none"
            style={{ animationDelay: `${index * 220}ms` }}
          >
            <Figure kind={kind} className="h-10 w-10 sm:h-12 sm:w-12" />
          </span>
        ))}
        <span aria-hidden="true" className={cn(badgeVariants({ tone: game.tone }))}>
          {game.symbol}
        </span>
      </div>

      <h2
        id={`juego-${game.id}`}
        className="font-display text-headline leading-none text-foreground"
      >
        {game.title}
      </h2>

      <p className="text-body text-muted-foreground">{game.description}</p>

      {isReady ? (
        <Button asChild variant="playful" size="kid-lg" className="mt-1 w-full max-w-[220px]">
          <Link to={game.path as string}>
            <Play className="fill-current" aria-hidden="true" />
            ¡Jugar!
          </Link>
        </Button>
      ) : (
        <span className="mt-1 inline-flex items-center gap-2 rounded-pill border-2 border-border bg-muted px-5 py-3 font-display text-body font-extrabold text-muted-foreground">
          <Lock className="h-5 w-5" aria-hidden="true" />
          ¡Muy pronto!
        </span>
      )}
    </article>
  );
};

export default GameTile;
