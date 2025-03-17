"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Event } from "@/types";
import Image from "next/image";
import { SonnerDemo } from "@/components/Subscribe";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
const eventos: Event[] = [
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
    id: 4,
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

const Page = () => {
  const router = useRouter();
  const { id } = useParams();
  const evento = eventos.filter((event) => {
    return event.id == Number(id);
  });
  const eventoFiltrado = evento[0];

  return (
    <div className="w-full max-w-[1153px] min-h-screen lg:min-h-[904px] flex flex-col mx-auto my-4 lg:my-[86px] rounded-[13px] border">
      <div className="flex justify-end">
        <Image
          alt="Close"
          src={"/close.svg"}
          width={38}
          height={38}
          className="absolute m-4 lg:m-[28px] cursor-pointer hover:bg-[#000] transition duration-400 rounded-[100px]"
          onClick={() => {
            router.push(`/`);
          }}
        />
      </div>

      <Image
        alt="Imagem do evento"
        src={eventoFiltrado.image}
        width={1198}
        height={685}
        className="rounded-t-[13px] w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover"
      />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center lg:items-start px-3 lg:px-0">
        <div className="w-full lg:pl-[32px] pt-6 lg:pt-[38px] leading-normal lg:leading-none flex-1 text-center lg:text-left">
          <h3 className="font-bold text-xl lg:text-[20px] mb-4 lg:mb-[21px]">
            {eventoFiltrado.name}
          </h3>
          <h4 className="font-semibold text-sm lg:text-[15px] text-[#535353] mb-4 lg:mb-[27px] uppercase">
            Sobre o Evento
          </h4>
          <p className="font-regular text-sm lg:text-[15px] text-[#535353] mb-6 lg:mb-[27px] w-full max-w-[469px] leading-relaxed lg:leading-[20px] mx-auto lg:mx-0">
            {eventoFiltrado.description}
          </p>
          <ul className="flex flex-wrap gap-3 lg:gap-[21px] font-regular text-xs lg:text-[15px] text-[#535353] uppercase justify-center lg:justify-start">
            <li className="border rounded-[100px] px-4 lg:px-[28px] py-2 lg:py-[12px]">
              {eventoFiltrado.tags[0]}
            </li>
            <li className="border rounded-[100px] px-4 lg:px-[28px] py-2 lg:py-[12px]">
              {eventoFiltrado.tags[1]}
            </li>
            <li className="border rounded-[100px] px-4 lg:px-[28px] py-2 lg:py-[12px]">
              {eventoFiltrado.tags[2]}
            </li>
          </ul>
          <div className="flex flex-col gap-3 lg:gap-[11px] mt-6 lg:mt-[32px] items-center lg:items-start">
            <span className="text-sm lg:text-[15px] font-regular flex gap-2 lg:gap-[9px] items-center">
              <Image
                alt="localização"
                src="/local.svg"
                width={14}
                height={14}
                className="mr-1 lg:mr-[2.4px]"
              />
              {eventoFiltrado.local}
            </span>
            <span className="text-sm lg:text-[15px] font-regular flex gap-2 lg:gap-[9px] items-center">
              <Image alt="calendário" src="/date.svg" width={20} height={20} />
              {eventoFiltrado.date}
            </span>
          </div>
          <Toaster position="top-right" />
          <SonnerDemo />
        </div>
        <div className="w-full lg:w-[400px] lg:mt-[60px] lg:mr-[152px] xl:ml-[150px] leading-relaxed lg:leading-[36px] mb-8 lg:mb-0 flex-shrink-0 text-center lg:text-left">
          <h4 className="font-semibold text-sm lg:text-[15px] text-[#535353] uppercase mb-4 lg:mb-[21px]">
            Palestrantes Confirmados
          </h4>
          <ul className="font-regular text-sm lg:text-[15px] text-[#535353] space-y-2 lg:space-y-3">
            {eventoFiltrado.attraction?.map((attraction, index) => (
              <li key={index} className="break-words">
                <strong>{attraction.name}</strong> - {attraction.obs}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
