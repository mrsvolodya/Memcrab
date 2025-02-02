import { InputRangeType } from "./InputRangeType";
import { MatrixType } from "./MatrixType";

export type TableContextType = {
  addRow: () => void;
  highlightCount: number;
  matrix: MatrixType;
  highlightedCells: string[];
  handleMouseLeave: () => void;
  deleteRow: (rowId: number) => void;
  inputRange: InputRangeType;
  setInputRange: React.Dispatch<React.SetStateAction<InputRangeType>>;
  sethighlightCount: (r: number) => void;
  handleMouseEnter: (value: number, cellId: string) => void;
  increaseCellValue: (rodId: number, cellId: string) => void;
};
