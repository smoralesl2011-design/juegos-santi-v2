import { useCallback, useEffect } from "react";
import BackgroundDecor from "@/components/game/background-decor";
import Confetti from "@/components/game/confetti-burst";
import EquationRow from "@/components/game/equation-row";
import FeedbackBanner from "@/components/game/feedback-banner";
import GameHeader from "@/components/game/game-header";
import NumberPad from "@/components/game/number-pad";
import OptionButton, { type OptionState, type OptionTone } from "@/components/game/option-button";
import { useAdditionGame } from "@/hooks/use-addition-game";

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

  const handleDigit = useCallback(
    (digit: number) => {
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

          <section className="grid w-full items-end gap-5 lg:grid-cols-2 lg:gap-8">
            <NumberPad
              onDigit={handleDigit}
              onDelete={deleteLast}
              onCheck={checkTyped}
              canCheck={typed.length > 0}
              disabled={status === "correct"}
              className="order-2 lg:order-1"
            />

            <div className="order-1 w-full lg:order-2">
              <p className="mb-2 text-center text-caption uppercase tracking-wide text-muted-foreground">
                Toca la respuesta correcta
              </p>
              <div className="grid grid-cols-3 gap-3">
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
            </div>
          </section>
        </main>

        <p className="text-center text-caption text-muted-foreground">
          Consejo: también puedes escribir el número con el teclado del ordenador
        </p>
      </div>
    </div>
  );
};

export default Index;
