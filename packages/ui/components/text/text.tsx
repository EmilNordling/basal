"use client";

import { ForwardedRef } from "react";
import cn from "classnames";
import "./text.css";
import { getResponsiveClassName } from "../../style_primitives/responsive_class_name.js";
import type { Polymorphic } from "../../index.js";

export function Text<C extends React.ElementType = "span">(
  props: Text.Props<C>,
  ref: ForwardedRef<C>
) {
  const {
    size = "regular",
    weight,
    color,
    className,
    align,
    writingMode,
    orientation,
    boxTrim,
    ...organicProps
  } = props;
  const C = props.as || "span";

  return (
    <C
      data-align={align}
      data-weight={weight}
      data-orientation={orientation}
      data-writing-mode={writingMode}
      data-box-trim={boxTrim}
      color={color}
      className={cn(
        Text.PREFIX,
        getResponsiveClassName(size, Text.PREFIX_SIZE_TARGET),
        className
      )}
      {...organicProps}
      ref={ref}
    >
      {props.children}
    </C>
  );
}

export namespace Text {
  export const PREFIX = "wox-text";
  export const PREFIX_SIZE_TARGET = PREFIX + "-size-";

  export type FontWeight = "light" | "regular" | "medium" | "bold";

  export type Props<C extends React.ElementType = "span"> =
    Polymorphic.ComponentPropWithRef<
      C,
      {
        size?: getResponsiveClassName.Size<Text.Sizes | "inherit">;
        weight?: FontWeight;
        color?: string;
        boxTrim?: boolean;
        writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr";
        orientation?:
          | "mixed"
          | "upright"
          | "sideways-right"
          | "sideways"
          | "use-glyph-orientation";
      } & React.HTMLAttributes<C>
    >;

  export type Sizes =
    | "title-9"
    | "title-8"
    | "title-7"
    | "title-6"
    | "title-5"
    | "title-4"
    | "title-3"
    | "title-2"
    | "title-1"
    | "large"
    | "regular"
    | "small"
    | "mini"
    | "micro"
    | "tiny";
}
