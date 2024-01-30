"use client";

interface WrapperProps {
  children: React.ReactNode;
}

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import React from "react";

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed mx-4 rounded-lg flex flex-col w-60 h-full bg-background border border-indigo-700 z-50 translate duration-300",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
