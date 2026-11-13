/* =====================================================================
   CONTEÚDO DO SITE  —  é aqui (e só aqui) que você edita.
   Troque os textos entre aspas. Não apague vírgulas, chaves nem colchetes.
   Como publicar a mudança: veja o arquivo COMO-EDITAR.md
   ===================================================================== */

window.SITE = {

  // Nome que aparece no centro do topo
  name: "Filipe Fatori",
  tagline: "Trilha · Sound Design",

  // Voice Over: DESLIGADO por enquanto. Para ligar, troque false por true
  // (e, se quiser, ponha "Trilha · Sound Design · Voice Over" no tagline acima).
  showVoiceOver: false,

  // Ícones no canto direito (deixe "" para esconder um deles)
  instagram: "https://instagram.com/filipefatori",   // TODO: troque pelo seu
  email: "",                           // TODO: troque pelo seu

  // DESTAQUES (opcional): até 2 trabalhos grandes no topo da página inicial.
  // Está DESLIGADO (lista vazia). Para ligar, coloque os "id" de 2 trabalhos,
  // por exemplo: featured: ["marca-01", "marca-04"],
  featured: [],

  // Se true, os destaques não se repetem na grade de baixo
  hideFeaturedInGrid: false,

  /* ---------------------------------------------------------------
     TRABALHOS  (aba Trilha e aba Sound Design)
     Para adicionar um: copie um bloco inteiro { ... }, cole abaixo e edite.
     Campos:
       id        nome único, sem espaços (ex.: "visa-natal"). Usado nos destaques.
       category  "trilha"  ou  "sound-design"
       brand     marca / cliente
       title     nome da campanha ou do filme
       year      ano
       role      o SEU papel (ex.: "Composição e produção")
       format    formato (ex.: "Filme 30\"", "Spot de rádio", "Social")
       note      uma linha sobre a decisão criativa (aparece no player)
       video     link do YouTube ou Vimeo, ou arquivo "videos/algo.mp4"
       thumb     MINIATURA: caminho de uma imagem, ex.: "img/visa.jpg".
                 Se deixar "", o site usa a capa automática do YouTube.
       preview   (opcional) mini-vídeo mudo que toca quando passa o mouse,
                 ex.: "img/visa-preview.mp4"
     --------------------------------------------------------------- */
  works: [

    {
      id: "motorola-swarovski-moto-buds-loop",
      category: "trilha",
      brand: "Motorola x Swarovski",
      title: "Moto Buds Loop",
      year: "2025",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246056190",   // link do YouTube ou Vimeo
      thumb: "",     // ex.: "img/moto-buds-loop.jpg"
      preview: ""
    },
    {
      id: "bauducco-stickers",
      category: "trilha",
      brand: "Bauducco",
      title: "Stickers",
      year: "2024",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246466136",
      thumb: "",
      preview: ""
    },
    {
      id: "kuat-meu-pais-barraquinha",
      category: "trilha",
      brand: "Kuat",
      title: "Meu País Barraquinha",
      year: "2022",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246056058",
      thumb: "",
      preview: ""
    },
    {
      id: "infinitepay-ludwig-von-strauss",
      category: "trilha",
      brand: "InfinitePay",
      title: "Ludwig Von Strauss",
      year: "2022",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246049409",
      thumb: "",
      preview: ""
    },
    {
      id: "oster-crie-receitas",
      category: "trilha",
      brand: "Oster",
      title: "Crie receitas que ficam",
      year: "2026",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246049931",
      thumb: "",
      preview: ""
    },
    {
      id: "kayak-voce-sonha",
      category: "trilha",
      brand: "Kayak",
      title: "Você sonha, o KAYAK te leva",
      year: "2022",
      role: "Trilha Sonora: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246463885",
      thumb: "",
      preview: ""
    },
    {
      id: "serasa-burger-king-quem-tem-medo-do-score",
      category: "sound-design",
      brand: "Serasa x Burger King",
      title: "Quem tem medo do score?",
      year: "2026",
      role: "Sound Design: Filipe Fatori",
      format: "",
      note: "",
      video: "https://vimeo.com/1246051795",
      thumb: "",
      preview: ""
    },
    {
      id: "marca-05",
      category: "sound-design",
      brand: "Marca 05",
      title: "Título da campanha",
      year: "2024",
      role: "Sound design",
      format: "Social",
      note: "",
      video: "", thumb: "", preview: ""
    },
    {
      id: "marca-06",
      category: "sound-design",
      brand: "Marca 06",
      title: "Título da campanha",
      year: "2024",
      role: "Sound design",
      format: "Filme 15\"",
      note: "",
      video: "", thumb: "", preview: ""
    }

  ],

  /* ---------------------------------------------------------------
     VOICE OVER
     Cada demo toca direto na página. Suba o MP3 na pasta "audio"
     e escreva o caminho em "file". Se deixar "", aparece "áudio em breve".
     --------------------------------------------------------------- */
  voiceIntro: "Locução para publicidade, institucional e conteúdo digital.",
  voice: [
    { category: "Comercial",     title: "Demo comercial",     file: "" },   // ex.: "audio/demo-comercial.mp3"
    { category: "Institucional", title: "Demo institucional", file: "" },
    { category: "E-learning",    title: "Demo e-learning",    file: "" }
  ]

};
