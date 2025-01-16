"use client";

import * as R from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import "./dropdown_menu.css";
import cn from "classnames";

interface DropdownMenuRootProps extends R.DropdownMenuProps {}

function DropdownMenuRoot(props: DropdownMenuRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface DropdownMenuTriggerProps extends R.DropdownMenuTriggerProps {}

function DropdownMenuTrigger(props: DropdownMenuTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} />;
}

interface DropdownMenuPortalProps extends R.DropdownMenuPortalProps {}

function DropdownMenuPortal(props: DropdownMenuPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface DropdownMenuContentProps extends R.DropdownMenuContentProps {}

function DropdownMenuContent(props: DropdownMenuContentProps, _ref: unknown) {
  return (
    <R.Content
      sideOffset={4}
      align="start"
      {...props}
      className={cn("DropdownMenuContent", props.className)}
    />
  );
}

interface DropdownMenuItemProps extends R.DropdownMenuItemProps {}

function DropdownMenuItem(props: DropdownMenuItemProps, _ref: unknown) {
  return (
    <R.Item {...props} className={cn("DropdownMenuItem", props.className)} />
  );
}

interface DropdownMenuSubProps extends R.DropdownMenuSubProps {}

function DropdownMenuSub(props: DropdownMenuSubProps, _ref: unknown) {
  return <R.Sub {...props} />;
}

interface DropdownMenuSubTriggerProps extends R.DropdownMenuSubTriggerProps {}

function DropdownMenuSubTrigger(
  props: DropdownMenuSubTriggerProps,
  _ref: unknown
) {
  return (
    <R.SubTrigger
      {...props}
      className={cn("DropdownMenuSubTrigger", props.className)}
    />
  );
}

interface DropdownMenuSubContentProps extends R.DropdownMenuSubContentProps {}

function DropdownMenuSubContent(
  props: DropdownMenuSubContentProps,
  _ref: unknown
) {
  return (
    <R.SubContent
      {...props}
      className={cn("DropdownMenuSubContent", props.className)}
    />
  );
}

interface DropdownMenuSeparatorProps extends R.DropdownMenuSeparatorProps {}

function DropdownMenuSeparator(
  props: DropdownMenuSeparatorProps,
  _ref: unknown
) {
  return (
    <R.Separator
      {...props}
      className={cn("DropdownMenuSeparator", props.className)}
    />
  );
}

interface DropdownMenuCheckboxItemProps
  extends R.DropdownMenuCheckboxItemProps {}

function DropdownMenuCheckboxItem(
  props: DropdownMenuCheckboxItemProps,
  _ref: unknown
) {
  return (
    <R.CheckboxItem
      {...props}
      className={cn("DropdownMenuCheckboxItem", props.className)}
    />
  );
}

interface DropdownMenuItemIndicatorProps
  extends R.DropdownMenuItemIndicatorProps {}

function DropdownMenuItemIndicator(
  props: DropdownMenuItemIndicatorProps,
  _ref: unknown
) {
  return (
    <R.ItemIndicator
      className={cn("DropdownMenuIndicator", props.className)}
      {...props}
    />
  );
}

interface DropdownMenuLabelProps extends R.DropdownMenuLabelProps {}

function DropdownMenuLabel(props: DropdownMenuLabelProps, _ref: unknown) {
  return (
    <R.Label {...props} className={cn("DropdownMenuLabel", props.className)} />
  );
}

interface DropdownMenuRadioGroupProps extends R.DropdownMenuRadioGroupProps {}

function DropdownMenuRadioGroup(
  props: DropdownMenuRadioGroupProps,
  _ref: unknown
) {
  return <R.RadioGroup {...props} />;
}

interface DropdownMenuRadioItemProps extends R.DropdownMenuRadioItemProps {}

function DropdownMenuRadioItem(
  props: DropdownMenuRadioItemProps,
  _ref: unknown
) {
  return (
    <R.RadioItem
      className={cn("DropdownMenuRadioItem", props.className)}
      {...props}
    />
  );
}

interface DropdownMenuArrowProps extends R.DropdownMenuArrowProps {}

function DropdownMenuArrow(props: DropdownMenuArrowProps, _ref: unknown) {
  return (
    <R.Arrow {...props} className={cn("DropdownMenuArrow", props.className)} />
  );
}

export const DropdownMenu = {
  Root: forwardRef(DropdownMenuRoot) as typeof DropdownMenuRoot,
  Trigger: forwardRef(DropdownMenuTrigger) as typeof DropdownMenuTrigger,
  Portal: forwardRef(DropdownMenuPortal) as typeof DropdownMenuPortal,
  Content: forwardRef(DropdownMenuContent) as typeof DropdownMenuContent,
  Item: forwardRef(DropdownMenuItem) as typeof DropdownMenuItem,
  Sub: forwardRef(DropdownMenuSub) as typeof DropdownMenuSub,
  SubTrigger: forwardRef(
    DropdownMenuSubTrigger
  ) as typeof DropdownMenuSubTrigger,
  SubContent: forwardRef(
    DropdownMenuSubContent
  ) as typeof DropdownMenuSubContent,
  Separator: forwardRef(DropdownMenuSeparator) as typeof DropdownMenuSeparator,
  CheckboxItem: forwardRef(
    DropdownMenuCheckboxItem
  ) as typeof DropdownMenuCheckboxItem,
  ItemIndicator: forwardRef(
    DropdownMenuItemIndicator
  ) as typeof DropdownMenuItemIndicator,
  Label: forwardRef(DropdownMenuLabel) as typeof DropdownMenuLabel,
  RadioGroup: forwardRef(
    DropdownMenuRadioGroup
  ) as typeof DropdownMenuRadioGroup,
  RadioItem: forwardRef(DropdownMenuRadioItem) as typeof DropdownMenuRadioItem,
  Arrow: forwardRef(DropdownMenuArrow) as typeof DropdownMenuArrow,
} as const;
