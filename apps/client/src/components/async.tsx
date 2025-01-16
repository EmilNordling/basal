import { useConstant } from '@wox-team/wox-app-vitals';
import { ReactNode, useEffect, useState } from 'react';
import { Timer } from '@application/internal/timer';

interface Props<T> {
  delay?: number;
  derive: T | null;
  children: ((data: NonNullable<T>) => ReactNode) | ReactNode;
  fallback: ReactNode;
}

export function Async<T>(props: Props<T>): JSX.Element {
  const timer = useConstant(() => new Timer());
  const [uiTimeout, setUiTimeout] = useState(props.derive == null);

  useEffect(() => {
    return timer.wait(props.delay ?? 250, () => {
      setUiTimeout(false);
    });
  }, [timer]);

  if (uiTimeout || props.derive == null) return <>{props.fallback}</>;

  return <>{typeof props.children === 'function' ? props.children(props.derive) : props.children}</>;
}
