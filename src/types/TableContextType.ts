import { InputRangeType } from "./InputRangeType";

export type TableContextType = {
  addRow: () => void;
  highlightCount: number;
  deleteRow: (rowId: number) => void;
  inputRange: InputRangeType;
  sethighlightCount: (r: number) => void;
  increaseCellValue: (rodId: number, cellId: string) => void;
  setInputRange: React.Dispatch<React.SetStateAction<InputRangeType>>;
};
