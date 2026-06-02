import { useEffect, useState } from "react";

export function Hero() {
  const phrases = [
    "Insira sua fome para começar o arraiá",
    "Carregando sabores... 100%",
    "git pull origin forró",
  ];
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const full = phrases[idx];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped("");
      setIdx((i) => (i + 1) % phrases.length);
    }, 2400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, idx]);

  return (
    <section className="relative px-5 pt-10 pb-12 sm:pt-16 sm:pb-16 text-center max-w-3xl mx-auto">
      <p className="font-pixel text-base sm:text-lg text-purple-mid mb-3">
        &gt; ./inforro --start
      </p>
      <h1 className="text-6xl sm:text-8xl font-bold text-primary leading-none tracking-tight">
        INFORRÓ
      </h1>
      <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium">
        Arraiá da turma de Informática · IFRN
      </div>
      <p className="mt-6 text-base sm:text-lg text-foreground/80 font-pixel min-h-[1.5em]">
        {typed}
        <span className="inline-block w-2 h-5 align-middle bg-primary ml-0.5 animate-pulse" />
      </p>
    </section>
  );
}