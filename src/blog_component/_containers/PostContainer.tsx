import Link from "next/link";
import * as React from "react";

import Divider from "../../common_component/Divider";
import Typograpy from "../../common_component/Typograpy";
import { HREF } from "../../const";
import ArrowIcon from "../_icon/ArrowIcon";

import styles from "../_styles.module.css";

export default function PostContainer() {
  return (
    <div className={styles.main}>
      <Link href={HREF.series + `${1}`}>
        <nav className={`${styles.flexRightCenter} ${styles.nav}`}>
          <ArrowIcon direction="left" />
          <Typograpy margin="0 0 0 12px" size={15} weight={500}>
            시리즈 전체 보러가기
          </Typograpy>
        </nav>
      </Link>

      <Divider size={1} color="gray100" />
      <div className={`${styles.flexBetween} ${styles.titleWrapper}`}>
        <div>
          <Typograpy size={15} weight={500} color="gray300" margin="0 0 4px 0">
            시리즈 제목
          </Typograpy>
          <Typograpy size={20} weight={600}>
            포스트 제목
          </Typograpy>
        </div>
        <div className={styles.flexRightBottom}>
          <Typograpy size={15} weight={500} color="gray200">
            삭제하기
          </Typograpy>
          <Typograpy size={15} weight={500} color="gray200" margin="0 27px">
            수정하기
          </Typograpy>
          <Typograpy size={15} weight={500} color="gray200">
            2023.01.03
          </Typograpy>
        </div>
      </div>

      <Divider size={1} color="gray100" />
      <div>본문란</div>

      <Divider size={1} color="gray100" />
      <div>
        <div className={`${styles.flexRightCenter} ${styles.nextPreTab}`}>
          <Typograpy size={15} weight={500} color="gray300" margin="0 66px 0 0">
            다음글
          </Typograpy>
          <Typograpy size={18} weight={600}>
            제목이다
          </Typograpy>
        </div>
        <Divider size={1} color="gray100" />
        <div className={`${styles.flexRightCenter} ${styles.nextPreTab}`}>
          <Typograpy size={15} weight={500} color="gray300" margin="0 66px 0 0">
            이전글
          </Typograpy>
          <Typograpy size={18} weight={600}>
            제목이다
          </Typograpy>
        </div>
      </div>
    </div>
  );
}
