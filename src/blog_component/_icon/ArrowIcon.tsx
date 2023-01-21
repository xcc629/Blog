import IconDown from "../../assets/Arrow/ArrowDown.svg";
import IconLeft from "../../assets/Arrow/ArrowLeft.svg";
import IconUp from "../../assets/Arrow/ArrowUp.svg";

interface IArrowIconProps {
  direction?: "left" | "down" | "up";
}
export default function ArrowIcon({ direction = "down" }: IArrowIconProps) {
  const switchIcon = {
    left: <IconLeft />,
    down: <IconDown />,
    up: <IconUp />,
  } as const;

  return switchIcon[direction];
}
