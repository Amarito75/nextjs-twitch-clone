"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useIsClient } from "usehooks-ts";
import React, { useState, useEffect } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommandedSkeleton } from "./recommanded";
import { FollowingSkeleton } from "./following";
interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    <aside className="fixed mx-4 rounded-lg flex flex-col w-60 h-full bg-background border border-indigo-700 z-50 translate duration-300">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommandedSkeleton />
    </aside>;
  }

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
