// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data: {
    title: string;
    published: boolean;
    authorId: number;
    seriesId: number;
    content: string;
  };
  isSuccessed: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const data: tData["data"] = req.body;
    const result = await prisma.post.create({
      data: {
        title: data.title,
        published: true,
        authorId: 1,
        seriesId: data.seriesId,
        content: data.content,
      },
    });
    res.status(200).json({ data: result, isSuccessed: true });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
