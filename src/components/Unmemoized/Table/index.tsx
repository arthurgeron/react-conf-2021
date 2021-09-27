import useTableData from '@contexts/tableData';
import { useTriggerTableChanges } from '@hooks/useTriggerTableChanges';
import Row from '../Row';
import * as S from './styles';

export default function Table() {

  const { tickers } = useTableData();
  const {toggleTicker, toggleTickerValueChange} = useTriggerTableChanges();

  return <S.Container>
    <S.ButtonContainer> 
      <S.Button onClick={toggleTicker}>Toggle Ticker</S.Button>  
      <S.Button onClick={toggleTickerValueChange}>Increase Value</S.Button>  
    </S.ButtonContainer>
    {tickers.map(ticker => <Row key={ticker} ticker={ticker} />)}
  </S.Container>
}