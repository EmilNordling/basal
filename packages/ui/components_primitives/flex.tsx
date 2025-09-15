"use client";

import * as React from "react";
import classNames from "classnames";
import { Slot } from "./slot.js";
import { Injectable, useResolve } from "@wox-team/wox-inject";
import type { SpacingSteps } from "../style_primitives/spacing.types.js";
import type { Colors } from "../style_primitives/colors.types.js";
import { Polymorphic } from "./polymorphic.js";

type FlexProps<C extends React.ElementType> = Polymorphic.ComponentPropWithRef<
  C,
  CommonFlexProps &
    ExoticFlexProps &
    FlexAsChildProps &
    React.HTMLAttributes<HTMLDivElement>
>;

function FlexPrimitive<C extends React.ElementType = "div">(
  props: FlexProps<C>,
  forwardedRef: Polymorphic.Ref<C>
) {
  const store = useResolve(DynamicCss);

  const ownProps = extractExoticClassNames(props, store);

  const classNameKey = "className";
  const className = ownProps.get(classNameKey);
  if (className != null) ownProps.delete(classNameKey);

  const asChildKey = "asChild";
  const asChild = ownProps.get(asChildKey);
  if (asChild != null) ownProps.delete(asChildKey);

  const asKey = "as";
  const Tag = ownProps.get(asKey);
  if (Tag != null) ownProps.delete(asKey);

  const Comp = (asChild ? Slot : Tag) ?? "div";

  return (
    <Comp
      ref={forwardedRef}
      className={className}
      {...Object.fromEntries(ownProps)}
    />
  );
}
const Flex = React.forwardRef(FlexPrimitive) as typeof FlexPrimitive;

function extractExoticClassNames(props: FlexProps<any>, store: DynamicCss) {
  const propsCopy = new Map(Object.entries(props));

  // Removes exotic props.
  propsCopy.delete("direction");
  propsCopy.delete("justify");
  propsCopy.delete("align");
  propsCopy.delete("wrap");
  propsCopy.delete("grow");
  propsCopy.delete("shrink");
  propsCopy.delete("height");
  propsCopy.delete("h");
  propsCopy.delete("width");
  propsCopy.delete("w");
  propsCopy.delete("bg");
  propsCopy.delete("background");
  propsCopy.delete("color");
  propsCopy.delete("gap");
  propsCopy.delete("p");
  propsCopy.delete("py");
  propsCopy.delete("px");
  propsCopy.delete("pt");
  propsCopy.delete("pl");
  propsCopy.delete("pb");
  propsCopy.delete("m");
  propsCopy.delete("my");
  propsCopy.delete("mx");
  propsCopy.delete("mt");
  propsCopy.delete("ml");
  propsCopy.delete("mb");
  propsCopy.delete("o");
  propsCopy.delete("cr");
  propsCopy.delete("b");

  propsCopy.set(
    "className",
    classNames(
      "wox-flex",
      props.className,
      props.direction != null ? `direction-${props.direction}` : null,
      props.justify != null ? `justify-${props.justify}` : null,
      props.align != null ? `align-${props.align}` : null,
      props.wrap != null ? `wrap-${props.wrap}` : null,
      props.b != null ? parseBasis("b", "flex-basis", props.b, store) : null,
      props.grow != null ? `grow-${parseBinaryValue(props.grow)}` : null,
      props.shrink != null ? `shrink-${parseBinaryValue(props.shrink)}` : null,
      props.height != null
        ? parseNumber("h", "height", props.height, store)
        : null,
      props.h != null ? parseNumber("h", "height", props.h, store) : null,
      props.width != null
        ? parseNumber("w", "width", props.width, store)
        : null,
      props.w != null ? parseNumber("w", "width", props.w, store) : null,
      props.bg != null ? parseColor(props.bg, store) : null,
      props.background != null ? parseColor(props.background, store) : null,
      props.color != null ? parseColor(props.color, store) : null,
      props.gap != null ? parseNumber("gap", "gap", props.gap, store) : null,
      props.p != null ? parseNumber("p", "padding", props.p, store) : null,
      props.py != null ? `py-${props.py}` : null,
      props.px != null ? `px-${props.px}` : null,
      props.pt != null ? `pt-${props.pt}` : null,
      props.pl != null ? `pl-${props.pl}` : null,
      props.pb != null ? `pb-${props.pb}` : null,
      props.pr != null ? `pr-${props.pr}` : null,
      props.m != null ? parseNumber("m", "margin", props.m, store) : null,
      props.my != null ? `my-${props.my}` : null,
      props.mx != null ? `mx-${props.mx}` : null,
      props.mt != null
        ? parseNumber("mt", "margin-top", props.mt, store)
        : null,
      props.ml != null ? `ml-${props.ml}` : null,
      props.mb != null ? `mb-${props.mb}` : null,
      props.mr != null ? `mr-${props.mr}` : null,
      props.o != null ? "o" : null,
      props.cr != null ? `cr-${props.cr}` : null
    )
  );

  return propsCopy;
}

