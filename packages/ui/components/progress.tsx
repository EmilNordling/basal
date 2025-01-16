'use client';

import * as R from '@radix-ui/react-progress';
import { forwardRef } from 'react';
import './progress.css';
import cn from 'classnames';

interface ProgressRootProps extends R.ProgressProps {}

function ProgressRoot(props: ProgressRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('ProgressRoot', props.className)} />;
}

interface ProgressIndicatorProps extends R.ProgressIndicatorProps {}

function ProgressIndicator(props: ProgressIndicatorProps, _ref: unknown) {
  return <R.Indicator {...props} className={cn('ProgressIndicator', props.className)} />;
}

export const Progress = {
  Root: forwardRef(ProgressRoot) as typeof ProgressRoot,
  Indicator: forwardRef(ProgressIndicator) as typeof ProgressIndicator,
} as const;
