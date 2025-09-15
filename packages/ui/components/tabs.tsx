'use client';

import * as R from '@radix-ui/react-tabs';
import { forwardRef } from 'react';
import './tabs.css';
import cn from 'classnames';

interface TabsRootProps extends R.TabsProps {}

function TabsRoot(props: TabsRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('TabsRoot', props.className)} />;
}

interface TabsTriggerProps extends R.TabsTriggerProps {}

function TabsTrigger(props: TabsTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('TabsTrigger', props.className)} />;
}

interface TabsListProps extends R.TabsListProps {}

function TabsList(props: TabsListProps, _ref: unknown) {
  return <R.List {...props} className={cn('TabsList', props.className)} />;
}

interface TabsContentProps extends R.TabsContentProps {}

function TabsContent(props: TabsContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('TabsContent', props.className)} />;
}

export const Tabs = {
  Root: forwardRef(TabsRoot) as typeof TabsRoot,
  Trigger: forwardRef(TabsTrigger) as typeof TabsTrigger,
  List: forwardRef(TabsList) as typeof TabsList,
  Content: forwardRef(TabsContent) as typeof TabsContent,
} as const;
