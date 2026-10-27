import AnswerBox from "@/components/game/answer-box";
import FigurePanel from "@/components/game/figure-panel";
import { FIGURE_LABELS } from "@/components/game/figure-data";
import OperatorBadge from "@/components/game/operator-badge";
import type { AnswerStatus, GameRound } from "@/hooks/use-addition-game";

interface EquationRowProps {
  round: GameRound;
  status: AnswerStatus;
  typed: string;
  correctAnswer: number;
  shakeKey: number;
}

const EquationRow = ({ round, status, typed, correctAnswer, shakeKey }: EquationRowProps) => {
  const celebrating = status === "correct";

  return (
    <div className="grid w-full grid-cols-1 items-center gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.05fr)] lg:gap-5">
      <p className="sr-only">
        {`${round.a} ${FIGURE_LABELS[round.figure]} más ${round.b} ${FIGURE_LABELS[round.figure]}`}
      </p>

      <FigurePanel
        key={`${round.id}-a`}
        count={round.a}
        kind={round.figure}
        tone="1"
        celebrating={celebrating}
        className="min-h-[124px] sm:min-h-[160px] lg:min-h-[200px]"
      />

      <OperatorBadge symbol="+" tone="plus" pulsing={status === "idle"} className="mx-auto" />

      <FigurePanel
        key={`${round.id}-b`}
        count={round.b}
        kind={round.figure}
        tone="2"
        celebrating={celebrating}
        className="min-h-[124px] sm:min-h-[160px] lg:min-h-[200px]"
      />

      <OperatorBadge symbol="=" tone="equals" className="mx-auto" />

      <AnswerBox
        typed={typed}
        status={status}
        result={correctAnswer}
        shakeKey={shakeKey}
        className="mt-1 lg:mt-0"
      />
    </div>
  );
};

export default EquationRow;
