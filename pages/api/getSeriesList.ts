// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data:
    | {
        id: number;
        title: string;
        description: string;
      }[]
    | [];
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const { lastIndex } = req.query;
    const list = await prisma.series.findMany({
      take: 3,
      cursor: {
        id: Number(lastIndex) + 1,
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json({ data: list });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
