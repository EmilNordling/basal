"use client";

import cn from "classnames";
import { forwardRef } from "react";
import "./button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../components_primitives/primitive_button.js";
import { SpacingSteps } from "../index.js";

export interface ButtonProps extends PrimitiveButtonProps {
  size?: SpacingSteps;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props: ButtonProps, ref) {
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
);
