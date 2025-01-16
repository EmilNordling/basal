"use client";

import { forwardRef } from "react";
import {
  LinkProps,
  Link as RRD_Link,
  NavLink as RRD_NavLink,
  NavLinkProps,
} from "react-router-dom";

type Props =
  | ({
      nav?: never;
    } & LinkProps)
  | ({
      nav?: true;
    } & LinkProps &
      NavLinkProps);

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  props: Props,
  ref
) {
  const C = props.nav ? RRD_NavLink : RRD_Link;

  return (
    <C draggable="false" {...props} ref={ref}>
      {props.children}
    </C>
  );
});
