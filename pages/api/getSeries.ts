// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

export type tSeriesData = {
  data: {
    id: number;
    title: String;
    description: string;
    postCount: number;
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tSeriesData>
) {
  try {
    const { seriesId } = req.query;
    const result = await prisma.series.findUnique({
      where: {
        id: Number(seriesId),
      },
      select: {
        id: true,
        title: true,
        description: true,
        posts: true,
      },
    });

    const data = result && {
      id: result?.id,
      title: result?.title,
      description: result?.description,
      postCount: result?.posts.length,
    };

    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
