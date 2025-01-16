"use client";

import cn from "classnames";
import { forwardRef } from "react";
import "./primitive_button.css";

export interface PrimitiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export const PrimitiveButton = forwardRef<
  HTMLButtonElement,
  PrimitiveButtonProps
>(function PrimitiveButton(props: PrimitiveButtonProps, ref) {
  const { type = "button", className } = props;

  const C = "button";

  return (
    <C
      type={type}
      {...props}
      className={cn("wox-button-reset", className)}
      ref={ref}
    >
      {props.children}
    </C>
  );
});
