'use client';

import * as R from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';
import './context_menu.css';
import cn from 'classnames';

interface ContextMenuRootProps extends R.ContextMenuProps {}

function ContextMenuRoot(props: ContextMenuRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface ContextMenuTriggerProps extends R.ContextMenuTriggerProps {}

function ContextMenuTrigger(props: ContextMenuTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('ContextMenuTrigger', props.className)} />;
}

interface ContextMenuPortalProps extends R.ContextMenuPortalProps {}

function ContextMenuPortal(props: ContextMenuPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface ContextMenuContentProps extends R.ContextMenuContentProps {}

function ContextMenuContent(props: ContextMenuContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('ContextMenuContent', props.className)} />;
}

interface ContextMenuItemProps extends R.ContextMenuItemProps {}

function ContextMenuItem(props: ContextMenuItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('ContextMenuItem', props.className)} />;
}

interface ContextMenuCheckboxItemProps extends R.ContextMenuCheckboxItemProps {}

function ContextMenuCheckboxItem(props: ContextMenuCheckboxItemProps, _ref: unknown) {
  return <R.CheckboxItem {...props} className={cn('ContextMenuCheckboxItem', props.className)} />;
}

interface ContextMenuRadioItemProps extends R.ContextMenuRadioItemProps {}

function ContextMenuRadioItem(props: ContextMenuRadioItemProps, _ref: unknown) {
  return <R.RadioItem {...props} className={cn('ContextMenuRadioItem', props.className)} />;
}

interface ContextMenuLabelProps extends R.ContextMenuLabelProps {}

function ContextMenuLabel(props: ContextMenuLabelProps, _ref: unknown) {
  return <R.Label {...props} className={cn('ContextMenuLabel', props.className)} />;
}

interface ContextMenuSeparatorProps extends R.ContextMenuSeparatorProps {}

function ContextMenuSeparator(props: ContextMenuSeparatorProps, _ref: unknown) {
  return <R.Separator {...props} className={cn('ContextMenuSeparator', props.className)} />;
}

interface ContextMenuSubProps extends R.ContextMenuSubProps {}

function ContextMenuSub(props: ContextMenuSubProps, _ref: unknown) {
  return <R.Sub {...props} />;
}

interface ContextMenuSubTriggerProps extends R.ContextMenuSubTriggerProps {}

function ContextMenuSubTrigger(props: ContextMenuSubTriggerProps, _ref: unknown) {
  return <R.SubTrigger {...props} className={cn('ContextMenuSubTrigger', props.className)} />;
}

interface ContextMenuSubContentProps extends R.ContextMenuSubContentProps {}

function ContextMenuSubContent(props: ContextMenuSubContentProps, _ref: unknown) {
  return <R.SubContent {...props} className={cn('ContextMenuSubContent', props.className)} />;
}

interface ContextMenuItemIndicatorProps extends R.ContextMenuItemIndicatorProps {}

function ContextMenuItemIndicator(props: ContextMenuItemIndicatorProps, _ref: unknown) {
  return <R.ItemIndicator {...props} className={cn('ContextMenuItemIndicator', props.className)} />;
}

interface ContextMenuRadioGroupProps extends R.ContextMenuRadioGroupProps {}

function ContextMenuRadioGroup(props: ContextMenuRadioGroupProps, _ref: unknown) {
  return <R.RadioGroup {...props} className={cn('ContextMenuRadioGroup', props.className)} />;
}

export const ContextMenu = {
  Root: forwardRef(ContextMenuRoot) as typeof ContextMenuRoot,
  Trigger: forwardRef(ContextMenuTrigger) as typeof ContextMenuTrigger,
  Portal: forwardRef(ContextMenuPortal) as typeof ContextMenuPortal,
  Content: forwardRef(ContextMenuContent) as typeof ContextMenuContent,
  Item: forwardRef(ContextMenuItem) as typeof ContextMenuItem,
  ItemIndicator: forwardRef(ContextMenuItemIndicator) as typeof ContextMenuItemIndicator,
  CheckboxItem: forwardRef(ContextMenuCheckboxItem) as typeof ContextMenuCheckboxItem,
  RadioGroup: forwardRef(ContextMenuRadioGroup) as typeof ContextMenuRadioGroup,
  RadioItem: forwardRef(ContextMenuRadioItem) as typeof ContextMenuRadioItem,
  Label: forwardRef(ContextMenuLabel) as typeof ContextMenuLabel,
  Separator: forwardRef(ContextMenuSeparator) as typeof ContextMenuSeparator,
  Sub: forwardRef(ContextMenuSub) as typeof ContextMenuSub,
  SubTrigger: forwardRef(ContextMenuSubTrigger) as typeof ContextMenuSubTrigger,
  SubContent: forwardRef(ContextMenuSubContent) as typeof ContextMenuSubContent,
} as const;
