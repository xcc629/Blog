// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  data: {
    title: string;
    description: string;
  };
  isSuccessed: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  try {
    const data = req.body;
    const result = await prisma.series.create({
      data: {
        ...data,
      },
    });
    res.status(200).json({ data: result, isSuccessed: true });
  } catch (err) {
    res.status(400).json({ message: `${err}` });
  }
}
