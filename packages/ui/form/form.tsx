// import { utils } from "@base-ui-components/react";
import { Form as FormBUI } from "@base-ui-components/react/form";
import { createContext, useContext } from "react";
import { Button, type ButtonProps } from "../index.js";
import styles from "./index.module.css";
import cn from "classnames";
import {
  type UseFormProps,
  type UseFormReturn,
  useForm,
} from "react-hook-form";

export interface FormContextValue {
  readonly form: UseFormReturn;
  readonly options: UseFormProps;
}

export const formCtx = createContext<FormContextValue | null>(null);

export interface FormRootProps extends FormBUI.Props {
  options?: UseFormProps;
}

export function useFormCtx() {
  return useContext(formCtx);
}

// type ArgumentTypes<F extends (...args: any) => unknown> = F extends (
//   ...args: infer A
// ) => any
//   ? A
//   : never;
// type FormBUIOnSubmitType = ArgumentTypes<
//   NonNullable<FormBUI.Props["onSubmit"]>
// >[0];

export function FormRoot(props: FormRootProps) {
  const control = useForm(props.options);

  async function handleSubmit(event: Record<string, string>) {
    props.onSubmit?.(event as any);
  }

  return (
    <formCtx.Provider
      value={{
        form: control,
        options: props.options ?? {},
      }}
    >
      <form
        {...props}
        noValidate
        className={cn(styles.Form, props.className)}
        onSubmit={(event) => {
          event.preventDefault();

          control.handleSubmit(handleSubmit)(event);
        }}
      />
    </formCtx.Provider>
  );
}

export interface FormButtonProps extends ButtonProps<"button"> {}

export function FormButton(props: FormButtonProps) {
  return <Button {...props} type="submit" />;
}
