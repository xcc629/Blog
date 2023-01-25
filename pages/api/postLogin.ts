import prisma from "../../libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  isLogin: true;
  role: "ADMIN" | "VISITANT";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "post") {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user?.password === password && user?.role === "ADMIN") {
      res.status(200).json({ isLogin: true, role: user.role });
    }
  }
}
