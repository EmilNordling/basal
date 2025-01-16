'use client';

import * as R from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import './alert_dialog.css';
import cn from 'classnames';

interface AlertDialogRootProps extends R.AlertDialogProps {}

function AlertDialogRoot(props: AlertDialogRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface AlertDialogTriggerProps extends R.AlertDialogTriggerProps {}

function AlertDialogTrigger(props: AlertDialogTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('AlertDialogTrigger', props.className)} />;
}

interface AlertDialogPortalProps extends R.AlertDialogPortalProps {}

function AlertDialogPortal(props: AlertDialogPortalProps, _ref: unknown) {
  return <R.Portal {...props} />;
}

interface AlertDialogOverlayProps extends R.AlertDialogOverlayProps {}

function AlertDialogOverlay(props: AlertDialogOverlayProps, _ref: unknown) {
  return <R.Overlay {...props} className={cn('AlertDialogOverlay', props.className)} />;
}

interface AlertDialogContentProps extends R.AlertDialogContentProps {}

function AlertDialogContent(props: AlertDialogContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('AlertDialogContent', props.className)} />;
}

interface AlertDialogTitleProps extends R.AlertDialogTitleProps {}

function AlertDialogTitle(props: AlertDialogTitleProps, _ref: unknown) {
  return <R.Title {...props} className={cn('AlertDialogTitle', props.className)} />;
}

interface AlertDialogDescriptionProps extends R.AlertDialogDescriptionProps {}

function AlertDialogDescription(props: AlertDialogDescriptionProps, _ref: unknown) {
  return <R.Description {...props} className={cn('AlertDialogDescription', props.className)} />;
}

interface AlertDialogCancelProps extends R.AlertDialogCancelProps {}

function AlertDialogCancel(props: AlertDialogCancelProps, _ref: unknown) {
  return <R.Cancel {...props} className={cn('AlertDialogCancel', props.className)} />;
}

interface AlertDialogActionProps extends R.AlertDialogActionProps {}

function AlertDialogAction(props: AlertDialogActionProps, _ref: unknown) {
  return <R.Action {...props} className={cn('AlertDialogAction', props.className)} />;
}

export const AlertDialog = {
  Root: forwardRef(AlertDialogRoot) as typeof AlertDialogRoot,
  Trigger: forwardRef(AlertDialogTrigger) as typeof AlertDialogTrigger,
  Portal: forwardRef(AlertDialogPortal) as typeof AlertDialogPortal,
  Overlay: forwardRef(AlertDialogOverlay) as typeof AlertDialogOverlay,
  Content: forwardRef(AlertDialogContent) as typeof AlertDialogContent,
  Title: forwardRef(AlertDialogTitle) as typeof AlertDialogTitle,
  Description: forwardRef(AlertDialogDescription) as typeof AlertDialogDescription,
  Cancel: forwardRef(AlertDialogCancel) as typeof AlertDialogCancel,
  Action: forwardRef(AlertDialogAction) as typeof AlertDialogAction,
} as const;
