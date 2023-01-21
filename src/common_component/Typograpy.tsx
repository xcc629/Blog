import * as React from "react";
import { CSSProperties } from "react";
import { DivProps } from "./Div";
import { typograpySize, themeColor } from "./_theme";

interface TypograyProps extends DivProps {
  size?: 30 | 20 | 25 | 18 | 15;
  weight?: CSSProperties["fontWeight"];
}

/**
 *
 * white: "#FFFFFF",
 *
 * gray100: "#DDDDDD",
 * gray200: "#C7C7C7",
 * gray300: "#8C8C8C",
 *
 * green100: "#D3E1DA",
 * green200: "#515F5E",
 * green300: "#515F5E",
 *
 */

export default function Typograpy({
  size = 20,
  color,
  padding,
  margin,
  weight = "400",
  styles,
  ...props
}: TypograyProps) {
  return (
    <div
      {...props}
      style={{
        fontSize: typograpySize[size].fontSize,
        lineHeight: typograpySize[size].lineHeight,
        color: color ? themeColor[color] : "black",
        fontWeight: weight,
        padding: padding,
        margin: margin,
        ...styles,
      }}
    />
  );
}
