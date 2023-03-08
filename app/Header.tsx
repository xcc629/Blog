import { HREF } from "@src/libs/const";
import Link from "next/link";
import * as React from "react";
import styles from "@style/index";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={HREF.origin}>
        <div className={styles.headerCategory}>Blog</div>
      </Link>
      <LoginButton />
    </div>
  );
}
