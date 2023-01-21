import Link from "next/link";
import * as React from "react";
import Div from "../../common_component/Div";
import Typograpy from "../../common_component/Typograpy";
import { HREF } from "../../const";

import styles from "../_styles.module.css";

const list = [
  {
    id: 1,
    number: 1,
    title: "제목이다",
    summary: "ㅇㅇㅇㅇㅇㅇㅇ",
  },
  {
    id: 2,
    number: 2,
    title: "제목이다",
    summary: "ㅇㅇㅇㅇㅇㅇㅇ",
  },
  {
    id: 3,
    number: 4,
    title: "제목이다",
    summary: "ㅇㅇㅇㅇㅇㅇㅇ",
  },
];

function SeriesItem() {
  return (
    <Link href={HREF.post + `${1}`}>
      <Div padding="60px 0">
        <div className={styles.flexRightBottom}>
          <Typograpy size={20} weight={600}>
            {13}. 제목이다
          </Typograpy>
          <Typograpy size={15} weight={500} margin="0 0 0 6px" color="gray100">
            2023.01.03
          </Typograpy>
        </div>
        <Typograpy margin="10px 0 0" size={15} weight={500} color="gray300">
          설명
        </Typograpy>
      </Div>
    </Link>
  );
}

export default function SeriesList() {
  return (
    <>
      {list.map((el) => (
        <SeriesItem key={el.id} />
      ))}
    </>
  );
}