function parseColor(value: Colors, store: DynamicCss): string {
  const key = `dyn-c-${value.toString()}`;
  const v = "var(--" + value + ")";

  store.registerValue(key, v, "background-color");

  return key;
}

function parseBinaryValue(value: BinaryValue): string {
  if (value === "1") return "1";
  if (value === "0") return "0";

  return value ? "1" : "0";
}

function parseBasis(
  prefix: string,
  cssProperty: string,
  value: string | number,
  store: DynamicCss
): string {
  const key = `dyn-${prefix}-${value.toString()}`;

  store.registerValue(key, value.toString() + "%", cssProperty);

  return key;
}

function parseNumber(
  prefix: string,
  cssProperty: string,
  value: string | number,
  store: DynamicCss
): string {
  if (typeof value === "number") {
    const key = `dyn-${prefix}-${value.toString()}`;

    store.registerValue(key, value.toString() + "px", cssProperty);

    return key;
  }

  if (value === "full" || value === "100%") return `${prefix}-full`;

  if (value.includes("%")) {
    return `${prefix}-${value}`.replace("%", "");
  }

  return `${prefix}-${value}`;
}

interface CommonFlexProps {
  className?: string;
  children?: React.ReactNode;
}

type BinaryValue = "0" | "1" | boolean;

interface ExoticFlexProps {
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  b?: `${number}` | `${number}%`;
  grow?: BinaryValue;
  shrink?: BinaryValue;
  bg?: Colors;
  background?: Colors;
  color?: Colors;
  height?: SpacingSteps | "100%" | "full" | number;
  h?: SpacingSteps | "100%" | "full" | number;
  width?: SpacingSteps | "100%" | "full" | number;
  w?: SpacingSteps | "100%" | "full" | number;
  gap?: SpacingSteps | number;
  p?: SpacingSteps | number;
  py?: SpacingSteps | "auto" | number;
  px?: SpacingSteps | "auto" | number;
  pt?: SpacingSteps | number;
  pl?: SpacingSteps | number;
  pb?: SpacingSteps | number;
  pr?: SpacingSteps | number;
  m?: SpacingSteps | number;
  my?: SpacingSteps | "auto" | number;
  mx?: SpacingSteps | "auto" | number;
  mt?: SpacingSteps | number;
  ml?: SpacingSteps | number;
  mb?: SpacingSteps | number;
  mr?: SpacingSteps | number;
  o?: boolean;
  cr?: SpacingSteps;
}

type FlexAsChildProps = { asChild?: true };

export { Flex };
export type { FlexProps, CommonFlexProps, FlexAsChildProps };

@Injectable()
class DynamicCss {
  private static id = "wox-dyn-css";

  private insertIndex = 0;
  private readonly insertedRules = new Set<string>();

  private styleElement: HTMLStyleElement | null = null;

  registerValue(key: string, cssValue: string, cssProperty: string) {
    const element = this.create();

    if (this.insertedRules.has(key)) return;

    const rule = `.${key} { ${cssProperty}: ${cssValue}; }`;
    const sheet = element.sheet;

    sheet?.insertRule(rule, this.insertIndex++);

    this.insertedRules.add(key);
  }

  create() {
    if (this.styleElement != null) return this.styleElement;

    const styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(""));
    styleElement.type = "text/css";
    styleElement.setAttribute("id", DynamicCss.id);
    document.head.appendChild(styleElement);

    this.styleElement = styleElement;

    return this.styleElement;
  }
}
