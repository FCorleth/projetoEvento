import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="m-[32px] p-[83px] bg-[#9F6AFF] rounded-[45px]">
      <div className="flex ">
        <div>
          <h1 className="font-extrabold italic text-[74px] text-[#F8F8F8] leading-none mb-[26px]">
            Events.
          </h1>
          <p className="font-regular text-[20px] text-[#CFB4FF] w-[350px]">
            A Events é uma agência especializada na criação de eventos
            personalizados, oferecendo soluções completas para ocasiões
            corporativas, sociais, casamentos e festas temáticas.
          </p>
        </div>
        <div className="leading-none ml-[188px] m-0 p-0">
          <h2 className="font-regular text-[20px] text-[#CFB4FF] mb-[21px]">
            SUPORTE
          </h2>
          <div className="font-semibold text-[20px] text-[#FFFFFF] gap-[17px] flex flex-col">
            <p>Dúvidas</p>
            <p>Fale com a Events</p>
            <p>Política de Privacidade</p>
          </div>
        </div>
        <div className="ml-[57px]">
          <h2 className="font-regular text-[20px] text-[#CFB4FF] mb-[21px] w-[151px] leading-none">
            SIGA NOSSAS REDES SOCIAIS
          </h2>
          <div className="flex gap-[20px]">
            <Image
              alt="Instagram"
              src="/instagram.svg"
              width={45}
              height={45}
            ></Image>
            <Image
              alt="LinkedIn"
              src="/linkedIn.svg"
              width={45}
              height={45}
            ></Image>
          </div>
        </div>
      </div>
      <div className="font-regular text-[20px] text-[#CFB4FF] w-[151px] leading-none flex w-full justify-between border-t-[1px] border-[#AF83FF] mt-[165px] pt-[78px]">
        <h3>© Copyright 2025.</h3>
        <h3>Todos os direitos reservados.</h3>
      </div>
    </footer>
  );
};

export default Footer;
