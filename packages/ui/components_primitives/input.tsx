import { forwardRef, ForwardedRef, useId } from 'react';
import { css } from '@pigment-css/react';
import { Label } from './label.js';

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>, ExoticProps {}

interface ExoticProps {
  label?: string;
}

const styledContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const InputText = forwardRef(function InputText(
  props: InputTextProps,
  forwardedRef: ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const id = useId();
  const sanitiesProps = extractExoticProps(props);

  return (
    <div className={styledContainer}>
      <Label htmlFor={id}>{props.label}</Label>
      <Input {...sanitiesProps} id={id} ref={forwardedRef} />
    </div>
  );
});

function extractExoticProps(props: InputTextProps): React.HTMLAttributes<HTMLInputElement> {
  const propsCopy = { ...props };

  // Removes exotic props.
  delete propsCopy.label;

  return propsCopy;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const styledInput = css({
  all: 'unset',
  boxSizing: 'border-box',
});

const Input = forwardRef(function Input(props: InputProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  return <input {...props} className={styledInput} ref={forwardedRef} />;
});
