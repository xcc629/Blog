// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

export type tPostList = {
  postList:
    | {
        id: number;
        createdAt: Date;
        title: string;
        published: boolean;
        authorId: number;
        seriesId: number;
      }[]
    | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tPostList>
) {
  try {
    const { lastIndex, seriesId } = req.query;
    const postList = await prisma.post.findMany({
      take: 10,
      where: {
        seriesId: Number(seriesId),
      },
      cursor: {
        id: Number(lastIndex) + 1,
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json({ postList });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
