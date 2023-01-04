import * as React from "react";
import { CSSProperties } from "styled-components";
import { themeColor } from "./theme";
import Typograpy from "./Typograpy";

interface ButtonProps {
  size: 486 | 125;
  backgroundColor?: keyof typeof themeColor;
  color?: keyof typeof themeColor;
  border?: CSSProperties["border"];
  borderRadius?: CSSProperties["borderRadius"];
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

export default function Button({
  size,
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
        height: "66px",
        border: border || "none",
        borderRadius: borderRadius,
        backgroundColor: backgroundColor
          ? themeColor[backgroundColor]
          : "white",
        outline: "none",
      }}
      onClick={onClick}
    >
      <Typograpy {...typograpyProps} size={20} />
    </button>
  );
}
