import { useSelectTableData } from '@hooks/useSelectTableData';
import type { TickerFields } from '@types';
import { memo, useEffect } from 'react';
import * as S from './styles';

interface Props {
  ticker: string;
  column: TickerFields;
}

function Cell({ticker, column}: Props) {
  const tickerData = useSelectTableData(data => data.tableData?.[ticker]);

  const label = tickerData?.[column] ?? '-';
  
  useEffect(() => {
    console.log(`Data Change - Memoized - ${ticker} ${column}`);
  }, [tickerData, column, ticker]);

  return <S.Container>
    <S.Text>{label ?? '-'}</S.Text>
  </S.Container>
}

export default memo(Cell);