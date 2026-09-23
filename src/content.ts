export const SITE = "https://thetbeck.github.io/DoPSite_Reel/";

export const frames: Record<string, string> = {
  beck: "concepts/p003-08a174a3ed.jpg",
  intro: "concepts/p004-1b481c84b4.jpg",
  cap1: "concepts/p010-a013e4ae31.jpg",
  cap2: "concepts/p017-5437407373.jpg",
  cap3: "concepts/p016-ea462a06ba.jpg",
  cap4: "concepts/p005-c0dc90cee6.jpg",
  cap5: "concepts/p004-d081ae1ea1.jpg",
  cap6: "concepts/p011-41062a3caf.jpg",
  cap7: "concepts/p006-4b77e30686.jpg",
  cap8: "concepts/p006-bd73c43d9f.jpg",
  cap9: "concepts/p020-63ace5dbec.jpg",
  cap10: "concepts/p016-feb2443211.jpg",
  cap11: "concepts/p023-479bcfda23.jpg",
  "ia-abertura": "concepts/p011-41062a3caf.jpg",
  diretor: "concepts/p018-c023d7da63.jpg",
  dop: "concepts/p006-4b77e30686.jpg",
  arte: "concepts/p020-63ace5dbec.jpg",
  vfx: "concepts/p016-feb2443211.jpg",
  producao: "concepts/p019-a51667b373.jpg",
  china: "concepts/p018-62043ba6c1.jpg",
  workshop: "concepts/p016-ea462a06ba.jpg",
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
  people?: {
    role: string;
    name: string;
    work: string;
    poster: string;
    filmUrl: string;
    profileUrl: string;
  }[];
};

