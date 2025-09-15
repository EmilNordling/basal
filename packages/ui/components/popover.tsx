'use client';

import * as R from '@radix-ui/react-popover';
import { forwardRef } from 'react';
import './popover.css';
import cn from 'classnames';

interface PopoverRootProps extends R.PopoverProps {}

function PopoverRoot(props: PopoverRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface PopoverTriggerProps extends R.PopoverTriggerProps {}

function PopoverTrigger(props: PopoverTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('PopoverTrigger', props.className)} />;
}

interface PopoverPortalProps extends R.PopoverPortalProps {}

function PopoverPortal(props: PopoverPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface PopoverCloseProps extends R.PopoverCloseProps {}

function PopoverClose(props: PopoverCloseProps, _ref: unknown) {
  return <R.Close {...props} className={cn('PopoverClose', props.className)} />;
}

interface PopoverArrowProps extends R.PopoverArrowProps {}

function PopoverArrow(props: PopoverArrowProps, _ref: unknown) {
  return <R.Arrow {...props} className={cn('PopoverArrow', props.className)} />;
}

interface PopoverContentProps extends R.PopoverContentProps {}

function PopoverContent(props: PopoverContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('PopoverContent', props.className)} />;
}

interface PopoverAnchorProps extends R.PopoverAnchorProps {}

function PopoverAnchor(props: PopoverAnchorProps, _ref: unknown) {
  return <R.Anchor {...props} className={cn('PopoverAnchor', props.className)} />;
}

export const Popover = {
  Root: forwardRef(PopoverRoot) as typeof PopoverRoot,
  Trigger: forwardRef(PopoverTrigger) as typeof PopoverTrigger,
  Portal: forwardRef(PopoverPortal) as typeof PopoverPortal,
  Close: forwardRef(PopoverClose) as typeof PopoverClose,
  Arrow: forwardRef(PopoverArrow) as typeof PopoverArrow,
  Content: forwardRef(PopoverContent) as typeof PopoverContent,
  Anchor: forwardRef(PopoverAnchor) as typeof PopoverAnchor,
} as const;
