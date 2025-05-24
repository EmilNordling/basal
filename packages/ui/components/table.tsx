"use client";

import { HTMLAttributes, ThHTMLAttributes, forwardRef } from "react";
import "./table.css";
import { styled } from "@pigment-css/react";

interface Props {
  children: React.ReactNode;
}

interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

const TableRootStyle = styled.table`
  border-collapse: collapse;
`;

function TableRoot(
  props: TableRootProps,
  ref: React.LegacyRef<HTMLTableElement>
) {
  return <TableRootStyle ref={ref} {...props} />;
}

interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableHeaderStyle = styled.thead`
  background: var(--background-standout);
  border-bottom: 0.5px solid transparent;
  position: sticky;
  top: 0;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    height: 0.5px;
    background: var(--background-border);
    position: absolute;
    left: 0;
    right: 0;
  }
`;

function TableHeader(
  props: TableHeaderProps,
  ref: React.LegacyRef<HTMLTableSectionElement>
) {
  return <TableHeaderStyle ref={ref} {...props} />;
}

const TbodyStyle = styled.tbody`
  border-bottom: 0.5px solid var(--background-border);
  background: var(--background-background);
`;

function TableBody(
  props: Props,
  ref: React.LegacyRef<HTMLTableSectionElement>
) {
  return <TbodyStyle ref={ref} {...props} />;
}

function TableFooter(
  props: Props,
  ref: React.LegacyRef<HTMLTableSectionElement>
) {
  return <tfoot ref={ref} {...props} />;
}

function TableRow(props: Props, ref: React.LegacyRef<HTMLTableRowElement>) {
  return <tr ref={ref} {...props} />;
}

interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const TableHeadStyle = styled.th`
  height: 3rem;
  padding: 0 1rem;
`;

function TableHead(
  props: TableHeadProps,
  ref: React.LegacyRef<HTMLTableCellElement>
) {
  return <TableHeadStyle ref={ref} {...props} />;
}

const CellStyle = styled.td`
  height: 3rem;
  padding: 0 1rem;
`;

function TableCell(props: Props, ref: React.LegacyRef<HTMLTableCellElement>) {
  return <CellStyle ref={ref} {...props} />;
}

function TableCaption(
  props: Props,
  ref: React.LegacyRef<HTMLTableCaptionElement>
) {
  return <caption ref={ref} {...props} />;
}

export const Table = {
  Root: forwardRef(TableRoot) as typeof TableRoot,
  Header: forwardRef(TableHeader) as typeof TableHeader,
  Body: forwardRef(TableBody) as typeof TableBody,
  Footer: forwardRef(TableFooter) as typeof TableFooter,
  Row: forwardRef(TableRow) as typeof TableRow,
  Head: forwardRef(TableHead) as typeof TableHead,
  Cell: forwardRef(TableCell) as typeof TableCell,
  Caption: forwardRef(TableCaption) as typeof TableCaption,
} as const;
