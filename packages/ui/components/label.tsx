"use client";

import { css } from "@pigment-css/react";
import { ElementType, forwardRef } from "react";
import { Field } from "@base-ui-components/react/field";
import type { Polymorphic } from "../components_primitives/polymorphic.js";
import { Text } from "./text/text.js";

type LabelProps<Comp extends ElementType> = Polymorphic.ComponentPropWithRef<
  Comp,
  React.HTMLAttributes<HTMLLabelElement>
>;

function _Label<Comp extends ElementType = typeof Field.Label>(
  props: LabelProps<Comp>,
  forwardedRef: Polymorphic.Ref<Comp>
) {
  const Tag = props.as ?? Field.Label;
  const labelProps = extractExoticProps(props);

  return (
    <Text
      size="small"
      as={Tag}
      ref={forwardedRef}
      onMouseDown={(event) => {
        // only prevent text selection if clicking inside the label itself
        const target = event.target as HTMLElement;
        if (target.closest("button, input, select, textarea")) return;

        props.onMouseDown?.(event as any);
        // prevent text selection when double clicking label
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }}
      {...(labelProps as any)}
    />
  );
}

function extractExoticProps<Comp extends ElementType = "label">(
  props: LabelProps<Comp>
) {
  const propsCopy = { ...props };

  // Removes exotic props.
  delete propsCopy.as;

  return propsCopy;
}

const Label = forwardRef(_Label) as typeof _Label;
const Root = Label;

export { Label, Root };
export type { LabelProps };
