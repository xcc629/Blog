import * as React from "react";
import styles from "@style/index";

export default function TitleInput() {
  return (
    <div>
      <input type="text" placeholder="제목" className={styles.titleInput} />
    </div>
  );
}
