"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import React from "react";
import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommandedProps {
  data: User[];
}

export const Recommanded = ({ data }: RecommandedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommanded</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data?.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommandedSkeleton = () => {
  return (
    <li className="space-y-2 px-2">
      {[...Array(3).map((_, i) => <UserItemSkeleton key={i} />)]}
    </li>
  );
};
