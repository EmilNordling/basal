'use client';

import * as R from '@radix-ui/react-toggle-group';
import { forwardRef } from 'react';
import './toggle_group.css';
import cn from 'classnames';

type ToggleGroupRootProps = R.ToggleGroupSingleProps | R.ToggleGroupMultipleProps;

function ToggleGroupRoot(props: ToggleGroupRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('ToggleGroupRoot', props.className)} />;
}

interface ToggleGroupItemProps extends R.ToggleGroupItemProps {}

function ToggleGroupItem(props: ToggleGroupItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('ToggleGroupItem', props.className)} />;
}

export const ToggleGroup = {
  Root: forwardRef(ToggleGroupRoot) as typeof ToggleGroupRoot,
  Item: forwardRef(ToggleGroupItem) as typeof ToggleGroupItem,
} as const;
