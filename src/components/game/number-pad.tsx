import { Check, Delete, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NumberPadProps {
  onDigit: (digit: number) => void;
  onDelete: () => void;
  onCheck: () => void;
  canCheck: boolean;
  disabled: boolean;
  className?: string;
}

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const NumberPad = ({ onDigit, onDelete, onCheck, canCheck, disabled, className }: NumberPadProps) => (
  <div className={cn("w-full max-w-[560px]", className)}>
    <p className="mb-2 flex items-center justify-center gap-2 text-caption text-muted-foreground">
      <Keyboard className="h-4 w-4" aria-hidden="true" />
      O escribe el número
    </p>

    <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
      {DIGITS.map((digit) => (
        <Button
          key={digit}
          type="button"
          variant="key"
          size="kid"
          aria-label={`Número ${digit}`}
          disabled={disabled}
          onClick={() => onDigit(digit)}
        >
          {digit}
        </Button>
      ))}

      <Button
        type="button"
        variant="key"
        size="kid"
        className="col-span-2"
        aria-label="Borrar el último número"
        onClick={onDelete}
      >
        <Delete className="h-6 w-6" aria-hidden="true" />
        <span className="text-body">Borrar</span>
      </Button>

      <Button
        type="button"
        variant="check"
        size="kid"
        className="col-span-3"
        disabled={!canCheck || disabled}
        onClick={onCheck}
      >
        <Check className="h-7 w-7" strokeWidth={3} aria-hidden="true" />
        ¡Comprobar!
      </Button>
    </div>
  </div>
);

export default NumberPad;
