import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-3 md:m-[32px] p-6 md:p-[83px] bg-[#9F6AFF] rounded-2xl md:rounded-[45px]">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-8 lg:gap-0 items-center lg:items-start">
        <div className="w-full max-w-[95%] lg:max-w-[370px] text-left">
          <h1 className="font-extrabold italic text-3xl sm:text-4xl lg:text-[74px] text-[#F8F8F8] leading-tight lg:leading-none mb-4 lg:mb-[26px]">
            Events.
          </h1>
          <p className="font-regular text-sm sm:text-base lg:text-[20px] text-[#CFB4FF] w-full leading-relaxed">
            A Events é uma agência especializada na criação de eventos
            personalizados, oferecendo soluções completas para ocasiões
            corporativas, sociais, casamentos e festas temáticas.
          </p>
        </div>
        <div className="w-full max-w-[95%] lg:max-w-none leading-normal lg:leading-none lg:ml-[100px] xl:ml-[188px] text-left">
          <h2 className="font-regular text-sm sm:text-base lg:text-[20px] text-[#CFB4FF] mb-4 lg:mb-[21px] uppercase">
            SUPORTE
          </h2>
          <div className="font-semibold text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] gap-3 lg:gap-[17px] flex flex-col lg:items-start">
            <p className="hover:text-[#CFB4FF] transition-colors cursor-pointer">
              Dúvidas
            </p>
            <p className="hover:text-[#CFB4FF] transition-colors cursor-pointer">
              Fale com a Events
            </p>
            <p className="hover:text-[#CFB4FF] transition-colors cursor-pointer">
              Política de Privacidade
            </p>
          </div>
        </div>
        <div className="w-full max-w-[95%] lg:max-w-none lg:ml-[40px] xl:ml-[57px] text-left">
          <h2 className="font-regular text-sm sm:text-base lg:text-[20px] text-[#CFB4FF] mb-4 lg:mb-[21px] w-full lg:w-[151px] leading-normal lg:leading-none uppercase">
            SIGA NOSSAS REDES SOCIAIS
          </h2>
          <div className="flex gap-4 lg:gap-[20px] lg:justify-start">
            <Image
              alt="Instagram"
              src="/instagram.svg"
              width={45}
              height={45}
              className="w-8 h-8 lg:w-[45px] lg:h-[45px] hover:opacity-80 transition-opacity cursor-pointer"
            />
            <Image
              alt="LinkedIn"
              src="/linkedIn.svg"
              width={45}
              height={45}
              className="w-8 h-8 lg:w-[45px] lg:h-[45px] hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="font-regular text-sm sm:text-base lg:text-[20px] text-[#CFB4FF] flex flex-col lg:flex-row w-full justify-between lg:items-start border-t-[1px] border-[#AF83FF] mt-10 lg:mt-[100px] xl:mt-[165px] pt-6 lg:pt-[78px] gap-2 lg:gap-4 text-left">
        <h3>© Copyright 2025.</h3>
        <h3>Todos os direitos reservados.</h3>
      </div>
    </footer>
  );
};

export default Footer;
