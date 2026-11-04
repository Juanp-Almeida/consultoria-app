# Design e acessibilidade

## Direção

A interface inicial comunica cuidado, clareza e progresso sem simular funcionalidades. O idioma é português do Brasil e o layout parte de telas pequenas, com leitura confortável em desktop.

## Sistema existente

Os tokens vivem em `src/app/globals.css`; tipografia Geist é configurada em `src/app/layout.tsx`. A paleta usa fundo claro, texto de alto contraste e verde-petróleo como cor primária. `components.json` registra shadcn/ui com Radix, CSS variables e Lucide. O único componente instalado é `src/components/ui/button.tsx`.

## Interação

A página usa `main`, seções e títulos associados. O único controle é um link com foco visível que leva ao escopo na própria página. Ícones decorativos são ignorados por tecnologia assistiva. Não há animação, formulário, estado assíncrono ou tema escuro implementado.

## Layout e revisão

O conteúdo usa largura máxima de 72rem, espaçamento responsivo e muda a seção de escopo para duas colunas a partir de 768px. Novas telas devem preservar navegação por teclado, foco visível, contraste, alvos confortáveis e preferência por movimento reduzido.

Estados vazios, erro e carregamento serão definidos junto ao primeiro fluxo que precisar deles. A revisão visual automatizada e em dispositivos móveis reais ainda não existe.
