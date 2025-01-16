'use client';

import * as R from '@radix-ui/react-avatar';
import { forwardRef } from 'react';
import './avatar.css';
import cn from 'classnames';

interface AvatarRootProps extends R.AvatarProps {}

function AvatarRoot(props: AvatarRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('AvatarRoot', props.className)} />;
}

interface AvatarImageProps extends R.AvatarImageProps {}

function AvatarImage(props: AvatarImageProps, _ref: unknown) {
  return <R.Image {...props} className={cn('AvatarImage', props.className)} />;
}

interface AvatarFallbackProps extends R.AvatarFallbackProps {}

function AvatarFallback(props: AvatarFallbackProps, _ref: unknown) {
  return <R.Fallback {...props} className={cn('AvatarFallback', props.className)} />;
}

export const AspectRatio = {
  Root: forwardRef(AvatarRoot) as typeof AvatarRoot,
  Image: forwardRef(AvatarImage) as typeof AvatarImage,
  Fallback: forwardRef(AvatarFallback) as typeof AvatarFallback,
} as const;
