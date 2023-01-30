import { INextApiResponse } from "@src/libs/interfaces/api";
import prisma from "@src/libs/prisma";
import type { NextApiRequest } from "next";

export type tPostLoginRes = {
  isLogin: boolean;
  userInfo?: {
    id: number;
    email: string;
  };
  role: "ADMIN" | "VISITANT" | "UNKNOWN USER";
};

export default async function handler(
  req: NextApiRequest,
  res: INextApiResponse<tPostLoginRes>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user?.password === password && user?.role === "ADMIN") {
      res.status(200).json({
        isLogin: true,
        userInfo: { id: user.id, email: user.email },
        role: user.role,
      });
    } else {
      res.status(200).json({ isLogin: false, role: "UNKNOWN USER" });
    }
  } else {
    res.status(400).json({ message: "postLogin should be 'Post'" });
  }
}
