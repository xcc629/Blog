import * as React from "react";
import { CSSProperties } from "react";
import { typograpySize, themeColor } from "./theme";

interface TypograyProps {
  size?: 30 | 20 | 25 | 18;
  color?: keyof typeof themeColor;
  padding?: CSSProperties["padding"];
  margin?: CSSProperties["margin"];
  children: React.ReactNode;
}

export default function Typograpy({
  size = 20,
  color,
  padding,
  margin,
  ...props
}: TypograyProps) {
  return (
    <div
      {...props}
      style={{
        fontSize: typograpySize[size].fontSize,
        lineHeight: typograpySize[size].lineHeight,
        color: color ? themeColor[color] : "black",
        padding: padding,
        margin: margin,
      }}
    />
  );
}
