import { forwardRef, ForwardedRef } from "react";
import { Input as InputBUI } from "@base-ui-components/react/input";
import "./input_text.css";

export interface InputTextProps extends InputBUI.Props, ExoticProps {}

interface ExoticProps {
  variant?: "default" | "ghost";
}

export const InputText = forwardRef(function InputText(
  props: InputTextProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return (
    <InputBUI
      {...extractExoticProps(props)}
      className="wox-input"
      data-variant={props.variant}
      ref={forwardedRef}
    />
  );
});

function extractExoticProps(props: InputTextProps): InputBUI.Props {
  const propsCopy = { ...props } as Partial<InputTextProps>;

  // Removes exotic props.
  delete propsCopy.variant;

  return propsCopy;
}
