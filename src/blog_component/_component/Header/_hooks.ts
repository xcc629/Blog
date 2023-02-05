import { HREF } from "@src/libs/const";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useHandler() {
  const path = useRouter().pathname;
  const [location, setLocation] = useState("카테고리");
  const [isClickCatergory, setIsClickCatergory] = useState(false);
  const [isClickMenu, setIsClickMenu] = useState(false);

  const locationSwtich = () => {
    if (path.match("tech")) return setLocation("Tech");
    if (path.match("resume")) return setLocation("R & P");

    return setLocation("카테고리");
  };

  useEffect(() => {
    locationSwtich();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const onClickCategory = () => {
    setIsClickCatergory((p) => !p);
  };

  return {
    location,
    isClickCatergory,
    isClickMenu,
    onClickCategory,
  };
}

export { useHandler };
