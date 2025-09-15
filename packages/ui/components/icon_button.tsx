import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import "./icon_button.css";
import {
  PrimitiveButton,
  type PrimitiveButtonProps,
} from "../components_primitives/primitive_button.js";
import { type Polymorphic, SpacingSteps } from "../index.js";
import { type IconType, Icon } from "../components_primitives/icon.js";

export type IconButtonProps<C extends React.ElementType> =
  Polymorphic.ComponentPropWithRef<
    C,
    PrimitiveButtonProps<C> & {
      size?: SpacingSteps;
      icon: IconType;
    }
  >;

function Button<C extends React.ElementType = "button">(
  props: IconButtonProps<C>,
  ref: ForwardedRef<C>
) {
  const { className } = props;

  return (
    <PrimitiveButton
      {...props}
      ref={ref}
      data-size={props.size ?? "5"}
      className={cn("wox-icon-button", "hover:fg", className)}
    >
      <Icon type={props.icon} size={14} />
    </PrimitiveButton>
  );
}

export const IconButton = forwardRef(Button) as typeof Button;
