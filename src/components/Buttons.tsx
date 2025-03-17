import React from "react";
import Button from "./Button";
import SearchBar from "./Searchbar";
import Image from "next/image";

const Buttons = () => {
  return (
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
  );
};

export default Buttons;
