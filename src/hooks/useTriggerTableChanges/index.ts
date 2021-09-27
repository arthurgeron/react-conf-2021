import { DEFAULT_TICKERS, DEFAULT_TICKERS_SINGLE } from '@constants';
import { TickerFields } from '@types';
import useTableData from '@contexts/tableData';

export function useTriggerTableChanges() {
  const {setTableData, setTickers} = useTableData();

  function toggleTicker() {
    setTickers(prevTickers => prevTickers.length > 1 ? DEFAULT_TICKERS_SINGLE : DEFAULT_TICKERS);
  }

  function toggleTickerValueChange() {
    setTableData(prevTableData => ({...prevTableData, 'BEEF3': {
      ...prevTableData['BEEF3'],
      [TickerFields.Last]: prevTableData['BEEF3'][TickerFields.Last] + 10,
    }}));
  }

  return {toggleTicker, toggleTickerValueChange};
}