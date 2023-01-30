import Head from "next/head";

import { Inter } from "@next/font/google";

import React from "react";
import LoginContainer from "@src/blog_component/_containers/LoginContainer";

// const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Head>
        <title>XCC629 | LOGIN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginContainer />
    </>
  );
}
