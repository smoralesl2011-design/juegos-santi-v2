import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "lucide-react";
import BackgroundDecor from "@/components/game/background-decor";
import Confetti from "@/components/game/confetti-burst";
import EquationRow from "@/components/game/equation-row";
import FeedbackBanner from "@/components/game/feedback-banner";
import GameHeader from "@/components/game/game-header";
import NumberPad from "@/components/game/number-pad";
import OptionButton, { type OptionState, type OptionTone } from "@/components/game/option-button";
import { Button } from "@/components/ui/button";
import { useAdditionGame } from "@/hooks/use-addition-game";
import { cn } from "@/lib/utils";

const OPTION_TONES: OptionTone[] = ["sun", "sky", "berry"];

const toneForIndex = (index: number): OptionTone =>
  OPTION_TONES[index % OPTION_TONES.length] ?? "sun";

const Index = () => {
  const {
    round,
    status,
    typed,
    correctAnswer,
    score,
    lockedOptions,
    wrongOption,
    shakeKey,
    pressDigit,
    deleteLast,
    checkTyped,
    chooseOption,
    resetScore,
  } = useAdditionGame();

  const [isKeypadOpen, setKeypadOpen] = useState(false);

  const handleDigit = useCallback(
    (digit: number) => {
      setKeypadOpen(true);
      pressDigit(digit);
    },
    [pressDigit]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.length === 1 && event.key >= "0" && event.key <= "9") {
        handleDigit(Number(event.key));
        return;
      }
      if (event.key === "Backspace") {
        deleteLast();
        return;
      }
      if (event.key === "Enter") {
        checkTyped();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [checkTyped, deleteLast, handleDigit]);

  const optionState = (value: number): OptionState => {
    if (status === "correct") return value === correctAnswer ? "correct" : "locked";
    if (value === wrongOption) return "wrong";
    if (lockedOptions.includes(value)) return "locked";
    return "idle";
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-page-gradient">
      <BackgroundDecor />
      <Confetti active={status === "correct"} burstId={round.id} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1180px] flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:gap-5">
        <GameHeader score={score} onReset={resetScore} />

        <main className="flex flex-1 flex-col items-center justify-center gap-3 lg:gap-5">
          <EquationRow
            round={round}
            status={status}
            typed={typed}
            correctAnswer={correctAnswer}
            shakeKey={shakeKey}
          />

          <FeedbackBanner status={status} />

          <section className="grid w-full items-end gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            <div
              className={cn(
                "order-2 w-full justify-center md:order-1 md:flex",
                isKeypadOpen ? "flex" : "hidden md:flex"
              )}
            >
              <NumberPad
                onDigit={handleDigit}
                onDelete={deleteLast}
                onCheck={checkTyped}
                canCheck={typed.length > 0}
                disabled={status === "correct"}
              />
            </div>

            <div className="order-1 w-full md:order-2">
              <p className="mb-2 text-center text-caption uppercase tracking-wide text-muted-foreground">
                Toca la respuesta correcta
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {round.options.map((value, index) => (
                  <OptionButton
                    key={`${round.id}-${value}`}
                    value={value}
                    tone={toneForIndex(index)}
                    state={optionState(value)}
                    onClick={() => chooseOption(value)}
                  />
                ))}
              </div>

              <Button
                type="button"
                variant="key"
                size="kid"
                className="mt-3 w-full md:hidden"
                aria-expanded={isKeypadOpen}
                onClick={() => setKeypadOpen((open) => !open)}
              >
                <Keyboard aria-hidden="true" />
                {isKeypadOpen ? "Ocultar el teclado" : "Escribe el número"}
              </Button>
            </div>
          </section>
        </main>

        <p className="hidden text-center text-caption text-muted-foreground md:block">
          Consejo: también puedes escribir el número con el teclado del ordenador
        </p>
      </div>
    </div>
  );
};

export default Index;
