import { almocoDias, PRECO_ALMOCO, allergenIcons, allergenLabels } from "@/data/menu";
import panquecaImg from "@/assets/almoco-panqueca.png";
import tortaImg from "@/assets/almoco-torta.png";
import lasanhaImg from "@/assets/almoco-lasanha.png";

const dishImages = [panquecaImg, tortaImg, lasanhaImg];

// Unified background (cor de fundo da torta de frango) em todos os pratos
const DISH_BG = "from-purple-mid/40 to-lavender/60";

export function AlmocoBanner() {
  return (
    <section className="px-5 max-w-5xl mx-auto">
      <div className="relative rounded-3xl border-2 border-primary bg-card shadow-brutal-lg overflow-hidden">
        {/* Decorative top stripe */}
        <div className="relative bg-primary text-primary-foreground px-5 sm:px-8 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-pixel text-sm text-accent">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            especial_do_dia.exe — rodando agora
          </div>
        </div>

        {/* Sparkle dots background */}
        <svg
          className="absolute top-12 right-0 w-40 h-40 opacity-20 pointer-events-none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 37) % 100}
              cy={(i * 53) % 100}
              r={(i % 3) + 1}
              fill="var(--primary)"
            />
          ))}
        </svg>

        <div className="p-5 sm:p-8">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div>
              <p className="font-pixel text-sm text-purple-mid">{"// menu_principal"}</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-primary leading-none">
                Almoço
              </h2>
              <p className="text-sm text-foreground/70 mt-2 max-w-xs">
                Três pratos caprichados, três dias diferentes. Reserve antes que esgote 😋
              </p>
            </div>

            <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
              {/* Starburst behind price */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <polygon
                  points="60,2 72,28 100,18 90,46 118,60 90,74 100,102 72,92 60,118 48,92 20,102 30,74 2,60 30,46 20,18 48,28"
                  fill="var(--accent)"
                  stroke="var(--primary)"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-pixel text-sm sm:text-base text-primary">Apenas</div>
                <div className="font-bold text-3xl sm:text-4xl text-primary leading-none">
                  R$ {PRECO_ALMOCO.toFixed(2).replace(".", ",")}
                </div>
              </div>
            </div>
          </div>

          {/* Dishes */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {almocoDias.map((d, i) => (
              <div
                key={d.dia}
                className="group relative rounded-2xl border-2 border-primary bg-background overflow-hidden transition-all hover:-translate-y-1 hover:shadow-brutal"
              >
                {/* day tag */}
                <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[10px] sm:text-xs font-pixel px-2 py-0.5 rounded-md">
                  {d.dia}
                </div>
                <div
                  className={`aspect-square bg-gradient-to-br ${DISH_BG} flex items-center justify-center border-b-2 border-primary overflow-hidden`}
                >
                  <img
                    src={dishImages[i]}
                    alt={d.nome}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <div className="p-2 sm:p-3 text-center">
                  <div className="text-[10px] sm:text-xs font-pixel text-purple-mid">
                    {d.data}
                  </div>
                  <div className="text-xs sm:text-base font-bold text-primary leading-tight mt-0.5">
                    {d.nome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom info bar - acompanhamentos */}
          <div className="mt-5 relative rounded-xl border-2 border-primary bg-accent/50 px-3 py-2.5 sm:px-4 sm:py-3 shadow-brutal-sm">
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="font-pixel text-[10px] sm:text-xs text-primary uppercase tracking-wider shrink-0">
                ★ acompanha
              </span>
              <div className="flex items-center gap-1.5 bg-background border-2 border-primary rounded-lg px-2.5 py-1 shadow-brutal-sm">
                <span className="font-bold text-primary text-xs sm:text-sm">Arroz</span>
              </div>
              <span className="font-pixel text-base sm:text-lg text-primary">+</span>
              <div className="flex items-center gap-1.5 bg-background border-2 border-primary rounded-lg px-2.5 py-1 shadow-brutal-sm">
                <span className="font-bold text-primary text-xs sm:text-sm">Batata palha</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}