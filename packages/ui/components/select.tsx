'use client';

import * as R from '@radix-ui/react-select';
import { forwardRef } from 'react';
import './select.css';
import cn from 'classnames';

interface SelectRootProps extends R.SelectProps {}

function SelectRoot(props: SelectRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface SelectItemProps extends R.SelectItemProps {}

function SelectItem(props: SelectItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('SelectItem', props.className)} />;
}
interface SelectTriggerProps extends R.SelectTriggerProps {}

function SelectTrigger(props: SelectTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('SelectTrigger', props.className)} />;
}

interface SelectValueProps extends R.SelectValueProps {}

function SelectValue(props: SelectValueProps, _ref: unknown) {
  return <R.Value {...props} className={cn('SelectValue', props.className)} />;
}

interface SelectIconProps extends R.SelectIconProps {}

function SelectIcon(props: SelectIconProps, _ref: unknown) {
  return <R.Icon {...props} className={cn('SelectIcon', props.className)} />;
}

interface SelectPortalProps extends R.SelectPortalProps {}

function SelectPortal(props: SelectPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface SelectContentProps extends R.SelectContentProps {}

function SelectContent(props: SelectContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('SelectContent', props.className)} />;
}

interface SelectScrollUpButtonProps extends R.SelectScrollUpButtonProps {}

function SelectScrollUpButton(props: SelectScrollUpButtonProps, _ref: unknown) {
  return <R.ScrollUpButton {...props} className={cn('SelectScrollUpButton', props.className)} />;
}

interface SelectViewportProps extends R.SelectViewportProps {}

function SelectViewport(props: SelectViewportProps, _ref: unknown) {
  return <R.Viewport {...props} className={cn('SelectViewport', props.className)} />;
}

interface SelectItemTextProps extends R.SelectItemTextProps {}

function SelectItemText(props: SelectItemTextProps, _ref: unknown) {
  return <R.ItemText {...props} className={cn('SelectItemText', props.className)} />;
}

interface SelectItemIndicatorProps extends R.SelectItemIndicatorProps {}

function SelectItemIndicator(props: SelectItemIndicatorProps, _ref: unknown) {
  return <R.ItemIndicator {...props} className={cn('SelectItemIndicator', props.className)} />;
}

interface SelectGroupProps extends R.SelectGroupProps {}

function SelectGroup(props: SelectGroupProps, _ref: unknown) {
  return <R.Group {...props} className={cn('SelectGroup', props.className)} />;
}

interface SelectLabelProps extends R.SelectLabelProps {}

function SelectLabel(props: SelectLabelProps, _ref: unknown) {
  return <R.Label {...props} className={cn('SelectLabel', props.className)} />;
}

interface SelectSeparatorProps extends R.SelectSeparatorProps {}

function SelectSeparator(props: SelectSeparatorProps, _ref: unknown) {
  return <R.Separator {...props} className={cn('SelectSeparator', props.className)} />;
}

interface SelectScrollDownButtonProps extends R.SelectScrollDownButtonProps {}

function SelectScrollDownButton(props: SelectScrollDownButtonProps, _ref: unknown) {
  return <R.ScrollDownButton {...props} className={cn('SelectScrollDownButton', props.className)} />;
}

interface SelectArrowProps extends R.SelectArrowProps {}

function SelectArrow(props: SelectArrowProps, _ref: unknown) {
  return <R.Arrow {...props} className={cn('SelectArrow', props.className)} />;
}

export const Select = {
  Root: forwardRef(SelectRoot) as typeof SelectRoot,
  Trigger: forwardRef(SelectTrigger) as typeof SelectTrigger,
  Value: forwardRef(SelectValue) as typeof SelectValue,
  Icon: forwardRef(SelectIcon) as typeof SelectIcon,
  Portal: forwardRef(SelectPortal) as typeof SelectPortal,
  Content: forwardRef(SelectContent) as typeof SelectContent,
  ScrollUpButton: forwardRef(SelectScrollUpButton) as typeof SelectScrollUpButton,
  Viewport: forwardRef(SelectViewport) as typeof SelectViewport,
  Item: forwardRef(SelectItem) as typeof SelectItem,
  ItemText: forwardRef(SelectItemText) as typeof SelectItemText,
  ItemIndicator: forwardRef(SelectItemIndicator) as typeof SelectItemIndicator,
  Group: forwardRef(SelectGroup) as typeof SelectGroup,
  Label: forwardRef(SelectLabel) as typeof SelectLabel,
  Separator: forwardRef(SelectSeparator) as typeof SelectSeparator,
  ScrollDownButton: forwardRef(SelectScrollDownButton) as typeof SelectScrollDownButton,
  Arrow: forwardRef(SelectArrow) as typeof SelectArrow,
} as const;
