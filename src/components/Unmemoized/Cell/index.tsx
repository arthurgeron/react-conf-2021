import useTableData from '@contexts/tableData';
import type { TickerFields } from '@types';
import { useEffect } from 'react';
import * as S from './styles';

interface Props {
  ticker: string;
  column: TickerFields;
}

export default function Cell({ticker, column}: Props) {

  const { tableData } = useTableData();

  const label = tableData?.[ticker]?.[column] ?? '-';

  useEffect(() => {
    console.log(`Data Change - Unmemoized - ${ticker} ${column}`);
  }, [tableData, column, ticker]);

  return <S.Container>
    <S.Text>{label}</S.Text>
  </S.Container>
}