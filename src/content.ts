export const SITE = "https://thetbeck.github.io/DoPSite_Reel/";

export const frames: Record<string, string> = {
  beck: "concepts/p003-08a174a3ed.jpg",
  filmes: "concepts/p004-1b481c84b4.jpg",
  intencao: "concepts/p004-1b481c84b4.jpg",
  luz: "concepts/p005-c0dc90cee6.jpg",
  exposicao: "concepts/p003-08a174a3ed.jpg",
  lente: "concepts/p004-d081ae1ea1.jpg",
  espaco: "concepts/p006-bd73c43d9f.jpg",
  "ia-abertura": "concepts/p011-41062a3caf.jpg",
  diretor: "concepts/p018-c023d7da63.jpg",
  dop: "concepts/p006-4b77e30686.jpg",
  arte: "concepts/p020-63ace5dbec.jpg",
  vfx: "concepts/p016-feb2443211.jpg",
  producao: "concepts/p019-a51667b373.jpg",
  china: "concepts/p018-62043ba6c1.jpg",
  workshop: "concepts/p016-ea462a06ba.jpg",
  fecho: "concepts/p022-69bc5c1aaa.jpg",
};

export const conceptWall = [
  "concepts/p004-d081ae1ea1.jpg",
  "concepts/p005-c0dc90cee6.jpg",
  "concepts/p006-4b77e30686.jpg",
  "concepts/p011-41062a3caf.jpg",
  "concepts/p010-a013e4ae31.jpg",
  "concepts/p017-5437407373.jpg",
  "concepts/p020-63ace5dbec.jpg",
  "concepts/p023-479bcfda23.jpg",
];

export type Film = {
  src: string;
  title: string;
  meta: string;
};

export const films: Film[] = [
  { src: "films/historia-davi.jpg", title: "A História de Davi Santos", meta: "Documentário · 16 min" },
  { src: "films/exilio.jpg", title: "Exílio", meta: "Documentário" },
  { src: "films/nike-football.jpg", title: "Nike Football", meta: "Documentário · 6:45" },
  { src: "films/honda-reality-01.jpg", title: "Honda Reality 01", meta: "Reality" },
  { src: "films/desaparecido.jpg", title: "Desaparecido", meta: "Curta" },
  { src: "films/adidas-pharrel.jpg", title: "Adidas Pharrell", meta: "Publicidade" },
  { src: "films/jeep-gladiator.jpg", title: "Jeep Gladiator", meta: "Publicidade" },
  { src: "films/sony-bravia.jpg", title: "Sony Bravia", meta: "Publicidade" },
];

export type Slide = {
  id: string;
  kicker: string;
  title: string;
  time: string;
  kind: "hero" | "copy" | "films" | "people" | "china" | "workshop" | "close";
  paragraphs?: string[];
  points?: string[];
  people?: { role: string; name: string; work: string }[];
};

