# Preparação local

## Pré-requisitos

- Node.js 26.13.0 LTS (`nvm use` lê `.nvmrc`).
- npm 11.
- Docker com Compose.

## Primeira execução

```bash
npm ci
docker compose up -d postgres
npm run db:check
npm run dev
```

Abra `http://localhost:3000`. `.env.local` contém somente credenciais exclusivas do ambiente local e não é versionado. Para criar outro ambiente, copie os nomes de `.env.example` e substitua os valores.

## Banco de dados

O Compose publica PostgreSQL em `localhost:5434`, mantém dados no volume `postgres_data` e possui healthcheck. `DATABASE_URL` é usada pela aplicação e pelo script de conexão. `DATABASE_URL_UNPOOLED`, quando preenchida, é preferida pelo Drizzle Kit para comandos administrativos.

Ainda não há tabelas nem migrations. Quando uma feature introduzir schema:

```bash
npm run db:generate
# revise o SQL em drizzle/
npm run db:migrate
```

Confirme o destino antes de migrar; produção nunca é ambiente de teste.

## Verificação

`npm run check` roda formatação, lint rápido e tipado, tipos, regras locais, testes e build sem banco. `npm run db:check` requer o Compose saudável. Docker e HTTP são verificações separadas descritas em `docs/setup.md`.

## Agentes

Leia `AGENTS.md`; `CLAUDE.md` importa as mesmas instruções. Skills locais ficam em `.agents/skills` e são restauráveis pelo `skills-lock.json`.

## Problemas conhecidos

O requisito Flutter ainda não tem projeto próprio nesta base Next.js. Defina a fronteira entre clientes antes de implementar autenticação ou contratos de API.
