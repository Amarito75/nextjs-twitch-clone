import React from "react";
import { Search } from "./search";
import { Actions } from "./actions";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full h-20 z-[49] bg-indigo-700 px-2 lg:px-4 flex justify-between items-center shadow-sm rounded-lg">
      Navbar
      <Search />
      <Actions />
    </nav>
  );
};
