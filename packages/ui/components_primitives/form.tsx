import { PropsWithChildren } from "react";
import { css } from "@pigment-css/react";
import { Injectable } from "@wox-team/wox-inject";

const styledForm = css({
  display: "contents",
});

function FormRoot(
  props: PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>
) {
  return (
    <form className={styledForm} {...props}>
      {props.children}
    </form>
  );
}

export const Form = {
  Root: FormRoot,
};
