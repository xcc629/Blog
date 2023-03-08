import * as React from "react";
import styles from "@src/blog_component/_style";
import Typograpy from "@src/common_component/Typograpy";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinkWrapper}>
        <Link href="https://github.com/xcc629" className={styles.footerLink}>
          <div color="white100">Github</div>
        </Link>
        <div color="white100" className={styles.footernonlink}>
          |
        </div>
        <Link href={""} className={styles.footerLink}>
          <div color="white100">이력서</div>
        </Link>
      </div>
      <div>Copyright c 2023 GeunhongLim</div>
    </div>
  );
}
