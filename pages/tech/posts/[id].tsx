import * as React from "react";

import Head from "next/head";

import PostContainer from "@src/blog_component/_containers/PostContainer";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getPost } from "@src/libs/api/post";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>XCC629 | POST</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostContainer param={1} post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost("1");

  console.log("params", params);

  return { props: { post } };
};
