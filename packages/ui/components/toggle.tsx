'use client';

import * as R from '@radix-ui/react-toggle';
import { forwardRef } from 'react';
import './toggle.css';
import cn from 'classnames';

interface ToggleRootProps extends R.ToggleProps {}

function ToggleRoot(props: ToggleRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('ToggleRoot', props.className)} />;
}

export const Toggle = {
  Root: forwardRef(ToggleRoot) as typeof ToggleRoot,
} as const;
