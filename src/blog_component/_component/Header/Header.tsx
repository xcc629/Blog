import Link from "next/link";
import Typograpy from "../../../common_component/Typograpy";

import * as React from "react";
import Button from "../../../common_component/Button";

import styles from "../../_styles.module.css";

import ArrowIcon from "../../_icon/ArrowIcon";
import { useHandler } from "./_hooks";
import { HREF } from "../../../const";

export default function Header() {
  const { location, isClickCatergory, isClickMenu, onClickCategory } =
    useHandler();

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
          <Link href={HREF.login}>
            <Button
              size={80}
              color="white"
              backgroundColor="green300"
              borderRadius="10px"
              onClick={() => {
                console.log("1");
              }}
            >
              로그인
            </Button>
          </Link>
        </div>
        {isClickMenu && <div className={styles.mobileMenu}></div>}
      </header>
    </>
  );
}
