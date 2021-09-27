import { DEFAULT_TICKER_TABLE, DEFAULT_TICKERS } from '@constants';
import type { TableContextData, TickerTable } from '@types';
import { useState } from "react";

export function useDeclareTableData(): TableContextData {
  const [tickers, setTickers] = useState<string[]>(DEFAULT_TICKERS);
  const [tableData, setTableData] = useState<TickerTable>(DEFAULT_TICKER_TABLE);

  return {
    tickers,
    setTickers,
    tableData,
    setTableData,
  };
}