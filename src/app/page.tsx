"use client";
import Title from "@/components/Title";
import Buttons from "@/components/Buttons";
import { CarouselSpacing } from "@/components/Carrossel";
import { useState } from "react";
import { eventos } from "@/data/eventos";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEventos = eventos.filter((evento) =>
    evento.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Title />
      <Buttons searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CarouselSpacing eventos={filteredEventos} />
    </main>
  );
};

export default Home;
