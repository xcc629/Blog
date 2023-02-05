import Link from "next/link";

import * as React from "react";

import styles from "@style/index";

import { useHandler } from "./_hooks";
import { HREF } from "@src/libs/const";
import Typograpy from "@src/common_component/Typograpy";
import ArrowIcon from "@src/blog_component/_icon/ArrowIcon";
import Button from "@src/common_component/Button";

export default function Header() {
  const { location, isClickCatergory, isClickMenu, onClickCategory } =
    useHandler();
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
    <>
      <header className={styles.header}>
        <div className={styles.flexRightCenter}>
          <Link href={HREF.origin}>
            <Typograpy size={25} weight={600}>
              XCC629
            </Typograpy>
          </Link>
          <div
            className={`${styles.category} ${styles.flexCenterCenter}`}
            onClick={onClickCategory}
          >
            <Typograpy size={18} margin="0 2px 0 0">
              {location}
            </Typograpy>
            {isClickCatergory ? <ArrowIcon direction="up" /> : <ArrowIcon />}
            {isClickCatergory && (
              <div className={styles.categoryOption}>
                <Link href={HREF.tech}>TECH</Link>
                <Link href={HREF.resume}>RESUME & PORTFOLIO</Link>
              </div>
            )}
          </div>
        </div>

        <div className={styles.pcHeader}>
          <Link href={loginBtnState.href}>
            <Button
              size={80}
              color="white"
              backgroundColor="green300"
              borderRadius="10px"
            >
              {loginBtnState.btnText}
            </Button>
          </Link>
        </div>
        {isClickMenu && <div className={styles.mobileMenu}></div>}
      </header>
    </>
  );
}
