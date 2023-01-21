import Link from "next/link";
import * as React from "react";
import Div from "../../common_component/Div";
import Typograpy from "../../common_component/Typograpy";
import { HREF } from "../../const";
import styles from "../_styles.module.css";

interface itemProps {
  id: number;
  imgScr: string;
  title: string;
  description: string;
}

const list = [
  { id: 1, imgSrc: "", title: "dddd", description: "sdsdsd" },
  { id: 2, imgSrc: "", title: "ddd", description: "dddd" },
  { id: 3, imgSrc: "", title: "ddd", description: "dddd" },
  { id: 4, imgSrc: "", title: "ddd", description: "dddd" },
];

function GridItem({ id, imgScr, title, description }: itemProps) {
  return (
    <Link href={HREF.series + `${id}`}>
      <div className={styles.gridItem}>
        <Div
          backgroundColor="green100"
          styles={{
            width: "100%",
            borderRadius: "8px",
            aspectRatio: "2/1",
          }}
        >
          {}
        </Div>
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
          imgScr={el.imgSrc}
          title={el.title}
          description={el.description}
        />
      ))}
    </div>
  );
}
