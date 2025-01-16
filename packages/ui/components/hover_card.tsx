'use client';

import * as R from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';
import './hover_card.css';
import cn from 'classnames';

interface HoverCardPropsProps extends R.HoverCardProps {}

function HoverCardProps(props: HoverCardPropsProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface HoverCardTriggerProps extends R.HoverCardTriggerProps {}

function HoverCardTrigger(props: HoverCardTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('HoverCardTrigger', props.className)} />;
}

interface HoverCardPortalProps extends R.HoverCardPortalProps {}

function HoverCardPortal(props: HoverCardPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface HoverCardContentProps extends R.HoverCardContentProps {}

function HoverCardContent(props: HoverCardContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('HoverCardContent', props.className)} />;
}

interface HoverCardArrowProps extends R.HoverCardArrowProps {}

function HoverCardArrow(props: HoverCardArrowProps, _ref: unknown) {
  return <R.Arrow {...props} className={cn('HoverCardArrow', props.className)} />;
}

export const HoverCard = {
  Root: forwardRef(HoverCardProps) as typeof HoverCardProps,
  Trigger: forwardRef(HoverCardTrigger) as typeof HoverCardTrigger,
  Portal: forwardRef(HoverCardPortal) as typeof HoverCardPortal,
  Content: forwardRef(HoverCardContent) as typeof HoverCardContent,
  Arrow: forwardRef(HoverCardArrow) as typeof HoverCardArrow,
} as const;
