import * as React from "react";
import Div from "../../common_component/Div";
import Divider from "../../common_component/Divider";
import Typograpy from "../../common_component/Typograpy";
import SeriesList from "../_component/SeriesList";

import styles from "../_styles.module.css";

const list = {
  seriesTitle: "시리즈 타이틀",
  seriesDescription: "시리즈설명시리즈설명시리즈설명시리즈설명시리즈설명",
  seriesThumnailSrc: "",
  postCount: 4,
  posts: [
    { id: 1, title: "제목이다", summary: "dddd" },
    { id: 2, title: "제목이다", summary: "dddd" },
    { id: 3, title: "제목이다", summary: "dddd" },
  ],
};

export default function SeriesContainer() {
  return (
    <div className={styles.main}>
      <div className={styles.seriesTitle}>
        <div>
          <Typograpy size={30} weight={600} margin="0 0 15px">
            {list.seriesTitle}
          </Typograpy>
          <Typograpy size={20} weight={500} color="gray300">
            {list.seriesDescription}
          </Typograpy>
        </div>
        <Div
          backgroundColor="green100"
          styles={{
            width: "196px",
            height: "159px",
            borderRadius: "8px",
          }}
        >
          이미지
        </Div>
      </div>

      <Divider size={1} color="gray100" />

      <div className={styles.seriesMenu}>
        <Typograpy size={30} weight={600}>
          {list.postCount}개의 포스터
        </Typograpy>
        <Typograpy>1화부터</Typograpy>
        <Typograpy>최신순</Typograpy>
      </div>

      <Divider size={1} color="gray100" />
      <div>
        <SeriesList />
      </div>
    </div>
  );
}
