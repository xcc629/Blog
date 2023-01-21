import Head from "next/head";
import { useRouter } from "next/router";
import SeriesContainer from "../../../src/blog_component/_containers/SeriesContainer";

export default function Series() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>XCC629 | SERIES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SeriesContainer />
    </>
  );
}