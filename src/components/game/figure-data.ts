import type { ReactElement, SVGProps } from "react";

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
  /** Built-in cartoon drawing (see `figure-shapes.tsx`), used when there is no image. */
  Shape?: FigureShape;
}

const defineFigures = <T extends readonly FigureDefinition[]>(figures: T) => figures;

/**
 * Every character the game can show. Add one line per character; the game
 * picks randomly among all of them.
 */
export const FIGURES = defineFigures([
  { key: "micro", label: "micrófonos", image: "/figures/micro.png" },
  { key: "bocina", label: "bocinas", image: "/figures/bocina.png" },
  { key: "bombo", label: "bombos", image: "/figures/bombo.png" },
  { key: "nota", label: "notas musicales", image: "/figures/nota.png" },
  { key: "auriculares", label: "auriculares", image: "/figures/auriculares.png" },
  { key: "teclado", label: "teclados", image: "/figures/teclado.png" },
  { key: "vinilo", label: "vinilos", image: "/figures/vinilo.png" },
  { key: "triangulo", label: "triángulos", image: "/figures/triangulo.png" },
  { key: "ukelele", label: "ukeleles", image: "/figures/ukelele.png" },
  { key: "silbato", label: "silbatos", image: "/figures/silbato.png" },
]);

export type FigureKey = (typeof FIGURES)[number]["key"];

export const FIGURE_KEYS: FigureKey[] = FIGURES.map((figure) => figure.key);

export const figureByKey = (key: string): FigureDefinition | undefined =>
  FIGURES.find((figure) => figure.key === key);

export const figureLabel = (key: string): string => figureByKey(key)?.label ?? "";
