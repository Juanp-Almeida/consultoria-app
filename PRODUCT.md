# VS Consultoria

## Problema e público

Pessoas que buscam acompanhamento nutricional e de personal trainer precisam receber planos, executar treinos e acompanhar evolução em um só fluxo. Profissionais precisam captar e gerir alunos, prescrever com segurança e monitorar adesão e resultados.

Públicos principais:

- Alunos em acompanhamento de treino e/ou dieta.
- Personal trainers com CREF validado.
- Nutricionistas e equipe de consultoria, com permissões a definir.

## Objetivo

Oferecer acompanhamento individual, rastreável e simples de consultar, protegendo dados pessoais e impedindo prescrição ou visualização fora das condições profissionais e clínicas definidas.

## Escopo desta entrega

Somente a base técnica: aplicação Next.js inicial, PostgreSQL local, Drizzle sem tabelas fictícias, qualidade, documentação, CI e imagem de produção. Nenhum fluxo funcional, autenticação, integração, cobrança ou regra financeira está implementado.

## Fluxos planejados

### Aluno

1. Onboarding e cadastro.
2. Avaliação inicial e anamnese.
3. Registro de medidas e fotos de progresso.
4. Recebimento e consulta do plano de treino.
5. Visão do treino do dia e da semana ou ciclo.
6. Detalhe de sessão, exercícios, séries e cargas.
7. Registro de cargas executadas.
8. Reavaliações agendadas.
9. Gráficos de carga, volume, peso e medidas.

### Profissional

1. Captação e gestão da lista de alunos com status.
2. Prescrição de treino.
3. Biblioteca de exercícios e treinos-modelo.
4. Montagem de periodização.
5. Duplicação e adaptação de planos entre alunos.
6. Monitoramento de adesão e evolução.
7. Gestão financeira, cujas regras ainda precisam ser definidas.

### Transversais

- Notificações de lembrete de treino, novo plano, mensagem do treinador e vencimento.
- Perfil, privacidade, exportação e exclusão de dados.

## Requisitos obrigatórios

- Somente usuários com CREF validado podem prescrever treinos.
- O aluno não pode visualizar treinos antes de concluir a anamnese.
- O aplicativo do aluno deve ser desenvolvido em Flutter para Android 8+ e iOS 15+.
- Autorização e restrições devem ser aplicadas no servidor, não apenas escondidas na interface.
- Dados pessoais, avaliações, medidas e fotos exigem acesso mínimo, retenção definida, exportação e exclusão coerentes com privacidade.
- A interface usa português do Brasil, é responsiva e acessível.

## Premissas reversíveis

- PostgreSQL será a persistência inicial e Drizzle ORM fará acesso tipado.
- Next.js atenderá uma futura superfície web e/ou camada de servidor; seu papel exato perante o cliente Flutter é uma decisão pendente.
- Autenticação, armazenamento de fotos, notificações, pagamentos e validação externa do CREF serão escolhidos quando seus fluxos forem implementados.

## Não objetivos desta entrega

- Implementar cadastro, planos, treinos, dieta, gráficos, financeiro ou notificações.
- Criar tabelas demonstrativas ou dados fictícios.
- Escolher provedor de autenticação, storage, pagamento, mensageria ou observabilidade.
- Publicar ou configurar produção.

## Critérios de aceitação da base

- Instalação reproduzível com npm e `package-lock.json` em Node.js 26.13.0 LTS.
- Página inicial mínima, responsiva, acessível e baseada em tokens/shadcn/ui/Lucide.
- Checks de formatação, lint, tipos, regras do toolkit, testes e build passam sem credenciais reais.
- PostgreSQL local sobe com volume e healthcheck; a aplicação consegue abrir uma conexão.
- Drizzle carrega o mesmo ambiente e não contém tabelas enquanto não houver modelo aprovado.
- Imagem Docker standalone executa como usuário sem privilégios e responde por HTTP.
- CI executa os mesmos gates principais sem segredos.
