import Image from "next/image";
import Link from "next/link";
import Div from "../../common_component/Div";
import Typograpy from "../../common_component/Typograpy";
import { themeColor } from "../../common_component/_theme";

import styles from "../_styles.module.css";

export default function HomeProfile() {
  const list = [
    {
      id: 1,
      title: "이것이개발이다",
      postCount: 4,
    },
    {
      id: 2,
      title: "이것이개발이다",
      postCount: 2,
    },
    { id: 3, title: "이것이개발이다", postCount: 1 },
  ];

  return (
    <Div>
      <Typograpy size={30} weight="600" padding="0 0 16px 0">
        Limgeunhong
      </Typograpy>
      <Div>
        <Typograpy
          size={18}
          color="green300"
          weight="500"
          padding="0 0 12px 0"
          styles={{ cursor: "pointer" }}
        >
          Github.https://github.com/xcc629
        </Typograpy>
        <Typograpy size={18} color="green300" weight="500" padding="0 0 12px 0">
          Email.seelime11@gmail.com
        </Typograpy>
        <Typograpy size={18} color="green300" weight="500" padding="0 0 12px 0">
          이력서.seelime11@gmail.com
        </Typograpy>
      </Div>
    </Div>
  );
}
