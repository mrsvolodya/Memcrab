import { createContext } from "react";
import { TableContextType } from "../types/TableContextType";

export const TableContext = createContext<TableContextType>({
  range: { M: 3, N: 3 },
  setRange: () => {},
});
