import React from "react";
import Button from "./Button";
import SearchBar from "./Searchbar";
import Image from "next/image";

const Buttons = () => {
  return (
    <div className="flex">
      <Button className="w-[281px] bg-[#9F6AFF] text-[#FFF] text-[20px] font-regular h-[58px] rounded-[13px] ml-[64px] flex justify-center gap-[16px]">
        <Image alt="Fogo" src="/fogo.svg" width={16} height={21} />
        <span>
          Eventos em <strong>destaques</strong>
        </span>
      </Button>
      <SearchBar />
    </div>
  );
};

export default Buttons;
