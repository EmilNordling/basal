import cn from "classnames";
import { Children, ForwardedRef, Fragment, forwardRef } from "react";
import "./button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../components_primitives/primitive_button.js";
import { Text, type Polymorphic, type SpacingSteps } from "../index.js";
import { getResponsiveClassName } from "../style_primitives/responsive_class_name.js";

function ButtonPrimitive<C extends React.ElementType = "button">(
  props: ButtonProps<C>,
  ref: ForwardedRef<C>
) {
  const { className, children } = props;

  const size = props.size ?? SIZE_DEFAULT;

  return (
    <PrimitiveButton
      {...props}
      ref={ref}
      data-size={size}
      data-variant={props.variant ?? VARIANT_DEFAULT}
      data-rounded={props.rounded}
      className={cn(
        PREFIX,
        getResponsiveClassName(size, PREFIX_SIZE_TARGET),
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

export type ButtonProps<C extends React.ElementType> =
  Polymorphic.ComponentPropWithRef<
    C,
    PrimitiveButtonProps<C> & {
      size?: SpacingSteps;
      rounded?: true;
      variant?: Variant;
    }
  >;

type Variant = "primary" | "secondary" | "tertiary";

const PREFIX = "wox-button";
const PREFIX_SIZE_TARGET = PREFIX + "-size-";

const VARIANT_DEFAULT = "tertiary" satisfies Variant;
const SIZE_DEFAULT = "4" satisfies SpacingSteps;

export const Button = forwardRef(ButtonPrimitive) as typeof ButtonPrimitive;
