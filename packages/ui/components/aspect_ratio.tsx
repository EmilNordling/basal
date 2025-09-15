'use client';

import * as R from '@radix-ui/react-aspect-ratio';
import { forwardRef } from 'react';
import './aspect_ratio.css';
import cn from 'classnames';

interface AspectRatioRootProps extends R.AspectRatioProps {}

function AspectRatioRoot(props: AspectRatioRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('AspectRatioRoot', props.className)} />;
}

export const AspectRatio = {
  Root: forwardRef(AspectRatioRoot) as typeof AspectRatioRoot,
} as const;
