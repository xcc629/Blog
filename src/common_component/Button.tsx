import * as React from "react";
import { themeColor } from "./_theme";
import Typograpy from "./Typograpy";
import { CSSProperties } from "react";

interface ButtonProps {
  size: number;
  height?: string;
  backgroundColor?: keyof typeof themeColor;
  color?: keyof typeof themeColor;
  border?: CSSProperties["border"];
  borderRadius?: CSSProperties["borderRadius"];
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

export default function Button({
  size,
  height = "35px",
  backgroundColor,
  border,
  borderRadius,
  onClick,
  ...typograpyProps
}: ButtonProps) {
  return (
    <button
      style={{
        width: `${size}px`,
        height: height,
        border: border || "none",
        borderRadius: borderRadius,
        backgroundColor: backgroundColor
          ? themeColor[backgroundColor]
          : "white",
        outline: "none",
      }}
      onClick={onClick}
    >
      <Typograpy {...typograpyProps} size={15} />
    </button>
  );
}