export const slides: Slide[] = [
  {
    id: "abertura",
    kicker: "00:00–02:00",
    title: "A Lente Humana",
    time: "Abertura",
    kind: "hero",
    paragraphs: [
      "Masterclass de cinematografia com Thiago Beck.",
      "60 minutos de aula. O workshop com câmera vem depois e não usa inteligência artificial.",
    ],
  },
  {
    id: "beck",
    kicker: "02:00–10:00",
    title: "Thiago Beck",
    time: "Diretor de fotografia",
    kind: "copy",
    paragraphs: [
      "Thiago Beck, marca CINE BECK, formou-se na Accademia Internazionale di Cinema, na Cinecittà, e fez pós-graduação na Accademia di Belle Arti di Roma.",
      "Desde 2008 trabalha como diretor de fotografia e fotógrafo jornalista entre a Europa e a América do Sul. Fala português, italiano e inglês. Vive entre São Paulo e Roma.",
      "O site declara contribuição em produções associadas a Vittorio Storaro, Terry Gilliam e Bernardo Bertolucci. A função e o ano desses créditos não estão documentados fora do próprio portfólio.",
    ],
  },
  {
    id: "filmes",
    kicker: "Portfólio",
    title: "Filmes",
    time: "DoP Reel",
    kind: "films",
    paragraphs: [
      "Os cards abrem o site publicado. Os arquivos de vídeo não estão no GitHub Pages.",
    ],
  },
  {
    id: "intencao",
    kicker: "10:00–14:00",
    title: "A intenção vem antes do equipamento",
    time: "Manuscrito",
    kind: "copy",
    paragraphs: [
      "A imagem nasce na leitura do roteiro. Luz, lente, contraste e movimento só existem para tornar visível uma decisão dramática.",
    ],
    points: [
      "Traduzir a cena em enquadramento, não em lista de gear.",
      "A técnica muda quando o drama muda.",
      "Roger Deakins fecha o argumento: a luz precisa ter motivo.",
    ],
  },
  {
    id: "luz",
    kicker: "14:00–18:00",
    title: "Direção, tamanho e contraste",
    time: "Luz",
    kind: "copy",
    points: [
      "Luz dura recorta. Luz grande e próxima fica suave.",
      "A key nasce de uma fonte que a cena explica: janela, practical ou sol.",
      "Negative fill devolve contraste quando o auditório contamina a sombra.",
      "Kelvin descreve a fonte. Não é um código universal de emoção.",
    ],
  },
  {
    id: "exposicao",
    kicker: "18:00–22:00",
    title: "Exposição sem mito",
    time: "BURANO",
    kind: "copy",
    points: [
      "T-stop controla luz e profundidade. O ND variável da BURANO, de 0,6 a 2,1, preserva o T-stop escolhido.",
      "Shutter 180° é a referência de movimento. Um ângulo menor corta o borrão.",
      "ISO-base 800 e 3200. A base alta serve à baixa luz; não é ganho gratuito.",
      "16 stops de latitude não dispensam o waveform.",
    ],
  },
  {
    id: "lente",
    kicker: "22:00–26:00",
    title: "Posição, depois a lente",
    time: "Arles Prime",
    kind: "copy",
    points: [
      "A perspectiva nasce principalmente da distância entre câmera e sujeito.",
      "A focal recorta o campo. Trocar a lente sem mover a câmera não reconstitui o espaço.",
      "Série completa: 14, 18, 21, 25, 35, 40, 50, 75, 100, 135 e 180 mm.",
      "Círculo de 46,5 mm cobre o full frame da BURANO. Abertura T1.4 a T2.4, 16 lâminas, frontal 95 mm.",
    ],
  },
  {
    id: "espaco",
    kicker: "26:00–30:00",
    title: "Eixo, massa e movimento",
    time: "Continuidade",
    kind: "copy",
    points: [
      "O eixo de 180° protege a geografia da cena.",
      "Blocking antes de iluminar. Marca antes de gravar.",
      "Tripé, ombro e IBIS são escolhas de linguagem.",
      "Estabilização não melhora automaticamente a imagem.",
    ],
  },
  {
    id: "ia-abertura",
    kicker: "30:00–60:00",
    title: "Cinematografia com IA: Filmando com IA até agora",
    time: "Sessão principal",
    kind: "copy",
    paragraphs: [
      "Cinco ofícios, nesta ordem: direção, fotografia, arte, VFX/3D e produção. Cada um começa no argumento, passa por um quadro aprovado e só então escolhe software.",
    ],
    points: [
      "Texto para vídeo é exceção. O padrão profissional é keyframe aprovado e depois movimento.",
      "Plate real ainda decide luz, lente e física quando o realismo importa.",
      "Ferramenta sem direito de uso não entra no pipeline.",
    ],
  },
  {
    id: "diretor",
    kicker: "30:00–36:00",
    title: "IA Director",
    time: "Direção",
    kind: "people",
    paragraphs: [
      "Processo: intenção, roteiro, shot list, referências, geração em volume e descarte. Paul Trillo chegou a cerca de 700 clipes para selecionar 55 em The Hardest Part.",
    ],
    people: [
      { role: "Direção", name: "Paul Trillo", work: "Asteria · The Hardest Part" },
      { role: "Direção", name: "Dave Clark", work: "Promise · My Friend Zeph" },
    ],
  },
  {
    id: "dop",
    kicker: "36:00–42:00",
    title: "IA DoP",
    time: "Fotografia",
    kind: "people",
    paragraphs: [
      "Processo: definir lente aparente, direção de luz, movimento e textura. A câmera real continua sendo a referência quando existe plate.",
    ],
    people: [
      { role: "DoP", name: "Seif Abdalla", work: "Runway · HANAA · Sony FX9" },
      { role: "DoP", name: "Lester Platt", work: "STLL · previs de lente e VFX" },
    ],
  },
  {
    id: "arte",
    kicker: "42:00–46:00",
    title: "IA Diretor de Arte",
    time: "Arte",
    kind: "people",
    paragraphs: [
      "Processo: paleta, locação, figurino e keyframe. O movimento só começa depois que o quadro parado está aprovado.",
    ],
    people: [
      { role: "Arte", name: "Chloé Camille", work: "Made by Humans · Fashionista" },
      { role: "Arte", name: "Danil Khodashinskiy", work: "Artrofish" },
    ],
  },
  {
    id: "vfx",
    kicker: "46:00–51:00",
    title: "IA VFX + 3D",
    time: "Imagem final",
    kind: "people",
    paragraphs: [
      "Processo: geometria ou plate, câmera, relight, máscara, composição e correção. Geração sem bloqueio espacial não sustenta comercial realista.",
    ],
    people: [
      { role: "VFX", name: "Oden Roberts", work: "Tool · Cruise Control" },
      { role: "VFX", name: "Milad Mesof", work: "Tower 33 · House of David" },
    ],
  },
  {
    id: "producao",
    kicker: "51:00–55:00",
    title: "IA na produção",
    time: "Produção",
    kind: "people",
    paragraphs: [
      "Processo: breakdown, scout, previs, orçamento, cronograma, aprovações e rastreio de direitos. A geração entra entre o animatic e o corte, não no lugar da produção.",
    ],
    people: [
      { role: "Produção", name: "Gabe Michael", work: "Edelman · GEN:48" },
      { role: "Produção", name: "Bryn Mooser", work: "Asteria · Uncanny Valley" },
    ],
  },
  {
    id: "china",
    kicker: "55:00–60:00",
    title: "A disputa, não um pódio permanente",
    time: "China e mercado",
    kind: "china",
  },
  {
    id: "workshop",
    kicker: "Depois da aula",
    title: "Workshop sem IA",
    time: "BURANO + Arles + luz",
    kind: "workshop",
  },
  {
    id: "fecho",
    kicker: "Encerramento",
    title: "A imagem continua nascendo antes da câmera",
    time: "Obrigado",
    kind: "close",
    paragraphs: [
      "No workshop, a turma decide lente, exposição, luz e movimento. A operação é coletiva. A avaliação está na qualidade dessas decisões.",
    ],
  },
];
