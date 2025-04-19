"use client";

import { forwardRef } from "react";
import "./table.css";
import { styled } from "@pigment-css/react";

interface Props {
  children: React.ReactNode;
}

const TableRootStyle = styled.div``;

function TableRoot(props: Props, ref: React.LegacyRef<HTMLTableElement>) {
  return <table ref={ref} {...props} />;
}

const TableHeaderStyle = styled.thead`
  background: var(--background-standout);
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-color: red;
`;

function TableHeader(
  props: Props,
  ref: React.LegacyRef<HTMLTableSectionElement>
) {
  return <TableHeaderStyle ref={ref} {...props} />;
}

const TbodyStyle = styled.tbody``;

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

const TableHeadStyle = styled.th`
  height: 3rem;
  padding: 0 1rem;
`;

function TableHead(props: Props, ref: React.LegacyRef<HTMLTableCellElement>) {
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
