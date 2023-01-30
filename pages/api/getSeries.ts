// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@src/libs/prisma";

export type tSeriesData = {
  data: {
    id: number;
    title: String;
    description: string;
    postCount: number;
  } | null;
};

export default async function getSeries(param: string) {
  try {
    const result = await prisma.series.findUnique({
      where: {
        id: Number(param),
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

    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (err) {
    console.log(err);
  }
}
