import Divider from "@src/common_component/Divider";
import Typograpy from "@src/common_component/Typograpy";
import { HREF } from "@src/libs/const";
import Link from "next/link";
import * as React from "react";
import ArrowIcon from "../_icon/ArrowIcon";
import styles from "@style/index";

import { Common } from "@src/libs/common";
import { tPostData } from "pages/api/getPost";

interface IDataProps {
  post: {
    id: number;
    createdAt: Date;
    title: string;
    published: boolean;
    series: { id: number; title: string };
  };
}

export default function PostContainer({ post }: IDataProps) {
  if (!post) return <div>dd</div>;
  return (
    <div className={styles.main}>
      <Link href={HREF.series + `${post.series.id}`}>
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
            {post.series.title}
          </Typograpy>
          <Typograpy size={20} weight={600}>
            {post.title}
          </Typograpy>
        </div>
        <div className={styles.flexRightBottom}>
          <Typograpy size={15} weight={500} color="gray200">
            {Common.getDataString(post.createdAt, ".")}
          </Typograpy>
        </div>
      </div>

      <Divider size={1} color="gray100" />
      <div>본문란</div>
    </div>
  );
}
