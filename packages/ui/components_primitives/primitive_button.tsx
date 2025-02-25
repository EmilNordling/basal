"use client";

import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import "./primitive_button.css";
import { Slot } from "@radix-ui/react-slot";
import { type PolymorphicComponentPropWithRef } from "./polymorphic.js";

export type PrimitiveButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      variant?: "primary" | "secondary" | "tertiary";
    } & React.ButtonHTMLAttributes<C>
  >;

function Button<C extends React.ElementType>(
  props: PrimitiveButtonProps<C>,
  ref: ForwardedRef<C>
) {
  const { type = "button", className } = props;

  const Tag = props.as;
  const Comp = (props.asChild ? Slot : Tag) ?? ("button" as React.ElementType);

  return (
    <Comp
      type={type}
      {...props}
      className={cn("wox-button-reset", className)}
      ref={ref}
    >
      {props.children}
    </Comp>
  );
}

export const PrimitiveButton = forwardRef(Button) as typeof Button;
