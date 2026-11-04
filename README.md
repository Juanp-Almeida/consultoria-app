# VS Consultoria

Base técnica do produto de acompanhamento de treino e nutrição para alunos, personal trainers e nutricionistas. O escopo funcional está em [PRODUCT.md](PRODUCT.md); esta entrega contém somente a fundação executável.

## Executar

Requer Node.js 26.13.0 LTS, npm 11 e Docker.

```bash
npm ci
docker compose up -d postgres
npm run db:check
npm run dev
```

Acesse `http://localhost:3000`. Para verificar a fundação completa, rode `npm run check`.

## Documentação

- [Produto e fluxos](PRODUCT.md)
- [Preparação local](docs/onboarding.md)
- [Arquitetura](docs/architecture.md)
- [Design e acessibilidade](docs/design.md)
- [Qualidade](docs/quality.md)
- [Evidências do setup](docs/setup.md)
- [Instruções para agentes](AGENTS.md)

## Próxima entrega

Definir autenticação e os estados mínimos de aluno/profissional/CREF/anamnese, resolvendo antes se o cliente Flutter e a camada Next.js compartilharão este repositório ou contratos por API.
