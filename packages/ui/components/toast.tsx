'use client';

import * as R from '@radix-ui/react-toast';
import { forwardRef } from 'react';
import './toast.css';
import cn from 'classnames';

interface ToastProviderProps extends R.ToastProviderProps {}

function ToastProvider(props: ToastProviderProps, _ref: unknown) {
  return <R.Provider {...props} />;
}

interface ToastRootProps extends R.ToastProps {}

function ToastRoot(props: ToastRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('ToastRoot', props.className)} />;
}

interface ToastTitleProps extends R.ToastTitleProps {}

function ToastTitle(props: ToastTitleProps, _ref: unknown) {
  return <R.Title {...props} className={cn('ToastTitle', props.className)} />;
}

interface ToastDescriptionProps extends R.ToastDescriptionProps {}

function ToastDescription(props: ToastDescriptionProps, _ref: unknown) {
  return <R.Description {...props} className={cn('ToastDescription', props.className)} />;
}

interface ToastActionProps extends R.ToastActionProps {}

function ToastAction(props: ToastActionProps, _ref: unknown) {
  return <R.Action {...props} className={cn('ToastAction', props.className)} />;
}

interface ToastCloseProps extends R.ToastCloseProps {}

function ToastClose(props: ToastCloseProps, _ref: unknown) {
  return <R.Close {...props} className={cn('ToastClose', props.className)} />;
}

interface ToastViewportProps extends R.ToastViewportProps {}

function ToastViewport(props: ToastViewportProps, _ref: unknown) {
  return <R.Viewport {...props} className={cn('ToastViewport', props.className)} />;
}

export const Toast = {
  Provider: forwardRef(ToastProvider) as typeof ToastProvider,
  Root: forwardRef(ToastRoot) as typeof ToastRoot,
  Title: forwardRef(ToastTitle) as typeof ToastTitle,
  Description: forwardRef(ToastDescription) as typeof ToastDescription,
  Action: forwardRef(ToastAction) as typeof ToastAction,
  Close: forwardRef(ToastClose) as typeof ToastClose,
  Viewport: forwardRef(ToastViewport) as typeof ToastViewport,
} as const;
