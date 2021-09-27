import { createContext, ReactNode, useContext } from 'react';
import type { TableContextData } from '@types';
import { useDeclareTableData } from '@hooks';


export const TableDataContext = createContext<TableContextData | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function TableDataProvider({ children }: Props) {
  const value = useDeclareTableData();

  return (
    <TableDataContext.Provider value={value}>
      {children}
    </TableDataContext.Provider>
  );
}

export default function useTableData(): TableContextData {
  const context = useContext(TableDataContext);

  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }

  return context;
}
