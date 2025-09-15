'use client';

import * as R from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';
import './check_box.css';
import cn from 'classnames';

interface CheckboxRootProps extends R.CheckboxProps {}

function CheckboxRoot(props: CheckboxRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('CheckboxRoot', props.className)} />;
}

interface CheckboxIndicatorProps extends R.CheckboxIndicatorProps {}

function CheckboxIndicator(props: CheckboxIndicatorProps, _ref: unknown) {
  return <R.Indicator {...props} className={cn('CheckboxIndicator', props.className)} />;
}

export const Checkbox = {
  Root: forwardRef(CheckboxRoot) as typeof CheckboxRoot,
  Indicator: forwardRef(CheckboxIndicator) as typeof CheckboxIndicator,
} as const;
