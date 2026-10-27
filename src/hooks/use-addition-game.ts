import { useCallback, useEffect, useRef, useState } from "react";
import { FIGURE_KEYS, type FigureKey } from "@/components/game/figure-data";

export type AnswerStatus = "idle" | "correct" | "wrong";

export interface GameRound {
  id: number;
  a: number;
  b: number;
  figure: FigureKey;
  options: number[];
}

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = <T,>(items: T[]): T[] =>
  [...items]
    .map((item) => ({ item, order: Math.random() }))
    .sort((left, right) => left.order - right.order)
    .map(({ item }) => item);

const buildRound = (id: number): GameRound => {
  const a = randomInt(1, 5);
  const b = randomInt(1, 5);
  const result = a + b;

  const distractors = shuffle(
    [result - 2, result - 1, result + 1, result + 2, result + 3].filter(
      (value) => value >= 1 && value <= 10 && value !== result
    )
  ).slice(0, 2);

  return {
    id,
    a,
    b,
    figure: FIGURE_KEYS[randomInt(0, FIGURE_KEYS.length - 1)],
    options: shuffle([result, ...distractors]),
  };
};

export function useAdditionGame() {
  const [round, setRound] = useState<GameRound>(() => buildRound(1));
  const [status, setStatus] = useState<AnswerStatus>("idle");
  const [typed, setTyped] = useState("");
  const [score, setScore] = useState(0);
  const [lockedOptions, setLockedOptions] = useState<number[]>([]);
  const [wrongOption, setWrongOption] = useState<number | null>(null);
  const [shakeKey, setShakeKey] = useState(0);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const later = useCallback((action: () => void, delay: number) => {
    timers.current.push(window.setTimeout(action, delay));
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const correctAnswer = round.a + round.b;

  const submit = useCallback(
    (value: number, source: "option" | "keypad") => {
      if (status === "correct") return;
      if (source === "option" && lockedOptions.includes(value)) return;

      clearTimers();

      if (value === correctAnswer) {
        setStatus("correct");
        setScore((current) => current + 1);
        setTyped("");
        later(() => {
          setRound((current) => buildRound(current.id + 1));
          setStatus("idle");
          setTyped("");
          setLockedOptions([]);
          setWrongOption(null);
          setShakeKey(0);
        }, 2200);
        return;
      }

      setStatus("wrong");
      setTyped("");
      setShakeKey((current) => current + 1);
      if (source === "option") {
        setLockedOptions((current) => (current.includes(value) ? current : [...current, value]));
        setWrongOption(value);
        later(() => setWrongOption(null), 700);
      }
      later(() => setStatus((current) => (current === "wrong" ? "idle" : current)), 2600);
    },
    [clearTimers, correctAnswer, later, lockedOptions, status]
  );

  const pressDigit = useCallback(
    (digit: number) => {
      if (status === "correct") return;
      setStatus((current) => (current === "wrong" ? "idle" : current));
      setTyped((current) => (current.length >= 2 ? current : `${current}${digit}`));
    },
    [status]
  );

  const deleteLast = useCallback(() => {
    if (status === "correct") return;
    setTyped((current) => current.slice(0, -1));
  }, [status]);

  const checkTyped = useCallback(() => {
    if (status === "correct" || typed.length === 0) return;
    submit(Number(typed), "keypad");
  }, [status, submit, typed]);

  const chooseOption = useCallback((value: number) => submit(value, "option"), [submit]);

  const resetScore = useCallback(() => {
    clearTimers();
    setScore(0);
    setLockedOptions([]);
    setWrongOption(null);
    setTyped("");
    setStatus("idle");
    setShakeKey((current) => current + 1);
  }, [clearTimers]);

  const answerText = typed.length > 0 ? typed : "";

  return {
    round,
    status,
    typed,
    answerText,
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
  };
}

export type AdditionGame = ReturnType<typeof useAdditionGame>;
