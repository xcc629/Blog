import * as React from "react";

import styles from "../_styles.module.css";

export default function TitleInput() {
  return (
    <div>
      <input type="text" placeholder="제목" className={styles.titleInput} />
    </div>
  );
}
