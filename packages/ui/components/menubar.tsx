'use client';

import * as R from '@radix-ui/react-menubar';
import { forwardRef } from 'react';
import './menubar.css';
import cn from 'classnames';

interface MenubarRootProps extends R.MenubarProps {}

function MenubarRoot(props: MenubarRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('MenubarRoot', props.className)} />;
}

interface MenubarMenuProps extends R.MenubarMenuProps {}

function MenubarMenu(props: MenubarMenuProps, _ref: unknown) {
  return <R.Menu {...props} />;
}

interface MenubarTriggerProps extends R.MenubarTriggerProps {}

function MenubarTrigger(props: MenubarTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('MenubarTrigger', props.className)} />;
}

interface MenubarContentProps extends R.MenubarContentProps {}

function MenubarContent(props: MenubarContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('MenubarContent', props.className)} />;
}

interface MenubarPortalProps extends R.MenubarPortalProps {}

function MenubarPortal(props: MenubarPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface MenubarSeparatorProps extends R.MenubarSeparatorProps {}

function MenubarSeparator(props: MenubarSeparatorProps, _ref: unknown) {
  return <R.Separator {...props} className={cn('MenubarSeparator', props.className)} />;
}

interface MenubarItemProps extends R.MenubarItemProps {}

function MenubarItem(props: MenubarItemProps, _ref: unknown) {
  return <R.Item {...props} className={cn('MenubarItem', props.className)} />;
}

interface MenubarSubMenuProps extends R.MenubarSubProps {}

function MenubarSubMenu(props: MenubarSubMenuProps, _ref: unknown) {
  return <R.Sub {...props} />;
}

interface MenubarSubTriggerProps extends R.MenubarSubTriggerProps {}

function MenubarSubTrigger(props: MenubarSubTriggerProps, _ref: unknown) {
  return <R.SubTrigger {...props} className={cn('MenubarSubTrigger', props.className)} />;
}

interface MenubarSubContentProps extends R.MenubarSubContentProps {}

function MenubarSubContent(props: MenubarSubContentProps, _ref: unknown) {
  return <R.SubContent {...props} className={cn('MenubarSubContent', props.className)} />;
}

interface MenubarRadioGroupProps extends R.MenubarRadioGroupProps {}

function MenubarRadioGroup(props: MenubarRadioGroupProps, _ref: unknown) {
  return <R.RadioGroup {...props} className={cn('MenubarRadioGroup', props.className)} />;
}

interface MenubarRadioGroupItemProps extends R.MenubarRadioItemProps {}

function MenubarRadioGroupItem(props: MenubarRadioGroupItemProps, _ref: unknown) {
  return <R.RadioItem {...props} className={cn('MenubarRadioGroupItem', props.className)} />;
}

interface MenubarItemIndicatorProps extends R.MenubarItemIndicatorProps {}

function MenubarItemIndicator(props: MenubarItemIndicatorProps, _ref: unknown) {
  return <R.ItemIndicator {...props} className={cn('MenubarItemIndicator', props.className)} />;
}

interface MenubarCheckboxItemProps extends R.MenubarCheckboxItemProps {}

function MenubarCheckboxItem(props: MenubarCheckboxItemProps, _ref: unknown) {
  return <R.CheckboxItem {...props} className={cn('MenubarCheckboxItem', props.className)} />;
}

interface MenubarRadioItemProps extends R.MenubarRadioItemProps {}

function MenubarRadioItem(props: MenubarRadioItemProps, _ref: unknown) {
  return <R.RadioItem {...props} className={cn('MenubarRadioItem', props.className)} />;
}

export const Menubar = {
  Root: forwardRef(MenubarRoot) as typeof MenubarRoot,
  Menu: forwardRef(MenubarMenu) as typeof MenubarMenu,
  Item: forwardRef(MenubarItem) as typeof MenubarItem,
  ItemIndicator: forwardRef(MenubarItemIndicator) as typeof MenubarItemIndicator,
  Content: forwardRef(MenubarContent) as typeof MenubarContent,
  Trigger: forwardRef(MenubarTrigger) as typeof MenubarTrigger,
  Portal: forwardRef(MenubarPortal) as typeof MenubarPortal,
  Separator: forwardRef(MenubarSeparator) as typeof MenubarSeparator,
  Sub: forwardRef(MenubarSubMenu) as typeof MenubarSubMenu,
  SubTrigger: forwardRef(MenubarSubTrigger) as typeof MenubarSubTrigger,
  SubContent: forwardRef(MenubarSubContent) as typeof MenubarSubContent,
  RadioGroup: forwardRef(MenubarRadioGroup) as typeof MenubarRadioGroup,
  RadioGroupItem: forwardRef(MenubarRadioGroupItem) as typeof MenubarRadioGroupItem,
  CheckboxItem: forwardRef(MenubarCheckboxItem) as typeof MenubarCheckboxItem,
  RadioItem: forwardRef(MenubarRadioItem) as typeof MenubarRadioItem,
} as const;
