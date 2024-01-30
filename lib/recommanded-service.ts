import db from "@/lib/db";
import { getselft } from "@/lib/auth-service";
import { resolve } from "path";

export const getRecommanded = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
