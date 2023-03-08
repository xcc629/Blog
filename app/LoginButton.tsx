"use client";

import styles from "@src/blog_component/_style";
import Typograpy from "@src/common_component/Typograpy";
import { HREF } from "@src/libs/const";
import Link from "next/link";
import * as React from "react";

export default function LoginButton() {
  const [loginBtnState, setLoginBtnState] = React.useState({
    href: HREF.login,
    btnText: "로그인",
  });
  React.useEffect(() => {
    const session = window.sessionStorage.getItem("isAuth");
    const isLogin = process.env.NEXT_PUBLIC_AUTH_KEY === session;

    isLogin &&
      setLoginBtnState((prev) => ({
        ...prev,
        href: HREF.edit,
        btnText: "글쓰기",
      }));
  }, []);

  return (
    <Link href={loginBtnState.href} className={styles.headerLoginButton}>
      <Typograpy size={15}>{loginBtnState.btnText}</Typograpy>
    </Link>
  );
}
