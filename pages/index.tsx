import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Typograpy from "../src/common_component/Typograpy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>메인</div>
        <Typograpy margin="0px 1px 2px 3px" color="green200" size={30}>
          dd
        </Typograpy>
        <Typograpy margin="0px 1px 2px 3px">dd</Typograpy>
      </main>
    </>
  );
}
