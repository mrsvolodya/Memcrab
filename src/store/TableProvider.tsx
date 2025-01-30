import { TableProviderType } from "../types/TableProviderType";
import { TableContext } from "./TableContext";

export function TableProvider({ children }: TableProviderType) {
  return <TableContext.Provider value={{}}>{children}</TableContext.Provider>;
}
