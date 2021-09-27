import React, { useState } from 'react';
import { Table as UnmemoizedTable} from '@components/Unmemoized';
import { Table as MemoizedTable} from '@components/Memoized';
import { TableDataProvider } from '@contexts';
import * as S from './styles';

function App() {

  const [mode, setMode] = useState<'memoized'|'unmemoized'>('unmemoized');

  function toggleMode() {
    setMode(prevMode => prevMode === 'memoized' ? 'unmemoized' : 'memoized');
  }
  return (
    <S.Container>
      <S.SwitchButton onClick={toggleMode}>{mode}</S.SwitchButton>
      {mode === 'unmemoized' && <TableDataProvider><UnmemoizedTable /></TableDataProvider>}
      {mode === 'memoized' && <TableDataProvider><MemoizedTable /></TableDataProvider>}
    </S.Container>
  );
}

export default App;
