import { useDataSelector } from '@arthurgeron/context-selector';
import { TableDataContext } from '@contexts/tableData';
import type {TableContextData} from '@types';

export function useSelectTableData<Y>(selector: (context: TableContextData) => Y) {
  return useDataSelector<TableContextData, Y>(TableDataContext, selector);
}