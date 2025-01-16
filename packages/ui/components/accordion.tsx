'use client';

import * as R from '@radix-ui/react-accordion';
import { forwardRef } from 'react';
import './accordion.css';
import cn from 'classnames';

interface AccordionSinglePropsProps extends R.AccordionSingleProps {}
interface AccordionMultiplePropsProps extends R.AccordionMultipleProps {}

function AccordionRoot(props: AccordionSinglePropsProps | AccordionMultiplePropsProps, _ref: unknown) {
  return <R.Root {...props} className={cn('AccordionRoot', props.className)} />;
}

interface AccordionTriggerProps extends R.AccordionTriggerProps {}

function AccordionTrigger(props: AccordionTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('AccordionTrigger', props.className)} />;
}

interface AccordionItemProps extends R.AccordionItemProps {}

function AccordionItem(props: AccordionItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('AccordionItem', props.className)} />;
}

interface AccordionContentProps extends R.AccordionContentProps {}

function AccordionContent(props: AccordionContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('AccordionContent', props.className)} />;
}

interface AccordionHeaderProps extends R.AccordionHeaderProps {}

function AccordionHeader(props: AccordionHeaderProps, _ref: unknown) {
  return <R.Header {...props} className={cn('AccordionHeader', props.className)} />;
}

export const Accordion = {
  Root: forwardRef(AccordionRoot) as typeof AccordionRoot,
  Trigger: forwardRef(AccordionTrigger) as typeof AccordionTrigger,
  Item: forwardRef(AccordionItem) as typeof AccordionItem,
  Content: forwardRef(AccordionContent) as typeof AccordionContent,
  Header: forwardRef(AccordionHeader) as typeof AccordionHeader,
} as const;
