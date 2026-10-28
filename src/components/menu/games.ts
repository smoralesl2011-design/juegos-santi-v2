import type { FigureKey } from "@/components/game/figure-data";

export type GameStatus = "ready" | "soon";
export type GameTone = "orange" | "blue";

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  /** Symbol shown in the round badge of the menu tile. */
  symbol: string;
  tone: GameTone;
  /** Two decorative figures shown next to the symbol. */
  figures: [FigureKey, FigureKey];
  /** Only present while the game is playable. */
  path?: string;
  status: GameStatus;
}

export const GAMES: GameEntry[] = [
  {
    id: "sumas",
    title: "Sumas",
    description: "Junta los dibujos y encuentra el total",
    symbol: "+",
    tone: "orange",
    figures: ["manzana", "estrella"],
    path: "/sumas",
    status: "ready",
  },
  {
    id: "restas",
    title: "Restas",
    description: "Quita dibujos y descubre cuántos quedan",
    symbol: "−",
    tone: "blue",
    figures: ["estrella", "osito"],
    path: "/restas",
    status: "ready",
  },
];
