import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Header from "../src/blog_component/_component/Header/Header";
import Divider from "../src/common_component/Divider";
import WEHeader from "../src/blog_component/_component/WEHeader";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
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
          {}
          <WEHeader />
          <Divider size={1} color="gray50" />

          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  );
}
