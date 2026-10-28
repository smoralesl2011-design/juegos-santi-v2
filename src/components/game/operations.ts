import { randomInt } from "@/lib/random";

export type MathSymbol = "+" | "−";

export interface MathRoundValues {
  /** Figures shown in the first box. */
  a: number;
  /** Figures shown in the second box. */
  b: number;
  /** Correct answer. */
  result: number;
}

export interface MathOperation {
  id: string;
  /** Name used in the menu tile and the page title. */
  name: string;
  /** Headline shown inside the game. */
  heading: string;
  subtitle: string;
  /** Label of the score counter. */
  scoreLabel: string;
  symbol: MathSymbol;
  /** Builds one exercise. Keep results small and friendly for 6 year olds. */
  buildRound: () => MathRoundValues;
}

export const SUMAS: MathOperation = {
  id: "sumas",
  name: "Sumas",
  heading: "¡Vamos a sumar!",
  subtitle: "Cuenta los dibujos y busca el resultado",
  scoreLabel: "Sumas correctas",
  symbol: "+",
  buildRound: () => {
    const a = randomInt(1, 5);
    const b = randomInt(1, 5);
    return { a, b, result: a + b };
  },
};

export const RESTAS: MathOperation = {
  id: "restas",
  name: "Restas",
  heading: "¡Vamos a restar!",
  subtitle: "Quita los dibujos y mira cuántos quedan",
  scoreLabel: "Restas correctas",
  symbol: "−",
  buildRound: () => {
    const a = randomInt(2, 6);
    const b = randomInt(1, a - 1);
    return { a, b, result: a - b };
  },
};
