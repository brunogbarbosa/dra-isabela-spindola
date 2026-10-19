# Dra. Isabela Spíndola

Site editorial adaptado diretamente do template **Premium Vendas V4**. Um único projeto Next.js, pronto para GitHub e Vercel, com retratos reais, animações responsivas, navegação transparente, seis resultados com ampliação e comparação e favicon IS personalizado.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000. Para produção:

```sh
npm run typecheck
npm run build
npm start
```

## Importar na Vercel

1. Importe este repositório pelo painel da Vercel.
2. Framework: **Next.js**. Root Directory: **./**.
3. Install Command: **npm ci**. Build Command: **npm run build**. Output Directory: padrão do Next.js.
4. Nenhuma variável de ambiente é obrigatória. A URL de produção é resolvida pela variável automática VERCEL_PROJECT_PRODUCTION_URL para os metadados e a URL absoluta da imagem de compartilhamento.

## Conteúdo e identidade

Dados, contatos, configuração dos resultados e tokens de cor: `data/site.ts`.
Paleta: grafite #111614, dourado #C6A16C, marfim #F5F0E8, areia #E7DDCF, taupe #8C7761, dourado escuro #82643D, texto #292820, texto secundário #6D695F e superfície #FBF8F2.
Tipografia local: Cormorant Garamond (Editorial) e Manrope (Modern), com licenças em `public/fonts`.

WhatsApp: https://wa.me/5538998681100. Instagram: https://www.instagram.com/spindolabela/.
Todos os botões do WhatsApp usam a mensagem preenchida: “Oi, tudo bem? Vim pelo site e gostaria de entender qual procedimento é ideal para mim. 😊”. O texto é centralizado em `whatsappMessage`, em `data/site.ts`, e codificado com `encodeURIComponent`.
As informações profissionais foram limitadas aos dados fornecidos e à referência da bio enviada. Não foram acrescentados endereço, registro, formação ou depoimentos.

## Fotografias e galeria

Os dez arquivos vêm dos anexos fornecidos. Os seis JPEGs de resultados foram copiados sem nenhuma alteração de arquivo. Os quatro retratos PNG foram convertidos para WebP **lossless**, com validação de igualdade dos pixels. Não há retoque, geração ou modificação de rosto, pele ou resultados. As imagens usam `unoptimized` para servir esses próprios arquivos.

Todos os seis comparativos fornecidos são lado a lado e permanecem nessa orientação. A foto original completa é sempre a exibição inicial. O modo de comparação usa recortes de dimensões iguais do registro original, sem esticar os rostos. O modelo de dados também aceita comparações verticais e imagens únicas, sem criar um comparativo para estas últimas.

## Interface

O header é uma camada absoluta transparente acima do hero: logo à esquerda, navegação ao centro e agendamento à direita no desktop. A fotografia começa no topo, atrás dele. A máscara suave do desktop é isolada por media query e preserva a composição mobile do template. Os demais retratos usam contain para preservar cabeça e cabelo.

O menu e a galeria usam diálogos nativos com Escape, controle de foco e bloqueio da rolagem. O slider é acessível por teclado. As animações respeitam prefers-reduced-motion.

Favicon: `app/icon.svg`. Imagem de compartilhamento fornecida pela solicitante: `public/images/isabela-og.jpg`, otimizada em JPEG de 1200 × 630 px. A composição recebida foi preservada, sem retoques; apenas redimensionamento e compressão. Os metadados Open Graph e Twitter usam o mesmo arquivo.
