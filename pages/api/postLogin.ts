import { INextApiResponse } from "@src/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

type tData = {
  isLogin: true;
  role: "ADMIN" | "VISITANT";
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tData>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user?.password === password && user?.role === "ADMIN") {
      res.status(200).json({ isLogin: true, role: user.role });
    }
  } else {
    res.status(400).json({ message: "postLogin should be 'Post'" });
  }
}
