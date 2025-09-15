'use client';

import * as R from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import './separator.css';
import cn from 'classnames';

interface SliderRootProps extends R.SliderProps {}

function SliderRoot(props: SliderRootProps, _ref: unknown) {
  return <R.Root {...props} className={cn('SliderRoot', props.className)} />;
}
interface SliderTrackProps extends R.SliderTrackProps {}

function SliderTrack(props: SliderTrackProps, _ref: unknown) {
  return <R.Track {...props} className={cn('SliderTrack', props.className)} />;
}

interface SliderRangeProps extends R.SliderRangeProps {}

function SliderRange(props: SliderRangeProps, _ref: unknown) {
  return <R.Range {...props} className={cn('SliderRange', props.className)} />;
}

interface SliderThumbProps extends R.SliderThumbProps {}

function SliderThumb(props: SliderThumbProps, _ref: unknown) {
  return <R.Thumb {...props} className={cn('SliderThumb', props.className)} />;
}

export const Slider = {
  Root: forwardRef(SliderRoot) as typeof SliderRoot,
  Track: forwardRef(SliderTrack) as typeof SliderTrack,
  Range: forwardRef(SliderRange) as typeof SliderRange,
  Thumb: forwardRef(SliderThumb) as typeof SliderThumb,
} as const;
