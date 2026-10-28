import { Heart, MousePointerClick, PartyPopper } from "lucide-react";
import type { AnswerStatus } from "@/hooks/use-addition-game";

const FeedbackBanner = ({ status }: { status: AnswerStatus }) => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[76px] w-full items-center justify-center"
  >
    {status === "correct" && (
      <div className="flex animate-banner-in items-center gap-3 rounded-2xl border-4 border-success bg-success-gradient px-5 py-3 shadow-md">
        <PartyPopper className="h-9 w-9 shrink-0 text-success" aria-hidden="true" />
        <p className="text-title text-success sm:text-headline">¡Excelente trabajo!</p>
      </div>
    )}

    {status === "wrong" && (
      <div className="flex animate-banner-in items-center gap-3 rounded-2xl border-4 border-destructive bg-error-gradient px-5 py-3 shadow-md">
        <Heart className="h-9 w-9 shrink-0 text-destructive" aria-hidden="true" />
        <p className="text-title text-destructive sm:text-headline">
          ¡Inténtalo de nuevo, tú puedes!
        </p>
      </div>
    )}

    {status === "idle" && (
      <p className="flex items-center gap-2 text-center text-caption text-muted-foreground sm:text-body">
        <MousePointerClick className="h-5 w-5 shrink-0" aria-hidden="true" />
        Toca un número o escríbelo con el teclado
      </p>
    )}
  </div>
);

export default FeedbackBanner;
