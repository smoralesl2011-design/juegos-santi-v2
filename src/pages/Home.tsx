import { useEffect } from "react";
import BackgroundDecor from "@/components/game/background-decor";
import GameTile from "@/components/menu/game-tile";
import { GAMES } from "@/components/menu/games";
import MenuHero from "@/components/menu/menu-hero";

const Home = () => {
  useEffect(() => {
    document.title = "Aprende Jugando · Juegos de matemáticas para niños";
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-page-gradient">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[880px] flex-col items-center justify-center gap-7 px-4 py-8 sm:gap-9 sm:px-6 sm:py-10">
        <MenuHero />

        <section
          aria-label="Juegos disponibles"
          className="grid w-full gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {GAMES.map((game) => (
            <GameTile key={game.id} game={game} />
          ))}
        </section>

        <p className="text-center text-caption text-muted-foreground">
          Muy pronto: más juegos de restas, multiplicaciones y formas
        </p>
      </div>
    </div>
  );
};

export default Home;
