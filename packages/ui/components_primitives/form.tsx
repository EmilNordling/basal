import { PropsWithChildren } from "react";
import { css } from "@pigment-css/react";
import { Injectable } from "@wox-team/wox-inject";
import { Button, ButtonProps } from "../index.js";

const styledForm = css({
  display: "contents",
});

function FormRoot(
  props: PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>
) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    props.onSubmit?.(event);
  }

  return (
    <form className={styledForm} {...props} onSubmit={handleSubmit} noValidate>
      {props.children}
    </form>
  );
}

function FormButton(props: ButtonProps) {
  return (
    <Button {...props} type="submit">
      {props.children}
    </Button>
  );
}

export const Form = {
  Root: FormRoot,
  Button: FormButton,
};
