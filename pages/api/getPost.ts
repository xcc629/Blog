// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@src/libs/prisma";

export type tPostData = {
  data: {
    id: number;
    createdAt: Date;
    title: string;
    published: boolean;
    series: { id: number; title: string };
  } | null;
};

export default async function getPost(param: string) {
  try {
    const data = await prisma.post.findUnique({
      where: {
        id: Number(param),
      },
      select: {
        id: true,
        createdAt: true,
        title: true,
        published: true,
        series: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (err) {
    console.log(err);
  }
}
