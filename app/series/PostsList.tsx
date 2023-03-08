import Div from "@src/common_component/Div";
import Typograpy from "@src/common_component/Typograpy";
import { HREF } from "@src/libs/const";
import Link from "next/link";
import { useMemo } from "react";

import styles from "@style/index";
import { Common } from "@src/libs/common";

interface IDataItemProps {
  id: number;
  createdAt: Date;
  title: string;
  published: boolean;
  authorId: number;
  seriesId: number;
}

interface IItemProps {
  id: number;
  count: number;
  title: string;
  date: Date;
  description: string;
}

function SeriesItem({ id, count, title, date, description }: IItemProps) {
  return (
    <Link href={HREF.post + `${id}`}>
      <Div padding="40px 0 0">
        <div className={styles.flexRightBottom}>
          <Typograpy size={20} weight={600}>
            {count}. {title}
          </Typograpy>
          <Typograpy size={15} weight={500} margin="0 0 0 6px" color="gray100">
            {Common.getDataString(date, ".")}
          </Typograpy>
        </div>
        <Typograpy margin="10px 0 0" size={15} weight={500} color="gray300">
          {description}
        </Typograpy>
      </Div>
    </Link>
  );
}

export default function PostsList({ list }: { list: IDataItemProps[] }) {
  return useMemo(
    () => (
      <>
        {list.map((el, idx) => (
          <SeriesItem
            key={el.id}
            id={el.id}
            count={idx}
            title={el.title}
            date={el.createdAt}
            description={"111"}
          />
        ))}
      </>
    ),
    [list]
  );
}
