import Div from "@src/common_component/Div";
import Typograpy from "@src/common_component/Typograpy";
import styles from "@style/index";
import HomeList from "../_component/HomeList";

export default function SeriesCountainer() {
  return (
    <main className={styles.main}>
      <Div>
        <Typograpy size={20} weight="bold" margin="0 0 10px">
          전체 시리즈
        </Typograpy>
      </Div>
      <HomeList />
    </main>
  );
}
