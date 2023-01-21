import Div from "../../common_component/Div";
import Divider from "../../common_component/Divider";
import Typograpy from "../../common_component/Typograpy";
import SeriesList from "../_component/HomeList";

import styles from "../_styles.module.css";

export default function SeriesCountainer() {
  return (
    <main className={styles.main}>
      <Div>
        <Typograpy size={20} weight="bold" margin="0 0 10px">
          전체 시리즈
        </Typograpy>
      </Div>
      <SeriesList />
    </main>
  );
}
