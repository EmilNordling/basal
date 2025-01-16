'use client';

import { PropsWithChildren } from 'react';

interface UiPrimitivesRootProps extends PropsWithChildren {}

function UiPrimitivesRoot(props: UiPrimitivesRootProps) {
  return <>{props.children}</>;
}

export const WoxUiPrimitives = {
  Root: UiPrimitivesRoot,
} as const;
