"use client";

import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import "./primitive_button.css";
import { Slot } from "@radix-ui/react-slot";
import { type Polymorphic } from "./polymorphic.js";

export type PrimitiveButtonProps<C extends React.ElementType> =
  Polymorphic.ComponentPropWithRef<C, React.ButtonHTMLAttributes<C>>;

function Button<C extends React.ElementType>(
  props: PrimitiveButtonProps<C>,
  ref: ForwardedRef<C>
) {
  const { type = "button", className, as, ...rest } = props;

  const Tag = as;
  const Comp = (props.asChild ? Slot : Tag) ?? ("button" as React.ElementType);

  return (
    <Comp
      type={type}
      {...rest}
      className={cn("wox-button-reset", className)}
      ref={ref}
    >
      {props.children}
    </Comp>
  );
}

export const PrimitiveButton = forwardRef(Button) as typeof Button;
