// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

export type tPostData = {
  data: {
    id: number;
    createdAt: Date;
    title: string;
    published: boolean;
    series: { id: number; title: string };
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tPostData>
) {
  try {
    const { postId } = req.query;
    console.log(postId);
    const data = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
      select: {
        id: true,
        createdAt: true,
        title: true,
        published: true,
        series: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
