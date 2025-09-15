import { PropsWithChildren, forwardRef } from "react";
import { css } from "@pigment-css/react";
import { Button, ButtonProps } from "../index.js";

const styledForm = css({
  display: "contents",
});

function FormRoot(
  props: PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>,
  ref: React.Ref<HTMLFormElement>
) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    props.onSubmit?.(event);
  }

  return (
    <form
      className={styledForm}
      {...props}
      ref={ref}
      onSubmit={handleSubmit}
      noValidate
    >
      {props.children}
    </form>
  );
}

function FormButton<C extends React.ElementType>(props: ButtonProps<C>) {
  return (
    <Button {...props} type="submit">
      {props.children}
    </Button>
  );
}

export const Form = {
  Root: forwardRef(FormRoot),
  Button: FormButton,
};
