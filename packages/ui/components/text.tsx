"use client";

import { ForwardedRef, forwardRef } from "react";
import cn from "classnames";
import "./text.css";
import {
  ResponsiveSize,
  getResponsiveClassName,
} from "../style_primitives/responsive_class_name.js";
import type { PolymorphicComponentPropWithRef } from "../index.js";

type FontWeight = "light" | "regular" | "medium" | "bold";

type Props<C extends React.ElementType = "span"> =
  PolymorphicComponentPropWithRef<
    C,
    {
      size?: ResponsiveSize<Sizes | "inherit">;
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

function TextPrimitive<C extends React.ElementType = "span">(
  props: Props<C>,
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
        PREFIX,
        getResponsiveClassName(size, PREFIX_SIZE_TARGET),
        className
      )}
      {...organicProps}
      ref={ref}
    >
      {props.children}
    </C>
  );
}

export const Text = forwardRef(TextPrimitive) as typeof TextPrimitive;

const PREFIX = "wox-text";
const PREFIX_SIZE_TARGET = PREFIX + "-size-";

type Sizes =
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
