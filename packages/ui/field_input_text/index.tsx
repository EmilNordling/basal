import { Field } from "@base-ui-components/react/field";
import styles from "./index.module.css";
import { InputText, InputTextProps, Label, Text } from "../index.js";
import { useFormCtx } from "../form/form.js";
import { Controller, type RegisterOptions } from "react-hook-form";

interface FieldInputTextProps extends InputTextProps {
  label: string;
  hideLabel?: boolean;
  direction?: "horizontal" | "vertical";
  helpText?: string;
  options?: RegisterOptions;
}

export function FieldInputText(props: FieldInputTextProps) {
  const ctx = useFormCtx();

  const cleanedProps = extractExoticProps(props);

  if (ctx == null || props.name == null) {
    return <InputText {...cleanedProps} />;
  }

  // <div
  //      className="wox-input-container"
  //      data-direction={props.direction ?? "vertical"}
  //    >
  //      {props.hideLabel ? (
  //        <VisuallyHidden>{txt}</VisuallyHidden>
  //      ) : (
  //        <div className="wox-input-container-text">{txt}</div>
  //      )}

  //    </div>

  // const txt = (
  //    <>
  //      <Label htmlFor={id}>{props.label}</Label>
  //      {props.helpText != null ? (
  //        <Text size="regular">{props.helpText}</Text>
  //      ) : null}
  //    </>
  //  );
  //

  return (
    <Controller
      control={ctx.form.control}
      rules={{
        ...props.options,
        onChange: props.onChange,
        onBlur: props.onBlur,
      }}
      name={props.name}
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      render={({ field, fieldState, formState: _formState }) => {
        const invalidText = (
          <Text size="small">
            {fieldState.error?.message || "Invalid input"}
          </Text>
        );
        const helperText = props.helpText ? (
          <Text as={Field.Description} size="small">
            {props.helpText}
          </Text>
        ) : null;

        return (
          <Field.Root
            className={styles.Container}
            data-direction={props.direction ?? "vertical"}
          >
            <Label>{props.label}</Label>

            <InputText
              {...cleanedProps}
              {...field}
              value={field.value ?? ""}
              defaultValue={undefined}
              ref={field.ref}
            />

            {fieldState.invalid ? invalidText : helperText}
          </Field.Root>
        );
      }}
    />
  );
}

function extractExoticProps(props: FieldInputTextProps): InputTextProps {
  const propsCopy = { ...props } as Partial<FieldInputTextProps>;

  // Removes exotic props.
  delete propsCopy.label;
  delete propsCopy.hideLabel;

  return propsCopy;
}
