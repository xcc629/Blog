import dynamic from "next/dynamic";
import * as React from "react";
import Div from "../../common_component/Div";
import TitleInput from "../_component/TitleInput";
import styles from "../_styles.module.css";

const WEditor = dynamic(() => import("../_component/WEditor"), {
  ssr: false,
});

export default function WEditorContainer() {
  return (
    <div className={styles.main}>
      <Div padding="0 0 10px">
        <TitleInput />
      </Div>
      <WEditor />
    </div>
  );
}
