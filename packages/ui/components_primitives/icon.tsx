"use client";

import { icons } from "lucide-react";

export type IconType = keyof typeof icons;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: IconType;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon(props: Props) {
  const C = props.type ? icons[props.type] : "div";

  return (
    <C
      size={props.size ?? 20}
      strokeWidth={props.strokeWidth ?? 1.75}
      color={props.color}
    />
  );
}
