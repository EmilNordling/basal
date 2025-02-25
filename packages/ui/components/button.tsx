"use client";

import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import "./button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../components_primitives/primitive_button.js";
import {
  type PolymorphicComponentPropWithRef,
  type SpacingSteps,
} from "../index.js";

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    PrimitiveButtonProps<C> & {
      size?: SpacingSteps;
    }
  >;

function ButtonPrimitive<C extends React.ElementType = "button">(
  props: ButtonProps<C>,
  ref: ForwardedRef<C>
) {
  const { className } = props;

  return (
    <PrimitiveButton
      {...props}
      ref={ref}
      data-size={props.size ?? "5"}
      className={cn("wox-button", "outline", className)}
    >
      {props.children}
    </PrimitiveButton>
  );
}

export const Button = forwardRef(ButtonPrimitive) as typeof ButtonPrimitive;
