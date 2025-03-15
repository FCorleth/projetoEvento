import React from "react";
import { ButtonWithIcon } from "./Button";
import SearchBar from "./Searchbar";

const Buttons = () => {
  return (
    <div className="flex">
      <ButtonWithIcon />
      <SearchBar />
    </div>
  );
};

export default Buttons;
