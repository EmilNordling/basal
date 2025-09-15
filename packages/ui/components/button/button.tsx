import cn from "classnames";
import { Children, ForwardedRef, Fragment } from "react";
import "./button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../../components_primitives/primitive_button.js";
import { Text, type Polymorphic, type SpacingSteps } from "../../index.js";
import { getResponsiveClassName } from "../../style_primitives/responsive_class_name.js";

export function Button<C extends React.ElementType = "button">(
  props: Button.Props<C>,
  ref: ForwardedRef<C>
) {
  const { className, children } = props;

  const size = props.size ?? Button.SIZE_DEFAULT;

  return (
    <PrimitiveButton
      {...props}
      ref={ref}
      data-size={size}
      data-variant={props.variant ?? Button.VARIANT_DEFAULT}
      data-rounded={props.rounded}
      className={cn(
        Button.PREFIX,
        getResponsiveClassName(size, Button.PREFIX_SIZE_TARGET),
        "outline",
        className
      )}
    >
      {Children.map(children, (x, index) =>
        typeof x === "string" ? (
          <Text key={index} size="inherit" boxTrim>
            {x}
          </Text>
        ) : (
          <Fragment key={index}>{x}</Fragment>
        )
      )}
    </PrimitiveButton>
  );
}

export namespace Button {
  export type Props<C extends React.ElementType> =
    Polymorphic.ComponentPropWithRef<
      C,
      PrimitiveButtonProps<C> & {
        size?: SpacingSteps;
        rounded?: true;
        variant?: Variant;
      }
    >;

  export type Variant = "primary" | "secondary" | "tertiary";

  export const PREFIX = "wox-button";
  export const PREFIX_SIZE_TARGET = PREFIX + "-size-";

  export const VARIANT_DEFAULT = "tertiary" satisfies Variant;
  export const SIZE_DEFAULT = "4" satisfies SpacingSteps;
}
