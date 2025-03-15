import React from "react";

const Header = () => {
  return (
    <nav className="w-full px-[64px] py-[32px] flex justify-between items-center">
      <h1 className="font-extrabold text-[27px] italic"> Events.</h1>
      <ul className="flex gap-[81px] text-[14px]">
        <li>Sobre a Events</li>
        <li>Eventos</li>
        <li>Suporte</li>
      </ul>
    </nav>
  );
};

export default Header;
