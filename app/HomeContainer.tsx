"use client";

import Div from "@src/common_component/Div";
import Observer from "@src/common_component/Observer";
import Typograpy from "@src/common_component/Typograpy";
import { getSeriesList } from "@src/libs/api/series";
import styles from "@style/index";
import { tSeriesList } from "pages/api/getSeriesList";

import { useCallback, useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import { MemoizedSeriesList } from "./SeriesList";

export default function HomeContainer() {
  const { data, fetchNextPage, hasNextPage, status } =
    useInfiniteQuery<tSeriesList>(
      ["serieses"],
      ({ pageParam = "" }) => getSeriesList(`?lastIndex=${pageParam}`),
      {
        getNextPageParam: ({ seriesList }) =>
          seriesList ? seriesList[seriesList.length - 1].id : undefined,
      }
    );

  const handlerIntersection = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const renderIfDataExist = useCallback(() => {
    if (data && data.pages) {
      const seriesList = data.pages.reduce<
        Exclude<tSeriesList["seriesList"], undefined>
      >((prev, { seriesList }) => {
        if (seriesList) prev.push(...seriesList);
        return prev;
      }, []);

      return seriesList;
    }
  }, [data]);
  const memoData = useMemo(renderIfDataExist, [renderIfDataExist]);

  const render = () => {
    if (status === "loading") {
      return <Div>리스트 로딩중</Div>;
    }
    if (status === "error") {
      return <Div>오류</Div>;
    }
    return memoData ? (
      <MemoizedSeriesList list={memoData} />
    ) : (
      <Div>리스트가 없습니다</Div>
    );
  };

  return (
    <main className={styles.main}>
      <Div>
        <Typograpy size={20} weight="bold" margin="0 0 10px">
          SERIES
        </Typograpy>
      </Div>
      {render()}
      {hasNextPage && <Observer handleIntersection={handlerIntersection} />}
    </main>
  );
}
