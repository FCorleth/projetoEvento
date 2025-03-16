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
    <div className="w-[1153px] h-[904px] flex flex-col m-auto my-[86px] rounded-[13px] border">
      <div className="flex justify-end">
        <Image
          alt="Close"
          src={"/close.svg"}
          width={38}
          height={38}
          className="absolute m-[28px] cursor-pointer hover: bg-[#000] trasition duration-400 rounded-[100px]"
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
        className="rounded-t-[13px]"
      />
      <div className="flex">
        <div className="pl-[32px] pt-[38px] leading-none">
          <h3 className="font-bold text-[20px] mb-[21px]">
            {eventoFiltrado.name}
          </h3>
          <h4 className="font-semibold text-[15px] text-[#535353] mb-[27px] uppercase">
            Sobre o Evento
          </h4>
          <p className="font-regular text-[15px] text-[#535353] mb-[27px] w-[469px] leading-[20px]">
            {eventoFiltrado.description}
          </p>
          <ul className="flex gap-[21px] font-regular text-[15px] text-[#535353] uppercase">
            <li className="border rounded-[100px] px-[28px] py-[12px]">
              {eventoFiltrado.tags[0]}
            </li>
            <li className="border rounded-[100px] px-[28px] py-[12px]">
              {eventoFiltrado.tags[1]}
            </li>
            <li className="border rounded-[100px] px-[28px] py-[12px]">
              {eventoFiltrado.tags[2]}
            </li>
          </ul>
          <div className="flex flex-col gap-[11px] mt-[32px]">
            <span className="text-[15px] font-regular flex gap-[9px] ml-[3px] items-center">
              <Image
                alt="localização"
                src="/local.svg"
                width={14}
                height={14}
                className="mr-[2.4px]"
              />
              {eventoFiltrado.local}
            </span>
            <span className="text-[15px] font-regular flex gap-[9px] items-center">
              <Image alt="calendário" src="/date.svg" width={20} height={20} />
              {eventoFiltrado.date}
            </span>
          </div>
          <Toaster position="top-right" />
          <SonnerDemo />
        </div>
        <div className="mt-[60px] ml-[150px] leading-[36px]">
          <h4 className="font-semibold text-[15px] text-[#535353] uppercase">
            Palestrantes Confirmados
          </h4>
          <ul className="font-regular text-[15px] text-[#535353]">
            {eventoFiltrado.attraction.map((attraction, index) => (
              <li key={index}>
                {attraction.name} - {attraction.obs}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