export const slides: Slide[] = [
  {
    id: "abertura",
    kicker: "60 segundos",
    title: "A Lente Humana",
    time: "Abertura",
    kind: "hero",
    paragraphs: [
      "MasterClass Cinematografia - A Lente Humana",
      "“A criação da imagem deve ocorrer independentemente da câmera. Durante a leitura do argumento ou roteiro, uma narrativa visual deve se desenvolver, composta por fotogramas. A imagem é um dos alicerces que acompanham e sustentam a trama.”",
    ],
  },
  {
    id: "beck",
    kicker: "Um pouco de história",
    title: "Cine.Beck",
    time: "",
    kind: "copy",
    paragraphs: [
      "Cinematógrafo formado pela Accademia Internazionale di Cinema, em Cinecittà, Roma, e pós-graduado em Artes pela Accademia di Belle Arti di Roma.",
      "Com extensa experiência na indústria cinematográfica, contribuiu para produções aclamadas como “The Exorcist — The Absolute Beginning” sob direção de Vittorio Storaro, “The Grimm Brothers” de Terry Gilliam e “The Dreamers” de Bernardo Bertolucci.",
      "Desde 2008, atua como Diretor de Fotografia e Fotógrafo Jornalista, dividindo seu tempo entre a Europa e a América do Sul. Fluente em italiano e inglês, com o português como língua materna.",
    ],
  },
  {
    id: "intro",
    kicker: "A Lente Humana",
    title: "INTRODUÇÃO: O OLHAR CINEMATOGRÁFICO",
    time: "Introdução",
    kind: "copy",
    paragraphs: [
      "A imagem nasce antes do refletor e antes do rec. A cinematografia, no livro, é a habilidade de pegar um pensamento e torná-lo matéria de luz, sombra e geometria. Da caverna à tela, o motivo não muda: congelar o tempo para que a história não se apague. Na leitura, o cérebro já ergue cenário, textura e rosto. O ofício é a engenharia reversa dessa tela mental. A introdução coloca oito diretores de fotografia frente a frente para mostrar que o mesmo pensamento vira métodos diferentes. Sven Nykvist procura a luz interior no rosto, na janela e no catchlight. Vittorio Storaro escreve com a luz, entre física, psicologia e história da arte. Claudio Miranda e Mauro Fiore levam esse olhar ao fotorrealismo e ao encontro de mundos.",
    ],
  },
  {
    id: "cap1",
    kicker: "A Lente Humana",
    title: "A EVOLUÇÃO DO OLHAR",
    time: "",
    kind: "copy",
    paragraphs: [
      "A imagem contemporânea é herdeira de milênios. Antes da câmera, composição, luz e narrativa já viviam nas religiões, nas mitologias e nos textos. Quem enquadra no set não inventa um olhar do zero: usa estruturas que a humanidade construiu para explicar o mundo. A via greco-romana busca proporção, geometria e ordem, do Partenon à proporção áurea, no embate entre cosmos e caos. O capítulo atravessa a matéria da escultura, de Michelangelo a Bernini, e a teologia das cores. A pintura impressionista dissolve o contorno. A pintura metafísica subverte a lógica do espaço. Essa herança chega ao set como olhar vivo, não como citação morta.",
    ],
  },
  {
    id: "cap2",
    kicker: "A Lente Humana",
    title: "Um Cafezinho com uma fatia de história do cinema, só pra saber de onde viemos.",
    time: "",
    kind: "copy",
    paragraphs: [
      "O século XX não foi só calendário. Foi a forja da percepção, da engrenagem industrial à era atômica e ao código. O cinema deixa a feira e vira máquina de cultura, política e psicologia. A guerra empurra a óptica. A química transforma a emulsão lenta em negativo capaz de cor e de urgência. O capítulo segue essa linhagem até o agora: mangá, literatura, a saudade de Wong Kar-Wai, a luz doentia da fotografia moderna, o barroco de Sanjay Leela Bhansali. No Brasil, entram Cidade de Deus e Tropa de Elite, e os autores nacionais contemporâneos. A história aqui não é museu. É o chão de onde o olhar de hoje ainda pisa.",
    ],
  },
  {
    id: "cap3",
    kicker: "A Lente Humana",
    title: "ORGANIZAÇÃO, DINÂMICA E ENGENHARIA DOS DEPARTAMENTOS TÉCNICOS",
    time: "",
    kind: "copy",
    paragraphs: [
      "O set não é um lugar só. Ele muda de técnica, de dinheiro e de psicologia conforme a janela: publicidade ou entretenimento. No comercial, a diária é curta e o frame do produto precisa ser absoluto, em 15, 30 ou 60 segundos. No longa e na série, o dono da decisão muda e a narrativa respira de outro jeito. O diretor de fotografia atravessa os dois. O capítulo organiza as forças do departamento, a fusão criativa e o suporte que segura a visão. Hierarquia e engenharia não são papel frio. São o corpo sem o qual a luz não chega ao take. A imagem depende dessa dinâmica tanto quanto depende do olhar.",
    ],
  },
  {
    id: "cap4",
    kicker: "A Lente Humana",
    title: "LUZ E O UNIVERSO, CÂMERA E SENSORES",
    time: "",
    kind: "copy",
    paragraphs: [
      "A luz do set de hoje é a mesma das fogueiras e a mesma que bateu em Caravaggio. Ela não envelhece e não se atualiza. O que muda é a armadilha inventada para caçá-la e virar emoção. O capítulo corre atrás das superfícies de captura. No Eastmancolor dos anos 1950, a sensibilidade caía entre 12 e 25 ASA, e a noite pedia arcos de carvão. Dali o livro desce ao fóton, à radiação, à natureza dupla do feixe e ao negativo VISION3. Câmera e sensor entram como a pele nova de uma luz antiga. Fotografar continua sendo domesticar uma força bruta do universo.",
    ],
  },
  {
    id: "cap5",
    kicker: "A Lente Humana",
    title: "A CIÊNCIA DA ÓPTICA: A ENGENHARIA DA VISÃO E A DOMESTICAÇÃO DOS RAIOS",
    time: "",
    kind: "copy",
    paragraphs: [
      "Para o cinema existir como arte, alguém teve de ler o manual visual do universo. A óptica estuda a luz na matéria e os instrumentos que a dobram. Não é palpite. É geometria, termodinâmica e mecânica quântica. Para o diretor de fotografia, ela é a constituição do set. A escola geométrica trata a luz como raio e calcula reflexão e refração, base de espelho e objetiva. A escola física entende a onda: difração, interferência, polarização. A escola quântica chega à partícula. O capítulo chama isso de domesticação dos raios. O olhar deixa de ser teoria no instante em que o raio obedece.",
    ],
  },
  {
    id: "cap6",
    kicker: "A Lente Humana",
    title: "LENTES CINEMATOGRÁFICAS - A ARTE E A ENGENHARIA DA LUZ",
    time: "",
    kind: "copy",
    paragraphs: [
      "Antes do sensor e antes do grão, a lente já é o olho da produção. Ela decide textura, contraste, geometria, cor e a alma do filme. O capítulo não trata a objetiva como acessório. Trata como arte e engenharia da luz. O vidro óptico nasce na química: sílica, terras raras, lantânio, fluorita, índice de refração e dispersão. A história segue da batalha contra a televisão ao widescreen e, no digital, ao vidro que volta a ter corpo. Precisão e expressão são a mesma peça. Mudar o olhar é mudar esse olho, não só o número escrito no anel.",
    ],
  },
  {
    id: "cap7",
    kicker: "A Lente Humana",
    title: "CAPTURA E FORMAÇÃO DA IMAGEM (DO ANALÓGICO AO DIGITAL)",
    time: "",
    kind: "copy",
    paragraphs: [
      "Antes do pixel e antes do grão, a história é luz refletida no espaço real. O capítulo segue o fóton do corpo do ator até o arquivo. A objetiva recolhe a luz espalhada e a obriga a convergir no plano focal. No analógico, a película percorre um caminho mecânico dentro da câmera. No digital, o mosaico passa pela debayerização para virar imagem. Da janela clássica à revolução anamórfica, muda o suporte, não o fato. O mundo de três dimensões vira uma janela de duas, e essa janela ainda precisa narrar. O destino do sinal é o próximo take.",
    ],
  },
  {
    id: "cap8",
    kicker: "A Lente Humana",
    title: "A DINÂMICA DO ESPAÇO, A COREOGRAFIA DA CÂMERA E A PSICOLOGIA DA IMAGEM",
    time: "",
    kind: "copy",
    paragraphs: [
      "Tirar a câmera do tripé é soltar a moldura no espaço. O movimento muda as massas, a perspectiva e a distância entre quem olha e quem é visto. O livro lembra que isso não fica na máquina. Bate no sistema nervoso. O cinema é tempo atravessando espaço real e, ao mesmo tempo, arquitetura psíquica. Dolly, ombro e eixo entram como psicologia da sala escura. A persistência retiniana aparece para ser atravessada, não para ser repetida como superstição. Cada deslocamento é linguagem. A câmera deixa de registrar e passa a agir na cena.",
    ],
  },
  {
    id: "cap9",
    kicker: "A Lente Humana",
    title: "A COMPOSIÇÃO DA IMAGEM CINEMATOGRÁFICA",
    time: "",
    kind: "copy",
    paragraphs: [
      "Compor não é arrumar objetos num retângulo. É engenharia de forças invisíveis. Cada massa no fotograma puxa o olho por matemática, psicologia e sentido. Os capítulos anteriores entregaram óptica, química e movimento. Este os coordena para servir ao argumento. O diretor de fotografia vira arquiteto do invisível. Ponto, linha, equilíbrio e colapso marcam o ritmo da narrativa. A imagem técnica não copia a realidade. Ela a reconstrói. O frame é uma arena, e o espectador entra nela no escuro.",
    ],
  },
  {
    id: "cap10",
    kicker: "A Lente Humana",
    title: "CÂMERA, ILUMINAÇÃO E MOVIMENTO",
    time: "",
    kind: "copy",
    paragraphs: [
      "A ideia só vira filme quando o corpo da câmera e a objetiva transformam o fóton em imagem. Física óptica, mecânica de precisão e semicondutor se encontram no mesmo instante. O aparato não é um registrador passivo. É o filtro que decanta a realidade. Uma alteração mínima no mecanismo ou no processador muda textura, profundidade e tempo. Iluminação e movimento entram nessa equação, não como estilo colado depois, mas como controle do próprio aparelho. Compreender essa anatomia separa o acaso da imagem que se sustenta.",
    ],
  },
  {
    id: "cap11",
    kicker: "A Lente Humana",
    title: "PÓS-PRODUÇÃO E O FUTURO",
    time: "",
    kind: "copy",
    paragraphs: [
      "No fim do caminho, a cor não é verniz de humor. O livro desmonta esse mito. Ciência da cor é física, psicofísica, biologia da visão e matemática. O espectro vira silício, vira matriz e vira fóton de novo na tela, para que a retina reconheça a luz que existiu no set. ILM, Framestore e The Mill aparecem como a escala desse problema. O pipeline e o ACES existem para a obra não se partir quando muda de continente, de software e de mão. Sem essa lei, a poesia do começo se perde na entrega.",
    ],
  },
  {
    id: "ia-abertura",
    kicker: "A Lente Humana",
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
    kicker: "A Lente Humana",
    title: "IA Director",
    time: "Direção",
    kind: "people",
    paragraphs: [
      "Processo: intenção, roteiro, shot list, referências, geração em volume e descarte. Paul Trillo chegou a cerca de 700 clipes para selecionar 55 em The Hardest Part.",
    ],
    people: [
      {
        role: "Direção",
        name: "Paul Trillo",
        work: "The Hardest Part",
        poster: "people/trillo.jpg",
        filmUrl: "https://www.youtube.com/watch?v=-Nb-M1GAOX8",
        profileUrl: "https://www.instagram.com/paultrillo/",
      },
      {
        role: "Direção",
        name: "Dave Clark",
        work: "My Friend, Zeph",
        poster: "people/zeph.jpg",
        filmUrl: "https://www.youtube.com/watch?v=cHkGoQ5tkYo",
        profileUrl: "https://daveclarkcreative.com/my-friend-zeph-adobe-max",
      },
    ],
  },
  {
    id: "dop",
    kicker: "A Lente Humana",
    title: "IA DoP",
    time: "Fotografia",
    kind: "people",
    paragraphs: [
      "Processo: definir lente aparente, direção de luz, movimento e textura. A câmera real continua sendo a referência quando existe plate.",
    ],
    people: [
      {
        role: "DoP",
        name: "Seif Abdalla",
        work: "HANAA",
        poster: "people/hanaa.jpg",
        filmUrl: "https://www.instagram.com/reel/DMNNrMKumbs/",
        profileUrl: "https://www.linkedin.com/in/seifabdalla",
      },
      {
        role: "DoP",
        name: "Lester Platt",
        work: "ILLUMIBITE",
        poster: "",
        filmUrl: "https://www.linkedin.com/posts/lesterplatt_snaps-from-our-latest-commercial-campaign-activity-7309327822810923008-QCNN",
        profileUrl: "https://www.instagram.com/lesterplatt/",
      },
    ],
  },
  {
    id: "arte",
    kicker: "A Lente Humana",
    title: "IA Diretor de Arte",
    time: "Arte",
    kind: "people",
    paragraphs: [
      "Processo: paleta, locação, figurino e keyframe. O movimento só começa depois que o quadro parado está aprovado.",
    ],
    people: [
      {
        role: "Arte",
        name: "Chloé Camille",
        work: "Fashionista",
        poster: "people/fashionista.jpg",
        filmUrl: "https://www.chloecamille.net/projets/fashionista",
        profileUrl: "https://www.chloecamille.net/apropos",
      },
      {
        role: "Arte",
        name: "Danil Khodashinskiy",
        work: "Artrofish",
        poster: "",
        filmUrl: "https://www.behance.net/xodanila-ai",
        profileUrl: "https://www.linkedin.com/in/xodanila",
      },
    ],
  },
  {
    id: "vfx",
    kicker: "A Lente Humana",
    title: "IA VFX + 3D",
    time: "Imagem final",
    kind: "people",
    paragraphs: [
      "Processo: geometria ou plate, câmera, relight, máscara, composição e correção. Geração sem bloqueio espacial não sustenta comercial realista.",
    ],
    people: [
      {
        role: "VFX",
        name: "Oden Roberts",
        work: "Cruise Control",
        poster: "people/cruise.jpg",
        filmUrl: "https://runway.com/customers/how-runway-powered-tools-cruise-control-pipeline",
        profileUrl: "https://runway.com/customers/how-runway-powered-tools-cruise-control-pipeline",
      },
      {
        role: "VFX",
        name: "Milad Mesof",
        work: "House of David, temporada 2",
        poster: "",
        filmUrl: "https://www.linkedin.com/posts/milad-mesof_house-of-david-season-2-official-trailer-activity-7388171447493627904-ppN4",
        profileUrl: "https://www.linkedin.com/in/milad-mesof",
      },
    ],
  },
  {
    id: "producao",
    kicker: "A Lente Humana",
    title: "IA na produção",
    time: "Produção",
    kind: "people",
    paragraphs: [
      "Processo: breakdown, scout, previs, orçamento, cronograma, aprovações e rastreio de direitos. A geração entra entre o animatic e o corte, não no lugar da produção.",
    ],
    people: [
      {
        role: "Produção",
        name: "Gabe Michael",
        work: "Let Us Explore",
        poster: "people/explore.jpg",
        filmUrl: "https://www.youtube.com/watch?v=7K65pYWa220",
        profileUrl: "https://www.instagram.com/gabemichael_ai/",
      },
      {
        role: "Produção",
        name: "Bryn Mooser",
        work: "Uncanny Valley",
        poster: "",
        filmUrl: "https://www.hollywoodreporter.com/movies/movie-news/natasha-lyonne-jaron-lanier-ai-movie-uncanny-valley-1236202957/",
        profileUrl: "https://www.hollywoodreporter.com/movies/movie-news/natasha-lyonne-jaron-lanier-ai-movie-uncanny-valley-1236202957/",
      },
    ],
  },
  {
    id: "china",
    kicker: "A Lente Humana",
    title: "A disputa, não um pódio permanente",
    time: "China e mercado",
    kind: "china",
  },
  {
    id: "workshop",
    kicker: "A Lente Humana",
    title: "Workshop prático",
    time: "BURANO, lentes, assistente e luz",
    kind: "copy",
    paragraphs: [
      "A teoria fecha. O que começa agora é uma aula prática, sem inteligência artificial. A câmera é a Sony BURANO. As lentes acompanham o corpo, e o assistente de câmera segura foco, troca e estabilidade do plano. A luz é um pacote portátil: uma fonte principal, duas para preencher e recortar, um prático, difusão e negative fill. O exercício é simples, uma entrevista de documentário. Uma pessoa fala. A turma decide de onde a luz nasce, onde a câmera fica e qual lente aproxima sem esmagar o espaço. O assistente sustenta o plano enquanto a decisão se justifica no monitor. O objetivo é entender o contexto: luz, câmera e a relação entre quem pergunta e quem responde.",
    ],
  },
];
