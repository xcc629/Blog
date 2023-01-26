// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data:
    | {
        id: number;
        createdAt: Date;
        title: string;
        published: boolean;
        authorId: number;
        seriesId: number;
      }[]
    | [];
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const { lastIndex, seriesId } = req.query;
    const list = await prisma.post.findMany({
      take: 3,
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
    console.log(list, seriesId);
    res.status(200).json({ data: list });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
