import { TickerFields } from '@types';
import { memo } from 'react';
import Cell from '../Cell';
import * as S from './styles'

interface Props {
  ticker: string;
}

function Row({ticker}: Props) {
  return <S.Container>
    {Object.keys(TickerFields).map(column => <Cell key={`${TickerFields[column]}_ticker`} ticker={ticker} column={TickerFields[column]} />)}
  </S.Container>;

}

export default memo(Row);
