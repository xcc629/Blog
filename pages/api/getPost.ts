// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data: {
    id: number;
    createdAt: Date;
    title: string;
    published: boolean;
    authorId: number;
    seriesId: number;
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const { postId } = req.query;
    const data = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
