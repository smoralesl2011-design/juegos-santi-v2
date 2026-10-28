import type { ReactElement, SVGProps } from "react";
import { AppleShape, BearShape, StarShape } from "@/components/game/figure-shapes";

export type FigureShape = (props: SVGProps<SVGSVGElement>) => ReactElement;

export interface FigureDefinition {
  /** Stable id used by the game logic. */
  key: string;
  /** Plural name, only used for screen readers. */
  label: string;
  /**
   * Image file in `public/figures/` (for example "/figures/micro.png").
   * When present it replaces the built-in drawing.
   */
  image?: string;
  /** Built-in cartoon drawing, used when there is no image. */
  Shape?: FigureShape;
}

const defineFigures = <T extends readonly FigureDefinition[]>(figures: T) => figures;

/**
 * Every character the game can show. Add one line per character; the game
 * picks randomly among all of them.
 */
export const FIGURES = defineFigures([
  { key: "manzana", label: "manzanas", Shape: AppleShape },
  { key: "estrella", label: "estrellas", Shape: StarShape },
  { key: "osito", label: "ositos", Shape: BearShape },
  // Personal favourites only need the PNG in `public/figures/`, e.g.:
  // { key: "micro", label: "micros", image: "/figures/micro.png" },
]);

export type FigureKey = (typeof FIGURES)[number]["key"];

export const FIGURE_KEYS: FigureKey[] = FIGURES.map((figure) => figure.key);

export const figureByKey = (key: string): FigureDefinition | undefined =>
  FIGURES.find((figure) => figure.key === key);

export const figureLabel = (key: string): string => figureByKey(key)?.label ?? "";
