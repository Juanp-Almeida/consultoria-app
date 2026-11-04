# Qualidade

## Comandos

- `npm run format:check`: verifica Prettier.
- `npm run lint`: presets oficiais Next/TypeScript, limite de 350 linhas, logging, acesso a dados e guards Drizzle.
- `npm run typecheck`: gera tipos de rota e executa TypeScript estrito.
- `npm run lint:typed`: falha em promises flutuantes ou mal usadas.
- `npm run lint:rules`: autoteste das regras locais do toolkit.
- `npm test`: Vitest em Node para ambiente, redação de logs e ciclo do pool.
- `npm run build`: build standalone sem credenciais.
- `npm run check`: sequência completa acima.

## Estratégia

Testes cobrem limites não triviais já existentes: variáveis inválidas sem vazamento, remoção de segredos estruturados e reutilização/encerramento do pool. Não há DOM, E2E ou cobertura declarada porque ainda não existem fluxos funcionais.

Cada regra de negócio futura recebe teste no domínio. CREF validado e anamnese concluída exigem casos positivos e negativos server-side. Repositories devem ser testados contra PostgreSQL descartável quando houver schema.

## Interface

Mudanças visuais usam a skill `web-design-guidelines` e verificam teclado, foco, contraste, semântica e responsividade. Instalação de shadcn não substitui revisão. `components.json` e tokens existentes devem ser preservados.

## Segurança e dependências

Para revisão de baseline ou diff, use o Prompt de `docs/prompts/13-security-review.md` da revisão `21b71b68679c11184f49c23168852014bf6dde8b`, mantendo relatório privado fora do repositório. A skill `differential-review` está instalada para diffs sensíveis. Revisões são leitura apenas até uma correção ser solicitada.

Em 2026-11-04, `npm audit --omit=dev` retornou zero advisories. A auditoria completa encontrou 2 low e 24 moderate somente em ferramentas de desenvolvimento; as sugestões do npm exigem downgrades maiores/incompatíveis e `eslint-plugin-drizzle` não possui fix. Não foi usado `--force`.

## Harness

Foi adotada a adaptação nativa inspirada no Harness2, não o framework Harness2. A invocação reutilizável é o Prompt de `docs/prompts/15-harness-improvement.md` na mesma revisão do toolkit. Um teste de fumaça valida instruções, descoberta de comandos e recuperação dos documentos canônicos; uma comparação só é aberta após falha observada, limitada a uma candidata com entradas e checks iguais.

Casos maiores de pausa, reentrada e conflito de recursos permanecem não executados até haver mudança material do harness. Um smoke pass não prova confiabilidade geral.

Não há hooks Git ou bloqueios de push. Checks são comandos explícitos e CI.
