import db from "@/lib/db";
import { getselft } from "@/lib/auth-service";
import { resolve } from "path";

export const getRecommanded = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
