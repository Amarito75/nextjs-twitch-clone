import React from "react";
import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Recommanded, RecommandedSkeleton } from "./recommanded";
import { getRecommanded } from "@/lib/recommanded-service";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {
  const recommanded = await getRecommanded();
  const following = await getFollowedUsers();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommanded data={recommanded} />
        <Following data={following} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-4 flex flex-col w-[70px] lg:w-60 h-full rounded-lg bg-background border border-indigo-700 z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommandedSkeleton />
    </aside>
  );
};
