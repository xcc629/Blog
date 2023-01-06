import Div from "../../common_component/Div";
import Divider from "../../common_component/Divider";
import Typograpy from "../../common_component/Typograpy";
import SeriesList from "../_component/HomeList";
import HomeProfile from "../_component/HomeProfile";
import styles from "../_styles.module.css";

export default function SeriesCountainer() {
  return (
    <main className={styles.main}>
      <HomeProfile />
      <Div margin="5rem 0 " as="section">
        <Typograpy size={30} weight="600" margin="0 0 25px 0" as="h1">
          전체시리즈
        </Typograpy>
        <Divider size={1} color="gray100" />
        <SeriesList />
      </Div>
    </main>
  );
}
