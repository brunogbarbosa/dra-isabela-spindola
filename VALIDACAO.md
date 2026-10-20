# Validação de entrega

Validado no navegador Chromium, executando o build de produção do projeto.

- Desktop: 1440 × 900 e 1920 × 1080. Mobile: 390 × 844. Revisão visual de hero, essência, apresentação, galeria, experiência, etapas do cuidado e contato.
- Navegação: fundo transparente, sem imagem de fundo, borda, sombra ou backdrop-filter. Foto com topo em 0 px, abaixo do header na ordem das camadas. Links centrais e agendamento à direita no desktop.
- Hero: transição ampla no desktop, rosto com a iluminação original, composição mobile independente.
- Retratos: arquivos sem retoques e proporções originais preservadas nas seções. Cabeça e cabelo conferidos visualmente. Hero desktop/mobile e seção 04 com as fotos trocadas entre si, mantendo quatro retratos diferentes nas quatro seções.
- Responsividade adicional: 320, 375, 390, 430, 700, 768, 1024, 1440 e 1920 px, sem rolagem horizontal.
- Menu mobile: abertura, navegação para seção, fechamento por Escape e retorno do foco.
- Galeria: seis originais, ampliação, comparação, slider com teclado, troca entre registros, navegação circular, fechamento por botão e Escape e retorno do foco.
- Novos resultados 2 e 5: ampliação, slider nos extremos e fechamento verificados em 1440 px, 1920 px e mobile. A área do comparador respeita a proporção original dos recortes, sem distorção ao limitar sua altura.
- Contatos: todos os CTAs externos apontam para https://wa.me/5538998681100, com a mensagem solicitada no parâmetro `text`, ou https://www.instagram.com/spindolabela/. A mensagem preserva acentos, pontuação e o emoji 😊.
- Favicon IS: rota válida, SVG com grafite e dourado.
- Imagem OG fornecida pela solicitante: JPEG otimizado de 1200 × 630 px, com composição preservada. Open Graph e Twitter apontam para o mesmo arquivo, com URL absoluta, dimensões e texto alternativo.
- Imagens: resultados 1, 3, 4 e 6 em JPEG sem alterações. Resultados 2 e 5 substituídos pelos novos anexos, convertidos de PNG para WebP lossless, com proporção quadrada e comparação lado a lado. Igualdade dos pixels verificada nos novos resultados e no retrato do hero.
- Identidade: todas as cores das folhas de estilo derivam dos tokens compartilhados de `data/site.ts`; detalhes SVG usam os mesmos tokens.
- JavaScript: sem erros de execução nas verificações.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado. Página principal e favicon gerados como conteúdo estático pelo Next.js.

As capturas finais do hero em 1440 px, 1920 px e mobile foram entregues junto ao projeto, na pasta outputs da conversa.
