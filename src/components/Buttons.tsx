import React from "react";
import Button from "./Button";
import SearchBar from "./Searchbar";
import Image from "next/image";

const Buttons = () => {
  return (
    <div className="flex">
      <Button className="w-[280px] bg-[#9F6AFF] text-[#FFF] text-[18px] font-regular h-[58px] rounded-[13px] ml-[64px] flex justify-center gap-[14px]py-[18px] px-[22px]">
        <Image
          alt="Fogo"
          src="/fogo.svg"
          width={16}
          height={21}
          className="mr-[14px]"
        />
        <span>
          Eventos em <strong>destaques</strong>
        </span>
      </Button>
      <SearchBar />
    </div>
  );
};

export default Buttons;
