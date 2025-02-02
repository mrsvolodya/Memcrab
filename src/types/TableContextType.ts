import { InputRangeType } from "./InputRangeType";
import { MatrixType } from "./MatrixType";
import { PersentType } from "./PersentType";

export type TableContextType = {
  addRow: () => void;
  isPersent: PersentType;
  highlightCount: number;
  matrix: MatrixType;
  highlightedCells: string[];
  handleMouseLeave: () => void;
  deleteRow: (rowId: number) => void;
  inputRange: InputRangeType;
  sethighlightCount: (r: number) => void;
  setInputRange: React.Dispatch<React.SetStateAction<InputRangeType>>;
  handleMouseEnter: (value: number, cellId: string, rowId: number) => void;
  increaseCellValue: (rodId: number, cellId: string) => void;
};
