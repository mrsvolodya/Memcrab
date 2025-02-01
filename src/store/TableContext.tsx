import { createContext } from "react";
import { TableContextType } from "../types/TableContextType";
import { DEFAULT_RANGE } from "../constants/DEFAULT_RANGE";

export const TableContext = createContext<TableContextType>({
  range: DEFAULT_RANGE,
  setRange: () => {},
  matrix: [],
  handleIncreaseOnClick: () => {},
});
