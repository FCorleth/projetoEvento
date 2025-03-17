import React from "react";
import { Event } from "@/types/index";
import Button from "@/components/Button";
import SearchBar from "@/components/Searchbar";
import Image from "next/image";
import Title from "@/components/Title";
import { CarouselSpacing } from "@/components/Carrossel";
const Home = () => {
  const eventos: Event[] = [
    {
      id: 1,
      name: "Tech Summit 2025",
      subtitle: "Descubra as tendências em IA, web e segurança digital.",
      local: "São Paulo, SP",
      date: "25 de abril de 2025",
      image: "/tech-summit-2025.png",
      description:
        " O Tech Summit 2025 é o principal evento de inovação e tecnologia da América Latina, reunindo os maiores especialistas, empresas e startups para discutir o futuro da tecnologia. Com palestras inspiradoras, workshops práticos e exposição de novas tendências, o evento proporciona uma experiência única para profissionais da área e entusiastas da tecnologia.",
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
      name: "Festival Indie Music 2025",
      subtitle: "Curta bandas independentes de rock e eletrônica.",
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
      name: "Corrida Noturna Experience",
      subtitle:
        "Uma corrida de 5km iluminada e DJ ao vivo para motivar os corredores.",
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
      id: 3,
      name: "Corrida Noturna Experience",
      subtitle:
        "Uma corrida de 5km iluminada e DJ ao vivo para motivar os corredores.",
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
  ];

  return (
    <main className="px-4">
      <Title />
      <div className="flex flex-col lg:flex-row gap-4 px-3 lg:px-0 max-w-full items-center lg:items-start">
        <Button className="w-full max-w-[95%] lg:max-w-none lg:w-[280px] bg-[#9F6AFF] text-[#FFF] text-base lg:text-[18px] font-regular h-[50px] lg:h-[58px] rounded-[13px] lg:ml-[64px] flex justify-center items-center gap-2 lg:gap-[14px] py-3 lg:py-[18px] px-4 lg:px-[22px] hover:bg-[#8A5CE6] transition-colors">
          <Image
            alt="Fogo"
            src="/fogo.svg"
            width={16}
            height={21}
            className="w-4 lg:w-auto"
          />
          <span className="whitespace-nowrap">
            Eventos em <strong>destaques</strong>
          </span>
        </Button>
        <div className="w-full max-w-[95%] lg:max-w-none lg:w-auto">
          <SearchBar />
        </div>
      </div>
      <CarouselSpacing eventos={eventos} />
    </main>
  );
};

export default Home;
