import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MenuItem, allergenIcons, allergenLabels } from "@/data/menu";

interface Props {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({ item, open, onOpenChange }: Props) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-2 border-primary rounded-2xl bg-card p-0 overflow-hidden max-h-[90vh]">
        <div className="overflow-y-auto max-h-[90vh]">
          <div className="aspect-[4/3] bg-gradient-to-br from-accent/70 via-lavender to-purple-mid/30 flex items-center justify-center border-b-2 border-primary">
            <span className="text-8xl">
              {item.categoria === "lanches" ? "🍔" : item.categoria === "doces" ? "🍰" : "🥤"}
            </span>
          </div>
          <div className="p-5 sm:p-6">
          <DialogHeader className="space-y-1 text-left">
            <DialogTitle className="text-2xl font-bold text-primary">
              {item.nome}
            </DialogTitle>
            {item.subtitulo && (
              <p className="text-sm italic text-foreground/60">{item.subtitulo}</p>
            )}
            <DialogDescription className="text-foreground/80 pt-2">
              {item.descricao}
            </DialogDescription>
          </DialogHeader>

          {/* Alergênicos — logo abaixo da descrição, sempre visível */}
          <div className="mt-5 rounded-xl border-2 border-primary/30 bg-background p-3">
            <p className="font-pixel text-sm text-purple-mid mb-3">// alergênicos</p>
            {item.alergenicos.length > 0 ? (
              <div className="flex flex-col gap-2">
                {item.alergenicos.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-3 bg-card border-2 border-primary/40 rounded-lg px-3 py-2"
                  >
                    <img
                      src={allergenIcons[a]}
                      alt=""
                      className="w-10 h-10 object-contain shrink-0"
                      style={{ imageRendering: "pixelated" }}
                    />
                    <span className="text-sm font-semibold text-primary">
                      {allergenLabels[a]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-foreground/60 italic">
                Sem alergênicos declarados.
              </p>
            )}
          </div>

          <div className="mt-5 inline-block bg-accent text-accent-foreground font-bold text-xl px-3 py-1.5 rounded-lg border-2 border-primary shadow-brutal-sm">
            R$ {item.preco.toFixed(2).replace(".", ",")}
          </div>

          {item.ingredientes.length > 0 && (
            <div className="mt-5">
              <p className="font-pixel text-sm text-purple-mid mb-2">// ingredientes</p>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredientes.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs bg-lavender/50 text-primary px-2 py-1 rounded-md border border-primary/20"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}