"use client";

import { forwardRef } from "react";
import cn from "classnames";
import type { SpacingSteps } from "../index.js";
import "./text.css";

type FontWeight = "light" | "regular" | "medium" | "bold";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpacingSteps;
  weight?: FontWeight;
  color?: string;
  align?: "center";
  writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr";
  orientation?:
    | "mixed"
    | "upright"
    | "sideways-right"
    | "sideways"
    | "use-glyph-orientation";
}

export const Text = forwardRef<HTMLButtonElement, Props>(function Text(
  props: Props,
  ref
) {
  const {
    size,
    weight,
    color,
    className,
    align,
    writingMode,
    orientation,
    ...rest
  } = props;
  const Comp = "span";

  return (
    <Comp
      {...rest}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-orientation={orientation}
      data-writing-mode={writingMode}
      color={color}
      className={cn("wox-text", className)}
      ref={ref}
    >
      {props.children}
    </Comp>
  );
});
