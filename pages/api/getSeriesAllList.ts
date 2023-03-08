// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@src/libs/prisma";

export default async function handler() {
  try {
    const list = await prisma.series.findMany({
      select: {
        id: true,
        title: true,
      },
    });
    const res = JSON.parse(JSON.stringify(list));
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
