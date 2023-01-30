// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

export type tSeriesList = {
  seriesList:
    | {
        id: number;
        title: string;
        description: string;
      }[]
    | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tSeriesList>
) {
  try {
    const { lastIndex } = req.query;
    const isFirstPage = !lastIndex;

    const pageCondition = {
      cursor: {
        id: Number(lastIndex) + 1,
      },
      orderBy: {
        id: "asc",
      },
    };

    const list = await prisma.series.findMany({
      take: 10,
      ...(!isFirstPage && pageCondition),
      orderBy: {
        id: "asc",
      },
    });

    const length = list.length;

    res.status(200).json({ seriesList: 0 < length ? list : undefined });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
