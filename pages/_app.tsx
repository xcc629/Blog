import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../src/blog_component/_component/Header/Header";
import Divider from "../src/common_component/Divider";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Header />
        <Divider size={1} color="gray50" />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
