'use client';

import * as R from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';
import './radio_group.css';
import cn from 'classnames';

interface RadioGroupRootProps extends R.RadioGroupProps {}

function RadioGroupRoot(props: RadioGroupRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('RadioGroupRoot', props.className)} />;
}

interface RadioGroupItemProps extends R.RadioGroupItemProps {}

function RadioGroupItem(props: RadioGroupItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('RadioGroupItem', props.className)} />;
}

interface RadioGroupIndicatorProps extends R.RadioGroupIndicatorProps {}

function RadioGroupIndicator(props: RadioGroupIndicatorProps, _ref: unknown) {
  return <R.Indicator {...props} className={cn('RadioGroupIndicator', props.className)} />;
}

export const RadioGroup = {
  Root: forwardRef(RadioGroupRoot) as typeof RadioGroupRoot,
  Item: forwardRef(RadioGroupItem) as typeof RadioGroupItem,
  Indicator: forwardRef(RadioGroupIndicator) as typeof RadioGroupIndicator,
} as const;
