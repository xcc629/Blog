import Link from "next/link";
import * as React from "react";

import styles from "@style/index";
import { HREF } from "@src/const";
import Div from "@src/common_component/Div";
import Typograpy from "@src/common_component/Typograpy";

interface itemProps {
  id: number;
  title: string;
  description: string;
}

const list = [
  { id: 1, imgSrc: "", title: "dddd", description: "sdsdsd" },
  { id: 2, imgSrc: "", title: "ddd", description: "dddd" },
  { id: 3, imgSrc: "", title: "ddd", description: "dddd" },
  { id: 4, imgSrc: "", title: "ddd", description: "dddd" },
];

function GridItem({ id, title, description }: itemProps) {
  return (
    <Link href={HREF.series + `${id}`}>
      <div className={styles.gridItem}>
        <Div>
          <Typograpy margin="10px 0 8px" size={25} weight={600}>
            {title}
          </Typograpy>
          <Typograpy size={15} weight={500} color="gray200">
            {description}
          </Typograpy>
        </Div>
      </div>
    </Link>
  );
}

export default function HomeList() {
  return (
    <div className={styles.gridWrapper}>
      {list.map((el) => (
        <GridItem
          id={el.id}
          key={el.id}
          title={el.title}
          description={el.description}
        />
      ))}
    </div>
  );
}
