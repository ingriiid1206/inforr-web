import { MenuItem, allergenIcons } from "@/data/menu";

interface Props {
  item: MenuItem;
  onClick: () => void;
}

export function ProductCard({ item, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl border-2 border-primary bg-card p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-lg shadow-brutal-sm focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <div className="aspect-square rounded-xl bg-gradient-to-br from-accent/60 via-lavender to-purple-mid/30 mb-3 flex items-center justify-center border border-primary/20 overflow-hidden">
        <span className="text-5xl sm:text-6xl opacity-80 group-hover:scale-110 transition-transform">
          {item.categoria === "lanches" ? "🍔" : "🍰"}
        </span>
      </div>
      <h3 className="font-display font-semibold text-primary text-base sm:text-lg leading-tight">
        {item.nome}
      </h3>
      {item.subtitulo && (
        <p className="text-xs text-foreground/60 italic mt-0.5">{item.subtitulo}</p>
      )}
      <div className="mt-3 flex items-center justify-between">
        <span className="bg-accent text-accent-foreground font-bold text-sm px-2.5 py-1 rounded-md border border-primary/30">
          R$ {item.preco.toFixed(2).replace(".", ",")}
        </span>
        <div className="flex gap-1.5 items-center" aria-label="alergênicos">
          {item.alergenicos.map((a) => (
            <img
              key={a}
              src={allergenIcons[a]}
              alt={a}
              title={a}
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain bg-background border-2 border-primary/40 rounded-lg p-1 shadow-brutal-sm"
              style={{ imageRendering: "pixelated" }}
            />
          ))}
        </div>

      </div>
    </button>
  );
}