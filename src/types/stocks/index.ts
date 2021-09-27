import { Dispatch, SetStateAction } from "react";

export enum TickerFields {
  Last = 'last',
  Percent = 'percent',
  Diff = 'diff',
  Volume = 'volume',
  Min = 'min',
  Max = 'max',
} 

export interface TickerData {
  [TickerFields.Last]: number;
  [TickerFields.Percent]: number;
  [TickerFields.Diff]: number;
  [TickerFields.Volume]: string;
  [TickerFields.Min]: number;
  [TickerFields.Max]: number;
} 

export interface TableContextData {
  tickers: string[];
  tableData: TickerTable;
  setTickers: Dispatch<SetStateAction<string[]>>;
  setTableData: Dispatch<SetStateAction<TickerTable>>;
}

export type TickerTable = Record<string, TickerData>;