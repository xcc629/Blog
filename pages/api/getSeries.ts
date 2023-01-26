// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data: {
    id: number;
    title: string;
    description: string;
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const { seriesId } = req.query;
    const data = await prisma.series.findUnique({
      where: {
        id: Number(seriesId),
      },
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
