import * as React from "react";
import Button from "../../common_component/Button";
import Divider from "../../common_component/Divider";
import Typograpy from "../../common_component/Typograpy";
import styles from "../_styles.module.css";

export default function WEHeader() {
  return (
    <div className={styles.stikyHeader}>
      <div>
        <Button
          size={80}
          onClick={() => console.log()}
          backgroundColor="green300"
          borderRadius="8px"
        >
          <Typograpy size={15} color="white">
            제출하기
          </Typograpy>
        </Button>
      </div>
    </div>
  );
}
