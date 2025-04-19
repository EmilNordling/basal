"use client";

import * as R from "@radix-ui/react-collapsible";
import { forwardRef } from "react";
import "./collapsible.css";
import cn from "classnames";

interface CollapsibleRootProps extends R.CollapsibleProps {}

function CollapsibleRoot(props: CollapsibleRootProps, _ref: unknown) {
  return (
    <R.Root {...props} className={cn("CollapsibleRoot", props.className)} />
  );
}

interface CollapsibleTriggerProps extends R.CollapsibleTriggerProps {}

function CollapsibleTrigger(props: CollapsibleTriggerProps, _ref: unknown) {
  return (
    <R.Trigger
      {...props}
      className={cn("CollapsibleTrigger", props.className)}
    />
  );
}

interface CollapsibleContentProps extends R.CollapsibleContentProps {}

function CollapsibleContent(props: CollapsibleContentProps, _ref: unknown) {
  return (
    <R.Content
      {...props}
      className={cn("CollapsibleContent", props.className)}
    />
  );
}

export const Collapsible = {
  Root: forwardRef(CollapsibleRoot) as typeof CollapsibleRoot,
  Trigger: forwardRef(CollapsibleTrigger) as typeof CollapsibleTrigger,
  Content: forwardRef(CollapsibleContent) as typeof CollapsibleContent,
} as const;
