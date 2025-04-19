"use client";

import { styled } from "@pigment-css/react";
import { Link } from "../components_primitives/link.js";
import { Flex } from "../components_primitives/flex.js";
import { Text } from "./text.js";

interface SidebarRootProps {
  children?: React.ReactNode;
}

export function SidebarRoot(props: SidebarRootProps) {
  return (
    <Flex py="2" gap="4">
      {props.children}
    </Flex>
  );
}

interface SidebarItemProps {
  to: string;
  children?: React.ReactNode;
}

const StyledSidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  color: lch(18.74 1 282.863007);
  fill: var(--text-secondary);
  border-radius: 4px;
  gap: var(--spacing-2);

  &[aria-current="page"] {
    background-color: var(--active-forground);
  }
`;

export function SidebarItem(props: SidebarItemProps) {
  return (
    <StyledSidebarItem nav end className="hover:fg" to={props.to}>
      {props.children}
    </StyledSidebarItem>
  );
}

interface SidebarIconProps {
  children?: React.ReactNode;
}

export function SidebarIcon(props: SidebarIconProps) {
  return (
    <Flex
      width="4"
      style={{
        color: "var(--stone-900)",
      }}
    >
      {props.children}
    </Flex>
  );
}

interface SidebarLabelProps {
  children?: React.ReactNode;
}

export function SidebarLabel(props: SidebarLabelProps) {
  return (
    <Text size="mini" boxTrim>
      {props.children}
    </Text>
  );
}

interface SidebarGroupProps {
  label?: string;
  children?: React.ReactNode;
}

export function SidebarGroup(props: SidebarGroupProps) {
  return (
    <Flex gap={1}>
      {props.label ? <Text size="regular">{props.label}</Text> : null}
      {props.children}
    </Flex>
  );
}

export const Sidebar = {
  Root: SidebarRoot,
  Item: SidebarItem,
  Icon: SidebarIcon,
  Label: SidebarLabel,
  Group: SidebarGroup,
} as const;
