import { Event } from "@/types";

export const eventos: Event[] = [
  {
    id: 1,
    name: "Tech Summit 2025",
    subtitle: "Descubra as tendências em IA, web e segurança digital.",
    local: "São Paulo, SP",
    date: "25 de abril de 2025",
    image: "/tech-summit-2025.png",
    description: `O Tech Summit 2025 é o principal evento de inovação e tecnologia da América Latina, reunindo os maiores especialistas, empresas e startups para discutir o futuro da tecnologia.Com palestras inspiradoras, workshops práticos e exposição de novas tendências, o evento proporciona uma experiência única para profissionais da área e entusiastas da tecnologia.`,
    attraction: [
      {
        name: "Ana Costa",
        obs: "Diretora de IA da FutureTech",
      },
      {
        name: "Carlos Menezes",
        obs: "CTO da CyberSafe",
      },
      {
        name: "Emily Nakamura",
        obs: "Fundadora da CodeNext",
      },
      {
        name: "Paulo Ribeiro",
        obs: "Arquiteto de Software na CloudVision",
      },
    ],
    tags: ["workshop", "startups", "networking"],
  },
  {
    id: 2,
    name: "Festival Music 2025",
    subtitle: "Curta bandas de rock e eletrônica.",
    local: "Belo Horizonte, MG",
    date: "15 de junho de 2025",
    image: "/indie-music-2025.png",
    description:
      "O Festival Indie Music 2025 celebra a cena independente, reunindo talentos do rock, folk e eletrônico em um evento ao ar livre cheio de energia e autenticidade. Venha curtir uma experiência única com bandas emergentes, arte interativa e um espaço vibrante para amantes da música alternativa.",
    attraction: [
      {
        name: "The Wild Echoes",
        obs: "Indie rock com influências psicodélicas",
      },
      {
        name: "Aurora Folk",
        obs: "Melodias acústicas e letras envolventes",
      },
      {
        name: "Neon Waves",
        obs: "Eletrônica experimental com synths vibrantes",
      },
      {
        name: "Soul & Fire",
        obs: "Jazz fusion e groove contagiante",
      },
    ],
    tags: ["food trucks", "feira", "zona relax"],
  },
  {
    id: 3,
    name: "Corrida Experience",
    subtitle: "Uma corrida de 5km iluminada e DJ ao vivo.",
    local: "São Paulo, SP",
    date: "30 de novembro de 2025",
    image: "/corrida-noturna-2025.png",
    description:
      "A Corrida Noturna Experience 2025 é mais do que uma prova, é uma experiência! Com um percurso iluminado por luzes neon, DJ ao vivo e uma vibe eletrizante, essa corrida combina esporte, música e diversão em um só evento.",
    attraction: [
      {
        name: "5K Glow Run",
        obs: "Ideal para iniciantes e corredores casuais",
      },
      {
        name: "10K Night Challenge",
        obs: "Para quem busca superar limites",
      },
      {
        name: "Neon Walk 3K",
        obs: "Caminhada iluminada para toda a família",
      },
    ],
    tags: ["kits especiais", "musica", "percurso iluminado"],
  },
  {
    id: 4,
    name: "Imersão Teatral 2025",
    subtitle: "Mergulhe no mundo do teatro com apresentações.",
    local: "Curitiba, PR",
    date: "12 de setembro de 2025",
    image: "/teatro.webp",
    description:
      "Um evento único para amantes do teatro, reunindo workshops, apresentações e debates com grandes nomes da dramaturgia. Ideal para atores, diretores e roteiristas que querem aprimorar suas habilidades e expandir seu networking.",
    attraction: [
      {
        name: "Julia Mendes",
        obs: "Workshop de interpretação com a renomada atriz",
      },
      {
        name: "Ricardo Santos",
        obs: "Masterclass de direção teatral",
      },
      {
        name: "Grupo Teatro Livre",
        obs: "Apresentação especial de 'O Sonho'",
      },
    ],
    tags: ["workshop", "teatro", "networking"],
  },
  {
    id: 5,
    name: "Feira Gastronômica",
    subtitle: "Uma explosão de sabores da culinária mundial.",
    local: "Rio de Janeiro, RJ",
    date: "20 de julho de 2025",
    image: "/feira-gastronomica.webp",
    description:
      "A maior feira gastronômica do Brasil reúne chefs renomados, food trucks, workshops culinários e muito mais. Uma experiência única para os amantes da boa gastronomia, com pratos de diversos países e culturas.",
    attraction: [
      {
        name: "Chef Maria Silva",
        obs: "Workshop de culinária italiana",
      },
      {
        name: "Chef João Santos",
        obs: "Demonstração de técnicas de confeitaria",
      },
      {
        name: "Food Truck Festival",
        obs: "20 food trucks com culinárias do mundo todo",
      },
    ],
    tags: ["gastronomia", "workshop", "food trucks"],
  },
];
