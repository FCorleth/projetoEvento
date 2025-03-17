"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-[64px] flex justify-between items-center bg-white">
      <div className="flex justify-between items-center w-full">
        <h1
          className="font-extrabold text-[24px] sm:text-[27px] italic cursor-pointer"
          onClick={() => router.push("/")}
        >
          Events.
        </h1>
        {/* Ícone do menu hamburguer para telas menores */}
        <button className="text-3xl md:hidden" onClick={toggleMenu}>
          {/* Substitua o caminho abaixo para o seu ícone na pasta public */}
          <Image src="/menu-hamburguer.svg" alt="Menu" width={32} height={21} />
        </button>
      </div>

      {/* Itens de navegação */}
      <ul
        className={`${
          isMenuOpen ? "top-[80px] opacity-100" : "top-[-400px] opacity-0"
        } md:flex md:items-center md:static absolute w-full bg-white transition-all ease-in duration-500 md:opacity-100 md:top-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7`}
      >
        <li className="mx-4 my-6 md:my-0">
          <Button variant="link" onClick={() => router.push("/")}>
            Sobre a Events
          </Button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Button variant="link" onClick={() => router.push("/")}>
            Eventos
          </Button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Button variant="link">Suporte</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
