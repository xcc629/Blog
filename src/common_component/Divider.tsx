import { themeColor } from "./theme";

interface DividerProps {
  size: number;
  color?: keyof typeof themeColor;
}

export default function Divider({ size = 1, color }: DividerProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: `${size}px`,
        backgroundColor: color ? themeColor[color] : "black",
      }}
    ></div>
  );
}
