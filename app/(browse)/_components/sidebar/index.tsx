import React from "react";
import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";
import { Recommanded, RecommandedSkeleton } from "./recommanded";
import { getRecommanded } from "@/lib/recommanded-service";

export const Sidebar = async () => {
  const recommanded = await getRecommanded();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommanded data={recommanded} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-indigo-700 z-50">
      <RecommandedSkeleton />
    </aside>
  );
};
