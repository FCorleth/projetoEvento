"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="w-full px-[64px] py-[32px] flex justify-between items-center">
      <h1
        className="font-extrabold text-[27px] italic cursor-pointer"
        onClick={() => router.push("/")}
      >
        Events.
      </h1>
      <ul className="flex gap-[81px] text-[14px]">
        <Button variant="link">Sobre a Events</Button>
        <Button
          variant="link"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        >
          Eventos
        </Button>
        <Button variant="link">Suporte</Button>
      </ul>
    </nav>
  );
};

export default Header;
