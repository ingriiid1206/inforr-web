import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { BuntingBanner } from "@/components/inforro/BuntingBanner";
import { Hero } from "@/components/inforro/Hero";
import { AlmocoBanner } from "@/components/inforro/AlmocoBanner";
import { ProductCard } from "@/components/inforro/ProductCard";
import { ProductModal } from "@/components/inforro/ProductModal";
import { menu, MenuItem, Category, allergenIcons, allergenLabels } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inforró · Cardápio do Arraiá Geek do IFRN" },
      {
        name: "description",
        content:
          "Cardápio digital do Inforró: lanches, doces, bebidas e o almoço especial do dia. Arraiá da turma de Informática do IFRN.",
      },
      { property: "og:title", content: "Inforró · Arraiá Geek do IFRN" },
      {
        property: "og:description",
        content: "O cardápio digital do nosso arraiá. Bora encher o bucho?",
      },
    ],
  }),
  component: Index,
});

const TABS: { id: Category; label: string }[] = [
  { id: "lanches", label: "Lanches" },
  { id: "doces", label: "Doces" },
  { id: "bebidas", label: "Bebidas" },
];

function Index() {
  const [active, setActive] = useState<Category>("lanches");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState(false);

  const items = useMemo(() => menu.filter((m) => m.categoria === active), [active]);

  const openModal = (item: MenuItem) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <BuntingBanner />
      <Hero />

      <div className="mb-8">
        <AlmocoBanner />
      </div>

      {/* Allergen legend - prominent */}
      <section className="px-5 max-w-5xl mx-auto mb-8">
        <div className="rounded-2xl border-2 border-primary bg-card p-4 sm:p-5 shadow-brutal-sm">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <p className="font-pixel text-sm text-purple-mid">
              {"// legenda_alergenicos.json"}
            </p>
            <span className="text-[10px] font-pixel text-foreground/50">
              fique de olho antes de pedir
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.keys(allergenIcons) as (keyof typeof allergenIcons)[]).map((k) => (
              <div
                key={k}
                className="flex items-center gap-2 bg-background border-2 border-primary/30 rounded-lg px-2 py-1.5 hover:border-primary transition-colors"
              >
                <img
                  src={allergenIcons[k]}
                  alt=""
                  className="w-8 h-8 object-contain shrink-0"
                  style={{ imageRendering: "pixelated" }}
                />
                <span className="text-[11px] sm:text-xs font-semibold text-primary leading-tight">
                  {allergenLabels[k]}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-y-2 border-primary">
        <div className="max-w-5xl mx-auto px-3 py-3 flex gap-2 overflow-x-auto">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex-1 min-w-[110px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm sm:text-base transition-all ${
                  isActive
                    ? "bg-accent text-accent-foreground border-primary shadow-brutal-sm"
                    : "bg-card text-primary border-primary/30 hover:border-primary"
                }`}
              >
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="px-5 py-8 max-w-5xl mx-auto">
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary capitalize">
            {active}
          </h2>
          <span className="font-pixel text-sm text-purple-mid">
            [{items.length} items]
          </span>
        </div>

        {active === "bebidas" ? (
          <div className="rounded-2xl border-2 border-primary bg-card shadow-brutal-sm overflow-hidden">
            {items.map((it, i) => (
              <div
                key={it.id}
                className={`flex items-center justify-between px-5 py-4 ${
                  i !== items.length - 1 ? "border-b border-primary/15" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-primary">{it.nome}</span>
                </div>
                <span className="bg-accent text-accent-foreground font-bold text-sm px-2.5 py-1 rounded-md border border-primary/30">
                  R$ {it.preco.toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in fade-in duration-300">
            {items.map((it) => (
              <ProductCard key={it.id} item={it} onClick={() => openModal(it)} />
            ))}
          </div>
        )}
      </section>

      {/* Sobre */}
      <section className="px-5 py-12 max-w-3xl mx-auto">
        <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-br from-primary via-purple-mid to-primary text-primary-foreground p-6 sm:p-10 shadow-brutal-lg overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(var(--accent) 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="absolute top-4 right-4 text-accent text-2xl animate-pulse" aria-hidden="true">✦</div>
          <div className="absolute bottom-4 left-4 text-accent text-xl opacity-70" aria-hidden="true">✦</div>

          <div className="relative">
            <p className="font-pixel text-sm text-accent mb-2">// sobre.md</p>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Sobre o Inforró</h2>
              <span className="hidden sm:inline-block h-[2px] flex-1 bg-accent/40" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed opacity-95 mb-5">
              O <span className="text-accent font-semibold">Inforró</span> é o arraiá da turma de Informática do IFRN.
              Toda a renda ajuda a financiar projetos, eventos e formaturas da
              galera de TI. Comer aqui é apoiar nossos sonhos — obrigado por
              colar com a gente!
            </p>
            <div className="flex flex-wrap gap-2">
              {["#turmaDeTI", "#arraiáGeek", "#IFRN"].map((tag) => (
                <span
                  key={tag}
                  className="font-pixel text-xs bg-accent/20 text-accent border border-accent/40 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary bg-card">
        <div className="max-w-5xl mx-auto px-5 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <a
              href="https://instagram.com/4.8401.111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl border-2 border-primary shadow-brutal-sm hover:-translate-y-0.5 transition"
            >
              📷 @4.8401.111
            </a>
            <p className="text-sm text-foreground/70 italic">
              Valeu pelo apoio · feito com 💜 pela turma de TI · IFRN
            </p>
          </div>
        </div>
        <BuntingBanner />
      </footer>

      <ProductModal item={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}