import * as React from "react";

import BaseProps from "./_interfaces";
import { themeColor } from "./_theme";

export interface DivProps extends BaseProps {
  styles?: React.CSSProperties;
  margin?: React.CSSProperties["margin"];
  padding?: React.CSSProperties["padding"];
  children: React.ReactNode;
  color?: keyof typeof themeColor & React.CSSProperties["color"];
  backgroundColor?: keyof typeof themeColor;
}

export default function Div({
  styles,
  margin,
  padding,
  backgroundColor,
  ...props
}: DivProps) {
  return (
    <div
      style={{
        margin: margin,
        padding: padding,
        backgroundColor: backgroundColor ? themeColor[backgroundColor] : "",
        ...styles,
      }}
      {...props}
    ></div>
  );
}
