import { useMemo, useState } from "react";
import { TableProviderType } from "../types/TableProviderType";
import { TableContext } from "./TableContext";
import { RangeType } from "../types/RangeType";
import { DEFAULT_RANGE } from "../constants/DEFAULT_RANGE.ts";

export function TableProvider({ children }: TableProviderType) {
  const [range, setRange] = useState<RangeType>(DEFAULT_RANGE);
  console.log({ range });

  const values = useMemo(
    () => ({
      range,
      setRange,
    }),
    [range, setRange]
  );
  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
}
