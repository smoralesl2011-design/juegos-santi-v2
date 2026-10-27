import { useMemo } from "react";

const COLORS = [
  "var(--confetti-1)",
  "var(--confetti-2)",
  "var(--confetti-3)",
  "var(--confetti-4)",
  "var(--confetti-5)",
  "var(--confetti-6)",
];

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  round: boolean;
}

const buildPieces = (): Piece[] =>
  Array.from({ length: 34 }, (_, index) => ({
    id: index,
    left: Math.random() * 96,
    delay: Math.random() * 0.45,
    duration: 1.3 + Math.random() * 0.7,
    size: 10 + Math.round(Math.random() * 16),
    color: COLORS[index % COLORS.length],
    round: index % 3 !== 0,
  }));

const Confetti = ({ active, burstId }: { active: boolean; burstId: number | string }) => {
  const pieces = useMemo(buildPieces, []);

  if (!active) return null;

  return (
    <div
      key={burstId}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 block border-2 border-foreground/20"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.round ? piece.size : piece.size * 0.5}px`,
            backgroundColor: `hsl(${piece.color})`,
            borderRadius: piece.round ? "999px" : "4px",
            animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s both`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
