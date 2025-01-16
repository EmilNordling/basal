'use client';

import { css } from '@pigment-css/react';
import { ElementType, forwardRef } from 'react';
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from './polymorphic.js';

type LabelProps<Comp extends ElementType> = PolymorphicComponentPropWithRef<Comp, React.HTMLAttributes<HTMLLabelElement>>;

const styledLabel = css({
  all: 'unset',
  wordBreak: 'break-all',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '35px',
  color: '111',
});

function _Label<Comp extends ElementType = 'label'>(props: LabelProps<Comp>, forwardedRef: PolymorphicRef<Comp>) {
  const Tag = props.as ?? 'label';
  const labelProps = extractExoticProps(props);

  return (
    <Tag
      className={styledLabel}
      ref={forwardedRef}
      onMouseDown={(event) => {
        // only prevent text selection if clicking inside the label itself
        const target = event.target as HTMLElement;
        if (target.closest('button, input, select, textarea')) return;

        props.onMouseDown?.(event);
        // prevent text selection when double clicking label
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }}
      {...labelProps}
    />
  );
}

function extractExoticProps<Comp extends ElementType = 'label'>(props: LabelProps<Comp>) {
  const propsCopy = { ...props };

  // Removes exotic props.
  delete propsCopy.as;

  return propsCopy;
}

const Label = forwardRef(_Label) as typeof _Label;
const Root = Label;

export { Label, Root };
export type { LabelProps };
