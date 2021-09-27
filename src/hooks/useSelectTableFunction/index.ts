import { useDataSelector, useFunctionSelector } from '@arthurgeron/context-selector';
import { TableDataContext } from '@contexts/tableData';
import type {TableContextData} from '@types';

export function useSelectTableFunction<Y>(selector: (context: TableContextData) => Y) {
  return useFunctionSelector<TableContextData, Y>(TableDataContext, selector);
}