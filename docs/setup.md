# Setup e evidências

## Fonte e contexto

- Verificação: 2026-11-04, America/Sao_Paulo.
- Toolkit: `soumatheusgomes/vibe-coding-toolkit` em `21b71b68679c11184f49c23168852014bf6dde8b`.
- Cliente: Codex nativo, autenticação da sessão e modelo da sessão preservados; nenhuma API paga, proxy ou provedor alternativo foi habilitado.
- Diretório preexistente: vault Obsidian sem Git; `Bem-vindo.md` e `Segundo Cérebro/` foram preservados.

## Decisões e fontes

- Node.js 26.13.0 LTS foi fixado após consulta à página oficial de releases em 2026-11-04.
- Next.js 16.4.5 e demais pacotes vieram dos canais estáveis do npm. Context7 confirmou Node LTS, `next typegen`, ambiente server-only, pool `pg`, migrations Drizzle e CLI shadcn; o registry prevaleceu para a versão estável mais recente.
- PostgreSQL 18.6 é a versão estável atual consultada na documentação oficial; 19 RC não foi adotado.
- shadcn/ui usa Radix, CSS variables e Lucide; somente `Button` foi adicionado.
- Sentry não foi escolhido porque não há serviço, organização ou autorização. React Native/Expo não foi instalado porque o requisito móvel é Flutter.

## Componentes

| Componente                                          | Escopo        | Estado                                                          |
| --------------------------------------------------- | ------------- | --------------------------------------------------------------- |
| Ponytail full, Caveman, Superpowers, RTK e Context7 | Cliente       | Reutilizados; RTK 1.1.0 e conexão Context7 observados           |
| Graphify 0.9.102                                    | Projeto       | `.graphifyignore` configurado; extração registrada nos checks   |
| Skills web Vercel e `find-skills`                   | Projeto/Codex | 9 skills copiadas e registradas em `skills-lock.json`           |
| `next-dev-loop` e `next-bundle-optimizer`           | Projeto/Codex | Instaladas; runtime/browser depende de `agent-browser`, ausente |
| `supabase-postgres-best-practices`                  | Projeto/Codex | Instalada para PostgreSQL sem adotar Supabase                   |
| `gh-fix-ci`                                         | Projeto/Codex | Instalada; consulta remota depende de repositório/PR autorizado |
| `differential-review`                               | Projeto/Codex | Instalada; nenhuma auditoria ampla executada                    |
| `shadcn`                                            | Projeto/Codex | Instalada; CLI e `components.json` verificados                  |
| Sentry MCP                                          | Externo       | Não selecionado                                                 |
| Harness2                                            | Método nativo | Procedimento documentado; framework/CLI não instalado           |

## Documentos

Os nove destinos do manifesto foram preenchidos: `README.md`, `PRODUCT.md`, `AGENTS.md`, `CLAUDE.md`, `docs/architecture.md`, `docs/design.md`, `docs/onboarding.md`, `docs/quality.md` e este arquivo. O bloco oficial de instruções gerado pelo Next.js foi preservado em `AGENTS.md`.

## Checks

| Item                                            | Estado                   | Evidência                                                                                                                                      |
| ----------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Instalação reproduzível                         | Validado                 | `npm ci` concluiu no build Docker com o lockfile                                                                                               |
| Formatação, lint, tipos, regras, testes e build | Validado                 | `npm run check`; 3 arquivos/8 testes Vitest passaram e Next gerou `/` estática                                                                 |
| Lint tipado                                     | Validado                 | `no-floating-promises` e `no-misused-promises` como erro; 3,69 s no runner local                                                               |
| Drizzle sem schema fictício                     | Validado                 | `npm run db:generate`: 0 tabelas, nenhum SQL gerado; metadado vazio foi removido                                                               |
| PostgreSQL local                                | Validado                 | Compose `postgres:18.6-alpine` saudável e `npm run db:check`: conexão OK                                                                       |
| Aplicação local                                 | Validado                 | Next dev em porta 3100 respondeu HTTP 200 e conteúdo esperado                                                                                  |
| Imagem de produção                              | Validado                 | `docker build -t vs-consultoria:bootstrap .`; contêiner respondeu HTTP 200 como `nextjs`, UID 1001                                             |
| Auditoria de produção                           | Validado                 | `npm audit --omit=dev`: 0 advisories                                                                                                           |
| Auditoria completa                              | Pendente por upstream    | 2 low e 24 moderate em ferramentas de desenvolvimento; npm oferece downgrades maiores/incompatíveis ou nenhum fix para `eslint-plugin-drizzle` |
| Skills locais                                   | Validado                 | 15 skills descobertas; restore `experimental_install --dry-run --frozen-lockfile` não alterou arquivos                                         |
| shadcn/ui                                       | Validado                 | `shadcn info --json`; somente `button` instalado                                                                                               |
| Next bundle analyzer                            | Configurado sem execução | `next analyze --help` disponível para Turbopack; nenhuma análise necessária nesta página mínima                                                |
| Graphify                                        | Validado                 | extração code-only, sem LLM: 223 nós e 310 arestas em `graphify-out/graph.json` ignorado                                                       |
| GitHub Actions                                  | Configurado sem execução | workflow local usa Node da `.nvmrc`, `npm ci`, todos os gates e restore dry-run; não há repositório remoto/run                                 |
| Sentry e deploy                                 | Pendente                 | serviço e conta não escolhidos; nenhuma publicação realizada                                                                                   |

Servidor Next, contêiner de teste, serviço PostgreSQL e Docker Desktop iniciados para a validação foram encerrados. O volume `demovault_postgres_data` foi preservado conforme o requisito de persistência; a imagem local `vs-consultoria:bootstrap` foi mantida como evidência reproduzível.

## Memória e harness

`AGENTS.md` é o índice curto carregado pelo cliente no diretório; ele aponta para `PRODUCT.md` e os documentos responsáveis. Decisões duráveis registram fonte e data neste arquivo e devem ser revalidadas quando runtime, dependências, produto ou integração mudarem. O smoke local recuperou os comandos e todos os documentos canônicos; reinício completo do cliente permanece não executado.

A adaptação nativa do Harness2 preserva cliente, modelo, autenticação e permissões. O smoke de descoberta de instruções/comandos e recuperação de memória passou. Não houve falha observada que justificasse comparação de candidata; portanto nenhuma instrução foi alterada para “otimizar” o harness. Casos de pausa/reentrada, conflito de recursos e restart do cliente não foram executados.

## Pendências e próxima entrega

- Decidir a fronteira entre cliente Flutter e esta base Next.js.
- Escolher autenticação e fonte de validação do CREF antes de criar entidades.
- Definir retenção e storage de fotos antes do fluxo de progresso.
- Próxima entrega: autenticação e estados mínimos de aluno/profissional/CREF/anamnese, com restrições testadas no servidor.
