import { forwardRef, ForwardedRef, useId } from "react";
import { css } from "@pigment-css/react";
import { Label } from "./label.js";
import { VisuallyHidden } from "./visually_hidden.js";
import "./input_text.css";
import { Text } from "./text.js";

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ExoticProps {}

interface ExoticProps {
  label: string;
  hideLabel?: boolean;
  direction?: "column" | "row";
  helpText?: string;
  variant?: "default" | "ghost";
}

export const InputText = forwardRef(function InputText(
  props: InputTextProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const id = useId();
  const sanitiesProps = extractExoticProps(props);

  const txt = (
    <>
      <Label htmlFor={id}>{props.label}</Label>
      {props.helpText != null ? (
        <Text size="regular">{props.helpText}</Text>
      ) : null}
    </>
  );

  return (
    <div
      className="wox-input-container"
      data-direction={props.direction ?? "vertical"}
    >
      {props.hideLabel ? (
        <VisuallyHidden>{txt}</VisuallyHidden>
      ) : (
        <div className="wox-input-container-text">{txt}</div>
      )}

      <Input
        {...sanitiesProps}
        id={id}
        ref={forwardedRef}
        data-variant={props.variant}
      />
    </div>
  );
});

function extractExoticProps(
  props: InputTextProps
): React.HTMLAttributes<HTMLInputElement> {
  const propsCopy = { ...props } as Partial<InputTextProps>;

  // Removes exotic props.
  delete propsCopy.label;
  delete propsCopy.hideLabel;

  return propsCopy;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(function Input(
  props: InputProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  return <input {...props} className="wox-input" ref={forwardedRef} />;
});
