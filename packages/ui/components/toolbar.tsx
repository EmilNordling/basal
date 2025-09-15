'use client';

import * as R from '@radix-ui/react-toolbar';
import { forwardRef } from 'react';
import './toolbar.css';
import cn from 'classnames';

interface ToolbarRootProps extends R.ToolbarProps {}

function ToolbarRoot(props: ToolbarRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('ToolbarRoot', props.className)} />;
}

interface ToolbarButtonProps extends R.ToolbarButtonProps {}

function ToolbarButton(props: ToolbarButtonProps, _ref: unknown) {
  return <R.Button {...props} className={cn('ToolbarButton', props.className)} />;
}

interface ToolbarSeparatorProps extends R.ToolbarSeparatorProps {}

function ToolbarSeparator(props: ToolbarSeparatorProps, _ref: unknown) {
  return <R.Separator {...props} className={cn('ToolbarSeparator', props.className)} />;
}

interface ToolbarLinkProps extends R.ToolbarLinkProps {}

function ToolbarLink(props: ToolbarLinkProps, _ref: unknown) {
  return <R.Link {...props} className={cn('ToolbarLink', props.className)} />;
}

type ToolbarToggleGroupProps = R.ToolbarToggleGroupSingleProps | R.ToolbarToggleGroupMultipleProps;

function ToolbarToggleGroup(props: ToolbarToggleGroupProps, _ref: unknown) {
  return <R.ToggleGroup {...props} className={cn('ToolbarToggleGroup', props.className)} />;
}

interface ToolbarToggleItemProps extends R.ToolbarToggleItemProps {}

function ToolbarToggleItem(props: ToolbarToggleItemProps, _ref: unknown) {
  return <R.ToggleItem {...props} className={cn('ToolbarToggleItem', props.className)} />;
}

export const Toolbar = {
  Root: forwardRef(ToolbarRoot) as typeof ToolbarRoot,
  Button: forwardRef(ToolbarButton) as typeof ToolbarButton,
  Separator: forwardRef(ToolbarSeparator) as typeof ToolbarSeparator,
  Link: forwardRef(ToolbarLink) as typeof ToolbarLink,
  ToggleGroup: forwardRef(ToolbarToggleGroup) as typeof ToolbarToggleGroup,
  ToggleItem: forwardRef(ToolbarToggleItem) as typeof ToolbarToggleItem,
} as const;
