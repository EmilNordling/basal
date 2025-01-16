'use client';

import { forwardRef } from 'react';

interface Props {
  children: React.ReactNode;
}

function TableRoot(props: Props, ref: React.LegacyRef<HTMLTableElement>) {
  return <table ref={ref} {...props} />;
}

function TableHeader(props: Props, ref: React.LegacyRef<HTMLTableSectionElement>) {
  return <thead ref={ref} {...props} />;
}

function TableBody(props: Props, ref: React.LegacyRef<HTMLTableSectionElement>) {
  return <tbody ref={ref} {...props} />;
}

function TableFooter(props: Props, ref: React.LegacyRef<HTMLTableSectionElement>) {
  return <tfoot ref={ref} {...props} />;
}

function TableRow(props: Props, ref: React.LegacyRef<HTMLTableRowElement>) {
  return <tr ref={ref} {...props} />;
}

function TableHead(props: Props, ref: React.LegacyRef<HTMLTableCellElement>) {
  return <th ref={ref} {...props} />;
}

function TableCell(props: Props, ref: React.LegacyRef<HTMLTableCellElement>) {
  return <td ref={ref} {...props} />;
}

function TableCaption(props: Props, ref: React.LegacyRef<HTMLTableCaptionElement>) {
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
