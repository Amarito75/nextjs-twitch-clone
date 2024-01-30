import React from "react";
import { Search } from "./search";
import { Actions } from "./actions";

export const Navbar = () => {
  return (
    <div className="m-4">
      <nav className="h-20 z-[49] bg-background border border-indigo-700 px-2 lg:px-4 flex justify-between items-center shadow-sm rounded-lg">
        Bento TV
        <Search />
        <Actions />
      </nav>
    </div>
  );
};
