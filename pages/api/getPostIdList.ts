// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@src/libs/prisma";

export default async function getPostIdList() {
  try {
    const data = await prisma.post.findMany({
      select: {
        id: true,
      },
    });
    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (err) {
    console.log(err);
  }
}
