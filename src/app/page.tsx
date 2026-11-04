import { ArrowDown, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col bg-background">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <div
          className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"
          aria-hidden="true"
        >
          <Dumbbell className="size-6" strokeWidth={1.8} />
        </div>
        <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          VS Consultoria
        </p>
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-6xl">
          A base para um acompanhamento que respeita cada evolução.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Estrutura técnica pronta para receber, uma etapa por vez, os fluxos de
          treino e nutrição de alunos e profissionais.
        </p>
        <Button asChild size="lg" className="mt-10 w-fit rounded-full px-5">
          <a href="#escopo">
            Ver o que está pronto
            <ArrowDown aria-hidden="true" />
          </a>
        </Button>
      </section>
      <section
        id="escopo"
        aria-labelledby="escopo-titulo"
        className="border-t bg-muted/50"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 sm:px-10 md:grid-cols-[1fr_2fr] lg:px-16">
          <h2
            id="escopo-titulo"
            className="text-2xl font-semibold tracking-tight"
          >
            Fundação, não produto final
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            Ambiente, banco local, qualidade, documentação e entrega em
            contêiner estão configurados. Cadastro, anamnese, prescrição e
            acompanhamento serão implementados nos próximos incrementos do MVP.
          </p>
        </div>
      </section>
    </main>
  );
}
