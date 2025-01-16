'use client';

import * as R from '@radix-ui/react-switch';
import { forwardRef } from 'react';
import './switch.css';
import cn from 'classnames';

interface SwitchRootProps extends R.SwitchProps {}

function SwitchRoot(props: SwitchRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('SwitchRoot', props.className)} />;
}

interface SwitchThumbProps extends R.SwitchThumbProps {}

function SwitchThumb(props: SwitchThumbProps, _ref: unknown) {
  return <R.Thumb {...props} className={cn('SwitchThumb', props.className)} />;
}

export const Switch = {
  Root: forwardRef(SwitchRoot) as typeof SwitchRoot,
  Thumb: forwardRef(SwitchThumb) as typeof SwitchThumb,
} as const;
