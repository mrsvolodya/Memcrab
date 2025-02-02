import { createContext } from "react";
import { TableContextType } from "../types/TableContextType";
import { INPUT_RANGE_DEFAULT } from "../constants/INPUT_RANGE_DEFAULT";

export const TableContext = createContext<TableContextType>({
  addRow: () => {},
  highlightCount: 0,
  matrix: [],
  inputRange: INPUT_RANGE_DEFAULT,
  setInputRange: () => {},
  deleteRow: () => [],
  highlightedCells: [],
  handleMouseEnter: () => {},
  handleMouseLeave: () => [],
  sethighlightCount: () => [],
  increaseCellValue: () => {},
});
