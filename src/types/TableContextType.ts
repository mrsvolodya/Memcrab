import { MatrixType } from "./MatrixType";
import { RangeType } from "./RangeType";

export type TableContextType = {
  range: RangeType;
  matrix: MatrixType;
  setRange: (v: RangeType | ((b: RangeType) => RangeType)) => void;
  handleIncreaseOnClick: (rodId: number, cellId: string) => void;
};
