import Button from "@src/common_component/Button";
import Typograpy from "@src/common_component/Typograpy";
import * as React from "react";
import styles from "@style/index";

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
