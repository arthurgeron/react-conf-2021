import { TickerFields, TickerTable } from '@types';

export const DEFAULT_TICKERS_SINGLE = ['BEEF3'];
export const DEFAULT_TICKERS = ['BEEF3', 'JBSS3'];

export const DEFAULT_TICKER_TABLE: TickerTable = {
    'BEEF3': {
      [TickerFields.Last]: 10.21,
      [TickerFields.Percent]: 4.72,
      [TickerFields.Diff]: 0.46,
      [TickerFields.Volume]: '17.3 M',
      [TickerFields.Max]: 10.22,
      [TickerFields.Min]: 10.20,
    },
    'JBSS3': {
      [TickerFields.Last]: 35.23,
      [TickerFields.Percent]: 4.05,
      [TickerFields.Diff]: 1.37,
      [TickerFields.Volume]: '15 M',
      [TickerFields.Max]: 35.19,
      [TickerFields.Min]: 35.30,
    },
};