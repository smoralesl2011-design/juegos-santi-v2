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

/**
 * Wide screens: every box sits in one horizontal row (1 + 2 = answer).
 * Narrow screens: box 1 and box 2 stay side by side and the "=" sign opens a
 * second row with the answer box, so the whole equation fits without scrolling.
 */
const EquationRow = ({ round, status, typed, correctAnswer, shakeKey }: EquationRowProps) => {
  const celebrating = status === "correct";

  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-2.5 gap-y-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.05fr)] md:gap-x-3 md:gap-y-0 lg:gap-x-5">
      <p className="sr-only">
        {`${round.a} ${FIGURE_LABELS[round.figure]} más ${round.b} ${FIGURE_LABELS[round.figure]}`}
      </p>

      <FigurePanel
        key={`${round.id}-a`}
        count={round.a}
        kind={round.figure}
        tone="1"
        celebrating={celebrating}
        className="min-h-[104px] sm:min-h-[124px] lg:min-h-[200px]"
      />

      <OperatorBadge
        symbol="+"
        tone="plus"
        pulsing={status === "idle"}
        className="mx-auto self-center"
      />

      <FigurePanel
        key={`${round.id}-b`}
        count={round.b}
        kind={round.figure}
        tone="2"
        celebrating={celebrating}
        className="min-h-[104px] sm:min-h-[124px] lg:min-h-[200px]"
      />

      <OperatorBadge
        symbol="="
        tone="equals"
        className="col-start-1 row-start-2 mx-auto self-center md:col-start-auto md:row-start-auto"
      />

      <AnswerBox
        typed={typed}
        status={status}
        result={correctAnswer}
        shakeKey={shakeKey}
        className="col-span-2 self-center md:col-span-1"
      />
    </div>
  );
};

export default EquationRow;
