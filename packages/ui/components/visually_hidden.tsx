import { css } from '@pigment-css/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export function VisuallyHidden({ children }: Props) {
  return <span className={styleVisuallyHidden}>{children}</span>;
}

const styleVisuallyHidden = css({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});
