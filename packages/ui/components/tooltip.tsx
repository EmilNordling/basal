'use client';

import * as R from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';
import './tooltip.css';
import cn from 'classnames';

interface TooltipRootProps extends R.TooltipProps {}

function TooltipRoot(props: TooltipRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

function TooltipProvider(props: R.TooltipProviderProps) {
  return <R.Provider {...props} />;
}

function TooltipTrigger(props: R.TooltipTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('TooltipTrigger', props.className)} />;
}

function TooltipPortal(props: R.TooltipPortalProps) {
  return <R.Portal {...props} />;
}

function TooltipContent(props: R.TooltipContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('TooltipContent', props.className)} />;
}

function TooltipArrow(props: R.TooltipArrowProps) {
  return <R.Arrow {...props} className={cn('TooltipArrow', props.className)} />;
}

export const Tooltip = {
  Provider: forwardRef(TooltipProvider) as typeof TooltipProvider,
  Root: forwardRef(TooltipRoot) as typeof TooltipRoot,
  Trigger: forwardRef(TooltipTrigger) as typeof TooltipTrigger,
  Portal: forwardRef(TooltipPortal) as typeof TooltipPortal,
  Content: forwardRef(TooltipContent) as typeof TooltipContent,
  Arrow: forwardRef(TooltipArrow) as typeof TooltipArrow,
} as const;
