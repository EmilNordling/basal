'use client';

import * as R from '@radix-ui/react-separator';
import { forwardRef } from 'react';
import './separator.css';
import cn from 'classnames';

interface SeparatorRootProps extends R.SeparatorProps {}

function SeparatorRoot(props: SeparatorRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('SeparatorRoot', props.className)} />;
}

export const Separator = {
  Root: forwardRef(SeparatorRoot) as typeof SeparatorRoot,
} as const;
