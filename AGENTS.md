# VS Consultoria

## Produto e stack

- Escopo e regras: `PRODUCT.md`.
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Drizzle ORM e PostgreSQL 18.
- Runtime: Node.js 26.13.0 LTS e npm 11, conforme `.nvmrc` e `package.json`.
- Evidências e decisões: `docs/setup.md`.

## Comandos canônicos

- Instalar: `npm ci`
- Desenvolver: `npm run dev`
- Verificar tudo: `npm run check`
- Banco local: `docker compose up -d postgres` e `npm run db:check`
- Gerar migrations: `npm run db:generate`; aplicar somente no destino confirmado com `npm run db:migrate`

## Acordos de trabalho

- Faça a menor mudança completa e preserve arquivos existentes do vault.
- Rotas em `src/app` são finas. Regras de negócio futuras ficam em `src/domains`; integrações em `src/infrastructure`; contratos compartilhados em `src/contracts`.
- Serviços não dependem de Next.js. O banco é acessado por repositories do domínio; não importe o cliente Drizzle em rotas ou componentes.
- Não crie pastas, camadas, tabelas, integrações ou abstrações sem um fluxo real.
- Valide entradas e ambiente com Zod. Não registre segredos ou dados pessoais. Nunca exponha segredos por `NEXT_PUBLIC_*`.
- Prescrição exige CREF validado e treinos do aluno exigem anamnese concluída; esses controles serão server-side e testados quando os fluxos existirem.
- Atualize o documento responsável junto com mudanças de comportamento, arquitetura, interface ou comandos.
- Use Ponytail full, Caveman conciso em português, Context7 para APIs atuais e RTK sem wrapper duplicado. Preserve cliente, modelo e autenticação nativos.
- Skills locais ficam em `.agents/skills`; presença em disco não comprova execução. Publicação, serviços pagos, mensagens externas e mudanças de credenciais exigem autorização específica.

## Qualidade

- Antes de concluir, rode os checks afetados; para a base inteira, `npm run check`.
- Migrations são geradas e revisadas antes de aplicação. Nunca migre em build, import ou request.
- Acessibilidade inclui HTML semântico, teclado, foco visível, contraste e layout responsivo.
- Não adicione hooks Git, bloqueios de push ou exigência de branch/worktree.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
