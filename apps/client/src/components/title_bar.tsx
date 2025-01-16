import { css } from '@pigment-css/react';

const styledTitleBar = css({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '30px',
});

export function TitleBar() {
  return <div className={styledTitleBar} data-tauri-drag-region />;
}
