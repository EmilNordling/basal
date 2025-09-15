'use client';

import * as R from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import './dialog.css';
import cn from 'classnames';

interface DialogRootProps extends R.DialogProps {}

function DialogRoot(props: DialogRootProps, _ref: unknown) {
  return <R.Root {...props} />;
}

interface DialogTriggerProps extends R.DialogTriggerProps {}

function DialogTrigger(props: DialogTriggerProps, _ref: unknown) {
  return <R.Trigger {...props} className={cn('DialogTrigger', props.className)} />;
}

interface DialogContentProps extends R.DialogContentProps {}

function DialogContent(props: DialogContentProps, _ref: unknown) {
  return <R.Content {...props} className={cn('DialogContent', props.className)} />;
}

interface DialogOverlayProps extends R.DialogOverlayProps {}

function DialogOverlay(props: DialogOverlayProps, _ref: unknown) {
  return <R.Overlay {...props} className={cn('DialogOverlay', props.className)} />;
}

interface DialogTitleProps extends R.DialogTitleProps {}

function DialogTitle(props: DialogTitleProps, _ref: unknown) {
  return <R.Title {...props} className={cn('DialogTitle', props.className)} />;
}

interface DialogDescriptionProps extends R.DialogDescriptionProps {}

function DialogDescription(props: DialogDescriptionProps, _ref: unknown) {
  return <R.Description {...props} className={cn('DialogDescription', props.className)} />;
}

interface DialogCloseProps extends R.DialogCloseProps {}

function DialogClose(props: DialogCloseProps, _ref: unknown) {
  return <R.Close {...props} className={cn('DialogClose', props.className)} />;
}

export const Dialog = {
  Root: forwardRef(DialogRoot) as typeof DialogRoot,
  Trigger: forwardRef(DialogTrigger) as typeof DialogTrigger,
  Content: forwardRef(DialogContent) as typeof DialogContent,
  Overlay: forwardRef(DialogOverlay) as typeof DialogOverlay,
  Title: forwardRef(DialogTitle) as typeof DialogTitle,
  Description: forwardRef(DialogDescription) as typeof DialogDescription,
  Close: forwardRef(DialogClose) as typeof DialogClose,
} as const;
