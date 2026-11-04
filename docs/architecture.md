# Código e arquitetura

## Stack atual

Next.js 16.4.5 com App Router, React 19.3, TypeScript 5.9.3, Tailwind CSS 4, shadcn/ui e Lucide. Node.js 26.13.0 LTS e npm 11 são fixados. PostgreSQL 18.6 roda localmente em Docker Compose; Drizzle ORM usa o driver `pg`.

## Mapa do código

- `src/app`: layout e página inicial; rotas permanecem finas.
- `src/components/ui`: único componente shadcn necessário hoje, `Button`.
- `src/infrastructure/config`: carregamento e validação server-only do ambiente.
- `src/infrastructure/logging`: logger Pino com redação de campos sensíveis.
- `src/infrastructure/database`: pool PostgreSQL preguiçoso, schema vazio e testes de ciclo de vida.
- `src/lib`: utilitário visual `cn`, sem regras de negócio.
- `scripts`: validações operacionais e regras do toolkit.
- `eslint-rules`: regras locais versionadas do toolkit.

`src/domains` receberá cada feature quando ela existir. `src/contracts` receberá somente contratos realmente compartilhados. Essas pastas não foram criadas vazias.

## Limites e fluxo futuro

Uma rota ou ação valida a entrada e chama um serviço de domínio independente de Next.js. O serviço aplica autorização e regras e acessa persistência por um repository do próprio domínio. Somente a implementação do repository importa `src/infrastructure/database`. Componentes e rotas não importam Drizzle.

Regras de CREF e anamnese pertencem ao serviço do domínio e serão testadas no servidor; ocultar controles na interface não satisfaz o requisito.

## Dados e migrations

`src/infrastructure/database/schema/index.ts` está vazio de propósito. A primeira feature define suas entidades; então `npm run db:generate` gera SQL em `drizzle/`, que deve ser revisado antes de `npm run db:migrate` contra um destino autorizado. Build, import e requests nunca aplicam migrations.

O pool é criado apenas no primeiro acesso, reutilizado durante HMR, limitado a cinco conexões e encerrado explicitamente apenas por testes ou shutdown controlado.

## Decisões

- Next.js foi adotado porque o bootstrap solicitado é específico da stack; o app Flutter obrigatório permanece uma entrega separada e sua relação com esta base está pendente.
- PostgreSQL/Drizzle seguem o default do toolkit e atendem o produto orientado a dados sem inventar schema.
- Uma única base de ambiente é carregada pelo Next, Drizzle e script de conexão via `@next/env`.
- O build standalone permite imagem mínima sem levar segredos para a camada de build.

Atualize este mapa quando surgirem domínios, contracts, repositories, tabelas ou uma fronteira com Flutter.
