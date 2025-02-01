import { createContext } from "react";
import { TableContextType } from "../types/TableContextType";
import { DEFAULT_RANGE } from "../constants/DEFAULT_RANGE";

export const TableContext = createContext<TableContextType>({
  addRow: () => {},
  matrix: [],
  deleteRow: () => [],
  highlightedCells: [],
  setTableSize: () => {},
  tableSize: DEFAULT_RANGE,
  handleMouseEnter: () => {},
  handleMouseLeave: () => [],
  sethighlightCount: () => [],
  increaseCellValue: () => {},
});
