import { MatrixType } from "./MatrixType";
import { TableSizeType } from "./TableSizeType";

export type TableContextType = {
  addRow: () => void;
  matrix: MatrixType;
  tableSize: TableSizeType;
  highlightedCells: string[];
  handleMouseLeave: () => void;
  deleteRow: (rowId: number) => void;
  sethighlightCount: (r: number) => void;
  handleMouseEnter: (value: number, cellId: string) => void;
  increaseCellValue: (rodId: number, cellId: string) => void;
  setTableSize: (
    v: TableSizeType | ((b: TableSizeType) => TableSizeType)
  ) => void;
};
