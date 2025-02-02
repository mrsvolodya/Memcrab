import { createContext } from "react";
import { TableContextType } from "../types/TableContextType";
import { INPUT_RANGE_DEFAULT } from "../constants/INPUT_RANGE_DEFAULT";

export const TableContext = createContext<TableContextType>({
  matrix: [],
  isPersent: { id: null, isActive: false },
  addRow: () => {},
  highlightCount: 0,
  deleteRow: () => [],
  highlightedCells: [],
  setInputRange: () => {},
  handleMouseEnter: () => {},
  handleMouseLeave: () => [],
  sethighlightCount: () => [],
  increaseCellValue: () => {},
  inputRange: INPUT_RANGE_DEFAULT,
});
