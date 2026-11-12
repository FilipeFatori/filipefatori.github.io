# Como editar o site

O site tem só 2 arquivos que importam:

- `index.html` → o design. **Você não precisa mexer.**
- `content.js` → todo o conteúdo (nome, links, trabalhos, destaques, demos de voz). **É só aqui que você edita.**

## Trocar um link de vídeo
1. Abra `content.js` no GitHub e clique no ícone de lápis.
2. Ache o trabalho (procure pelo nome da marca) e cole o link do YouTube/Vimeo em `video: ""`.
3. Clique em **Commit changes**. Em ~1 minuto o site atualiza.

## Escolher a miniatura
- Suba a imagem na pasta `img/` (ex.: `img/visa.jpg`, formato 16:9, ~1600 px de largura).
- Em `content.js`, no trabalho: `thumb: "img/visa.jpg"`.
- Se deixar `thumb: ""`, o site usa a capa automática do YouTube.
- Opcional: `preview: "img/visa-preview.mp4"` (clipe curto, mudo) toca quando passa o mouse.

## Destaques no topo (opcional, hoje desligado)
Em `content.js`, a linha `featured: []` está vazia, então a página abre direto na aba Trilha.
Para ligar, escreva os `id` de até 2 trabalhos, por exemplo `featured: ["marca-01", "marca-04"]`.

## Adicionar um trabalho
Copie um bloco `{ ... }` inteiro da lista `works`, cole logo abaixo (com vírgula entre os blocos) e mude os campos. `category` é `"trilha"` ou `"sound-design"`.

## Demos de Voice Over (hoje desligado)
A página de Voice Over está escondida. Para ligar, em `content.js` troque `showVoiceOver: false` por `true`.
Suba o MP3 na pasta `audio/` e escreva `file: "audio/nome.mp3"` na demo.

## Publicar pela primeira vez (GitHub Pages)
1. Crie uma conta no GitHub e um repositório público (ex.: `portfolio`).
2. Suba `index.html`, `content.js` e as pastas `img/` e `audio/`.
3. Em **Settings → Pages**, escolha **Deploy from a branch → main → / (root)**.
4. Para usar seu domínio, preencha o campo **Custom domain** nessa mesma tela.
5. Ative a verificação em duas etapas na sua conta do GitHub.

## Contador de visitas
No `index.html`, procure o comentário `CONTADOR DE VISITAS` e cole ali o código do Cloudflare Web Analytics ou do Umami.
