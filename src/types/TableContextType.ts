import { MatrixType } from "./MatrixType";
import { RangeType } from "./RangeType";

export type TableContextType = {
  range: RangeType;
  addRow: () => void;
  matrix: MatrixType;
  handleDeleteRow: (rowId: number) => void;
  setRange: (v: RangeType | ((b: RangeType) => RangeType)) => void;
  handleIncreaseOnClick: (rodId: number, cellId: string) => void;
};
