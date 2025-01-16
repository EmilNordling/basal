"use client";

import cn from "classnames";
import { forwardRef } from "react";
import "./button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../components_primitives/primitive_button.js";
import { SpacingSteps } from "../index.js";

interface Props extends PrimitiveButtonProps {
  size?: SpacingSteps;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  props: Props,
  ref
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
});
