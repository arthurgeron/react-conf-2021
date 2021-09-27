import { useSelectTableData, useTriggerTableChanges } from '@hooks';
import { memo } from 'react';
import Row from '../Row';
import * as S from './styles';

function Table() {

  const tickers = useSelectTableData(data => data.tickers);
  const {toggleTicker, toggleTickerValueChange} = useTriggerTableChanges();

  return <S.Container>
    <S.ButtonContainer>
      <S.Button onClick={toggleTicker}>Toggle Ticker</S.Button>  
      <S.Button onClick={toggleTickerValueChange}>Increase Value</S.Button>  
    </S.ButtonContainer>
    {tickers.map(ticker => <Row key={ticker} ticker={ticker} />)}
  </S.Container>
}

export default memo(Table);