import Div from "@src/common_component/Div";
import Divider from "@src/common_component/Divider";
import Typograpy from "@src/common_component/Typograpy";
import { useCallback, useMemo, useState } from "react";
import SeriesList from "../_component/PostsList";
import styles from "@style/index";

import { tSeriesData } from "pages/api/getSeries";
import { useInfiniteQuery, useQuery } from "react-query";

import { getPostList } from "@src/libs/api/post";
import { tPostList } from "pages/api/getPostList";
import Observer from "@src/common_component/Observer";

interface ISeriesDataProps {
  param: number;
  seriesInfo: {
    id: number;
    title: string;
    description: string;
    postCount: number;
  };
}

export default function SeriesContainer({
  param,
  seriesInfo,
}: ISeriesDataProps) {
  const { data, fetchNextPage, hasNextPage, status } =
    useInfiniteQuery<tPostList>(
      ["posts"],
      ({ pageParam = "" }) =>
        getPostList(`?seriesId=${param}&lastIndex=${pageParam}`),
      {
        getNextPageParam: ({ postList }) =>
          postList && postList[postList.length - 1]
            ? postList[postList.length - 1].id
            : undefined,
      }
    );

  const handlerIntersection = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const renderIfDataExist = useCallback(() => {
    if (data && data.pages) {
      const postList = data.pages.reduce<
        Exclude<tPostList["postList"], undefined>
      >((prev, { postList }) => {
        if (postList) prev.push(...postList);
        return prev;
      }, []);

      return postList;
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
      <SeriesList list={memoData} />
    ) : (
      <Div>리스트가 없습니다.</Div>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.seriesTitle}>
        <div>
          <Typograpy size={20} weight={600} margin="0 0 15px">
            {seriesInfo?.title}
          </Typograpy>
          <Typograpy size={15} weight={500} color="gray300">
            {seriesInfo?.description}
          </Typograpy>
        </div>
      </div>

      <Divider size={1} color="gray100" />

      <div className={styles.seriesMenu}>
        <Typograpy size={18} weight={600}>
          {seriesInfo?.postCount}개의 포스터
        </Typograpy>
      </div>

      <Divider size={1} color="gray100" />
      <div>
        {render()}
        {hasNextPage && <Observer handleIntersection={handlerIntersection} />}
      </div>
    </div>
  );
}
