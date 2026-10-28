import type { SVGProps } from "react";
import { figureByKey, type FigureKey } from "@/components/game/figure-data";
import { cn } from "@/lib/utils";

interface FigureProps extends SVGProps<SVGSVGElement> {
  kind: FigureKey;
}

/**
 * Renders one character: a project image when the figure definition has one
 * (`/figures/*.png`), otherwise the built-in cartoon drawing.
 */
const Figure = ({ kind, className, style, ...props }: FigureProps) => {
  const definition = figureByKey(kind);

  if (definition?.image) {
    return (
      <img
        src={definition.image}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={style}
        className={cn("select-none object-contain", className)}
      />
    );
  }

  const Shape = definition?.Shape;
  if (!Shape) return null;

  return <Shape aria-hidden="true" style={style} className={className} {...props} />;
};

export default Figure;
