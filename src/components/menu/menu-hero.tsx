import { Gamepad2 } from "lucide-react";

const MenuHero = () => (
  <div className="flex flex-col items-center gap-3 text-center">
    <span
      aria-hidden="true"
      className="grid h-16 w-16 animate-bounce-soft place-items-center rounded-blob bg-primary text-primary-foreground shadow-chunky-primary motion-reduce:animate-none sm:h-20 sm:w-20"
    >
      <Gamepad2 className="h-8 w-8 sm:h-10 sm:w-10" />
    </span>

    <h1 className="font-display text-headline leading-tight text-foreground sm:text-display">
      Aprende Jugando
    </h1>
    <p className="max-w-[36ch] text-body text-muted-foreground">
      Elige un juego y practica las matemáticas con dibujos, estrellas y confeti
    </p>
  </div>
);

export default MenuHero;
