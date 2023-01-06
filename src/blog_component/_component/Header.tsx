import Link from "next/link";
import Typograpy from "../../common_component/Typograpy";

import * as React from "react";
import Button from "../../common_component/Button";

import styles from "../_styles.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <Typograpy size={30} weight={600}>
            XCC629
          </Typograpy>
        </Link>
        <Button
          size={125}
          color="white"
          backgroundColor="green300"
          borderRadius="10px"
          onClick={() => {
            console.log("1");
          }}
        >
          로그인
        </Button>
      </header>
    </>
  );
}
