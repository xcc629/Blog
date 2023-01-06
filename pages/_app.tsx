import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../src/blog_component/_component/Header";

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
        <Component {...pageProps} />
      </main>
    </div>
  );
}
